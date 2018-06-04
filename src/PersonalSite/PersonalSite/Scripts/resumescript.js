var ResumeHelper = (function ($) {
    "use strict";
    var module = {
        downloadresumeId: null,
        onready: function () {
            // use [] to get the dom object out of the jquery object that is returned
            var downloadresumelabel = $('#' + this.downloadresumeId)[0];

            // setup button hover and download when clicked
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