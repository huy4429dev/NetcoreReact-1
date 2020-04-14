using Microsoft.EntityFrameworkCore;
using ProjectManage.Models;

namespace ProjectManage.Data
{
    public class ApplicationDbContext : DbContext
    {
       public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        DbSet<Status> Statuses {get;set;}

    }
}
