import { Button } from "components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type ProductCarrouselProps = Readonly<{
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly price: number;
  readonly images: readonly {
    readonly id: string;
    readonly url: string;
    readonly alt?: string | null;
  }[];
}>;

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
            <div className="flex items-center h-full">
              <div className="sm:w-64 md:w-80 flex justify-center">
                <Image
                  alt={name}
                  src={images[0].url}
                  width={180}
                  height={251}
                />
              </div>
            </div>
            <div className="my-1">
              <h3 className="mt-1 text-xs" id={name}>
                {name}
              </h3>
              <span className="font-medium text-sm md:text-md">
                od {price / 100} zł
              </span>

              <div className="flex w-48 items-center mt-1">
                <Button className="md:text-xs rounded-none py-1 px-4 font-thin normal-case">
                  To Cart
                </Button>
              </div>
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
};
