import { SelectVariant } from "src/pages/product/components/SelectVariant";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "pages/[productSlug]";
import { useState } from "react";
import Image from "next/image";
import { ProductDescription } from "./components/ProductDescription";
import { StateSelect } from "./types";
import { changeValueCurrency, priceWithDiscount } from "utils/utils";
import { clsx } from "clsx";
import { ProductPrice } from "./components/ProductPrice";
export const ProductPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!product) return <h2>Product not found!</h2>;

  const { finish, color, paperWeight, orientation, whiteFrame, variants } =
    product;

  const productVariants = product.variants.map(({ size, id, price }) => ({
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
      <main className="grid grid-cols-3 ml-40">
        <div className="mt-12">Categories</div>
        <section className="mt-10 text-[32px] col-span-2 grid grid-cols-2 gap-5">
          <h2 className="col-span-2 max-w-md text-3xl">{product.name}</h2>
          <div className="max-w-[392px]">
            <Image
              objectFit="contain"
              layout="responsive"
              width={392.36}
              height={551.43}
              alt={product?.name}
              src={product?.images[0].url || ""}
            />
          </div>

          <div className="text-xl flex flex-col">
            <ProductSale sale={product.sale} />
            <div className="flex flex-col gap-5">
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

            <ProductDescription {...productDescription} />
            <ProductPrice sale={product.sale} price={selectedVariant.price} />
          </div>
        </section>
      </main>

      <footer>Footer</footer>
    </div>
  );
};

const ProductSale = ({ sale }: { sale: string | undefined | null }) =>
  sale ? (
    <div className="mb-6 bg-black text-center px-8 py-2 font-semibold text-white self-start">
      {`-${sale}%`}
    </div>
  ) : (
    <></>
  );
