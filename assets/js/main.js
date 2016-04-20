jQuery(document).ready(function ($) {
  
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
  
  $(".modal-xlg").each(function(i, e){
    $(this).append('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
  });
  
  $('.modal-xlg').parent().on('hidden.bs.modal', function (e) {
    $("iframe", this).vimeo("pause");
  });
  
});