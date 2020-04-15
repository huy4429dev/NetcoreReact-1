using System;
using System.ComponentModel.DataAnnotations;
using ProjectManage.Models;

namespace ProjectManage.Models
{
    public class Task
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Vui lòng nhập tiêu đề")]
        [MaxLength(255, ErrorMessage = "Tiêu đề quá dài")]
        public string Title { get; set; }

        [MaxLength(500, ErrorMessage = "Mô tả quá dài")]
        public string Desc { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }


        /*==================================
           Foreign key for Users
         ==================================*/

        public int UserID { get; set; }

        public User User { get; set; }


        /*==================================
           Foreign key for List Task
         ==================================*/

        public int ListTaskId { get; set; }

        public ListTask ListTask { get; set; }


        /*==================================
           Foreign key for  Status
         ==================================*/

        public int StatusId { get; set; }

        public Status Status { get; set; }
    }
}