
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Cors;

namespace ERP_1.WEB.Controllers
{
    [Route("api/[action]")]
    
    public class DomainController : Controller
    {
       
        [HttpGet]
        public dynamic getAll()
        {
            string sURL = Program.sURL;
            string sPort = Program.sPort;
            string fy = Program.sFy;
            bool status = Program.status;
            return Ok(new { sURL, sPort, fy, status });
        }


    }
}