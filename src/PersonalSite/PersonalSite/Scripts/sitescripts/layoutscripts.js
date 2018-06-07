var LayoutHelper = (function ($) {
    "use strict";
    var module = {
        defaultButtonClasses: null,
        activeButtonClasses: null,
        hoverButtonClasses: null,
        onready: function () {

            makeOpaqueListener();
            checkActiveNavButtons();
            addHoverToDefaultButtons();
            setNavbar();
        }
    };
    return module;

    // makes the navbar always on the bottom of the page
    function setNavbar() {
        // get the heigh of the window subtract from that the height of the nav bar and the height of the footer
        // that gives you the height of how much margin to put on the footer
        var footer = $("#footer");
        var docHeight = $(window).height();
        var footerTop = footer.position().top + footer.height();
        if (footerTop < docHeight) {
            footer.css('margin-top', (docHeight - footerTop - $('#navbar').height()) + 'px');
        }
        footer.removeClass("hidden");
    }

    // this method sets the active nav button based on the url
    // it gets the action and sets the active button based on that
    function checkActiveNavButtons() {
        var segments = window.location.href.split("/");
        var buttonId;
        // the fourth segment at pos 3 is the actionmethod
        var segmentIndex;

        // if length is greater than four then url is like /Home/action and the action method is fifth at pos 4
        if (segments.length > 4) {
            segmentIndex = 4;
        }
        else {
            segmentIndex = 3;
        }
        var buttons = $(".nav-button");
        for (var i = 0; i < buttons.length; ++i) {
            if (buttons[i].text === segments[segmentIndex]) {
                buttons[i].className = module.activeButtonClasses;
                return;
            }
        }
        if (segments[segmentIndex] === "" || segments[segmentIndex] === "Home") {
            for (var i = 0; i < buttons.length; ++i) {
                if (buttons[i].text === "About") {
                    buttons[i].className = module.activeButtonClasses;
                    return;
                }
            }
        }
    }

    // this method is used to add a change color hover effect to the default buttons
    function addHoverToDefaultButtons() {
        $(".btn-default").hover(function () {
            // if the moused over button is the primary button don't change it's class
            if (!this.className.includes("primary", 0)) {
                this.className = module.hoverButtonClasses;
            }
        }, function () {
            // if the moused over button is the primary button don't change it's class
            if (!this.className.includes("primary", 0)) {
                this.className = module.defaultButtonClasses;
            }
        });
    }

    // this function is used to make an image opaque if you mouse over it
    function makeOpaqueListener() {
        $(".footer-img").hover(function () {
            this.className = "img-opaque";
        }, function () {
            this.className = "";
        });
    }
})(jQuery);