using System;
using System.Collections.Generic;

#nullable disable

namespace ESERP.SERVICE.Domain
{
    public partial class Esweb
    {
        public int Code { get; set; }
        public string SUrl { get; set; }
        public string SPort { get; set; }
        public string Fy { get; set; }
        public string CompCode { get; set; }
        public string currentDomain { get; set; }
    }
}
