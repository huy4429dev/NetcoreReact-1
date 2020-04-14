using System.Collections.Generic;

namespace ProjectManage.Models

{
    public class User
    {
        public int Id{get;set;}
        public string FullName{get;set;}
        
        public ICollection<Project> Projects {get;set;}
    }    
}