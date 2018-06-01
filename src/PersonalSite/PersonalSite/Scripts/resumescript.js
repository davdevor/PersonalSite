var ResumeHelper = (function ($) {
    "use strict";
    var module = {
        downloadresumeId: null,
        onready: function () {
            var downloadresumelabel = $('#' + this.downloadresumeId)[0];
            downloadresumelabel.addEventListener("mouseover", function () {
                downloadresumelabel.className = "rounded mx-auto mylabel-hover";
            });
            downloadresumelabel.addEventListener("mouseout", function () {
                downloadresumelabel.className = "rounded mx-auto mylabel";
            });
            downloadresumelabel.addEventListener("click", function () {
                window.location = "Home/DownloadResume";
            });
        }
    };
    return module;

})(jQuery);