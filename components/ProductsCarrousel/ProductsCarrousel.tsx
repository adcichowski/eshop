"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps } from "swiper/react";

import { FreeMode } from "swiper/modules";
import { ProductCarrousel } from "./components/ProductCarrousel/ProductCarrousel";
import { ProductCarouselFragment } from "lib/hygraph/generated/graphql";

const swiperSettings: SwiperProps = {
  draggable: true,
  freeMode: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  modules: [FreeMode],
};
export const ProductsCarrousel = ({
  products,
}: {
  products: ProductCarouselFragment[];
}) => {
  return (
    <Swiper {...swiperSettings}>
      {products.map((product) => (
        <SwiperSlide
          className="my-2 max-w-[140px] md:max-w-[202px]"
          key={product.name}
        >
          <ProductCarrousel {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
