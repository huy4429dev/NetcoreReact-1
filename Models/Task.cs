using System;
using System.ComponentModel.DataAnnotations;
using ProjectManage.Models;

namespace ProjectManage.Models
{
    public class Task
    {
        [Key]
        public int Id{get;set;}
        [Required]
        [StringLength(255)]
        public string Title{get;set;}
        public string Desc{get;set;}
        public DateTime CreatedAt{get;set;}
        public DateTime UpdatedAt{get;set;}

        
        /*==================================
           Foreign key for Users
         ==================================*/

        public string UserID { get; set; }

        // public ApplicationUser  User { get; set; }

        
        /*==================================
           Foreign key for List Task
         ==================================*/

        public int ListTaskId { get; set; }

        // public ListTask  ListTask { get; set; }

        
        /*==================================
           Foreign key for  Status
         ==================================*/

        public int StatusId { get; set; }

        // public Status  Status { get; set; }
    }
}