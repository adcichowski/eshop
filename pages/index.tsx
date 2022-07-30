import { useQuery } from "@apollo/client";
import "swiper/css";
import "swiper/css/navigation";
import { Carrousel } from "components/Carrousel/Carrousel";
import { headerCategories } from "components/Header/constants";
import { GetProductsDocument, GetProductsQuery } from "generated/graphql";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { SwiperProduct } from "components/SwiperProduct/SwiperProduct";
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
        typeCarrousel="autoPlay"
        body={["first", "second", "third"].map((el, i) => (
          <SwiperSlide className="min-w-screen aspect-video" key={el}>
            <Image
              priority={i === 1}
              alt={`${el} room with posters`}
              layout="fill"
              src={`/carrousel/swiper-${i + 1}.jpg`}
            />
          </SwiperSlide>
        ))}
      />
      <section aria-labelledby="bestsellers">
        <h2 className="text-lg font-medium" id="bestsellers">
          Bestsellers
        </h2>
        <Carrousel
          typeCarrousel="productsSwiper"
          body={data?.products.map((product) => (
            <SwiperSlide
              className="min-w-screen aspect-video"
              key={product.name}
            >
              <SwiperProduct {...product} />
            </SwiperSlide>
          ))}
        />
      </section>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;

const ListCategories = () => (
  <ul
    className="uppercase flex bg-black text-white font-medium gap-4 col-span-3 justify-center
p-2 text-sm md:text-base"
    aria-label="poster categories"
  >
    {headerCategories.map((category) => (
      <li key={category}>
        <Link href={`/${category}`} passHref>
          <a>{category}</a>
        </Link>
      </li>
    ))}
  </ul>
);
