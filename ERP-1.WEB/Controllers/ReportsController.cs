using ESERP.SERVICE.IRepository;
using Microsoft.AspNetCore.Mvc;
//using NLog;
//using NLog.Web;
using System;
namespace ERP_1.WEB.Controllers
{
    public class ReportsController : Controller
    {
        IReport _ReportService;   
        //private Logger logger;
        public ReportsController(IReport Report  )
        {
            this._ReportService = Report;
            //this.logger= NLog.LogManager.Setup().LoadConfigurationFromAppSettings().GetCurrentClassLogger();

        }
        [Route("api/[action]")]
        // GET: BalanceOnlyController
        public ActionResult GetBalanceReport(int item, int itemgrp, int matCenter, int matCenType, string asOnDate)
        {
          
            
            try
            {
                //logger.Info("GetBalanceReport api is calling...");
                var list = _ReportService.GetBalanceOnly(item, itemgrp, matCenter, matCenType, asOnDate);
                //logger.Info("GetBalanceReport is executed");
                return Ok(list);
            }
            catch(Exception ex)
            {
                //logger.Info(ex);
                return NotFound();
            }
            

        }


        [HttpGet]
        [Route("api/[action]")]
        public ActionResult GetPurchaseOrderDetails(int series, int item, int itemgrp, int party,string FDate, string TDate, int RPTCode)
        {
            try
            {
                //logger.Info("GetPurchaseOrderDetails api is calling...");
                var list = _ReportService.GetPurchaseDetails(series, item, itemgrp, party, FDate, TDate, RPTCode);
                //logger.Info("GetPurchaseOrderDetails api is executed");
                return Ok(list);
            }
            catch (Exception ex)
            {
                //logger.Info(ex);
                return NotFound();
            }
            
        }

        [HttpGet]
        [Route("api/[action]")]
        public ActionResult GetPendingPurchaseOrderDetails(int series, int item, int itemgrp, int party, string FDate, string TDate, int RPTCode)
        {
            try
            {
                //logger.Info("GetPendingPurchaseOrderDetails is calling...");
            var list = _ReportService.GetPendingOrderPurchaseDetails(series, item, itemgrp, party, FDate, TDate, RPTCode);
                //logger.Info("GetPendingPurchaseOrderDetails is executed...");
                
            return Ok(list);

            } catch(Exception ex)
            {
                //logger.Info(ex);
                return NotFound();
            }
        }

           [HttpGet]
        [Route("api/[action]")]
        public ActionResult GetPrDetails(int series, int item, int itemgrp, string FDate, string TDate, int RPTCode)
        {
            try{
                //logger.Info(" api GetPrDetails is calling");
            var list = _ReportService.GetPrDetails(series, item, itemgrp, FDate, TDate, RPTCode);
                //logger.Info("api GetPrDetails is executed");

            return Ok(list);

            } catch(Exception ex)
            {
                //logger.Info(ex);
                return NotFound();
            }
        }

           [HttpGet]
        [Route("api/[action]")]
        public ActionResult GetPendingPrDetails(int series, int item, int itemgrp, string FDate, string TDate, int RPTCode)
        {
            try
            {
                //logger.Info("GetPendingPrDetails is calling...");
            var list = _ReportService.GetPendingPrDetails(series, item, itemgrp, FDate, TDate, RPTCode);
                //logger.Info("getPendingPrDetails is executed");
            return Ok(list);

            }
            catch(Exception ex)
            {
                //logger.Info(ex);
                return NotFound();
            }
        }

           [HttpGet]
        [Route("api/[action]")]
        public ActionResult GetPrPoDetails(int series, int item, int itemgrp, string FDate, string TDate, int RPTCode)
        {
            try
            {
                //logger.Info("get GetPrPoDetails is calling...");
                var list = _ReportService.GetPrPoDetails(series, item, itemgrp, FDate, TDate, RPTCode);
                //logger.Info("get GetPrPoDetails is executed...");
                return Ok(list);
            }
            catch (Exception ex) { 
                //logger.Info(ex); 
                return NotFound(); } 
        }
        [HttpGet]
        [Route("api/[action]")]
        public ActionResult GetStockDetailsReport(int item, int itemgrp, int matCenter, string mcType, string FDate, string TDate)
        {
            try
            {
                //logger.Info("GetStockDetailsReport is calling");
            var list = _ReportService.GetStockDetails(item, itemgrp, matCenter, mcType, FDate, TDate);
                //logger.Info("getStockDetailsReport is executed");

            return Ok(list);

            } catch(Exception ex)
            {
                //logger.Info(ex);
                return NotFound();
            }
        }
    }
}
