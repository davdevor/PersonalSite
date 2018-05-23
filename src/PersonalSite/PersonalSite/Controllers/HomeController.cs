using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PersonalSite.Controllers
{
    public class HomeController : Controller
    {

        public ViewResult ContactInfo()
        {
            return View();
        }
        public ViewResult About(bool showResume = true)
        {
            return View(showResume);
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