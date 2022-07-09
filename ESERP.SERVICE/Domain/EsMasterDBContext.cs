using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ESERP.SERVICE.Domain
{
    public partial class EsMasterDBContext : DbContext
    {
        public EsMasterDBContext()
        {
        }

        public EsMasterDBContext(DbContextOptions<EsMasterDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Esweb> Eswebs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=DESKTOP-FS0EU4T\\SQL12;Database=EsMasterDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Esweb>(entity =>
            {
                entity.HasKey(e => e.Code)
                    .HasName("PK__ESWeb__A25C5AA69F20957A");

                entity.ToTable("ESWeb");

                entity.Property(e => e.Fy)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("FY");

                entity.Property(e => e.SPort)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("sPort");

                entity.Property(e => e.SUrl)
                    .HasMaxLength(500)
                    .IsUnicode(false)
                    .HasColumnName("sURL");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
