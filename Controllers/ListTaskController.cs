using System;
using Microsoft.AspNetCore.Mvc;
using ProjectManage.Data;
using System.Threading.Tasks;
using ProjectManage.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ProjectManage.Controllers
{
    [Route("api/list-task")]
    public class ListTaskController : ControllerBase
    {
        private readonly ApplicationDbContext ctx;

        public ListTaskController(ApplicationDbContext ctx)
        {
            this.ctx = ctx;
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {

            var found = await ctx.ListTasks.FindAsync(id);
            if (found != null)
            {
                return Ok(found);
            }
            return NotFound("Không tồn tại task");
        }


        [HttpGet]
        public async Task<IActionResult> GetAll(string search = null)
        {
            /*==============================
              Search List Task by Title
              ==============================*/

            var query = ctx.ListTasks.AsQueryable();
            if (!string.IsNullOrWhiteSpace(search))
            {
                query = query.Where(item => item.Title.Contains(search));
            }


            /*==============================
              Get List Task
              ==============================*/
            // query = query.Where(item => item.Title.Contains(search));


            var data = await query.ToListAsync();
            return Ok(data);
        }


        [HttpPost]
        public async Task<ActionResult> Create([FromBody] ListTask model)
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
            ctx.ListTasks.Add(model);
            await ctx.SaveChangesAsync();
            return Ok(model);
        }


        [HttpPut("{id}")]

        public async Task<IActionResult> Update(int id, [FromBody] ListTask model)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                          .Where(y => y.Count > 0)
                          .ToList();

                return BadRequest(errors);
            }

            var found = await ctx.ListTasks.FindAsync(id);
            if (found != null)
            {
                found.Title = model.Title;
                found.Desc = model.Desc;
                found.UpdatedAt = DateTime.Now;
                found.UserId = model.UserId;
                found.ProjectId = model.ProjectId;
                await ctx.SaveChangesAsync();
                return Ok(found);

            }
            return NotFound("Không tồn tại List Task");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var found = await ctx.ListTasks.FindAsync(id);
            if (found != null)
            {
                ctx.ListTasks.Remove(found);
                await ctx.SaveChangesAsync();

                return Ok(new { success = "Xóa thành công" });
            }
            return NotFound();
        }
    }
}