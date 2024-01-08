import React from "react";
import { Orientation } from "lib/hygraph/generated/graphql";
import { ProductInfos } from "./components/ProductInfos/ProductInfos";
import { Categories } from "components/Categories/Categories";
import { ProductsCarrouselServer } from "components/ProductsCarrousel/ProductsCarrouselServer";
import { ProductReviews } from "./components/ProductReviews/ProductReviews";
import { ProductDescription } from "./components/ProductDescription";
import { RecentlyView } from "components/Footer/components/RecentlyView/RecentlyView";
import { RecentlyViewUpdater } from "components/Footer/components/RecentlyView/RecentlyViewUpdater";
import ProductImage from "./components/ProductImage";

export type ProductPageProps = {
  favorite: boolean;
  variants: {
    width: number;
    height: number;
    id: string;
    price: number;
  }[];
  attributes: {
    sale: number | null | undefined;
    category: string;
    paperWeight: number;
    color: string;
    finish: string;
    orientation: Orientation;
    whiteFrame: boolean;
  };
  slug: string;
  id: string;
  description: string;
  name: string;
  image: string;
};

export const ProductPage = ({ product }: { product: ProductPageProps }) => {
  return (
    <div className="relative flex flex-col">
      <RecentlyViewUpdater
        product={{
          ...product,
          category: product.attributes.category,
          whiteFrame: product.attributes.whiteFrame,
          orientation: product.attributes.orientation,
        }}
      />
      <div className="mx-2 grid grid-cols-1 pt-2 md:justify-items-center md:pt-6 xl:grid-cols-3">
        <div className="hidden xl:block min-w-[240px]">
          <Categories />
        </div>
        <div className="text-[32px] md:max-w-3xl xl:col-start-2 xl:col-end-4">
          <section className="ml-4 md:grid md:grid-cols-2 xl:m-0">
            <h2 className="mb-2 text-3xl md:col-span-2 md:mb-0">
              {product.name}
            </h2>

            <ProductImage
              src={product.image}
              name={product.name}
              whiteFrame={product.attributes.whiteFrame}
              orientation={product.attributes.orientation}
            />
            <ProductInfos product={product} />
            <ProductDescription description={product.description} />
          </section>
        </div>
        <div className="col-span-3 w-full max-w-full">
          <ProductsCarrouselServer
            categorySlug={product.attributes.category.toLowerCase()}
            className="mt-[50px]"
            productId={product.id}
            id="othersProduct"
            Heading={
              <h3 className="mb-3 text-xl">
                Popular products in this category
              </h3>
            }
          />

          <ProductReviews productSlug={product.slug} />

          <ProductsCarrouselServer
            categorySlug={"bestsellers"}
            productId={product.id}
            className="mt-[50px]"
            id="othersProduct"
            Heading={<h3 className="mb-3 text-xl">Others buy also</h3>}
          />
          <RecentlyView />
        </div>
      </div>
    </div>
  );
};
