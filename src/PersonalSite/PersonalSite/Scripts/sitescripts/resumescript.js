var ResumeHelper = (function ($) {
    "use strict";
    var module = {
        downloadresumeId: null,
        onready: function () {
            // set the hover actions
            $('#' + this.downloadresumeId).hover(function () {
                this.className = "rounded mx-auto mylabel-hover";
            }, function () {
                this.className = "rounded mx-auto mylabel";
            }).click(function (event) {
                event.preventDefault();
                ga('send', 'event', 'Resume Download', 'click', {
                    // use callback so request doesn't  cancel
                    hitCallback: function () {
                        window.location = "Home/DownloadResume";
                    }
                });
            });
        }
    };
    return module;

})(jQuery);