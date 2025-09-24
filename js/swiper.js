// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // centeredSlides: false,
  // loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },

  spaceBetween: 24,
  breakpoints: {
    992: {
      centeredSlides: false,
      loop: true,
      slidesPerView: "5",
    },
    576: {
      centeredSlides: true,
      loop: true,
      slidesPerView: "2.5",
    },
    0: {
      centeredSlides: true,
      loop: false,
      slidesPerView: "1.2",
    },
  },
});
