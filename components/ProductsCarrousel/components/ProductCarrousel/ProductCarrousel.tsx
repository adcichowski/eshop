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
import { DiscountFrame } from "components/DiscountFrame/DiscountFrame";

export const ProductCarrousel = ({
  product,
  HeadingProduct,
}: {
  product: ProductCarrouselPropsType;
  HeadingProduct: "h3" | "h4";
}) => {
  const { addToast } = useToastContext();
  const favoriteInputProps = {
    name: product.name,
    category: product.category.slug,
    slug: product.slug,
    id: product.id,
    image: product.image,
    favorite: product.favorite,
    whiteFrame: product.whiteFrame,
  };
  const imageSize = {
    width: 180,
    height: product.orientation === "Vertical" ? 121 : 62,
  };
  return (
    <article aria-labelledby={product.name} className="relative">
      <div
        className={`absolute right-2 top-2 ${clsx(
          product.orientation === "Horizontal" && "top-20",
        )}`}
      >
        <DiscountFrame sale={product.sale} size="small" />
      </div>

      <div
        className={`flex h-48 items-center justify-center overflow-hidden object-center md:h-72`}
      >
        <Image
          alt={product.name}
          src={product.image}
          {...imageSize}
          className={`${clsx(
            product.orientation === "Vertical" && "h-full w-auto",
            product.whiteFrame && "p-3",
          )} w-full h-auto border`}
        />
      </div>

      <div className="z-10 mx-4 my-1 flex flex-col">
        <HeadingProduct className="mt-1 truncate text-xs" id={product.id}>
          <Link
            passHref
            href={`/${product.category.slug}/poster/${product.slug}`}
            className="after:content after:absolute after:left-0 after:top-0 after:h-full after:w-full after:cursor-pointer"
          >
            {product.name}
          </Link>
        </HeadingProduct>
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
