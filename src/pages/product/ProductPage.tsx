import { SelectExample } from "components/Select/Select";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "pages/[productSlug]";
import { useState } from "react";
import Image from "next/image";
import { ProductDescription } from "./components/ProductDescription";
const sizesPoster = [
  { width: 50, height: 70, id: 1 },
  { width: 40, height: 50, id: 2 },
  { width: 30, height: 40, id: 3 },
  { width: 21, height: 30, id: 1 },
];

export const ProductPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [sizePoster, setSizePoster] = useState(sizesPoster[0]);

  if (!product) return <h2>Product not found!</h2>;

  const productDescription = {
    category: product.categories[0].name,
    paperWeight: product.paperWeight,
    color: product.color,
    finish: product.finish,
    orientation: product.orientation,
    whiteFrame: product.whiteFrame,
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
            {product.sale ? (
              <div className="bg-black text-center px-8 py-2 font-semibold text-white self-start">
                {`-${product.sale}%`}
              </div>
            ) : (
              <></>
            )}
            <div className="mt-6 flex flex-col gap-5">
              <label className="flex items-center cursor-pointer">
                <span className="w-24 text-base">Size:</span>
                <SelectExample sale={product.sale} />
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
          </div>
        </section>
      </main>

      <footer>Footer</footer>
    </div>
  );
};
