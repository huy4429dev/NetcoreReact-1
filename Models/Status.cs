using System.ComponentModel.DataAnnotations;
using System.Collections;
using System.Collections.Generic;

namespace  ProjectManage.Models
{
    public class Status
    {
        [Key]
        public int Id{get;set;}
        [Required]
        [MaxLength(255)]
        public string Name{get;set;}
        // public ICollection<Task> Tasks{get; set;}
        // public ICollection<Project> Projects {get;set;}
    }
}