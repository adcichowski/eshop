import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import {
  ProductCarrousel,
  ProductCarrouselProps,
} from "./components/ProductCarrousel/ProductCarrousel";
export const ProductsCarrousel = ({
  products,
}: {
  products: ProductCarrouselProps[];
}) => {
  const settings: SwiperProps = {
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
  };
  return (
    <div>
      <Swiper className="my-8" {...settings}>
        {products.map((product) => (
          <SwiperSlide key={product.name}>
            <ProductCarrousel {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
