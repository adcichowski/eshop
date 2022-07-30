import { Autoplay, Navigation } from "swiper";
import { SwiperProps } from "swiper/react";
type TypeCarrousel = "autoPlay" | "productsSwiper";
type SavedCarrouselsOptions = { [key in TypeCarrousel]: SwiperProps };

//Settings for main carrousel with images
const autoPlay: SwiperProps = {
  speed: 450,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  modules: [Navigation, Autoplay],
};
//Settings for carrousel with products
const productsSwiper: SwiperProps = {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },
  modules: [Navigation],
};
//If you wanna create new carrousel set settins for him
export const savedOptionsCarrousels: SavedCarrouselsOptions = {
  productsSwiper,
  autoPlay,
};
