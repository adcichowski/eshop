import { useQuery } from "@apollo/client";
import { headerCategories } from "components/Header/constants";
import { GetProductsDocument, GetProductsQuery } from "generated/graphql";
import Link from "next/link";
import Image from "next/image";
import { ProductsCarrousel } from "components/ProductsCarrousel/ProductsCarrousel";
import { Carrousel } from "components/Carrousel/Carrousel";
import { SwiperSlide } from "swiper/react";
import { settingsToEachCarrousel } from "components/Carrousel/constants";
const Home = () => {
  const { loading, error, data } =
    useQuery<GetProductsQuery>(GetProductsDocument);
  if (error || !data?.products) {
    return <h1>{error?.message ?? "Problem to fetch products"}</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <ListCategories />
      <Carrousel
        {...settingsToEachCarrousel.mainRoomsCarrousel}
        renderSwiperSlide={() => (
          <>
            {["first", "second", "third"].map((el, i) => (
              <SwiperSlide className="min-w-screen aspect-video" key={el}>
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

const ListCategories = () => (
  <ul
    className="hidden uppercase sm:flex bg-black text-white font-medium gap-4 col-span-3 justify-center
p-2 text-sm md:text-base"
    aria-label="poster categories"
  >
    {headerCategories.map((category) => (
      <li key={category}>
        <Link href={`/${category}`} passHref>
          {category}
        </Link>
      </li>
    ))}
  </ul>
);
