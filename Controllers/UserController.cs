using Microsoft.AspNetCore.Mvc;
using System;
using ProjectManage.Data;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using ProjectManage.Models;

namespace ProjectManage.Controllers
{
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext ctx;

        public UserController(ApplicationDbContext ctx)
        {
            this.ctx = ctx;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAction(int id)
        {

            var found = await ctx.Users.FindAsync(id);
            if (found != null)
            {
                return Ok(found);
            }
            return NotFound("Không tồn tại user");
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(string search = null)
        {
            var query = ctx.Users.AsQueryable();

            /*==============================
              Search Task by FullName
              ==============================*/

            if (!string.IsNullOrWhiteSpace(search))
            {
                query = query.Where(item => item.FullName.ToLower().Contains(search.ToLower()));
            }


            var data = await query.ToListAsync();

            return Ok(data);

        }

        public async Task<IActionResult> Create([FromBody] ApplicationUser model)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                       .Where(y => y.Count > 0)
                                       .ToList();
                return BadRequest(errors);
            }

            await ctx.Users.AddAsync(model);
            await ctx.SaveChangesAsync();
            return Ok(model);
        }

     [HttpPut("{id}")]
        public async Task<IActionResult> Edit(int id, [FromBody] ApplicationUser model)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                   .Where(y => y.Count > 0)
                                   .ToList();
                return BadRequest(errors);
            }

            var found = await ctx.Users.FindAsync(id);
            if(found != null){
                found.FullName = model.FullName;
                found.Avatar = model.Avatar;
                await ctx.SaveChangesAsync();
                return Ok(found);
            }

            return NotFound("Không tồn tại user");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id){

            var found = await ctx.Users.FindAsync(id);
            if(found != null){
                ctx.Users.Remove(found);
                await ctx.SaveChangesAsync();
                return Ok(new{success = "Xóa user thành công"});
            }    
            
            return NotFound();
        }
    }
}