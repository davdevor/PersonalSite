var ProjectHelper = (function ($) {
    "use strict";
    var module = {
        onready: function () {
            setupLabels();
        }
    };
    return module;

    // this method gets the labels for each project and adds the hover and click events
    function setupLabels() {
        var tempLabel;
        $(".mylabel").mouseover(function () {
            this.className = "rounded mylabel-hover";
        }).mouseout(function () {
            this.className = "rounded mylabel";
        }).click(function () {
            // gets the data-link data from the label element
            window.open(this.dataset.link);
        });
    }
})(jQuery);
