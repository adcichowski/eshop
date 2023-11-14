"use client";
import clsx from "clsx";
import { Action } from "components/Action/Action";
import { FavoriteInput } from "components/Inputs/FavoriteInput";
import Image from "next/image";
import Link from "next/link";
import { changeValueCurrency } from "utils/utils";
import { ProductCarrouselPropsType } from "components/ProductsCarrousel/types";
import { runCartAction } from "lib/actions/cart";
import { useToastContext } from "context/ToastContext/ToastContext";

export const ProductCarrousel = (product: ProductCarrouselPropsType) => {
  const { addToast } = useToastContext();
  const favoriteInputProps = {
    name: product.name,
    category: product.category.slug,
    slug: product.slug,
    id: product.id,
    image: product.image,
    favorite: product.favorite,
  };
  return (
    <article aria-labelledby={product.name}>
      <div
        className={`flex h-48 items-center justify-center overflow-hidden object-center md:h-72`}
      >
        <Image
          alt={product.name}
          src={product.image}
          width={180}
          height={2561}
          className={`object-cover ${clsx(
            product.orientation === "Vertical" && "h-full",
          )} w-full h-full md:h-auto md:w-full`}
        />
      </div>

      <div className="z-10 mx-4 my-1 flex flex-col">
        <h3 className="mt-1 truncate text-xs" id={product.id}>
          <Link
            passHref
            href={`/${product.category.slug}/poster/${product.slug}`}
            className="after:content after:absolute after:left-0 after:top-0 after:h-full after:w-full after:cursor-pointer"
          >
            {product.name}
          </Link>
        </h3>
        <span className="md:text-md text-sm font-medium">
          {changeValueCurrency(product.price)}
        </span>
        <div className="relative mt-2 flex items-center justify-between gap-1">
          <Action
            as="button"
            data-outside="true"
            onClick={() => {
              runCartAction(
                {
                  ...product,
                  title: `${product.name} ${product.variant.width} cm x ${product.variant.height} cm`,
                },
                "add",
              );
              addToast("success", "Product has been added");
            }}
          >
            To Cart
          </Action>

          <div className="relative">
            <FavoriteInput product={favoriteInputProps} />
          </div>
        </div>
      </div>
    </article>
  );
};
