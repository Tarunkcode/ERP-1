using ESERP.SERVICE.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ESERP.SERVICE.IReport
{
    public interface IReportt
    {
        public List<Purchase_Order_Details> GetPurchaseDetails(int series, int item, int itemgrp, int party, string FDate, string TDate, int RPTCode);
        public List<Pending_Purchase_Order_Details> GetPendingOrderPurchaseDetails(int series, int item, int itemgrp, int party, string FDate, string TDate, int RPTCode);
        public List<Pr_Details> GetPrDetails(int series, int item, int itemgrp, string FDate, string TDate, int RPTCode);
        public List<Pending_Pr> GetPendingPrDetails(int series, int item, int itemgrp, string FDate, string TDate, int RPTCode);
        public List<Pr_Po_Details> GetPrPoDetails(int series, int item, int itemgrp, string FDate, string TDate, int RPTCode);
        public List<BalanceOnly> GetBalanceOnly(int item, int itemgrp, int matCenter, int matCenType, string asOnDate);
        public List<Stock_Details> GetStockDetails(int item, int itemgrp, int matCenter, string mcType, string FDate,string TDate);
    }
}
