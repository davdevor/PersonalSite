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


            //https://stackoverflow.com/questions/23273996/using-cdn-in-asp-net-mvc-bundles
            ScriptBundle thirdPartyScripts = new ScriptBundle("~/Scripts/ThirdParty");
            thirdPartyScripts.Include("~/Scripts/jquery-1.10.2.min.js", "~/Scripts/bootstrap.min.js","~/Scripts/sitescripts");
            bundles.Add(thirdPartyScripts);
            StyleBundle styles = new StyleBundle("~/Content/Bundle");
            styles.Include("~/Content/bootstrap.min.css", "~/Content/bootstrap-theme.css", "~/Content/Site.css");
            bundles.Add(styles);

            bundles.Add(new ScriptBundle("~/Scripts/jquery", "https://code.jquery.com/jquery-1.12.4.min.js").Include("~/Scripts/jquery-1.10.2.min.js"));
            bundles.Add(new ScriptBundle("~/Scripts/bootstrap", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js").Include("~/Scripts/bootstrap.min.js");
            bundles.Add(new ScriptBundle)
            BundleTable.EnableOptimizations = true;
        }
    }
}