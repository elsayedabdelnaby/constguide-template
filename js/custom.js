"use strict";

$('.dropdown-global-search a').click(function () {
  $('input[name="search-module"]').val($(this).data("target"));
  $('input[name="search-value"]').attr('placeholder', $(this).html());
  $('#globalSearchMenuButton').html($(this).data("target"));
});


// carousel infinite loop - New products card
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
  loop: true,
  margin: 10,
  center: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 5,
      margin:20,
    },
  }
});

// Sponser Owl

$(document).ready(function () {
  $(".owl-carousel-sponser").owlCarousel();
});

var owl = $('.owl-carousel-sponser');
owl.owlCarousel({
  loop: true,
  margin: 10,
  center: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    480: {
      items: 4,
    },
    768: {
      items: 6,
    },
    992: {
      items: 8,
    },
    1200: {
      items: 10,
    },
  }
});