jQuery(document).ready(function ($) {
  
    
 //if it's mobile    
 if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     if($("video.background-video img").length){
        $("video.background-video").replaceWith($("video.background-video img")); 
     }
 }
    
 if($(".nav-holder").length){
  var mn = $(".nav-holder nav"),
    mns = "main-nav-scrolled",
    hdr = $(".nav-holder").offset().top;
    
 $(window).on("resize", function(){
     hdr = $(".nav-holder").offset().top;
 });

  $(window).scroll(function () {
    if ($(this).scrollTop() > hdr) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });
 }
  
  $(".custom-modal").each(function(i, e){
    $('.inner-custom-modal', this).append('<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
  });
  

  

  
  $('button[data-toggle="custom-modal"]').on('click', function (e) {
    var $modal = $($(this).attr("data-target")).addClass("show");
    
    $("iframe", $modal)
      .vimeo("play")
      .on("finish pause", function(){
        $modal.removeClass("show");
        $("#navCollapse").collapse("show");
      });
    
    $modal.find(".close").on("click", function(){
      $("iframe", $modal).vimeo("pause");
      $modal.removeClass("show");
    })
  });
  
//  $("#chapter-button").on("click", function(e){
//     e.preventDefault();
//    $("#navCollapse").slideUp();
//  });

});