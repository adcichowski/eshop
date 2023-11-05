import { Categories } from "components/Categories/Categories";
import { ProductCarrousel } from "components/ProductsCarrousel/components/ProductCarrousel/ProductCarrousel";
import { Separator } from "components/Separator/Separator";
import { getProductsByCategorySlug } from "lib";
import { getFavoriteProducts } from "lib/actions/favorite";

import React from "react";
import { Pagination } from "./Pagination/Pagination";

export async function CategoryPage({
  categorySlug,
  currentPage = "1",
}: {
  categorySlug: string;
  currentPage: string | undefined;
}) {
  const checkedCurrentPage =
    Number(currentPage) < 1
      ? 1
      : Number(currentPage) > 10
      ? 10
      : Number(currentPage);

  const data = await getProductsByCategorySlug(categorySlug);
  const favorites = await getFavoriteProducts();
  const updatedProducts = data.products.map((product) => ({
    ...product,
    favorite: Boolean(favorites?.products.find((v) => v.id === product.id)),
  }));
  return (
    <section className="mt-11 ml-5 grid max-w-6xl grid-cols-1 lg:grid-cols-3">
      <div className="row-span-3 mx-auto w-full max-w-[230px] hidden lg:block">
        <Categories selectedCategory={categorySlug} />
      </div>
      <section className="lg:col-start-2 lg:col-end-4">
        <h3 className="mx-4 mb-6 border-b-[1px] border-b-black pb-3 text-center text-2xl">
          {data.name}
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
        <Pagination pageSize={10} checkedCurrentPage={checkedCurrentPage} />
      </div>
    </section>
  );
}
