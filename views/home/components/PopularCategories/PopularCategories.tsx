import Image from "next/image";
import React from "react";
import { pictures } from "./constants";
import clsx from "clsx";
import { ProductCarrousel } from "components/ProductsCarrousel/components/ProductCarrousel/ProductCarrousel";
import { ProductsCarrouselServer } from "components/ProductsCarrousel/ProductsCarrouselServer";

export function PopularCategories() {
  return (
    <section className="mt-6 block mx-auto" id="popularCategories">
      <h2 className="mb-5 text-center text-xl">Popular Categories</h2>
      <ul className="sm:grid-cols-2 mx-3 max-w-7xl md:grid-cols-3 justify-center gap-2 grid xl:gap-6">
        {pictures.map(({ alt, src }, i) => {
          const shouldBeBiggest = i % 3 === 0;
          return (
            <li
              key={alt}
              className={clsx(shouldBeBiggest && "col-span-2 row-span-2")}
            >
              <figure className="relative w-full">
                <Image
                  placeholder="blur"
                  width={350}
                  height={400}
                  className="w-full object-cover"
                  src={src}
                  alt={alt}
                />
                <figcaption
                  className={clsx(
                    "text-base absolute bottom-1/4 w-full bg-white py-1 text-center  uppercase",
                    shouldBeBiggest && "bottom-1/2 ",
                  )}
                >
                  {alt}
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
