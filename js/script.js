$(document).ready(function(){

  // Для верхнего меню 
   var scrollDown = $(".top-header").height();
   $(window).scroll(function () {
     if ($(this).scrollTop() > scrollDown) {
       $(".top-header-wrap").addClass("top-header-bg-blue");
     }
     if($(this).scrollTop() < scrollDown) {
       $(".top-header-wrap").removeClass("top-header-bg-blue");
     }
   });

   //для плавного скролла
  $("#anchor-1").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1200);
  });

  $("#anchor-2").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 900);
  });

  $("#anchor-3").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 900);
  });

  $("#anchor-4").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 900);
  });
   
 
});




