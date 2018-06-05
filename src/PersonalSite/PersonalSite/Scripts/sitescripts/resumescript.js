var ResumeHelper = (function ($) {
    "use strict";
    var module = {
        downloadresumeId: null,
        onready: function () {
            // use [] to get the dom object out of the jquery object that is returned
            $('#' + this.downloadresumeId).mouseover(function () {
                this.className = "rounded mx-auto mylabel-hover";
            }).mouseout(function () {
                this.className = "rounded mx-auto mylabel";
            }).click(function () {
                ga('send', 'event', 'Resume Downloads', 'Click', 'Resume Download');
                // sets the location of the current window
                // routes handle it going to the action method to download the pdf
                window.location = "Home/DownloadResume";
            });
        }

    };
    return module;

})(jQuery);