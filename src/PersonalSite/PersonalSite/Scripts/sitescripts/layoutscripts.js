var LayoutHelper = (function ($) {
    "use strict";
    var module = {
        navbuttonsIds: null,
        onready: function () {
            
            makeOpaqueListener();
            checkActiveNavButtons();
            addHoverToDefaultButtons();
        }
    };
    return module;

    // this method sets the active nav button based on the url
    // it gets the action and sets the active button based on that
    function checkActiveNavButtons() {
        var segments = window.location.href.split("/");
        var buttonId;
        // the fourth segment at pos 3 is the actionmethod
        var segmentIndex = 3;

        // if length is greater than four then url is like /Home/action and the action method is fifth at pos 4
        if (segments.length > 4) {
            segmentIndex = 4;
        }
        switch (segments[segmentIndex]) {
            // these first cases refer to the home or default page
            case "About":
            case "":
            case "Home":
                buttonId = 0;
                break;
            case "Projects":
                buttonId = 1;
                break;
            case "Resume":
                buttonId = 2;
                break;
            case "Contact":
                buttonId = 3;
                break;
            default:
                buttonId = -1;
                break;
        }
        // if buttonId is equal to -1 then it is not on any of the pages in the nav bar so you don't set any of them to the primary
        if (buttonId != -1) {
            document.getElementById(module.navbuttonsIds[buttonId]).className = "primary background-secondary btn btn-default btn-sm text-white mg2";
        }
    }

    // this method is used to add a change color hover effect tot the nav buttons
    function addHoverToDefaultButtons() {
        $(".btn-default").hover(function () {
            // if the moused over button is the primary button don't change it's class
            if (!this.className.includes("primary", 0)) {
                this.className = "background-secondary btn btn-default btn-sm text-white mg2";
            }
        },function () {
            // if the moused over button is the primary button don't change it's class
            if (!this.className.includes("primary", 0)) {
                this.className = "btn btn-default btn-sm text-white mg2";
            }
        });
    }

    // this function is used to make an image opaque if you mouse over it
    function makeOpaqueListener() {
        $(".footer-img").hover(function () {
            this.className = "img-opaque";
        },function () {
            this.className = "";
        });
    }
})(jQuery);