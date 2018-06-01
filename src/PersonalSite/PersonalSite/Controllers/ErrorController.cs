using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PersonalSite.Controllers
{
    public class ErrorController : Controller
    {
        // GET: Error
        public ActionResult _404Error()
        {
            Response.StatusCode = 404;
            return View();
        }

        public ActionResult _500Error()
        {
            Response.StatusCode = 500;
            return View();
        }
    }
}