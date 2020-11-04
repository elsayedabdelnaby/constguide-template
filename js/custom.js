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
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 5000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
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


// --------------------------- start Back to top Button --------------------------- 
//Get the button:
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

window.onscroll = function() {scrollFunction()};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop =  $('html,body').animate({ scrollTop: 0 }, 'slow');; // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop =  $('html,body').animate({ scrollTop: 0 }, 'slow');; // For Chrome, Firefox, IE and Opera
}

// --------------------------- end Back to top Button --------------------------- 
