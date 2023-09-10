"use client";
import clsx from "clsx";
import { DiscountFrame } from "components/DiscountFrame/DiscountFrame";
import { FavoriteInput } from "components/Inputs/FavoriteInput";
import { useInputAmountProduct } from "hooks/useInputAmountProduct";
import React from "react";
import ProductQuantityInput from "./components/ProductQuantityInput";
import { ProductAttributes } from "./components/ProductAttributes";
import { useSelectVariant } from "../../hooks/useSelectVariant";
import { ProductPageProps } from "../../ProductPage";
import { ProductSelectVariant } from "./components/ProductSelectVariant";
import { Button } from "components/Button/Button";
import { useCartContext } from "context/CartContext/CartContext";

export function ProductInfos({ product }: { product: ProductPageProps }) {
  const inputAmountProps = useInputAmountProduct();
  const { addProduct } = useCartContext();
  const { selectedVariant, setSelectedVariant } = useSelectVariant({ product });
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
        setSelectedVariant={setSelectedVariant}
        sale={product.attributes.sale}
        productVariants={product.variants}
      />

      <ProductQuantityInput {...inputAmountProps} />

      <ProductAttributes {...product.attributes} />

      {/* <ProductPrice sale={product.sale} price={selectedVariant.price} /> */}

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
        <Button
          data-outside="false"
          onClick={() => {
            addProduct({
              sale: product.attributes.sale,
              whiteFrame: product.attributes.whiteFrame,
              variant: {
                width: selectedVariant.width,
                height: selectedVariant.height,
                id: selectedVariant.id,
              },
              id: product.id,
              title: product.name,
              price: selectedVariant.price,
              image: product.image,
              amount: Number(inputAmountProps.value),
            });
          }}
          className="md:text-md text-md h-full w-full rounded-none px-12 py-5"
        >
          To Cart
        </Button>
        <div className="relative cursor-pointer border-[1px] border-black p-4">
          <FavoriteInput id={product.name} />
        </div>
      </div>
    </aside>
  );
}
