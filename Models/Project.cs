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

        [MaxLength(255, ErrorMessage = "Tên dự án quá dài")]
        [Required(ErrorMessage = "Vui lòng nhập tên dự án")]
        public string Name { get; set; }
        public string Thumbnail{get;set;}
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        /*==================================
           Foreign key for Users
         ==================================*/

        [Required]
        public int ManagerId { get; set; }

        public User  User { get; set; }

        /*==================================    
            Foreign key for Status
          ==================================*/
        [Required]
        public int StatusId { get; set; }
        // public Status Status { get; set; }
        public ICollection<ListTask> ListTasks { get; set; }
        public ICollection<User> Users {get;set;}
        public ICollection<UserProject> UserProjects{get;set;}
    }
}