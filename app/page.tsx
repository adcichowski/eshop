import { RecentlyView } from "components/Footer/components/RecentlyView/RecentlyView";
import { ProductsCarrouselServer } from "components/ProductsCarrousel/ProductsCarrouselServer";
import React from "react";
import { PopularCategories } from "views/home/components/PopularCategories/PopularCategories";
import { RoomsCarrousel } from "views/home/components/RoomsCarrousel";
const Home = () => {
  return (
    <div className="flex flex-col">
      <RoomsCarrousel />
      <ProductsCarrouselServer
        categorySlug="bestsellers"
        id="bestsellers"
        className="mx-2 my-5"
        Heading={<h2 className="my-2 text-center text-xl">Bestsellers</h2>}
      />
      <PopularCategories />
      <RecentlyView />
    </div>
  );
};

export default Home;
