using ESERP.SERVICE.Domain;
using ESERP.SERVICE.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ERP_1.WEB.Controllers
{
    [Route("api/[action]")]
    public class DomainController : Controller
    {
        private readonly ILogger<DomainController> _logger;
        private readonly EsMasterDBContext _db;
        public DomainController(ILogger<DomainController> logger, EsMasterDBContext db)
        {
            _logger = logger;
            _db = db;
        }
        [HttpGet]
        public async Task<IActionResult> getAll()
        {
            var result = await new Repository(_db).getAll();
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> SaveDomain([FromBody] Esweb table)
        {
            bool result = false;
            if (ModelState.IsValid)
            {
                result = await new Repository(_db).SaveDomain(table);
            }
            return Ok(table);
        }

    }
}