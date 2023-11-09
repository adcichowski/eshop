import { Categories } from "components/Categories/Categories";
import { ProductCarrousel } from "components/ProductsCarrousel/components/ProductCarrousel/ProductCarrousel";
import { Separator } from "components/Separator/Separator";
import { getProductsByCategorySlug } from "lib";
import { getFavoriteProducts } from "lib/actions/favorite";
import { SIZE_PAGINATION_NUMBER } from "./Pagination/utils/utils";
import React from "react";
import { Pagination } from "./Pagination/Pagination";

export async function CategoryPage({
  categorySlug,
  currentPage = "1",
}: {
  categorySlug: string;
  currentPage: string | undefined;
}) {
  const skip = (Number(currentPage) - 1) * SIZE_PAGINATION_NUMBER;
  const { products, numberOfPages } = await getProductsByCategorySlug({
    slug: categorySlug,
    skip,
    first: SIZE_PAGINATION_NUMBER,
  });

  const favorites = await getFavoriteProducts();
  const updatedProducts = products.map((product) => ({
    ...product,
    favorite: Boolean(favorites?.products.find((v) => v.id === product.id)),
  }));

  if (!products.length) {
    throw new Error("Products not found");
  }
  return (
    <section className="mt-11 ml-5 grid max-w-6xl grid-cols-1 lg:grid-cols-3">
      <div className="row-span-3 mx-auto w-full max-w-[230px] hidden lg:block">
        <Categories selectedCategory={categorySlug} />
      </div>
      <section className="lg:col-start-2 lg:col-end-4">
        <h3 className="mx-4 mb-6 border-b-[1px] border-b-black pb-3 text-center text-2xl">
          Category name
        </h3>
        {updatedProducts?.length ? (
          <ul className="grid grid-cols-2 justify-center gap-2 md:grid-cols-3 md:gap-6">
            {updatedProducts.map((product) => (
              <li key={product.id} className="w-[202px] relative">
                <ProductCarrousel {...product} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center mt-8 text-lg">Not found any products</p>
        )}
      </section>
      <div className="col-span-2 w-full my-8">
        <Separator orientation="horizontal" className="w-full" />
        <Pagination
          pageSize={numberOfPages}
          checkedCurrentPage={Number(currentPage)}
        />
      </div>
    </section>
  );
}
