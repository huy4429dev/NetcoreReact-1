using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using ProjectManage.Models;

namespace ProjectManage.Models
{
    public class UserProject
    {
        [Key]
        public int Id{get;set;}
        [Required]

        public string UserId{get;set;}
        [Required]
        // public ApplicationUser User{get;set;}

        public int ProjectId{get;set;}
        // public Project Project{get;set;}

        public DateTime CreatedAt{get;set;}
        public DateTime UpdatedAt{get;set;}



    }
}