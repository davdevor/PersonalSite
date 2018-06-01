var ProjectHelper = (function ($) {
    "use strict";
    var module = {
        idsArray: null,
        onready: function () {
            $(document).ready(function () { });
            setupLabels(this.idsArray);
        }
    };
    return module;

    // private
    function setupLabels(idsArray) {
        var tempLabel;
        for (i = 0; i < idsArray.length; ++i) {
            tempLabel = $('#'+idsArray[i])[0];

            changeLabelClassOnMouse(tempLabel);
            tempLabel.addEventListener("click", function () {
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
