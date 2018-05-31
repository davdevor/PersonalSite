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

            bundles.Add(new ScriptBundle("~/Scripts/jquery", "https://code.jquery.com/jquery-1.12.4.min.js").Include("~/Scripts/jquery-1.10.2.min.js"));
            bundles.Add(new ScriptBundle("~/Scripts/bootstrapjs", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js").Include("~/Scripts/bootstrap.min.js"));
            bundles.Add(new ScriptBundle("~/Scripts/sitescripts").Include("~/Scripts/sitescripts.js"));
            bundles.Add(new StyleBundle("~/Content/bootstrapcss", "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css").Include("~/Content/bootstrap.min.css"));
            bundles.Add(new StyleBundle("~/Content/sitecss").Include("~/Content/Site.css"));
#if NDEBUG
            BundleTable.EnableOptimizations = true;
            bundles.UseCdn = true;
# endif
        }
    }
}