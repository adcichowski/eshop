import { Swiper, SwiperSlide } from "swiper/react";

import type { SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useGetProductsQuery } from "generated/graphql";
import { ProductCarrousel } from "./components/ProductCarrousel/ProductCarrousel";

type ProductsCarrouselProps = {
  id: string;
  Heading: JSX.Element;
  className: string;
};

const settings: SwiperProps = {
  navigation: true,
  slidesPerView: 2,
  breakpoints: {
    300: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    },
    1800: {
      slidesPerView: 7,
    },
  },
  pagination: {
    clickable: true,
  },

  modules: [Navigation],
};

export const ProductsCarrousel = ({
  id,
  Heading,
  className,
}: ProductsCarrouselProps) => {
  const { data } = useGetProductsQuery();
  if (!data) return <></>;

  const productsWithSmallestPrice = data.products.map((product) => ({
    ...product,
    price: Math.min(...product.variants.map(({ price }) => price)),
  }));
  return (
    <section id={id} className={className}>
      {Heading}
      <Swiper {...settings}>
        {productsWithSmallestPrice.map((product) => (
          <SwiperSlide key={product.name} className={"shrink basis-64"}>
            <ProductCarrousel {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
