using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ProjectManage.Data;
using ProjectManage.Models;

namespace ProjectManage.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly ApplicationDbContext _context;


        public ProjectController(ApplicationDbContext context)
        {
            _context = context;
        }

        // getprojct by name: /api/Project/1

        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> GetProjectByName(int id)
        {
            var nameProject = await _context.Projects.FindAsync(id);
            if (nameProject == null)
                return BadRequest();
            else
                return nameProject;


        }

        [HttpGet]
        public async Task<IActionResult> GetAll(string search = null, int? userId = null)
        {

            var query = _context.Projects.AsQueryable();
            if (!string.IsNullOrWhiteSpace(search))
            {
                query = query.Where(item => item.Name.ToLower().Contains(search.ToLower()));
            }

             if (userId.HasValue)
            {
                _context.Projects.Where(p => p.UserProjects.Any(pu => pu.UserId == userId))
                    .Select(p=>new{
                        id = p.Id,
                        name = p.Name,
                        created = p.CreatedAt,
                        updated = p.UpdatedAt,
                        manerger = p.ManagerId,
                        status = p.StatusId,
                        userids = p.UserProjects.Select(du => du.UserId).ToList()
                    });

                var queryNew = (from u in _context.UserProject
                                join p in _context.Projects on u.ProjectId equals p.Id
                                join s in _context.Statuses on p.StatusId equals s.Id
                                where u.UserId == userId
                                select new
                                {
                                    id = p.Id,
                                    name = p.Name,
                                    created = p.CreatedAt,
                                    updated = p.UpdatedAt,
                                    manerger = p.ManagerId,
                                    status = s.Name,
                                    userid = u.UserId
                                });
                var dataNeW = await query.ToListAsync();
                return Ok(dataNeW);

            }


            var data = await query.ToListAsync();
      
            return Ok(data);
        }


        // post-create new Project: api/Project
        [HttpPost]
        public async Task<ActionResult<Project>> Create([FromBody] Project model)
        {


            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                    .Where(y => y.Count > 0)
                                    .ToList();
                return BadRequest(errors);
            }

            /*==============================
              Insert table Projects
            ==============================*/

            model.CreatedAt = DateTime.Now;
            model.UpdatedAt = DateTime.Now;
            model.Status = ProjectStatus.Pending;
            await _context.Projects.AddAsync(model);
            await _context.SaveChangesAsync();

            /*==============================
              Insert table UserProject
            ==============================*/

            // foreach (var item in model.UserProjects)
            // {
            //         await _context.UserProject.AddAsync(new UserProject() { UserId = item.UserId, ProjectId = model.Id });
            //         await _context.SaveChangesAsync();
            // }


            return Ok(model);
        }

        // put-edit newproject: api/Project/1

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(int id, [FromBody] Project model)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                   .Where(y => y.Count > 0)
                                   .ToList();
                return BadRequest(errors);
            }


            var found = await _context.Projects.FindAsync(id);

            if (found != null)
            {

                /*==============================
                  Update table Projects
                  ==============================*/

                found.Name = model.Name;
                found.Thumbnail = model.Thumbnail;
                found.StatusId = model.StatusId;
                found.UpdatedAt = DateTime.Now;
                await _context.SaveChangesAsync();

                /*==============================
                  Update table UserProject
                  1. Delete
                  2. Insert
                  ==============================*/

                /* =========== 1 ==========*/

                var query = _context.UserProject.AsQueryable();
                query = query.Where(item => item.ProjectId == id);
                var data = await query.ToListAsync();
                foreach (var item in data)
                {

                    _context.UserProject.Remove(item);
                    await _context.SaveChangesAsync();

                }

                /* =========== 2 ==========*/

                if (model.UserProjects.Count > 0)
                {
                    await _context.UserProject.AddRangeAsync(model.UserProjects);
                    await _context.SaveChangesAsync();
                }

                return Ok(model);

            }

            return NotFound("Không tồn tại dựa án");
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var found = await _context.Projects.FindAsync(id);
            if (found != null)
            {
                _context.Projects.Remove(found);
                await _context.SaveChangesAsync();
                return Ok(new { success = "Xóa dự án thành công" });
            }
            return NotFound();
        }

    }



}