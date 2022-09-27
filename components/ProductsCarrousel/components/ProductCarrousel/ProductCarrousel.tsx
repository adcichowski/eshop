import { PlusCircleIcon } from "@heroicons/react/outline";
import { ProductVariantType } from "generated/graphql";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type ProductCarrouselProps = {
  id: string;
  slug: string;
  name: string;
  price: number;
  images: {
    id: string;
    url: string;
    alt?: string | null;
  }[];
};

export const ProductCarrousel = ({
  slug,
  name,
  price,
  images,
}: ProductCarrouselProps) => {
  return (
    <Link passHref href={slug}>
      <a href={slug}>
        <article aria-labelledby={name}>
          <div className="flex flex-col items-center">
            <div className="border-black border flex items-center h-full">
              <div className="w-48 sm:w-64 md:w-80">
                <Image
                  alt={name}
                  src={images[0].url}
                  layout="responsive"
                  width={4}
                  objectFit="contain"
                  height={3}
                />
              </div>
            </div>
            <div className="my-1">
              <h3
                className="text-center mt-1 text-md md:text-2xl font-light"
                id={name}
              >
                {name}
              </h3>

              <div className="flex justify-between w-48 items-center mt-1">
                <span className="font-medium text-sm md:text-md">
                  od {price / 100} zł
                </span>
                <button className="w-8 h-8 sm:w-10 sm:h-10">
                  <PlusCircleIcon className="stroke-1 hover:text-gray-600 text-gray-400 duration-200" />
                </button>
              </div>
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
};
