using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace ESERP.SERVICE.Domain
{
   public partial class ERPContext : DbContext
    {
        public ERPContext()
        {

        }
        public ERPContext(DbContextOptions<ERPContext> options)
         : base(options)
        {
        }
        //public virtual DbSet<EsMasterTable> EsMasterTable { get; set; }
        //public virtual DbSet<ItemMaster> ItemMaster { get; set; }
        //public virtual DbSet<Stock_Current_Details> Stock_Current_Details { get; set; }
        public virtual DbSet<BalanceStock> BalanceStocks { get; set; }
        public virtual DbSet<Purchase_Order_Details> Purchase_Order_Details { get; set; }
        public virtual DbSet<Pending_Purchase_Order_Details> Pending_Purchase_Order_Details { get; set; }
        public virtual DbSet<Pr_Details> Pr_Details { get; set; }
        public virtual DbSet<Pending_Pr> Pending_Prs { get; set; }
        public virtual DbSet<Pr_Po_Details> Pr_Po_Details { get; set; }
        public virtual DbSet<BalanceOnly> BalanceOnly { get; set; }
        public virtual DbSet<Stock_Details> Stock_Details { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //if (!optionsBuilder.IsConfigured)
            //{

            //    optionsBuilder.UseSqlServer("Server=ESLAPIT2\\SQL2019;Database=ES_Comp0001_2022;Trusted_Connection=true;");
            //    //optionsBuilder.UseSqlServer("Server=WSERVER170-IND;Database=Es_Comp0021_2022;Trusted_Connection=true;");
            //}
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           

            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Purchase_Order_Details>(entity =>
            {
                entity.Property(e => e.id).HasColumnName("id");
                entity.Property(e => e.poNo).HasColumnName("poNo");
                entity.Property(e => e.poDate);
                entity.Property(e => e.itemCode).HasMaxLength(20).IsUnicode(false).HasColumnName("itemCode");
                entity.Property(e => e.itemName).HasMaxLength(40).IsUnicode(false).HasColumnName("itemName");
                entity.Property(e => e.itemGroup).HasMaxLength(60).IsUnicode(false).HasColumnName("itemGroup");
                entity.Property(e => e.delDate);
                entity.Property(e => e.supplier).HasMaxLength(40).IsUnicode(false).HasColumnName("supplier");
                
                entity.Property(e => e.p1).HasMaxLength(60).IsUnicode(false).HasColumnName("p1");
                entity.Property(e => e.p2).HasMaxLength(60).IsUnicode(false).HasColumnName("p2");
                entity.Property(e => e.p3).HasMaxLength(60).IsUnicode(false).HasColumnName("p3");
                entity.Property(e => e.qty).HasColumnName("qty");
                entity.Property(e => e.uom).HasMaxLength(60).IsUnicode(false).HasColumnName("uom");
                entity.Property(e => e.reqDate);
                entity.Property(e => e.approvedBy).HasMaxLength(50).IsUnicode(false).HasColumnName("approvedBy");
                entity.Property(e => e.approvedOn);
                entity.Property(e => e.price).HasColumnName("price");
                entity.Property(e => e.val).HasColumnName("val");
                entity.Property(e => e.createdBy).HasMaxLength(50).IsUnicode(false).HasColumnName("createdBy");
               
            });
            modelBuilder.Entity<Pending_Purchase_Order_Details>(entity =>
            {
                entity.Property(e => e.id).HasColumnName("id");
                entity.Property(e => e.poNo).HasColumnName("poNo");
                entity.Property(e => e.supplierName).HasMaxLength(40).IsUnicode(false).HasColumnName("supplierName");
                entity.Property(e => e.poDate);
                entity.Property(e => e.itemCode).HasMaxLength(20).IsUnicode(false).HasColumnName("itemCode");
                entity.Property(e => e.itemName).HasMaxLength(40).IsUnicode(false).HasColumnName("itemName");
                entity.Property(e => e.price).HasColumnName("price");
                entity.Property(e => e.qty).HasColumnName("qty");
                entity.Property(e => e.uom).HasMaxLength(60).IsUnicode(false).HasColumnName("uom");
                entity.Property(e => e.val).HasColumnName("val");
                entity.Property(e => e.grQty).HasColumnName("grQty");
                entity.Property(e => e.pendQty).HasColumnName("pendQty");
                entity.Property(e => e.delDate);
                entity.Property(e => e.openClose).HasMaxLength(1).IsUnicode(false).HasColumnName("openClose");

            });

            modelBuilder.Entity<Pr_Details>(entity =>
            {
                entity.Property(e => e.id).HasColumnName("id");
                entity.Property(e => e.prNo).HasColumnName("prNo");
                entity.Property(e => e.series).HasMaxLength(30).IsUnicode(false).HasColumnName("series");
                entity.Property(e => e.prDate);
                entity.Property(e => e.department).HasMaxLength(40).IsUnicode(false).HasColumnName("department");
                entity.Property(e => e.itemCode).HasMaxLength(40).IsUnicode(false).HasColumnName("itemCode");
                entity.Property(e => e.itemName).HasMaxLength(100).IsUnicode(false).HasColumnName("itemName");
                entity.Property(e => e.p1).HasMaxLength(50).IsUnicode(false).HasColumnName("p1");
                entity.Property(e => e.p2).HasMaxLength(50).IsUnicode(false).HasColumnName("p2");
                entity.Property(e => e.p3).HasMaxLength(50).IsUnicode(false).HasColumnName("p3");
             
                entity.Property(e => e.uom).HasMaxLength(20).IsUnicode(false).HasColumnName("uom");
                entity.Property(e => e.purPrice).HasColumnName("purPrice");
                entity.Property(e => e.value).HasColumnName("value");
              
                entity.Property(e => e.isApproved).HasMaxLength(1).IsUnicode(false).HasColumnName("isApproved");
                entity.Property(e => e.approvedBy).HasMaxLength(50).IsUnicode(false).HasColumnName("approvedBy");
            });

            modelBuilder.Entity<Pr_Po_Details>(entity =>
            {
                entity.Property(e => e.id).HasColumnName("id");
                entity.Property(e => e.prNo).HasColumnName("poNo");
                entity.Property(e => e.department).HasMaxLength(50).IsUnicode(false).HasColumnName("department");
                entity.Property(e => e.prDate);
                entity.Property(e => e.reqDate);
                entity.Property(e => e.itemCode).HasMaxLength(60).IsUnicode(false).HasColumnName("itemCode");
                entity.Property(e => e.itemName).HasMaxLength(100).IsUnicode(false).HasColumnName("itemName");
                entity.Property(e => e.p1).HasMaxLength(50).IsUnicode(false).HasColumnName("p1");
                entity.Property(e => e.p2).HasMaxLength(50).IsUnicode(false).HasColumnName("p2");
                entity.Property(e => e.p3).HasMaxLength(50).IsUnicode(false).HasColumnName("p3");
                entity.Property(e => e.prQty).HasColumnName("prQty");
                entity.Property(e => e.uom).HasMaxLength(20).IsUnicode(false).HasColumnName("uom");
                entity.Property(e => e.prRate).HasColumnName("prRate");
                entity.Property(e => e.prValue).HasColumnName("prValue");
                entity.Property(e => e.prClose).HasMaxLength(2).IsUnicode(false).HasColumnName("prClose");
                entity.Property(e => e.supplier).HasMaxLength(80).IsUnicode(false).HasColumnName("supplier");
                entity.Property(e => e.poNo).HasColumnName("poNo");
                entity.Property(e => e.pendQty).HasColumnName("pendQty");
                entity.Property(e => e.poQty).HasColumnName("poQty");
                entity.Property(e => e.poDate);
                entity.Property(e => e.balQty).HasColumnName("balQty");

            });

            modelBuilder.Entity<Pending_Pr>(entity =>
            {
                entity.Property(e => e.id).HasColumnName("id");
                entity.Property(e => e.prNo).HasColumnName("prNo");
                entity.Property(e => e.series).HasMaxLength(50).IsUnicode(false).HasColumnName("series");
                entity.Property(e => e.prDate);
                entity.Property(e => e.department).HasMaxLength(60).IsUnicode(false).HasColumnName("department");
                entity.Property(e => e.reqDate);
                entity.Property(e => e.itemCode).HasMaxLength(60).IsUnicode(false).HasColumnName("itemCode");
                entity.Property(e => e.itemName).HasMaxLength(100).IsUnicode(false).HasColumnName("itemName");
                entity.Property(e => e.p1).HasMaxLength(50).IsUnicode(false).HasColumnName("p1");
                entity.Property(e => e.p2).HasMaxLength(50).IsUnicode(false).HasColumnName("p2");
                entity.Property(e => e.p3).HasMaxLength(50).IsUnicode(false).HasColumnName("p3");

                entity.Property(e => e.prQty).HasColumnName("prQty");
                entity.Property(e => e.uom).HasMaxLength(20).IsUnicode(false).HasColumnName("uom");
                entity.Property(e => e.prRate).HasColumnName("prRate");
                entity.Property(e => e.prValue).HasColumnName("prValue");
                entity.Property(e => e.poQty).HasColumnName("poQty");
                entity.Property(e => e.balQty).HasColumnName("balQty");
                
            });
            modelBuilder.Entity<BalanceOnly>(entity =>
            {
                entity.Property(e => e.code).HasColumnName("code");
                entity.Property(e => e.itemCode).HasMaxLength(20).IsUnicode(false).HasColumnName("itemCode");
                entity.Property(e => e.itemName).HasMaxLength(40).IsUnicode(false).HasColumnName("itemName");
                entity.Property(e => e.uom).HasMaxLength(10).IsUnicode(false).HasColumnName("uom");
                entity.Property(e => e.createdOn).HasMaxLength(10).IsUnicode(false).HasColumnName("createdOn");
                entity.Property(e => e.sQty).HasColumnName("sQty");

            });

            modelBuilder.Entity<Stock_Details>(entity =>
            {
                entity.Property(e => e.code).HasColumnName("code");
                entity.Property(e => e.itemCode).HasMaxLength(20).IsUnicode(false).HasColumnName("itemCode");
                entity.Property(e => e.itemName).HasMaxLength(40).IsUnicode(false).HasColumnName("itemName");
                entity.Property(e => e.p1).HasMaxLength(50).IsUnicode(false).HasColumnName("p1");
                entity.Property(e => e.p2).HasMaxLength(50).IsUnicode(false).HasColumnName("p2");
                entity.Property(e => e.p3).HasMaxLength(50).IsUnicode(false).HasColumnName("p3");
                entity.Property(e => e.matCenter).HasMaxLength(50).IsUnicode(false).HasColumnName("matCenter");

                entity.Property(e => e.opnQty).HasColumnName("opnQty");
                entity.Property(e => e.inQty).HasColumnName("inQty");
                entity.Property(e => e.outQty).HasColumnName("outQty");
                entity.Property(e => e.clsQty).HasColumnName("clsQty");

                entity.Property(e => e.uom).HasMaxLength(50).IsUnicode(false).HasColumnName("uom");
            });
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    }
}
