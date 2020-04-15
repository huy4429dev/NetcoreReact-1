using System;
using Microsoft.AspNetCore.Mvc;
using ProjectManage.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using ProjectManage.Models;

namespace ProjectManage.Controlers
{
    [Route("api/task")]
    public class TaskController : ControllerBase
    {
        private readonly ApplicationDbContext ctx;
        public TaskController(ApplicationDbContext ctx)
        {
            this.ctx = ctx;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {

            var found = await ctx.Tasks.FindAsync(id);
            if (found != null)
            {
                return Ok(found);
            }
            return NotFound("Không tồn tại task");
        }

        public async Task<IActionResult> GetAll(string search = null, int? ListTaskId = null)
        {

            var query = ctx.Tasks.AsQueryable();

            /*==============================
              Search Task by Title
              ==============================*/

            if (!string.IsNullOrWhiteSpace(search))
            {
                query = query.Where(item => item.Title.Contains(search));

                if (ListTaskId.HasValue)
                {
                    ListTaskId = Convert.ToInt32(ListTaskId);

                    query = query.Where(item => item.Title.ToLower().Contains(search.ToLower()) && item.ListTaskId == ListTaskId);
                }
            }

            /*==============================
              Search Task by List Task
              ==============================*/

            else if (ListTaskId.HasValue)
            {
                ListTaskId = Convert.ToInt32(ListTaskId);
                query = query.Where(item => item.ListTaskId == ListTaskId);
            }

            var data = await query.ToListAsync();

            return Ok(data);

        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Models.Task model)
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
            ctx.Tasks.Add(model);
            await ctx.SaveChangesAsync();

            return Ok(model);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(int id, [FromBody] Models.Task model)
        {

            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                       .Where(y => y.Count > 0)
                                       .ToList();
                return BadRequest(errors);
            }

            var found = await ctx.Tasks.FindAsync(id);
            if (found != null)
            {
                found.Title = model.Title;
                found.Desc = model.Desc;
                found.UpdatedAt = DateTime.Now;
                found.UserID = model.UserID;
                found.ListTaskId = model.ListTaskId;
                found.StatusId = model.StatusId;
                await ctx.SaveChangesAsync();
                return Ok(found);
            }

            return NotFound("Không tồn tại Task");

        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> Delete(int id)
        {
            var found = await ctx.Tasks.FindAsync(id);
            if (found != null)
            {
                ctx.Tasks.Remove(found);
                await ctx.SaveChangesAsync();

                return Ok(new { success = "Xóa thành công" });
            }
            return NotFound("Không tồn tại task");
        }
    }



}   