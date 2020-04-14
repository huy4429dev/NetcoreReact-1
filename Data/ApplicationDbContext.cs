using Microsoft.EntityFrameworkCore;
using ProjectManage.Models;

namespace ProjectManage.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        DbSet<Status> Statuses { get; set; }

        override protected void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Project>()
                .HasOne(e => e.User)
                .WithMany(c => c.Projects);

        }
    }

}

