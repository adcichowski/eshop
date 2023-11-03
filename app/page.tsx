import { ProductsCarrouselServer } from "components/ProductsCarrousel/ProductsCarrouselServer";
import React from "react";
import { PopularCategories } from "views/home/components/PopularCategories/PopularCategories";
import { RoomsCarrousel } from "views/home/components/RoomsCarrousel";
const Home = async () => {
  return (
    <div className="flex flex-col">
      <RoomsCarrousel />
      <ProductsCarrouselServer
        id="bestsellers"
        className="mx-2 my-5"
        Heading={<h2 className="my-2 text-center text-xl">Bestsellers</h2>}
      />
      <PopularCategories />
    </div>
  );
};

export default Home;
