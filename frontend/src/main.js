
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper(".slider-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".slider__pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".slider__btn-prev",
      nextEl: ".slider__btn-next",
    },
    breakpoints: {
      425: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });

  export default swiper;