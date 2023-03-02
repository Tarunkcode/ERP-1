
using ESERP.SERVICE.IRepository;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebPush;

namespace ERP_1.WEB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
      

        //[HttpPost]
        //public IActionResult Notify(string client, string endpoint, string p256dh, string auth)
        //{
        //    if (client == null)
        //    {
        //        return BadRequest("No Client Name parsed.");
        //    }
        //    if (PersistentStorage.GetClientNames().Contains(client))
        //    {
        //        return BadRequest("Client Name already used.");
        //    }
        //    var subscription = new PushSubscription(endpoint, p256dh, auth);
        //    PersistentStorage.SaveSubscription(client, subscription);
        //    return View("Notify", PersistentStorage.GetClientNames());
        //}
    }
}
