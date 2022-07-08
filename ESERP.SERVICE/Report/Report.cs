using ESERP.SERVICE.Domain;
using ESERP.SERVICE.IReport;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESERP.SERVICE.Report
{
    public class Report : IReportt
    {

        public List<Purchase_Order_Details> GetPurchaseDetails(int series, int item, int itemgrp, int party, string FDate, string TDate, int RPTCode)
        {
            var context = new ERPContext();
           
            SqlParameter param1 = new SqlParameter("@p1", series);
            SqlParameter param2 = new SqlParameter("@p2", item);
            SqlParameter param3 = new SqlParameter("@p3", itemgrp);
            SqlParameter param4 = new SqlParameter("@p4", party);
            SqlParameter param5 = new SqlParameter("@p5", FDate);
            SqlParameter param6 = new SqlParameter("@p6", TDate);
            SqlParameter param7 = new SqlParameter("@p7", RPTCode);

            
            var po_details = context.Purchase_Order_Details
           .FromSqlRaw("exec SP_POREPORTS @p1, @p2, @p3, @p4, @p5, @p6, @p7", param1, param2, param3, param4, param5, param6, param7)
           .ToList();
          
           return po_details;

        }
        public List<Pending_Purchase_Order_Details> GetPendingOrderPurchaseDetails(int series, int item, int itemgrp, int party, string FDate, string TDate, int RPTCode)
        {
            var context = new ERPContext();
          
            SqlParameter param1 = new SqlParameter("@p1", series);
            SqlParameter param2 = new SqlParameter("@p2", item);
            SqlParameter param3 = new SqlParameter("@p3", itemgrp);
            SqlParameter param4 = new SqlParameter("@p4", party);
            SqlParameter param5 = new SqlParameter("@p5", FDate);
            SqlParameter param6 = new SqlParameter("@p6", TDate);
            SqlParameter param7 = new SqlParameter("@p7", RPTCode);


           var ppo_details = context.Pending_Purchase_Order_Details
           .FromSqlRaw("exec SP_POREPORTS @p1, @p2, @p3, @p4, @p5, @p6, @p7", param1, param2, param3, param4, param5, param6, param7)
           .ToList();

            return ppo_details;
        }

        public List<Pr_Details> GetPrDetails(int series, int item, int itemgrp, string FDate, string TDate, int RPTCode) {
            var context = new ERPContext();

            SqlParameter param1 = new SqlParameter("@p1", series);
            SqlParameter param2 = new SqlParameter("@p2", item);
            SqlParameter param3 = new SqlParameter("@p3", itemgrp);
          
            SqlParameter param4 = new SqlParameter("@p4", FDate);
            SqlParameter param5 = new SqlParameter("@p5", TDate);
            SqlParameter param6 = new SqlParameter("@p6", RPTCode);

            var pr_details = context.Pr_Details
         .FromSqlRaw("exec SP_PRDETAILS @p1, @p2, @p3, @p4, @p5, @p6", param1, param2, param3, param4, param5, param6)
         .ToList();

            return pr_details;
        }
        public List<Pending_Pr> GetPendingPrDetails(int series, int item, int itemgrp, string FDate, string TDate, int RPTCode) {
            var context = new ERPContext();

            SqlParameter param1 = new SqlParameter("@p1", series);
            SqlParameter param2 = new SqlParameter("@p2", item);
            SqlParameter param3 = new SqlParameter("@p3", itemgrp);

            SqlParameter param4 = new SqlParameter("@p4", FDate);
            SqlParameter param5 = new SqlParameter("@p5", TDate);
            SqlParameter param6 = new SqlParameter("@p6", RPTCode);

            var pending_pr_details = context.Pending_Prs
         .FromSqlRaw("exec SP_PRDETAILS @p1, @p2, @p3, @p4, @p5, @p6", param1, param2, param3, param4, param5, param6)
         .ToList();

            return pending_pr_details;
        }
        public List<Pr_Po_Details> GetPrPoDetails(int series, int item, int itemgrp, string FDate, string TDate, int RPTCode) {
            var context = new ERPContext();

            SqlParameter param1 = new SqlParameter("@p1", series);
            SqlParameter param2 = new SqlParameter("@p2", item);
            SqlParameter param3 = new SqlParameter("@p3", itemgrp);

            SqlParameter param4 = new SqlParameter("@p4", FDate);
            SqlParameter param5 = new SqlParameter("@p5", TDate);
            SqlParameter param6 = new SqlParameter("@p6", RPTCode);

            var pr_po_details = context.Pr_Po_Details
         .FromSqlRaw("exec SP_PRDETAILS @p1, @p2, @p3, @p4, @p5, @p6", param1, param2, param3, param4, param5, param6)
         .ToList();

            return pr_po_details;
        }
        public List<BalanceOnly> GetBalanceOnly(int item, int itemgrp, int matCenter, int matCenType, string asOnDate)
        {
            var context = new ERPContext();

            SqlParameter param1 = new SqlParameter("@p1", item);
            SqlParameter param2 = new SqlParameter("@p2", itemgrp);
            SqlParameter param3 = new SqlParameter("@p3", matCenter);

            SqlParameter param4 = new SqlParameter("@p4", matCenType);
            SqlParameter param5 = new SqlParameter("@p5", asOnDate);

            var balance_only = context.BalanceOnly.FromSqlRaw("exec SP_STOCKSTATUSBALONLY @p1, @p2, @p3, @p4, @p5", param1, param2, param3, param4, param5).ToList();
            return balance_only;
        }
        public List<Stock_Details> GetStockDetails(int item, int itemgrp, int matCenter, string mcType, string FDate, string TDate)
        {
            var context = new ERPContext();

            SqlParameter param1 = new SqlParameter("@p1", item);
            SqlParameter param2 = new SqlParameter("@p2", itemgrp);
            SqlParameter param3 = new SqlParameter("@p3", matCenter);

            SqlParameter param4 = new SqlParameter("@p4", mcType);
            SqlParameter param5 = new SqlParameter("@p5", FDate);
            SqlParameter param6 = new SqlParameter("@p6", TDate);

            var stock_details = context.Stock_Details.FromSqlRaw("exec SP_STOCKSTATUSDETAILS @p1, @p2, @p3, @p4, @p5, @p6", param1, param2, param3, param4, param5, param6).ToList();
            return stock_details;
        }


    }
}
