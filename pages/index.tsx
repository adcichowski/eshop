import { useQuery } from "@apollo/client";
import { GetProductsDocument, GetProductsQuery } from "generated/graphql";
import Image from "next/image";
import { ProductsCarrousel } from "components/ProductsCarrousel/ProductsCarrousel";
import { Carrousel } from "components/Carrousel/Carrousel";
import { SwiperSlide } from "swiper/react";
import { settingsToEachCarrousel } from "components/Carrousel/constants";
const Home = () => {
  const { loading, error, data } =
    useQuery<GetProductsQuery>(GetProductsDocument);
  if (error || !data?.products) {
    return <p>{error?.message ?? "Problem to fetch products"}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <Carrousel
        {...settingsToEachCarrousel.mainRoomsCarrousel}
        renderSwiperSlide={() => (
          <>
            {["first", "second", "third"].map((el, i) => (
              <SwiperSlide
                aria-label="gallery"
                className="min-w-screen aspect-video"
                key={el}
              >
                <Image
                  priority={!i}
                  alt={`${el} room with posters`}
                  layout="fill"
                  src={`/carrousel/swiper-${i + 1}.jpg`}
                />
              </SwiperSlide>
            ))}
          </>
        )}
      />
      <section aria-labelledby="bestsellers">
        <h2 className="text-4xl m-8 font-medium" id="bestsellers">
          Bestsellers
        </h2>
        <ProductsCarrousel products={data.products} />
      </section>
    </div>
  );
};

export default Home;
