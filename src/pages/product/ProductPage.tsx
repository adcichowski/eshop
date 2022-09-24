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
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="grid grid-cols-3">
        <div className="mt-12">Categories</div>
        <section className="col-span-2 mt-10 text-[32px]">
          <div className="grid grid-cols-2">
            <h2 className="col-span-2">{product?.name}</h2>
            <div className="mt-5">
              <Image
                layout="responsive"
                objectFit="contain"
                width={292}
                height={452}
                alt={product?.name}
                src={product?.images[0].url || ""}
              />
            </div>
            <div className="ml-4 text-xl mt-5 flex flex-col">
              <div className="bg-black text-center px-8 py-2 font-semibold text-white self-start">
                -30%
              </div>
              <div className="mt-6 flex flex-col gap-5">
                <label className="flex items-center cursor-pointer">
                  <span className="w-24">Rozmiar:</span>
                  <SelectExample discount={30} />
                </label>

                <label className="flex items-center">
                  <span className="w-24">Ilość:</span>
                  <div>
                    <input
                      className="p-2 bg-white border-[0.5px] border-black px-3 w-16 text-center h-10 cursor-pointer"
                      type="number"
                      min={1}
                    />
                    <span className="ml-1">szt</span>
                  </div>
                </label>
              </div>
              <ProductDescription />
            </div>
          </div>
        </section>
      </main>

      <footer>Footer</footer>
    </div>
  );
};

type x = InferGetStaticPropsType<typeof getStaticProps>;
