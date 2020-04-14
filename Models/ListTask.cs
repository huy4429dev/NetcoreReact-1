using System; 
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using ProjectManage.Models;

namespace ProjectManage.Models
{   
    public class ListTask
    {
        [Key]
        public int Id{get;set;}
        [Required]
        [StringLength(255)]
        public string Title{get;set;}
        [StringLength(255)]
        public string Desc{get;set;}
        [Required]
        public DateTime CreatedAt{get;set;}
        public DateTime UpdatedAt{get;set;}

        /*==================================
           Foreign key for Users
         ==================================*/

        public string UserId{get;set;}    

        // public ApplicationUser  User { get; set; }

         /*==================================
           Foreign key for Projects
         ==================================*/

        public int ProjectId{get;set;}    

        // public Project  Project { get; set; }


        // public ICollection<Task> Tasks {get;set;}
    }
}