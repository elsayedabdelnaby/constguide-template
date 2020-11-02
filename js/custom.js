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
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  autoWidth:true,
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