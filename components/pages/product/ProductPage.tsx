import { Button } from "components/Button/Button";
import { Categories } from "components/Categories/Categories";
import { ProductsCarrousel } from "components/ProductsCarrousel/ProductsCarrousel";
import Image from "next/image";
import { useState } from "react";

import Heart from "components/assets/heart.svg";

import { ProductAttributes } from "./components/ProductAttributes";
import { ProductDescription } from "./components/ProductDescription";
import { ProductPrice } from "./components/ProductPrice";

import type { StateSelect } from "./types";
import type { InferGetStaticPropsType } from "next";
import type { getStaticProps } from "pages/[productSlug]";
import { SelectVariant } from "./components/SelectVariant";

export const ProductPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!product) return <h2>Product not found!</h2>;

  const { finish, color, paperWeight, orientation, whiteFrame, variants } =
    product;

  const productVariants = variants.map(({ size, id, price }) => ({
    price,
    id,
    width: size?.width,
    height: size?.height,
  }));

  const [selectedVariant, setSelectedVariant] = useState<StateSelect>(
    productVariants[0]
  );

  const productDescription = {
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
        <section className="mt-10 text-[32px] col-span-2 grid grid-cols-2 gap-5 max-w-3xl">
          <h2 className="max-w-md text-3xl mb-5 col-span-2">{product.name}</h2>

          <div>
            <Image
              width={392.36}
              height={581.43}
              alt={product?.name}
              src={product?.images[0].url || ""}
            />
          </div>
          <aside className="text-xl flex flex-col max-w-[377px]">
            <ProductSale sale={product.sale} />
            <div className="flex flex-col gap-3">
              <label className="flex items-center cursor-pointer">
                <span className="w-24 text-base">Size:</span>
                <SelectVariant
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

            <ProductAttributes {...productDescription} />
            <ProductPrice sale={product.sale} price={selectedVariant.price} />
            <div className="flex mt-3">
              <div className="w-4 h-4 bg-avaible-product bg-contain"></div>
              <div className="text-xs ml-[3px] font-normal">In store</div>
            </div>
            <span className="text-xs mt-4">
              Delivery in 2-4 working days | Free delivery from 199zł
            </span>
            <div className="flex mt-4 gap-1 w-full">
              <Button className="px-12 w-full rounded-none py-4 h-full text-lg sm:text-sm">
                To Cart
              </Button>
              <label className="h-full border-2 cursor-pointer border-black p-4">
                <input type="checkbox" hidden />
                <span>
                  <Heart />
                </span>
              </label>
            </div>
          </aside>

          <ProductDescription productDescription={product.description} />
        </section>
        <div></div>
        <div className="w-full col-span-2 mt-[50px]">
          <h3 className="text-xl">Others buy also:</h3>
          <ProductsCarrousel />
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
