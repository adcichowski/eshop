import Image from "next/image";
import React from "react";
import { pictures } from "./constants";

export function PopularCategories() {
  return (
    <section
      className="md:mx-26 mx-1 mt-6 hidden sm:block xl:mx-36"
      id="popularCategories"
    >
      <h2 className="mb-5 text-center text-xl">Popular Categories</h2>
      <ul className="xs:grid-cols-2  max-w-7xl grid-cols-3 justify-center gap-2 sm:grid xl:gap-6">
        {pictures.map(({ alt, src }) => (
          <li key={alt}>
            <figure className="relative w-full ">
              <Image
                width={350}
                height={400}
                className="w-full object-cover"
                src={src}
                alt={alt}
              />
              <figcaption className="absolute bottom-10 w-full bg-white py-1 text-center text-xs uppercase md:text-base xl:bottom-20">
                {alt}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
