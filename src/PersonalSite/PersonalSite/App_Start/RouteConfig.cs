using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace PersonalSite
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            // if user navigates to /Contact it will take them to /Home/ContactInfo
            routes.MapRoute(name: "Contact", url: "Contact", defaults: new { controller = "Home", action = "ContactInfo" });
            // /Home takes you to Home/About
            routes.MapRoute(name: "About", url: "Home", defaults: new { controller = "Home", action = "About" });
            // /action take you to /Home/action
            routes.MapRoute(name: "HomeAction", url: "{action}", defaults: new { controller = "Home" });
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "About", id = UrlParameter.Optional }
            );
        }
    }
}
