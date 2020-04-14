using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using ProjectManage.Models;

namespace ProjectManage.Models
{
    public class Project
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(255)]
        [Required]
        public string Name { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        /*==================================
           Foreign key for Users
         ==================================*/

        public int ManagerId { get; set; }

        public User  User { get; set; }

        /*==================================    
            Foreign key for Status
          ==================================*/

        public int StatusId { get; set; }
        // public Status Status { get; set; }
        // public ICollection<ListTask> ListTasks { get; set; }
        // public ICollection<ApplicationUser> Users {get;set;}
        // public ICollection<UserProject> UserProjects{get;set;}
    }
}