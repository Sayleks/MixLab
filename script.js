// бургер меню
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("div").classList.toggle("open");
    document.querySelector("body").classList.toggle("body-scroll");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("blackOverId").addEventListener("click", function () {
    document.querySelector("div").classList.toggle("open");
    document.querySelector("body").classList.toggle("body-scroll");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("map-button").addEventListener("click", function () {
    document
      .getElementById("footer-map")
      .classList.toggle("footer-map-visible");
    document.querySelector("body").classList.toggle("body-scroll");
    document
      .getElementById("blackOver-two")
      .classList.toggle("blackOver-two-button");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("blackOver-two")
    .addEventListener("click", function () {
      document
        .getElementById("footer-map")
        .classList.toggle("footer-map-visible");
      document.querySelector("body").classList.toggle("body-scroll");
      document
        .getElementById("blackOver-two")
        .classList.toggle("blackOver-two-button");
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("button-close")
    .addEventListener("click", function () {
      document
        .getElementById("footer-map")
        .classList.toggle("footer-map-visible");
      document.querySelector("body").classList.toggle("body-scroll");
      document
        .getElementById("blackOver-two")
        .classList.toggle("blackOver-two-button");
    });
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    document.querySelector("div").classList.toggle("open");
    document.querySelector("body").classList.toggle("body-scroll");
    // e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// const swiper = new Swiper(".img-slider", {
//   navigation: {
//     nextEl: ".main-button-left",
//     prevEl: ".main-button-right",
//   },

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   // slidesPerView: 2,
//   spaceBetween: 11,
//   slidesPerView: 1.2, // this
//   centeredSlides: true,
//   initialSlides: 1,
//   loop: true,
// });

console.log(document.getElementById("theme-button"));

document.getElementById("theme-button").onclick = function(e){
  console.log("Click");
  document.getElementById("body").classList.toggle("dark-theme")
  document.querySelector(".header-links li a").classList.toggle("dark-theme")

}

