import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
export const Carrousel = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]}>
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
    </>
  );
};
