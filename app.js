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

const swiper = new Swiper(".swiper-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  slidesPerView: 3,
  slidesPerColumn: 1,
  grabCursor: true,
  freeMode: false,
  loop: false,
  mousewheel: false,
  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
