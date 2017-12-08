$(document).ready(function () {

$(window).on("scroll",function () {
  if ($(this).scrollTop() > 50){
    $(".top-header").addClass("fixed-header");
    $(".header-top-block").css("border", "none");
  } else {
    $(".top-header").removeClass("fixed-header");
    $(".header-top-block").css("border-bottom", "1px solid #505369");
  }
});

  $("#burger-menu").on("click", function () {
    $(this).toggleClass("burger-cross");
    $(".mobile-menu").fadeToggle();
  });

  $(".works-info").on( "click",function () {
    $(this).next().click();
  });

  $(".slider-quote").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $(".slick-dots").addClass("slick-dots-position");

  $(document).on("scroll", onScroll);
    function onScroll(event){
      var scrollPosition = $(document).scrollTop();
      $(".main-nav li a").each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
          $(".main-nav li a").removeClass("active");
          currentLink.addClass("active");
        }
        else{
          currentLink.removeClass("active");
        }
      });
    }
 });

