import { useQuery } from "@apollo/client";
import type { GetProductsQuery } from "generated/graphql";
import { GetProductsDocument } from "generated/graphql";
import { ProductsCarrousel } from "components/ProductsCarrousel/ProductsCarrousel";
import { RoomsCarrousel } from "views/home/components/RoomsCarrousel";
import { PopularCategories } from "views/home/components/PopularCategories/PopularCategories";
const Home = () => {
  const { loading, error } = useQuery<GetProductsQuery>(GetProductsDocument);
  if (error) {
    return <p>{error?.message ?? "Problem to fetch products"}</p>;
  }

  return (
    <div className="flex min-h-screen flex-col ">
      {/* <RoomsCarrousel isLoading={loading} /> */}
      <PopularCategories />
      {/* <ProductsCarrousel
        id="bestsellers"
        className="mx-2 mb-8 xl:mx-48"
        Heading={<h2 className="m-8 text-center text-xl">Bestsellers</h2>}
      /> */}
    </div>
  );
};

export default Home;
