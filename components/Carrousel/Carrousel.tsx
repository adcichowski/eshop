import type { SwiperProps } from "swiper/react";
import { Swiper } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";

export const Carrousel = (
  props: SwiperProps & { readonly renderSwiperSlide: () => JSX.Element }
) => {
  const { renderSwiperSlide, ...swiperProps } = props;
  return (
    <div>
      <Swiper {...swiperProps}>{renderSwiperSlide()}</Swiper>
    </div>
  );
};
