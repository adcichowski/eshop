import Image from "next/image";
import React from "react";
import { pictures } from "./constants";

export function PopularCategories() {
  return (
    <section className="mx-36 mt-6" id="popularCategories">
      <h2 className="mb-5 text-center text-xl">Popular Categories</h2>
      <ul className="flex max-w-7xl flex-wrap justify-center gap-8">
        {pictures.map(({ alt, src }) => (
          <li key={alt}>
            <figure className="relative h-[300px] w-[350px]">
              <Image
                width={350}
                height={400}
                className="w-full object-cover"
                src={src}
                alt={alt}
              />
              <figcaption className="absolute bottom-20 w-full bg-white py-1 text-center uppercase">
                {alt}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
