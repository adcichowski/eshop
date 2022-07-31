import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper";

export const RoomsCarrousel = ({ ...props }: { props?: SwiperProps }) => {
  const settings = {
    speed: 450,
    navigation: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    modules: [Navigation, Autoplay],
  };
  return (
    <div>
      <Swiper {...settings} {...props}>
        {["first", "second", "third"].map((el, i) => (
          <SwiperSlide className="min-w-screen aspect-video" key={el}>
            <Image
              priority={i === 1}
              alt={`${el} room with posters`}
              layout="fill"
              src={`/carrousel/swiper-${i + 1}.jpg`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
