using ESERP.SERVICE.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ESERP.SERVICE.IRepository
{
    public interface IRepositorys
    {
        Task <List<Esweb>> getAll();
        Task<bool> SaveDomain(Esweb esTab);
    }
}

