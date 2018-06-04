var LayoutHelper = (function ($) {
    "use strict";
    var module = {
        navbuttonsIds: null,
        githubImageId: null,
        linkedinImageId: null,
        onready: function () {

           


            makeOpaqueListener($('#' + this.linkedinImageId)[0]);
            makeOpaqueListener($('#' + this.githubImageId)[0]);
            checkActiveNavButtons();
            addHoverToNavButtons(this.navbuttonsIds);
        }
    };
    return module;

    // private

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
    function addHoverToNavButtons(idsArray) {
        var tempButton;
        for (var i = 0; i < idsArray.length; ++i) {
            tempButton = document.getElementById(idsArray[i]);
            tempButton.addEventListener("mouseover", function () {
                // if the moused over button is the primary button don't change it's class
                if (!this.className.includes("primary", 0)) {
                    this.className = "background-secondary btn btn-default btn-sm text-white mg2";
                }
            });
            tempButton.addEventListener("mouseout", function () {
                // if the moused over button is the primary button don't change it's class
                if (!this.className.includes("primary", 0)) {
                    this.className = "btn btn-default btn-sm text-white mg2";

                }
            });

        }
    }

    // this function is used to make an image opaque if you mouse over it
    function makeOpaqueListener(image) {
        image.addEventListener("mouseover", function () {
            image.className = "img-opaque";
        });
        image.addEventListener("mouseout", function () {
            image.className = "";
        });
    }
})(jQuery);