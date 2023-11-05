// let sectionTop = $(".home-text").offset().top;

// $(window).scroll(function () {
//   let scrollTop = $(window).scrollTop();

//   if (scrollTop > sectionTop) {
//     $(".navbar").removeClass("bord");
//     $(".navbar-brand").removeClass("log");
//     $(".navbar").addClass("shadow");
//     $(".navbar").addClass("bg-white");
//   } else {
// 	$(".navbar").addClass("bord");
// 	$(".navbar-brand").addClass("log");
//     $(".navbar").removeClass("shadow");
//     $(".navbar").removeClass("bg-white");
//   }
// });
// $(".navbar-brand").addClass("log");



let sectionTop = $("#about").offset().top;

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  if (scrollTop > sectionTop) {
    $(".arrow-up").addClass("d-block");
    $(".said-social").show("1000");
    // $(".said-social").animate({left: '10px'}, 500 );

  } else {
    $(".arrow-up").removeClass("d-block");
    // $(".said-social").removeClass("d-block");
    $(".said-social").hide("1000");
  }
});


$(".said-social").hide("1000");


$(document).ready(function () {
  $(".loader").fadeOut(3000);
});


$(document).ready(function () {
  // Check the window width whenever the window is resized
  $(window).on("resize",function () {
    if ($(window).width() < 992) {
      $(".nav-link").removeClass("button");
      $(".nav-link").addClass("nav-link-hover");
    } else {
      $(".nav-link").addClass("button");
      $(".nav-link").removeClass("nav-link-hover");
    }
  }).resize();
});
