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
            var x = new FilePathResult(string.Format(@"~\Files\{0}", "David Devore Resume" + ".docx"), "application/msword");
            x.FileDownloadName="David Devore Resume.docx";
            return x; 
        }
    }
}