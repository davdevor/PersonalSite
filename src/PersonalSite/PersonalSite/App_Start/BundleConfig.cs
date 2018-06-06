using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
namespace PersonalSite.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            // scripts
            bundles.Add(new ScriptBundle("~/Scripts/bootstrapjs", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js")
                .Include("~/Scripts/bootstrap.min.js"));
            bundles.Add(new ScriptBundle("~/Scripts/jquery", "https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js")
                .Include("~/Scripts/jquery-3.0.0.min.js"));
            bundles.Add(new ScriptBundle("~/Scripts/layoutscripts")
                .Include("~/Scripts/sitescripts/layoutscripts.js"));
            bundles.Add(new ScriptBundle("~/Scripts/projectscripts")
                .Include("~/Scripts/sitescripts/projectscripts.js"));
            bundles.Add(new ScriptBundle("~/Scripts/resumescripts")
                .Include("~/Scripts/sitescripts/resumescript.js"));
            bundles.Add(new ScriptBundle("~/Scripts/errorscripts")
                .Include("~/Scripts/sitescripts/errorscripts.js"));

            // css
            bundles.Add(new StyleBundle("~/Content/bootstrapcss", "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css")
                .Include("~/Content/bootstrap.min.css"));
            bundles.Add(new StyleBundle("~/Content/sitecss")
                .Include("~/Content/Site.css"));

            // if not in debug mode build with optimizations and use of content delivery networks
#if !DEBUG
            BundleTable.EnableOptimizations = true;
            bundles.UseCdn = true;
# endif
        }
    }
}