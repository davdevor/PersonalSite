

var LayoutHelper = (function ($) {
    "use strict";
    var module = {
        navbuttonsIds: null,
        githubImageId: null,
        linkedinImageId: null,
        onready: function () {

            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-119836223-1');

            $(document).ready(function () { });

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
        // /action
        var segmentIndex = 3;

        // /Home/action
        if (segments.length > 4) {
            segmentIndex = 4;
        }
        switch (segments[segmentIndex]) {
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
        if (buttonId != -1) {
            document.getElementById(module.navbuttonsIds[i]).className = "primary background-secondary btn btn-default btn-sm text-white mg2";
        }



    }
    function addHoverToNavButtons(idsArray) {
        var tempButton;
        for (var i = 0; i < idsArray.length; ++i) {
            tempButton = document.getElementById(idsArray[i]);
            tempButton.addEventListener("mouseover", function () {
                if (!this.className.includes("primary", 0)) {
                    this.className = "background-secondary btn btn-default btn-sm text-white mg2";
                }
            });
            tempButton.addEventListener("mouseout", function () {
                if (!this.className.includes("primary", 0)) {
                    this.className = "btn btn-default btn-sm text-white mg2";

                }
            });

        }
    }

    function makeOpaqueListener(image) {
        image.addEventListener("mouseover", function () {
            image.className = "img-opaque";
        });
        image.addEventListener("mouseout", function () {
            image.className = "";
        });
    }
})(jQuery);