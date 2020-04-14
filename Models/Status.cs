using System.ComponentModel.DataAnnotations;

namespace  ProjectManage.Models
{   
    public class Status
    {
        [Key]
        public int Id{get;set;}
        [Required]
        [MaxLength(255)]
        public int Name{get;set;}
    }
}