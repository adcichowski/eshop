"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps } from "swiper/react";

import { FreeMode } from "swiper/modules";
import { ProductCarrousel } from "./components/ProductCarrousel/ProductCarrousel";
import { getProducts } from "lib";

const swiperSettings: SwiperProps = {
  draggable: true,
  freeMode: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  modules: [FreeMode],
};
export const ProductsCarrousel = ({
  data,
}: {
  data: Awaited<ReturnType<typeof getProducts>>;
}) => {
  return (
    <Swiper {...swiperSettings}>
      {data.products.map((product) => (
        <SwiperSlide
          className="my-2 max-w-[140px] md:max-w-[202px]"
          key={product.name}
        >
          <ProductCarrousel
            {...product}
            price={product.variants[0].price}
            width={product.variants[0].width}
            height={product.variants[0].height}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
