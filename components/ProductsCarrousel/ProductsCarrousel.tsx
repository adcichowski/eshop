import { Swiper, SwiperSlide } from "swiper/react";

import type { SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Pagination } from "swiper";
import { useGetProductsQuery } from "generated/graphql";
import { ProductCarrousel } from "./components/ProductCarrousel/ProductCarrousel";

type ProductsCarrouselProps = {
  id: string;
  Heading: JSX.Element;
  className: string;
  overwriteSwiperSettings?: SwiperProps;
};

const settings = (overwriteSettings?: SwiperProps): SwiperProps => ({
  draggable: true,
  freeMode: true,
  slidesPerView: 2.3,
  breakpoints: {
    400: {
      slidesPerView: 2,
    },
    650: {
      slidesPerView: 2.3,
    },
    810: {
      slidesPerView: 3.3,
    },
    1050: {
      slidesPerView: 4.3,
    },
    1300: {
      slidesPerView: 5.3,
    },
  },
  modules: [FreeMode, Pagination],
  pagination: {
    clickable: true,
  },
  ...overwriteSettings,
});

export const ProductsCarrousel = ({
  id,
  Heading,
  className,
  overwriteSwiperSettings,
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
      <Swiper {...settings(overwriteSwiperSettings)}>
        {productsWithSmallestPrice.map((product) => (
          <SwiperSlide key={product.name} className="px-5">
            <ProductCarrousel {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
