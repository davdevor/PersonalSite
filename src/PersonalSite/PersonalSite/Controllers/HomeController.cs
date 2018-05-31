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
        public ViewResult About()
        {
            return View();
        }

        public ViewResult Projects()
        {
            return View();
        }

        public ViewResult Resume()
        {
            return View();
        }

        public FilePathResult DownloadResume()
        {
            // first arg is for file name the second one is for the type of file it is
            var x = new FilePathResult(string.Format(@"~\Files\{0}", "David Devore Resume.pdf"), "application/pdf")
            {
                // have to set the download Name otherwise it sets it the methodname
                FileDownloadName = "David Devore Resume.pdf"
            };
            return x; 
        }
    }
}