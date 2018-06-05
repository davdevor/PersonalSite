using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PersonalSite.Controllers
{
    public class HomeController : Controller
    {
        /// <summary>
        /// Displays Info on how to contact me
        /// </summary>
        /// <returns>A view</returns>
        public ViewResult ContactInfo()
        {
            return View();
        }
        /// <summary>
        /// This is the home page it contains info about me
        /// </summary>
        /// <returns>A view</returns>
        public ViewResult About()
        {
            return View();
        }
        /// <summary>
        /// Displays all of the projects I have worked on
        /// </summary>
        /// <returns>A view</returns>
        public ViewResult Projects()
        {
            return View();
        }
        /// <summary>
        /// displays my resume
        /// </summary>
        /// <returns>A view</returns>
        public ViewResult Resume()
        {
            return View();
        }

        /// <summary>
        /// Gets the file path for my resume
        /// </summary>
        /// <returns>FilePathResult to my resume</returns>
        public FilePathResult DownloadResume()
        {
            // first arg is for file name the second one is for the type of file it is
            return new FilePathResult(string.Format(@"~\Files\{0}", "David Devore Resume.pdf"), "application/pdf")
            {
                // have to set the download Name otherwise it sets it to the methodname
                FileDownloadName = "David Devore Resume.pdf"
            };
        }
    }
}