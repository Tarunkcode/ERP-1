using ESERP.SERVICE.Domain;
using ESERP.SERVICE.Report;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ERP_1.WEB.Controllers
{
    public class ReportsController : Controller
    {
        Report inst = new Report();

        [Route("api/[action]")]
        // GET: BalanceOnlyController
        public ActionResult GetBalanceReport(int item, int itemgrp, int matCenter, int matCenType, string asOnDate)
        {
            var list = inst.GetBalanceOnly(item, itemgrp, matCenter, matCenType, asOnDate);
            return Ok(list);
            
        }

        [HttpGet]
        [Route("api/[action]")]
        public ActionResult GetPurchaseOrderDetails(int series, int item, int itemgrp, int party,string FDate, string TDate, int RPTCode)
        {
            var list = inst.GetPurchaseDetails(series, item, itemgrp, party, FDate, TDate, RPTCode);

            return Ok(list);
        }

        [HttpGet]
        [Route("api/[action]")]
        public ActionResult GetPendingPurchaseOrderDetails(int series, int item, int itemgrp, int party, string FDate, string TDate, int RPTCode)
        {
            var list = inst.GetPendingOrderPurchaseDetails(series, item, itemgrp, party, FDate, TDate, RPTCode);

            return Ok(list);
        }

           [HttpGet]
        [Route("api/[action]")]
        public ActionResult GetPrDetails(int series, int item, int itemgrp, string FDate, string TDate, int RPTCode)
        {
            var list = inst.GetPrDetails(series, item, itemgrp, FDate, TDate, RPTCode);

            return Ok(list);
        }

           [HttpGet]
        [Route("api/[action]")]
        public ActionResult GetPendingPrDetails(int series, int item, int itemgrp, string FDate, string TDate, int RPTCode)
        {
            var list = inst.GetPendingPrDetails(series, item, itemgrp, FDate, TDate, RPTCode);

            return Ok(list);
        }

           [HttpGet]
        [Route("api/[action]")]
        public ActionResult GetPrPoDetails(int series, int item, int itemgrp, string FDate, string TDate, int RPTCode)
        {
            var list = inst.GetPrPoDetails(series, item, itemgrp, FDate, TDate, RPTCode);

            return Ok(list);
        }
       
               [HttpGet]
        [Route("api/[action]")]
        public ActionResult GetStockDetailsReport(int item, int itemgrp, int matCenter, string mcType, string FDate, string TDate)
        {
            var list = inst.GetStockDetails(item, itemgrp, matCenter, mcType, FDate, TDate);

            return Ok(list);
        }
       


    }
}
