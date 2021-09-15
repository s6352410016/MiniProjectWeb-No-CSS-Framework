// hamburgermenu
$(document).ready(function () {
    $('.hamburger').on("click", function () {
        $(".nav-grid").toggleClass("open");
    });
});

function myFunction(x) {
    x.classList.toggle("change");
}

// typing effect
var typed = new Typed('#type', {
    // Waits 1000ms after typing "First"
    strings: [' Hotel In Bangkok Available Now.'],
    smartBackspace: true,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    fadeOut: true,
  });

