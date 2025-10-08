import Swiper from "swiper";
import { Navigation, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

// swiper1
const swiper1 = new Swiper(".swiper1", {
  // configure Swiper to use modules
  modules: [Navigation],
  // centeredSlides: false,
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  spaceBetween: 24,
  breakpoints: {
    992: {
      centeredSlides: false,
      loop: true,
      slidesPerView: "5",
    },
    576: {
      enabled: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "2.5",
    },
    0: {
      enabled: false,
    },
  },
});

// swiper2
const swiper2 = new Swiper(".swiper2", {
  modules: [Pagination, Grid],
  pagination: {
    el: ".swiper2-pagination",
  },
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    767: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
  },
});

// swiper3
const swiper3 = new Swiper(".swiper3", {
  // configure Swiper to use modules
  modules: [Navigation],
  // centeredSlides: false,
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  spaceBetween: 24,
  breakpoints: {
    992: {
      centeredSlides: false,
      loop: true,
      slidesPerView: "5",
    },
    576: {
      enabled: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "2.5",
    },
  },
});
