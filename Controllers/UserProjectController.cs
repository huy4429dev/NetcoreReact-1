using System;
using Microsoft.AspNetCore.Mvc;
using ProjectManage.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using ProjectManage.Models;

namespace ProjectManage.Controlers
{
    [Route("api/user-project")]
    public class UserProjectController : ControllerBase
    {
        private readonly ApplicationDbContext ctx;
        public UserProjectController(ApplicationDbContext ctx)
        {
            this.ctx = ctx;
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var found = await ctx.UserProject.FindAsync(id);
            if (found != null)
            {
                return Ok(found);
            }
            return NotFound("không tồn tại User - Project");
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(int? UserId = null, int? ProjectId = null)
        {


            var query = ctx.UserProject.AsQueryable();

            if (UserId.HasValue)
            {
                UserId = Convert.ToInt32(UserId);
                query = query.Where(item => item.UserId == UserId);
            }
            if (ProjectId.HasValue)
            {
                ProjectId = Convert.ToInt32(ProjectId);
                query = query.Where(item => item.ProjectId == ProjectId);
            }
            var data = await query.ToListAsync();
            return Ok(data);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] UserProject model)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                      .Where(y => y.Count > 0)
                                      .ToList();
                return BadRequest(errors);
            }

            model.CreatedAt = DateTime.Now;
            model.UpdatedAt = DateTime.Now;
            ctx.UserProject.Add(model);
            await ctx.SaveChangesAsync();
            return Ok(model);
        }

        [HttpPut]
        public async Task<IActionResult> Edit(int userID, int ProjectId,[FromBody] UserProject model)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                       .Where(y => y.Count > 0)
                                       .ToList();
                return BadRequest(errors);
            }

            var query = ctx.UserProject.AsQueryable();
            query = query.Where(item => item.UserId == userID);
            var data = await query.ToListAsync();
            foreach (var item in data)
            {
                ctx.UserProject.Remove(item);
                await ctx.SaveChangesAsync();
            }

            

            return Ok(new { success = "Xóa thành công" });
        }

    }
}   