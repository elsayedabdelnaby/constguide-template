"use strict";

$('.dropdown-global-search a').click(function(){
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
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
});