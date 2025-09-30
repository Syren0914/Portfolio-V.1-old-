'use strict';
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


document.addEventListener('DOMContentLoaded', function() {
    var typingEffect = new Typed(".typedText", {
      strings: ["Frontend Developer", "Backend Developer", "ML Engineer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
    });
  });


