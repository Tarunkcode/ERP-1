using ESERP.SERVICE.Domain;
using ESERP.SERVICE.IRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESERP.SERVICE.Repository
{
    public class Repository : IRepositorys
    {
        private readonly EsMasterDBContext _db;
        public Repository(EsMasterDBContext db)
        {
            _db = db;
        }

        public async Task<List<Esweb>> getAll()
        {
            var entity = await _db.Eswebs.ToListAsync();
            return entity;
        }

        public async Task<bool> SaveDomain(Esweb esweb)
        {
            var entity = _db.Eswebs.FirstOrDefault(k => k.Code == esweb.Code);
            if (entity != null)
            {
                entity.SUrl = esweb.SUrl.Trim();
                entity.SPort = esweb.SPort.Trim();
                entity.Fy = esweb.Fy.Trim();
                _db.Entry(entity).State = EntityState.Modified;
                await _db.SaveChangesAsync();
                return true;

            }
            else
            {
                _db.Eswebs.Add(esweb);
                await _db.SaveChangesAsync();
            }
            return true;
        }

    }
}
