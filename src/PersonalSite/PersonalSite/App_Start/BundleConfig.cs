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
            ScriptBundle thirdPartyScripts = new ScriptBundle("~/Scripts/ThirdParty");
            thirdPartyScripts.Include("~/Scripts/jquery-1.10.2.min.js", "~/Scripts/bootstrap.min.js");
            bundles.Add(thirdPartyScripts);
            StyleBundle styles = new StyleBundle("~/Content/Bundle");
            styles.Include("~/Content/bootstrap.min.css", "~/Content/bootstrap-theme.css", "~/Content/Site.css");
            bundles.Add(styles);
            BundleTable.EnableOptimizations = true;
        }
    }
}