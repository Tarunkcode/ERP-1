
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ERP_1.WEB.Models;

namespace ESERP.SERVICE.IRepository
{
    public interface INotificationRepo
    {
        Task<ResponseModel> SendNotification(NotificationModel notificationModel);
    }
}

