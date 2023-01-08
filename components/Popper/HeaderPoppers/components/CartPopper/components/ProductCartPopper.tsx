import React from "react";
import Image from "next/future/image";
import ClearIcon from "./clear.svg";
import { changeValueCurrency } from "utils/utils";
import { useCartContext } from "context/CartContext";
type ProductCartPopperProps = {
  readonly id: string;
  readonly image: { readonly url: string; readonly alt?: string | null };
  readonly price: number;
  readonly amount: number;
  readonly title: string;
};
export function ProductCartPopper({
  id,
  image,
  title,
  amount,
  price,
}: ProductCartPopperProps) {
  const { deleteProductFromCart } = useCartContext();
  return (
    <section
      className="flex w-[322px] pb-2 border-b-[1px] border-lightGray"
      aria-label="products in your cart"
    >
      <div className="basis-[86px]">
        <div className="w-full h-[112px] border p-[6px]">
          <Image
            className="object-cover"
            width={100}
            height={90}
            src={image.url}
            alt={image.alt ?? title}
          />
        </div>
      </div>
      <div className="basis-[242px] ml-[14px] py-[2px] flex flex-col">
        <div className="flex justify-between grow">
          <h3 className="text-left">{title}</h3>
          <button
            onClick={() => deleteProductFromCart({ image, title, price, id })}
            className="self-start mt-[3px]"
          >
            <ClearIcon />
          </button>
        </div>
        <div className="flex justify-between">
          <div className="text-sm">{amount} szt.</div>
          <div className="text-base font-semibold">
            {changeValueCurrency(price)}
          </div>
        </div>
      </div>
    </section>
  );
}
