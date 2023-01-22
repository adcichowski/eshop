import { Button } from "components/Button/Button";
import { FavoriteInput } from "components/Inputs/FavoriteInput";
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
    <section aria-labelledby={name} className="flex flex-col relative">
      <div>
        <div className="max-h-52 max-w-[134px] md:max-w-[206px] m-auto md:max-h-72 object-center overflow-hidden">
          <Image
            alt={name}
            src={images[0].url}
            width={180}
            height={251}
            className="bg-cover object-cover h-auto w-full object-center"
          />
        </div>
      </div>
      <div className="my-1 flex flex-col mx-10">
        <h3 className="mt-1 text-xs" id={name}>
          <Link
            passHref
            href={slug}
            className="after:absolute after:w-full after:h-full after:content after:left-0 after:top-0 after:cursor-pointer"
          >
            {name}
          </Link>
        </h3>
        <span className="font-medium text-sm md:text-md">
          od {price / 100} zł
        </span>
        <div className="flex gap-1 items-center justify-between relative">
          <div>
            <Button className="md:text-xs rounded-none py-1 px-4 font-thin normal-case self-start">
              To Cart
            </Button>
          </div>

          <div className="relative block">
            <FavoriteInput id={name} />
          </div>
        </div>
      </div>
    </section>
  );
};
