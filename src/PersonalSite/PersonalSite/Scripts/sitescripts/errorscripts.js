var ErrorHelper = (function ($) {
    "use strict";
    var module = {
        onready: function () {
            // make the back button move when moused over
            $("#backbutton").click(goBack).mouseenter(function () {
                $(this).animate({
                    top: Math.random() * (window.innerHeight - $(this).height()) + "px",
                    left: Math.random() * (window.innerWidth - $(this).width()) + "px",
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