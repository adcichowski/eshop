import { Navigation } from "swiper";

export const settingsToEachCarrousel = {
  productsCarrousel: {
    navigation: true,
    slidesPerView: 2,
    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1800: {
        slidesPerView: 3,
      },
    },
    pagination: {
      clickable: true,
    },

    modules: [Navigation],
  },
};
