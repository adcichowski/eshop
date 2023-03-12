import { useQuery } from "@apollo/client";
import type { GetProductsQuery } from "generated/graphql";
import { GetProductsDocument } from "generated/graphql";
import Image from "next/image";
import { ProductsCarrousel } from "components/ProductsCarrousel/ProductsCarrousel";
import { Carrousel } from "components/Carrousel/Carrousel";
import { SwiperSlide } from "swiper/react";
import { settingsToEachCarrousel } from "components/Carrousel/constants";
import { ProductOffer } from "components/ProductOffer/ProductOffer";
import { RoomsCarrousel } from "views/home/components/RoomsCarrousel";
const Home = () => {
  const { loading, error, data } =
    useQuery<GetProductsQuery>(GetProductsDocument);
  // if (error || !data?.products) {
  //   return <p>{error?.message ?? "Problem to fetch products"}</p>;
  // }

  return (
    <div className="flex min-h-screen flex-col ">
      <RoomsCarrousel isLoading={loading} />
      <section aria-labelledby="bestsellers">
        <h2 className="m-8 text-4xl font-medium" id="bestsellers">
          Bestsellers
        </h2>
        <ProductsCarrousel />
      </section>
      {data?.products.map((product) => (
        <ProductOffer
          key={product.name}
          HeaderTag="h3"
          name={product.name}
          image={{
            src: product.images[0].url,
            alt: product.images[0].alt || product.name,
          }}
        />
      ))}
    </div>
  );
};

export default Home;
