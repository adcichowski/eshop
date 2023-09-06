import React from "react";

// import { ProductsCarrousel } from "components/ProductsCarrousel/ProductsCarrousel";
// import { RoomsCarrousel } from "views/home/components/RoomsCarrousel";
import { PopularCategories } from "views/home/components/PopularCategories/PopularCategories";
const Home = async () => {
  return (
    <div className="flex min-h-screen flex-col ">
      {/* <RoomsCarrousel /> */}
      <PopularCategories />
      {/* <ProductsCarrousel
        id="bestsellers"
        className="mx-2 my-5"
        Heading={<h2 className="my-2 text-center text-xl">Bestsellers</h2>}
      /> */}
    </div>
  );
};

export default Home;
