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
import { toast } from "react-toastify";
import { useToastContext } from "context/ToastContext/ToastContext";

export const ProductPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { toast } = useToastContext();

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

        <div className="mt-10 text-[32px] col-span-2 max-w-3xl">
          <section className=" grid grid-cols-2">
            <h2 className="max-w-md text-3xl mb-5 col-span-2">
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
            <aside className="text-xl flex flex-col max-w-[377px] ml-5">
              <ProductSale sale={product.sale} />
              <div className="flex flex-col gap-3">
                <label className="flex items-center cursor-pointer">
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
                      className="p-2 bg-white border-[0.5px] border-black px-3 w-12 text-center h-10 cursor-pointer"
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
                <div className="flex mt-3">
                  <div className="w-4 h-4 bg-avaible-product bg-contain"></div>
                  <div className="text-xs ml-[3px] font-normal">In store</div>
                </div>
                <span className="text-xs mt-4">
                  Delivery in 2-4 working days | Free delivery from 199zł
                </span>
                <div className="flex mt-4 gap-1">
                  <Button
                    onClick={() => {
                      toast.success("Great you are add product!");
                      addProduct({
                        id: selectedVariant.id,
                        title: product.name,
                        price: selectedVariant.price,
                        image: product.images[0],
                        amount: 1,
                      });
                    }}
                    className="px-12 w-full rounded-none py-5 h-full text-lg sm:text-sm"
                  >
                    To Cart
                  </Button>
                  <div className="border-[1px] cursor-pointer border-black p-4 flex justify-center items-center relative">
                    <FavoriteInput id={product.name} />
                  </div>
                </div>
              </div>
            </aside>

            <ProductDescription productDescription={product.description} />
          </section>
          <section
            aria-describedby="othersBuyAlso"
            className="w-full col-span-2 mt-[50px]"
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
    <div className="mb-[22px] bg-black text-center px-8 py-2 font-semibold text-white self-start">
      {`-${sale}%`}
    </div>
  ) : (
    <></>
  );
