import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode } from "swiper";
import { useGetProductsQuery } from "generated/graphql";
import { ProductCarrousel } from "./components/ProductCarrousel/ProductCarrousel";

type ProductsCarrouselProps = {
  id: string;
  Heading: JSX.Element;
  className: string;
};

const swiperSettings: SwiperProps = {
  draggable: true,
  freeMode: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  modules: [FreeMode],
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
      <Swiper {...swiperSettings}>
        {productsWithSmallestPrice.map((product) => (
          <SwiperSlide
            className=" max-w-[140px] md:max-w-[202px]"
            key={product.name}
          >
            <ProductCarrousel
              {...product}
              width={product.variants[0].width}
              height={product.variants[0].height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
