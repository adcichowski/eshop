import { Categories } from "components/Categories/Categories";
import { ProductCarrousel } from "components/ProductsCarrousel/components/ProductCarrousel/ProductCarrousel";
import { getProductsByCategorySlug } from "lib";
import React from "react";

export async function CategoryPage({ categorySlug }: { categorySlug: string }) {
  const data = await getProductsByCategorySlug(categorySlug);
  return (
    <section className="mt-11 ml-5 grid max-w-6xl grid-cols-1 lg:grid-cols-3">
      <div className="row-span-3 mx-auto w-full max-w-[230px] hidden xl:block">
        <Categories />
      </div>
      <section className="lg:col-start-2 lg:col-end-4">
        <h3 className="mx-4 mb-6 border-b-[1px] border-b-black pb-3 text-center text-2xl">
          {data.name}
        </h3>
        {data.products.length ? (
          <ul className="grid grid-cols-2 justify-center gap-2 md:grid-cols-3 md:gap-6">
            {data.products.map((product) => (
              <li key={product.id} className="w-[202px] relative">
                <ProductCarrousel {...product} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center mt-8 text-lg">Not found any products</p>
        )}
      </section>
    </section>
  );
}
