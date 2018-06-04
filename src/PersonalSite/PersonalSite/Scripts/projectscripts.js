var ProjectHelper = (function ($) {
    "use strict";
    var module = {
        idsArray: null,
        onready: function () {
            setupLabels(this.idsArray);
        }
    };
    return module;

    // this method gets the labels for each prject and adds the hover and click events
    function setupLabels(idsArray) {
        var tempLabel;
        for (var i = 0; i < idsArray.length; ++i) {
            tempLabel = $('#'+idsArray[i])[0];

            changeLabelClassOnMouse(tempLabel);
            tempLabel.addEventListener("click", function () {
                // gets the data-link data from the label element
                window.open(this.dataset.link);
            });
        }
    }
    function changeLabelClassOnMouse(label) {
        label.addEventListener("mouseover", function () {
            label.className = "rounded mylabel-hover";
        });
        label.addEventListener("mouseout", function () {
            label.className = "rounded mylabel";
        });
    }
})(jQuery);
