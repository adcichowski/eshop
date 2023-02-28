import { Button } from "components/Button/Button";
import { Categories } from "components/Categories/Categories";
import { ProductsCarrousel } from "components/ProductsCarrousel/ProductsCarrousel";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { ProductAttributes } from "./components/ProductAttributes";
import { ProductDescription } from "./components/ProductDescription";
import { ProductPrice } from "./components/ProductPrice";

import type { InferGetStaticPropsType } from "next";
import type { getStaticProps } from "pages/[productSlug]";
import { ProductSelectVariant } from "./components/ProductSelectVariant";
import { FavoriteInput } from "components/Inputs/FavoriteInput";
import type { ProductVariant } from "./types";
import { ProductReviews } from "./components/ProductReviews/Reviews";
import { useCartContext } from "context/CartContext/CartContext";
import { useRouter } from "next/router";
import { useToastContext } from "context/ToastContext/ToastContext";

export const ProductPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { addToast } = useToastContext();

  const { addProduct } = useCartContext();
  const productVariants = product?.variants.map(({ size, id, price }) => ({
    price,
    id,
    width: size?.width,
    height: size?.height,
  }));
  const [selectedVariant, setSelectedVariant] = useState<
    ProductVariant | undefined
  >(undefined);
  const router = useRouter();
  useEffect(() => {
    setSelectedVariant(
      productVariants?.length ? productVariants[0] : undefined
    );
  }, [router.asPath]);
  if (!product || !selectedVariant || !productVariants)
    return <h2>Product not found!</h2>;

  const { finish, color, paperWeight, orientation, whiteFrame } = product;

  const productAttributes = {
    category: product.categories[0].name,
    paperWeight,
    color,
    finish,
    orientation,
    whiteFrame,
  };
  return (
    <div className="flex flex-col">
      <main className="grid grid-cols-3">
        <Categories />

        <div className="col-span-2 mt-10 max-w-3xl text-[32px]">
          <section className=" grid grid-cols-2">
            <h2 className="col-span-2 mb-5 max-w-md text-3xl">
              {product.name}
            </h2>

            <div>
              <Image
                width={392.36}
                height={581.43}
                alt={product?.name}
                src={product?.images[0].url || ""}
              />
            </div>
            <aside className="ml-5 flex max-w-[377px] flex-col text-xl">
              <ProductSale sale={product.sale} />
              <div className="flex flex-col gap-3">
                <label className="flex cursor-pointer items-center">
                  <span className="w-24 text-base">Size:</span>
                  <ProductSelectVariant
                    selectedVariant={selectedVariant}
                    setSelectedVariant={setSelectedVariant}
                    sale={product.sale}
                    productVariants={productVariants}
                  />
                </label>

                <label className="flex items-center">
                  <span className="w-24 text-base">Quantity:</span>
                  <div>
                    <input
                      className="h-10 w-12 cursor-pointer border-[0.5px] border-black bg-white p-2 px-3 text-center"
                      type="text"
                      min={1}
                    />
                    <span className="ml-1">szt</span>
                  </div>
                </label>
              </div>

              <div>
                <ProductAttributes {...productAttributes} />
                <ProductPrice
                  sale={product.sale}
                  price={selectedVariant.price}
                />
                <div className="mt-3 flex">
                  <div className="h-4 w-4 bg-avaible-product bg-contain"></div>
                  <div className="ml-[3px] text-xs font-normal">In store</div>
                </div>
                <span className="mt-4 text-xs">
                  Delivery in 2-4 working days | Free delivery from 199zł
                </span>
                <div className="mt-4 flex gap-1">
                  <Button
                    onClick={() => {
                      addProduct({
                        id: selectedVariant.id,
                        title: product.name,
                        price: selectedVariant.price,
                        image: product.images[0],
                        amount: 1,
                      });
                    }}
                    className="h-full w-full rounded-none px-12 py-5 text-lg sm:text-sm"
                  >
                    To Cart
                  </Button>
                  <div className="relative flex cursor-pointer items-center justify-center border-[1px] border-black p-4">
                    <FavoriteInput id={product.name} />
                  </div>
                </div>
              </div>
            </aside>

            <ProductDescription productDescription={product.description} />
          </section>
          <section
            aria-describedby="othersBuyAlso"
            className="col-span-2 mt-[50px] w-full"
          >
            <h3 id="othersBuyAlso" className="text-xl">
              Others buy also:
            </h3>
            <ProductsCarrousel />
          </section>

          <ProductReviews />
        </div>
      </main>

      <footer>Footer</footer>
    </div>
  );
};

const ProductSale = ({ sale }: { readonly sale: string | undefined | null }) =>
  sale ? (
    <div className="mb-[22px] self-start bg-black px-8 py-2 text-center font-semibold text-white">
      {`-${sale}%`}
    </div>
  ) : (
    <></>
  );
