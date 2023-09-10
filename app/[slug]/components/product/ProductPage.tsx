"use client";
// import { Categories } from "components/Categories/Categories";
import Image from "next/image";
import React from "react";
import { ProductAttributes } from "./components/ProductAttributes";
import { ProductDescription } from "./components/ProductDescription";
import { FavoriteInput } from "components/Inputs/FavoriteInput";
import { useInputAmountProduct } from "hooks/useInputAmountProduct";
import ProductQuantityInput from "./components/ProductQuantityInput";
import clsx from "clsx";
import { DiscountFrame } from "components/DiscountFrame/DiscountFrame";
import { Orientation } from "lib/hygraph/generated/graphql";

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
  const inputAmountProps = useInputAmountProduct();
  // const { selectedVariant, setSelectedVariant } = useSelectVariant({ product });

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

            <aside
              className={`mt-3 flex max-w-[377px] flex-col md:mt-0 md:ml-5  ${clsx(
                !product.attributes.sale && "gap-y-[7.2px]",
              )} text-xl`}
            >
              <div className="mb-[22px] self-start">
                <DiscountFrame sale={product.attributes.sale} size="big" />
              </div>

              {/* <ProductSelectVariant
                selectedVariant={selectedVariant}
                setSelectedVariant={setSelectedVariant}
                sale={product.sale}
                productVariants={product.variants}
              /> */}

              <ProductQuantityInput {...inputAmountProps} />

              <ProductAttributes {...product.attributes} />

              {/* <ProductPrice sale={product.sale} price={selectedVariant.price} /> */}

              <div className="mt-3 flex">
                <div className="h-4 w-4 bg-avaible-product bg-contain">
                  <span className="hidden" aria-hidden="true">
                    Available product
                  </span>
                </div>
                <div className="ml-[3px] text-xs font-normal">In store</div>
              </div>
              <span className="mt-4 text-xs">
                Delivery in 2-4 working days | Free delivery from 199zł
              </span>

              <div className="mt-4 flex items-stretch gap-1">
                {/* <Button
                  data-outside="false"
                  onClick={() => {
                    if (!selectedVariant) {
                    }
                    addProduct({
                      sale: product.sale,
                      whiteFrame: product.whiteFrame,
                      variant: {
                        width: selectedVariant.width,
                        height: selectedVariant.height,
                        id: selectedVariant.id,
                      },
                      id: product.id,
                      title: product.name,
                      price: selectedVariant.price,
                      image: product.images[0],
                      amount: Number(inputAmountProps.value),
                    });
                  }}
                  className="md:text-md text-md h-full w-full rounded-none px-12 py-5"
                >
                  To Cart
                </Button> */}
                <div className="relative cursor-pointer border-[1px] border-black p-4">
                  <FavoriteInput id={product.name} />
                </div>
              </div>
            </aside>

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
