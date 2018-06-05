using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
// for bundleconfig
using System.Web.Optimization;
using PersonalSite.App_Start;
namespace PersonalSite
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            // this is added to register css and script bundles
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
