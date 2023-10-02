"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const ROOMS_IMAGES: { src: string; alt: string }[] = [
  { alt: "Beige room with mountain posters", src: "/carrousel/swiper-1.jpg" },
  {
    alt: "Posters with deers, inside in brown walls room",
    src: "/carrousel/swiper-2.jpg",
  },
  {
    alt: "Bright rooms with clearly and light posters",
    src: "/carrousel/swiper-3.jpg",
  },
];

export function RoomsCarrousel() {
  return (
    <div>
      <Swiper
        className="aspect-video min-w-screen"
        speed={650}
        navigation={true}
        autoplay={{ delay: 3500, disableOnInteraction: true }}
        modules={[Navigation, Autoplay]}
      >
        {ROOMS_IMAGES.map((image, i) => (
          <SwiperSlide aria-label="gallery" key={image.alt}>
            <Image priority={!i} fill {...image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
