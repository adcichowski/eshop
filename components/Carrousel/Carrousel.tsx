import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";

import { savedOptionsCarrousels } from "./typeCarrousels";

export const Carrousel = ({
  typeCarrousel,
  body,
  ...props
}: {
  typeCarrousel: keyof typeof savedOptionsCarrousels;
  body: React.ReactElement[];
  props?: SwiperProps;
}) => {
  return (
    <div>
      <Swiper {...savedOptionsCarrousels[typeCarrousel]} {...props}>
        {body}
      </Swiper>
    </div>
  );
};
