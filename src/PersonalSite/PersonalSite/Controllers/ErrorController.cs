using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PersonalSite.Controllers
{
    public class ErrorController : Controller
    {
        /// <summary>
        /// Displays the 404 error page and sets the status code to 404
        /// </summary>
        /// <returns>A view</returns>
        public ActionResult _404Error()
        {
            ViewBag.title = "404 Error";
            Response.StatusCode = 404;
            return View();
        }

        /// <summary>
        /// Displays the 500 error page and sets the status code to 500
        /// </summary>
        /// <returns>A view</returns>
        public ActionResult _500Error()
        {
            ViewBag.title = "500 Error";
            Response.StatusCode = 500;
            return View();
        }


        // the methods are used to throw http errors
        // so I can verify that it reroutes to custom page
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