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
            ViewBag.title = "404 Error";
            Response.StatusCode = 404;
            return View();
        }

        public ActionResult _500Error()
        {
            ViewBag.title = "500 Error";
            Response.StatusCode = 500;
            return View();
        }

#if DEBUG
        public ActionResult Throw404Error()
        {
            throw new HttpException(404, "404 Error");
        }

        public ActionResult Throw500Error()
        {
            throw new HttpException(500, "500 Error");
        }
#endif
    }
}