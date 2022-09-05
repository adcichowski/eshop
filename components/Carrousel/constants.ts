import { Autoplay, Navigation } from "swiper";

export const settingsToEachCarrousel = {
  mainRoomsCarrousel: {
    speed: 450,
    navigation: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    modules: [Navigation, Autoplay],
  },

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
