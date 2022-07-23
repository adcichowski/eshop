import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
export const Carrousel = () => {
  return (
    <div>
      <Swiper
        speed={450}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="my-6"
        modules={[Navigation, Autoplay]}
      >
        {["First", "Second", "Third"].map((room, i) => (
          <SwiperSlide key={room} className="min-w-screen aspect-video">
            <Image
              alt={`${room} room with posters`}
              layout="fill"
              src={`/carrousel/swiper-${i + 1}.jpg`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
