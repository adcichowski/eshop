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
import { useInputAmountProduct } from "hooks/useInputAmountProduct";
import { ProductSale } from "./components/ProductSale";
import ProductQuantityInput from "./components/ProductQuantityInput";

export const ProductPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
  const inputAmountProps = useInputAmountProduct();
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
      <div className="grid grid-cols-3 pt-3 ">
        <Categories />

        <div className="col-start-2 col-end-4 max-w-3xl text-[32px]">
          <section className="grid grid-cols-2">
            <h2 className="col-span-2 mb-5 max-w-md text-3xl">
              {product.name}
            </h2>

            <Image
              width={397.36}
              height={585.43}
              alt={product?.name}
              src={product?.images[0].url || ""}
            />

            <aside className="ml-5 flex max-w-[377px] flex-col text-xl">
              <ProductSale sale={product.sale} />
              <div>
                <label className="flex cursor-pointer items-center">
                  <span className="w-24 text-base">Size:</span>
                  <ProductSelectVariant
                    selectedVariant={selectedVariant}
                    setSelectedVariant={setSelectedVariant}
                    sale={product.sale}
                    productVariants={productVariants}
                  />
                </label>

                <ProductQuantityInput {...inputAmountProps} />
              </div>

              <div>
                <ProductAttributes {...productAttributes} />
                <ProductPrice
                  sale={product.sale}
                  price={selectedVariant.price}
                />
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
              </div>
              <div className="mt-4 flex gap-1">
                <Button
                  data-outside="false"
                  onClick={() => {
                    addProduct({
                      id: selectedVariant.id,
                      title: product.name,
                      price: selectedVariant.price,
                      image: product.images[0],
                      amount: Number(inputAmountProps.value),
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
            </aside>

            <ProductDescription productDescription={product.description} />
          </section>

          <ProductsCarrousel
            className="mt-[50px] w-full"
            id="othersProduct"
            Heading={<h3 className="mb-3 text-xl">Others buy also</h3>}
          />

          <ProductReviews productSlug={product.slug} />

          <ProductsCarrousel
            className="mt-[50px] w-full"
            id="othersProduct"
            Heading={
              <h3 className="mb-3 text-xl">
                Popular products in this category
              </h3>
            }
          />
        </div>
      </div>

      <footer>Footer</footer>
    </div>
  );
};
