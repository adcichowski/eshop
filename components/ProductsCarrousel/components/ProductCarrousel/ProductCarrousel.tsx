"use client";
import clsx from "clsx";
import { Button } from "components/Button/Button";
import { FavoriteInput } from "components/Inputs/FavoriteInput";
import { useCartContext } from "context/CartContext/CartContext";
import Image from "next/image";
import Link from "next/link";
import { changeValueCurrency } from "utils/utils";
import { ProductCarrouselPropsType } from "components/ProductsCarrousel/types";

export const ProductCarrousel = (product: ProductCarrouselPropsType) => {
  const { addProduct } = useCartContext();

  return (
    <section aria-labelledby={product.name}>
      <div
        className={`flex h-48 items-center justify-center overflow-hidden object-center md:h-72 ${clsx(
          product.whiteFrame && "border-2 p-2 md:p-4",
        )}`}
      >
        <Image
          alt={product.name}
          src={product.image}
          width={180}
          height={251}
          className={`${clsx(
            product.orientation === "Vertical" && "h-full",
          )} w-auto md:h-auto md:w-full`}
        />
      </div>

      <div className="z-10 mx-4 my-1 flex flex-col">
        <h3 className="mt-1 truncate text-xs" id={product.id}>
          <Link
            passHref
            href={`poster/${product.slug}`}
            className="after:content after:absolute after:left-0 after:top-0 after:h-full after:w-full after:cursor-pointer"
          >
            {product.name}
          </Link>
        </h3>
        <span className="md:text-md text-sm font-medium">
          {changeValueCurrency(product.price)}
        </span>
        <div className="relative mt-2 flex items-center justify-between gap-1">
          <Button
            data-outside="true"
            onClick={() => {
              addProduct({
                ...product,
                title: `${product.name} ${product.variant.width} cm x ${product.variant.height} cm`,
              });
            }}
            className="self-start rounded-none px-3 py-1 text-xs font-light normal-case md:text-base"
          >
            To Cart
          </Button>

          <div className="relative">
            <FavoriteInput id={product.id} />
          </div>
        </div>
      </div>
    </section>
  );
};
