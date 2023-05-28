import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { SpinIcon } from "components/Skeleton/SpinIcon";
import { Autoplay, Navigation } from "swiper";

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

export function RoomsCarrousel({ isLoading }: { isLoading: boolean }) {
  if (isLoading) {
    return (
      <div className="flex aspect-video items-center justify-center">
        <SpinIcon size="big" />
      </div>
    );
  }
  return (
    <div>
      <Swiper
        speed={650}
        navigation={true}
        autoplay={{ delay: 3500, disableOnInteraction: true }}
        modules={[Navigation, Autoplay]}
      >
        {ROOMS_IMAGES.map((image, i) => (
          <SwiperSlide
            aria-label="gallery"
            className="min-w-screen aspect-video"
            key={image.alt}
          >
            <Image priority={!i} fill {...image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
