

var LayoutHelper = (function ($) {
    "use strict";
    var module = {
        navbuttonsIds: null,
        githubImageId: null,
        linkedinImageId: null,
        lastClicked: null,
        onready: function () {
            
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-119836223-1');

            $(document).ready(function () { });
            makeOpaqueListener($('#' +this.linkedinImageId)[0]);
            makeOpaqueListener($('#' +this.githubImageId)[0]);
            addHoverToNavButtons(this.navbuttonsIds);
            checkActiveNavButtons();
        }
    };
    return module;

    // private
    function checkActiveNavButtons() {
        var segments = window.location.href.split("/");
        var buttonId;
        var i = 3;
        if (segments.length > 4) {
            i = 4;
        }
        switch (segments[i]) {
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
            document.getElementById(module.navbuttonsIds[buttonId]).className = "btn btn-default btn-sm text-white background-secondary mg2";
        }
    }
    function addHoverToNavButtons(idsArray) {
        var tempButton;
        for (var i = 0; i < idsArray.length; ++i) {
            tempButton = document.getElementById(idsArray[i]);
            tempButton.addEventListener("mouseover", function () {
                this.className = "btn btn-default btn-sm text-white background-secondary mg2";
            });
            tempButton.addEventListener("mouseout", function () {
                this.className = "btn btn-default btn-sm text-white mg2";
                checkActiveNavButtons();
            });
            tempButton.addEventListener("click", function () {
                module.lastClicked = this.id;
                var x = 5;
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