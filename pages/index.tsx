import { useQuery } from "@apollo/client";
import type { GetProductsQuery } from "generated/graphql";
import { GetProductsDocument } from "generated/graphql";
import { ProductsCarrousel } from "components/ProductsCarrousel/ProductsCarrousel";
import { ProductOffer } from "components/ProductOffer/ProductOffer";
import { RoomsCarrousel } from "views/home/components/RoomsCarrousel";
const Home = () => {
  const { loading, error, data } =
    useQuery<GetProductsQuery>(GetProductsDocument);
  if (error) {
    return <p>{error?.message ?? "Problem to fetch products"}</p>;
  }

  return (
    <div className="flex min-h-screen flex-col ">
      <RoomsCarrousel isLoading={loading} />
      <section className="mb-8" aria-labelledby="bestsellers">
        <h2 className="m-8 text-4xl font-medium" id="bestsellers">
          Bestsellers
        </h2>
        <ProductsCarrousel />
      </section>
    </div>
  );
};

export default Home;
