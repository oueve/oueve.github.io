/*global $, jQuery, alert */
$(document).ready(function () {
    "use strict";
    if ($(document).width() < 384) {
        $("div.col-md-4").removeClass("border-desktop");
        $("div.col-md-4").addClass("border-mobile");
        $("div.col-md-6").removeClass("right-left-aligned");
    }
    if ($(document).width() < 989) {
        $("div.phone").removeClass("image");
        $("div.phone").addClass("drop-mobile");
    }
    if ($(".active") === true) {
        $("a.active").removeClass("a:hover");
    }
    
});