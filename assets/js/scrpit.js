// Sticky Header
var header = $(".can-sticky");
var headerHeight = header.innerHeight();

// Sticky function
function doSticky() {
    if (window.pageYOffset > headerHeight) {
        if (!header.hasClass("sticky")) {
            header.addClass("sticky");
        }
    } else {
        header.removeClass("sticky");
    }
}
doSticky();

// On scroll event
$(window).on("scroll", function () {
    doSticky();
});

// Hamburger Menu Open/Close
$("#hamburger-menu").on("click", function () {
    $("#mobile-menu").addClass("open");
    $("body").addClass("no-scroll"); // Disable scrolling when mobile menu is open
});

// Close Hamburger Menu
$("#hamburger-cross").on("click", function () {
    $("#mobile-menu").removeClass("open");
    $("body").removeClass("no-scroll");
});

// Dropdown Menu Logic for Desktop and Mobile
$(".menu-item-has-children > a, .menu-item-has > a").on("click", function (e) {
    e.preventDefault(); // Prevent default anchor click
    var parentElement = $(this).parent("li");

    if (parentElement.hasClass("open")) {
        parentElement.removeClass("open");
        parentElement.find("ul.sub-menu").slideUp();
    } else {
        parentElement.addClass("open");
        parentElement.children("ul.sub-menu").slideDown();
        parentElement.siblings("li").removeClass("open").find("ul.sub-menu").slideUp();
    }
});

// Mobile Dropdown Menu
$(".mobile-dropdown > .dropdown-toggle").on("click", function () {
    var dropdownMenu = $(this).siblings(".mobile-dropdown-menu");
    if (dropdownMenu.is(":visible")) {
        dropdownMenu.slideUp();
        $(this).removeClass("active");
    } else {
        $(".mobile-dropdown-menu").slideUp(); // Close other menus
        $(".dropdown-toggle").removeClass("active");
        dropdownMenu.slideDown();
        $(this).addClass("active");
    }
});

//

$(document).ready(function () {
    $('.center-slider').slick({
      slidesToShow: 3, // Show 3 slides
      slidesToScroll: 1,
      centerMode: true, // Center the slides
      centerPadding: '40px', // Adjust spacing
      arrows: false, // Show next/prev buttons
      dots: false, // Hide dots
      speed: 500, // Smooth transitions
      infinite: true, // Infinite loop
      autoplay: true,
      autoplaySpeed: 2000, // Change slides every 2 seconds
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: '20px' } },
        { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: '0px' } }
      ]
    });
  });

  $(document).ready(function () {
    $('.custom-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false,
      centerPadding: '40px',
      arrows: false,
      dots: true,  // ✅ Ensure dots are enabled
      speed: 500,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000, // ✅ Change slides every 2 seconds
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: '20px' } },
        { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: '0px' } }
      ]
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = target / 100; // Adjust speed

      function updateCounter() {
        if (count < target) {
          count += speed;
          counter.innerText = Math.ceil(count);
          setTimeout(updateCounter, 30);
        } else {
          counter.innerText = target;
        }
      }

      updateCounter();
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-toggle").forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        this.parentElement.classList.toggle("active");
      });
    });
  });


// document.addEventListener("DOMContentLoaded", function () {
//     var getHamburgerIcon = document.getElementById("hamburger-menu");
//     var getHamburgerCrossIcon = document.getElementById("hamburger-cross");
//     var getMobileMenu = document.getElementById("mobile-menu");

//     getHamburgerIcon.addEventListener("click", function () {
//         console.log("Opening menu");
//         getMobileMenu.classList.add("active");
//     });

//     getHamburgerCrossIcon.addEventListener("click", function () {
//         console.log("Closing menu");
//         getMobileMenu.classList.remove("active");
//     });

//     // Close menu when resizing to desktop view
//     window.addEventListener("resize", function () {
//         if (window.innerWidth > 991) {
//             getMobileMenu.classList.remove("active");
//         }
//     });
// });


        // faq start
        const items = document.querySelectorAll('.accordion button');

        function toggleAccordion() {
            const isOpen = this.getAttribute('aria-expanded') === 'true';

            items.forEach((item) => {
                item.setAttribute('aria-expanded', 'false');
                item.querySelector('.icon').textContent = '+';
            });

            if (!isOpen) {
                this.setAttribute('aria-expanded', 'true');
                this.querySelector('.icon').textContent = '-';
            }
        }

        items.forEach((item) => item.addEventListener('click', toggleAccordion));
        // faq end
       


        $(document).ready(function () {
          $(window).scroll(function () {
              let scroll = $(window).scrollTop();
              if (scroll > 100) {
                  $('.service-header').addClass('animate__fadeInUp');
              }
          });
      });