import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import type { SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useGetProductsQuery } from "generated/graphql";
import { ProductCarrousel } from "./components/ProductCarrousel/ProductCarrousel";

export const ProductsCarrousel = () => {
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
  const { data } = useGetProductsQuery();
  if (!data) return <></>;

  const productsWithSmallestPrice = data.products.map((product) => ({
    ...product,
    price: Math.min(...product.variants.map(({ price }) => price)),
  }));

  return (
    <div>
      <Swiper className="my-8" {...settings}>
        {productsWithSmallestPrice.map((product) => (
          <SwiperSlide key={product.name}>
            <ProductCarrousel {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
