import { PlusCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type SwiperProductProps = {
  id: string;
  price: number;
  slug: string;
  name: string;
  images: {
    id: string;
    url: string;
  }[];
};
export const SwiperProduct = ({
  slug,
  name,
  price,
  images,
}: SwiperProductProps) => {
  return (
    <div>
      <Link passHref href={slug}>
        <a href={slug}>
          <article aria-label={`Plakat ${name} do kupienia`}>
            <div className="flex flex-col items-center">
              <div className="border-black border w-72 h-80 flex items-center">
                <div className="w-72">
                  <Image
                    alt={name}
                    src={images[0].url}
                    layout="responsive"
                    width={16}
                    objectFit="contain"
                    height={9}
                  />
                </div>
              </div>
              <div className="my-1">
                <h3 className="text-center mt-1 text-xl font-light">{name}</h3>

                <div className="flex justify-between items-center mt-1">
                  <span className="font-medium">
                    od {price / 100} <span>zł</span>
                  </span>
                  <button className="w-12 h-12">
                    <PlusCircleIcon className="stroke-1" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </a>
      </Link>
    </div>
  );
};
