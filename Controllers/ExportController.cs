using System.Data;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using ProjectManage.Data;
using System.Collections.Generic;
using ProjectManage.Models;
using System.IO;
using OfficeOpenXml;
using System.Linq;
using System;


// CÀI PACKAGE
//1. dotnet add package OfficeOpenXml.Core.ExcelPackage --version 1.0.0
//2.dotnet add package System.Linq --version 4.3.0
//3.dotnet add package EPPlus --version 5.0.
// THEM DÒNG SAU VÀO APPSTTINGS.JSON 
  /*
    "EPPlus": {
     "ExcelPackage": {
      "LicenseContext": "Commercial"
      }
      */
namespace NetcoreReact_1_master.Controllers
{
    public class ExportController : Controller
    {

        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly ApplicationDbContext _db;

        public ExportController(IHostingEnvironment hostingEnvironment, ApplicationDbContext db)
        {
            _hostingEnvironment = hostingEnvironment;
            _db = db;
        }
    
        /// export cách 2
        [HttpGet]
        [Route("ExportProject")]
        public async Task<IActionResult> ExportV2(CancellationToken cancellationToken)
        {
            // query data from database  
            await System.Threading.Tasks.Task.Yield();

            var stream = new MemoryStream();

            using (var package = new ExcelPackage(stream))
            {

                IList<Project> ProjectList = _db.Projects.ToList();
                IList<User> UserList = _db.Users.ToList();
               IList<Status>  Status= _db.Statuses.ToList();
                 
                var query= (from u in UserList
                                join p in ProjectList on u.Id equals p.ManagerId
                               
                                join s in Status on p.StatusId equals s.Id

                                
                                select new
                                {
                                id= p.Id,
                                name= p.Name,
                                created=p.CreatedAt,
                                updated= p.UpdatedAt,
                                manerger=u.FullName,
                                status= s.Name
                                }).ToList();

                               
               
                               
                

                ExcelWorksheet worksheet = package.Workbook.Worksheets.Add("newTable");
                int totalRows = query.Count();

                worksheet.Cells[1, 1].Value = " STT ";
                worksheet.Cells[1, 2].Value = " ID PROJECT ";
                worksheet.Cells[1, 3].Value = " NAME PROJECT ";
                worksheet.Cells[1, 4].Value = " CREATED DATE ";
                worksheet.Cells[1, 5].Value = " UPDATE DATE ";
                worksheet.Cells[1, 6].Value = " MANERGER ";
                worksheet.Cells[1, 7].Value =  " STATUS PROJECT ";
                int i = 0;
                int j=1;
                for (int row = 2; row <= totalRows + 1; row++)
                {
                    worksheet.Cells[row, 1].Value = j;
                    worksheet.Cells[row, 2].Value = query[i].id;
                    worksheet.Cells[row, 3].Value = query[i].name;
                    worksheet.Cells[row, 4].Value = query[i].created.ToString();
                    worksheet.Cells[row, 5].Value=  query[i].updated.ToString();
                    worksheet.Cells[row, 6].Value= query[i].manerger;
                     worksheet.Cells[row, 7].Value= query[i].status;
                
                              
                    i++;
                    j++;
                }
                package.Save();
            }
            stream.Position = 0;
            string excelName = $"Project-{DateTime.Now.ToString("yyyyMMddHHmmssfff")}.xlsx";

            //return File(stream, "application/octet-stream", excelName);  
            return File(stream, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", excelName);
        }
    }
}
