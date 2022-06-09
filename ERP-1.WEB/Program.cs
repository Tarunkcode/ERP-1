using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using System.Data;

namespace ERP_1.WEB
{
    public class Program
    {
        public static string sURL { get; private set; }
        public static string sPort { get; private set; }
        public static string sFy { get; private set; }
        public static bool status { get; private set; }
        public static void Main(string[] args)
        {
          
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();

                builder.DataSource = "DESKTOP-FS0EU4T\\SQL12";
                builder.UserID = "sa";
                builder.Password = "DHPL2021";
                builder.InitialCatalog = "EsMasterDB";
                SqlConnection cn = new SqlConnection(builder.ConnectionString);
                cn.Open();
                SqlCommand cmd = new SqlCommand("Select * from EsWeb", cn);
                SqlDataAdapter da=new SqlDataAdapter(cmd);
                DataSet ds=new DataSet();
                da.Fill(ds);
                if (ds.Tables[0].Rows.Count > 0)
                {
                   
                   
                    sURL=ds.Tables[0].Rows[0]["sURL"].ToString();
                    sPort = ds.Tables[0].Rows[0]["sPort"].ToString();
                    sFy = ds.Tables[0].Rows[0]["FY"].ToString();
                    status = true;
                }
                else 
                {
                    sURL = "";
                    sPort = "";
                    sFy = "";
                    status = false;
                    
                }
            }
            catch (Exception ex)
            {
                
            }
            CreateHostBuilder(args).Build().Run();

        }
     
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });

    
    }
}
