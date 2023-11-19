"use client";
import clsx from "clsx";
import { DiscountFrame } from "components/DiscountFrame/DiscountFrame";
// import { FavoriteInput } from "components/Inputs/FavoriteInput";
import { useInputAmountProduct } from "hooks/useInputAmountProduct";
import React from "react";
import ProductQuantityInput from "./components/ProductQuantityInput";
import { ProductAttributes } from "./components/ProductAttributes";
import { useSelectVariant } from "./components/ProductSelectVariant/hooks/useSelectVariant";
import { ProductPageProps } from "../../ProductPage";
import { ProductSelectVariant } from "./components/ProductSelectVariant/ProductSelectVariant";
import { FavoriteInput } from "components/Inputs/FavoriteInput";
import { ProductPrice } from "./components/ProductPrice";
import { AddProductAction } from "./components/AddProductAction";

export function ProductInfos({ product }: { product: ProductPageProps }) {
  const inputAmountProps = useInputAmountProduct();
  const { selectedVariant } = useSelectVariant({
    variants: product.variants,
  });

  const favoriteInputProps = {
    name: product.name,
    image: product.image,
    slug: product.slug,
    id: product.id,
    category: product.attributes.category,
    favorite: product.favorite,
  };
  return (
    <aside
      className={`mt-3 flex max-w-[377px] flex-col md:mt-0 md:ml-5  ${clsx(
        !product.attributes.sale && "gap-y-[7.2px]",
      )} text-xl`}
    >
      <div className="mb-[22px] self-start">
        <DiscountFrame sale={product.attributes.sale} size="big" />
      </div>

      <ProductSelectVariant
        selectedVariant={selectedVariant}
        sale={product.attributes.sale}
        productVariants={product.variants}
      />

      <ProductQuantityInput {...inputAmountProps} />

      <ProductAttributes {...product.attributes} />

      <ProductPrice
        sale={product.attributes.sale}
        price={selectedVariant.price}
      />

      <div className="mt-3 flex">
        <div className="h-4 w-4 bg-avaible-product bg-contain">
          <span className="hidden" aria-hidden="true">
            Available product
          </span>
        </div>
        <div className="ml-[3px] text-xs font-normal">In store</div>
      </div>
      <span className="mt-4 text-xs">
        Delivery in 2-4 working days | Free delivery from 199zł
      </span>

      <div className="mt-4 flex items-stretch gap-1">
        <AddProductAction
          product={{
            whiteFrame: product.attributes.whiteFrame,
            amount: 1,
            id: product.id,
            price: selectedVariant.price,
            sale: product.attributes.sale,
            image: product.image,
            variant: selectedVariant,
            title: `${product.name} ${selectedVariant.width} cm x ${selectedVariant.height} cm`,
          }}
        />
        <div className="relative cursor-pointer border-[1px] border-black p-4">
          <FavoriteInput product={favoriteInputProps} />
        </div>
      </div>
    </aside>
  );
}
