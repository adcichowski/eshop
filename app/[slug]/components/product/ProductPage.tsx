"use client";
// import { Categories } from "components/Categories/Categories";
import Image from "next/image";
import React from "react";
import { ProductAttributes } from "./components/ProductInfos/components/ProductAttributes";
import { ProductDescription } from "./components/ProductDescription";
import { FavoriteInput } from "components/Inputs/FavoriteInput";
import { useInputAmountProduct } from "hooks/useInputAmountProduct";
import ProductQuantityInput from "./components/ProductInfos/components/ProductQuantityInput";
import clsx from "clsx";
import { DiscountFrame } from "components/DiscountFrame/DiscountFrame";
import { Orientation } from "lib/hygraph/generated/graphql";
import { ProductInfos } from "./components/ProductInfos/ProductInfos";

export type ProductPageProps = {
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
  id: string;
  description: string;
  name: string;
  image: string;
};

export const ProductPage = ({ product }: { product: ProductPageProps }) => {
  return (
    <div className="relative flex flex-col">
      <div className="mx-2 grid grid-cols-1 pt-2 md:justify-items-center md:pt-6 xl:grid-cols-3">
        {/* <Categories className="hidden xl:block" /> */}

        <div className="text-[32px] md:max-w-3xl xl:col-start-2 xl:col-end-4">
          <section className="ml-4 md:grid md:grid-cols-2 xl:m-0">
            <h2 className="mb-2 text-3xl md:col-span-2 md:mb-0">
              {product.name}
            </h2>

            <Image
              width={497.36}
              height={685.43}
              className={`h-full w-full max-w-xs object-contain md:max-w-xl ${
                product.attributes.orientation === Orientation.Horizontal &&
                "my-auto h-auto"
              }`}
              alt={product.name}
              src={product.image}
            />
            <ProductInfos product={product} />
            {/* <ProductDescription description={product.description} /> */}
          </section>
        </div>
        <div className="col-span-3 w-full max-w-full">
          {/* <ProductsCarrouselServer
            className="mt-[50px]"
            id="othersProduct"
            Heading={<h3 className="mb-3 text-xl">Others buy also</h3>}
          /> */}

          {/* <ProductReviews productSlug={product.slug} /> */}

          {/* <ProductsCarrouselServer
            className=" mt-[50px]"
            id="othersProduct"
            Heading={
              <h3 className="mb-3 text-xl">
                Popular products in this category
              </h3>
            }
          /> */}
        </div>
      </div>
      <footer>Footer</footer>
    </div>
  );
};
