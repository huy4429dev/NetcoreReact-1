using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using ProjectManage.Models;

namespace ProjectManage.Models
{
    public class ListTask
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Vui lòng nhập tiêu đề")]
        [MaxLength(255, ErrorMessage = "Tiêu đề quá dài")]
        [MinLength(2, ErrorMessage = "Tiêu đề quá ngắn")]
        public string Title { get; set; }
        [MaxLength(500, ErrorMessage = "Mô tả quá dài")]
        [MinLength(2, ErrorMessage = "Mô tả quá ngắn")]
        public string Desc { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        /*==================================
           Foreign key for Users
         ==================================*/

        [Required]
        [RegularExpression((@"[0-9]+"), ErrorMessage = "UserId not found")]
        public int UserId { get; set; }

        // public ApplicationUser  User { get; set; }

        /*==================================
          Foreign key for Projects
        ==================================*/

        [Required]
        [RegularExpression(@"[0-9]+", ErrorMessage = "ProjectId not found")]
        public int ProjectId { get; set; }

        public Project Project { get; set; }

        public ICollection<Task> Tasks {get;set;}
    }
}