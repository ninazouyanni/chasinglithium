jQuery(document).ready(function ($) {
  "use strict";
  
  var mn = $("nav"),
    mns = "main-nav-scrolled",
    hdr = $("nav").offset().top;

  $(window).scroll(function () {
    if ($(this).scrollTop() > hdr) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });
});