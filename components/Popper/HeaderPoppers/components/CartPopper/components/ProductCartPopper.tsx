/* eslint-disable jsx-a11y/alt-text -- we will take it from props */
import React from "react";
import Image from "next/future/image";
import ClearIcon from "./clear.svg";
type ProductCartPopperProps = {
  readonly image: { readonly src: string; readonly alt: string };
  readonly prize: number;
  readonly numberOf: number;
  readonly title: string;
};
export function ProductCartPopper({
  image,
  title,
  numberOf,
  prize,
}: ProductCartPopperProps) {
  return (
    <section
      className="flex w-[322px] pb-2 border-b-[1px] border-lightGray"
      aria-label="products in your cart"
    >
      <div className="basis-[86px]">
        <div className="w-full h-[112px] border p-[6px]">
          <Image className="object-cover" width={100} height={90} {...image} />
        </div>
      </div>
      <div className="basis-[242px] ml-[14px] py-[2px] flex flex-col">
        <div className="flex justify-between grow">
          <h3 className="text-left">{title}</h3>
          <button className="self-start mt-[3px]">
            <ClearIcon />
          </button>
        </div>
        <div className="flex justify-between">
          <div className="text-sm">{numberOf} szt.</div>
          <div className="text-base font-semibold">{prize}</div>
        </div>
      </div>
    </section>
  );
}
