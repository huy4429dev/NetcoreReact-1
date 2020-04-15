using Microsoft.EntityFrameworkCore;
using ProjectManage.Models;

namespace ProjectManage.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Status> Statuses { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<UserProject> UserProject { get; set; }
        public DbSet<ListTask> ListTasks { get; set; }
        public DbSet<Task> Tasks { get; set; }

        override protected void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //=== 1 - 1: User - Project <managerId>

            builder.Entity<User>()
                .HasOne(e => e.Project)
                .WithOne(c => c.User)
                .HasForeignKey<Project>(b => b.ManagerId)
                .OnDelete(DeleteBehavior.Cascade);


            //=== 1 - n: Project - ListTask

            builder.Entity<ListTask>()
                .HasOne(e => e.Project)
                .WithMany(c => c.ListTasks)
                .OnDelete(DeleteBehavior.Cascade);
            //=== 1 - n: ListTask - Task

            builder.Entity<Task>()
                .HasOne(e => e.ListTask)
                .WithMany(c => c.Tasks);

            //=== 1 - n: User - Task

            builder.Entity<Task>()
                .HasOne(e => e.User)
                .WithMany(c => c.Tasks)
                .OnDelete(DeleteBehavior.Cascade);

            //=== 1 - n: Status - Task

            builder.Entity<Task>()
                .HasOne(e => e.Status)
                .WithMany(c => c.Tasks)
                .OnDelete(DeleteBehavior.Cascade);

            //=== n - n: User - Project

            builder.Entity<UserProject>()
                .HasKey(bc => new { bc.UserId, bc.ProjectId });
            builder.Entity<UserProject>()
                .HasOne(bc => bc.User)
                .WithMany(b => b.UserProjects)
                .HasForeignKey(bc => bc.UserId)
                .OnDelete(DeleteBehavior.Cascade);
                

            builder.Entity<UserProject>()
                .HasOne(bc => bc.Project)
                .WithMany(c => c.UserProjects)
                .HasForeignKey(bc => bc.ProjectId)
                .OnDelete(DeleteBehavior.Cascade);
                
        }
    }

}

