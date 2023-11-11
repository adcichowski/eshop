"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Action } from "components/Action/Action";
import Image from "next/image";
import { useQueryRecentlyView } from "lib/tanstack";
import { RecentlyViewProductType } from "app/api/recently-view/route";

const swiperSettings: SwiperProps = {
  draggable: true,
  freeMode: true,
  slidesPerView: 7,
  spaceBetween: 10,
  centeredSlides: true,
  modules: [FreeMode],
};

export const RecentlyView = () => {
  const { data } = useQueryRecentlyView();
  if (!data?.products?.length) return <></>;
  return (
    <article
      aria-labelledby="recentlyView"
      className="w-full flex flex-col items-center mt-3"
    >
      <h3 id="recentlyView" className="md:text-xl text-lg font-medium">
        Recently View Products
      </h3>

      <div className="max-w-2xl w-full mt-5">
        <Swiper {...swiperSettings}>
          {data.products.map((product) => (
            <SwiperSlide key={product.name}>
              <RecentlyViewProduct {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  );
};

const RecentlyViewProduct = (product: RecentlyViewProductType) => {
  return (
    <article
      className="flex flex-col items-center gap-1 w-full"
      aria-label={product.name}
    >
      <Action
        href={`/${product.category}/poster/${product.slug}`}
        as="link"
        className="text-sm hover:underline cursor-pointer hover:font-medium flex items-center justify-center"
      >
        <Image
          width={100}
          aria-describedby={product.name}
          height={120}
          alt={product.name}
          src={product.image}
        />
      </Action>
    </article>
  );
};