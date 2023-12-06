"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps } from "swiper/react";
import { Action } from "components/Action/Action";
import Image from "next/image";
import { useQueryRecentlyView } from "lib/tanstack";
import { RecentlyViewProductType } from "app/api/recently-view/route";
import clsx from "clsx";
const swiperSettings: SwiperProps = {
  draggable: true,
  freeMode: true,
  slidesPerView: 7,
  spaceBetween: 10,
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

      <div className="max-w-2xl w-full mt-5 flex">
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
      className="flex flex-col items-center justify-center gap-1 w-full h-full"
      aria-label={product.name}
    >
      <Action
        href={`/${product.category}/poster/${product.slug}`}
        as="link"
        className="text-sm hover:underline cursor-pointer hover:font-medium flex items-center justify-center"
      >
        <Image
          className={`max-h-[118.59px] border ${clsx(
            product.whiteFrame && "p-1",
          )}`}
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
