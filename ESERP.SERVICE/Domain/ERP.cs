using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ESERP.SERVICE.Domain
{
    public partial class BalanceStock
    {
        [Key]
        public int Code { get; set; }
        public string itemName { get; set; }
        public int? uom { get; set; }
        public string itemCode { get; set; }
        public double? rejQty { get; set; }
        public double? rejVal { get; set; }
        public double? unResQty { get; set; }
        public double? unResVal { get; set; }

    }

    // public partial class EsMasterTable
    // {
    //     public int Code { get; set; }
    //     public string CodeStr { get; set; }
    //     public string Name { get; set; }
    // }

    // public partial class ItemMaster
    // {
    //     public int Code { get; set; }
    //     public int ItemUom { get; set; }
    //     public string CodeStr { get; set; }

    // }

    //public partial class Stock_Current_Details
    //{
    //    public int Code { get; set; }

    //    public int Item { get; set; }
    //    public double? REJQty { get; set; }
    //    public double? REJValue { get; set; }
    //    public double? UNRESQty { get; set; }
    //    public double? UNRESValue { get; set; }
    //}
    public partial class Purchase_Order_Details
    {
        [Key]
        public int id { get; set; }
        public int poNo { get; set; }
        public string poDate { get; set; }
        public string itemCode { get; set; }
        public string itemName { get; set; }
        public string itemGroup { get; set; }
        public string delDate { get; set; }
        public string supplier { get; set; }
        public string p1 { get; set; }
        public string p2 { get; set; }
        public string p3 { get; set; }
        public double? qty { get; set; }
        public string uom { get; set; }
        public string reqDate { get; set; }
        public string approvedBy { get; set; }
        public string approvedOn { get; set; }
        public double? price { get; set; }
        public int val { get; set; }
        public string createdBy { get; set; }
    }

    public partial class Pending_Purchase_Order_Details {
        [Key]
        public int id { get; set; }
        public int poNo { get; set; }
        public string supplierName { get; set; }
        public string poDate { get; set; }
        public string itemCode { get; set; }
        public string itemName { get; set; }
        public double? price { get; set; }
        public double? qty { get; set; }
        public string uom { get; set; }
        public int val { get; set; }
        public double? grQty { get; set; }
        public double? pendQty { get; set; }
        public string delDate { get; set; }
        public string openClose { get; set; }
    }

    public partial class Pr_Details
    {
        [Key]
        public int id { get; set; }
        public string series { get; set; }
        public int prNo { get; set; }
        public string prDate { get; set; }
        public string department { get; set; }
        public string itemCode { get; set; }
        public string itemName  { get; set; }
        public string p1  { get; set; }
        public string p2  { get; set; }
        public string p3  { get; set; }
        public double? itemQtyReq  { get; set; }
        public string uom  { get; set; }
        public double? purPrice  { get; set; }
        public double? value  { get; set; }
        public string isApproved  { get; set; }
        public string approvedBy  { get; set; }
    }

    public partial class Pr_Po_Details
    {
        [Key]
        public int id { get; set; }
        public int prNo { get; set; }
        public string prDate { get; set; }
        public string department { get; set; }
        public string reqDate { get; set; }
        public string itemCode { get; set; }
        public string itemName { get; set; }
        public string p1 { get; set; }
        public string p2 { get; set; }
        public string p3 { get; set; }
        public double? prQty { get; set; }
        public string uom { get; set; }
        public double? prRate { get; set; }
        public double? prValue { get; set; }
        public string prClose { get; set; }
        public int poNo { get; set; }
        public string poDate { get; set; }
        public string supplier { get; set; }
        public double? pendQty { get; set; }
        public double? poQty { get; set; }
        public double? balQty { get; set; }
      
    }
    public partial class Pending_Pr
    {
        [Key]
        public int id  {get; set;}
        public string series { get; set; }
        public int prNo {get; set;}
        public string prDate {get; set;}
        public string department {get; set;}
        public string reqDate {get; set;}
		public string itemCode {get; set;}
        public string itemName {get; set;}
        public string p1 {get; set;}
        public string p2 {get; set;}
        public string p3 {get; set;}
        public double? prQty {get; set;}
        public string uom {get; set;}
        public double? prRate{get; set;}
        public double? prValue {get; set;}
        public double? poQty {get; set;}
        public double? balQty {get; set;}
    }

    public partial class BalanceOnly
    {
        [Key]
        public int code { get; set; }
        public string itemCode { get; set; }
        public string itemName { get; set; }
        public string uom { get; set; }
        public string createdOn { get; set; }
        public double? sQty { get; set; }
    }
    public partial class Stock_Details
    {
        [Key]
        public int code { get; set; }
        public string itemCode { get; set; }
        public string itemName { get; set; }

        public string p1 { get; set; }
        public string p2 { get; set; }
        public string p3 { get; set; }
        public string matCenter { get; set; }
        public double? opnQty { get; set; }
        public double? inQty { get; set; }
        public double? outQty { get; set; }
        public double? clsQty { get; set; }
        public string uom { get; set; }
    }
}
