var ErrorHelper = (function ($) {
    "use strict";
    var module = {
        onready: function () {
            // make the back button move when moused over
            $("#backbutton").click(goBack).mouseenter(function () {
                $(this).animate({
                    top: Math.random() * screen.height + "px",
                    left: Math.random() * screen.width + "px",
                });
            }).mouseenter(function () {
                $(this).css("position", "absolute");
            });
        }

    };
    return module;
    function goBack() {
        window.history.back();
    }
})(jQuery);