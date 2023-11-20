import Image from "next/image";
import React from "react";
import { pictures } from "./constants";
import clsx from "clsx";
import Link from "next/link";
export function PopularCategories() {
  return (
    <section className="mt-6 block mx-auto" id="popularCategories">
      <h2 className="mb-5 text-center text-xl lg:text-2xl">
        Popular Categories
      </h2>
      <ul className="sm:grid-cols-2 mx-3 max-w-7xl md:grid-cols-3 justify-center gap-2 grid xl:gap-6">
        {pictures.map(({ alt, src, href }, i) => {
          const shouldBeBiggest = i % 3 === 0;
          return (
            <li
              key={alt}
              className={clsx(shouldBeBiggest && "col-span-2 row-span-2")}
            >
              <Link
                href={href}
                className="group group-focus:outline-1  outline-primary"
              >
                <figure className="relative w-full overflow-hidden">
                  <Image
                    width={350}
                    height={300}
                    className="w-full object-contain filter drop-shadow-md group-hover:brightness-75 group-focus:brightness-75 animate-in group-hover:scale-110 group-focus:scale-110 duration-500"
                    src={src}
                    alt={alt}
                  />

                  <figcaption
                    className={clsx(
                      "text-base absolute bottom-1/4 w-full bg-white py-1 text-center  uppercase  group-focus:text-primary group-hover:text-primary  group-focus:font-medium",
                      shouldBeBiggest && "bottom-1/2",
                    )}
                  >
                    {alt}
                  </figcaption>
                </figure>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
