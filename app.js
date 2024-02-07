"use strict";

const openMobileMenuBtn = document.querySelector(".device-menu");
const headerMenu = document.querySelector(".nav__mobile");

openMobileMenuBtn.addEventListener("click", () => {
  if (openMobileMenuBtn.classList.contains("open")) {
    openMobileMenuBtn.classList.remove("open");
    headerMenu.classList.remove("active");
  } else {
    headerMenu.classList.add("active");
    openMobileMenuBtn.classList.add("open");
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener("resize", function () {
  let screenWidth = window.innerWidth;

  if (screenWidth < 600) {
    swiper.params.spaceBetween = 10;
  } else {
    swiper.params.spaceBetween = 20;
  }

  swiper.update();
});
