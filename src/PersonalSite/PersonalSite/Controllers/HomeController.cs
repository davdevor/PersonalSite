using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PersonalSite.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View("About");
        }

        public ViewResult ContactInfo()
        {
            return View();
        }
        public ViewResult About()
        {
            return View();
        }

        public ViewResult Projects()
        {
            return View();
        }
        public ViewResult Experience()
        {
            return View();
        }

        public PartialViewResult Resume()
        {
            return PartialView();
        }
    }
}