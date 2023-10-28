"use client";
import { CartProduct, runCartAction } from "lib/actions/cart";
import React from "react";

export function AmountProductCart({
  amount,
  product,
}: {
  amount: number;
  product: CartProduct;
}) {
  return (
    <div className="flex h-10">
      <button
        type="button"
        onClick={() => runCartAction(product, "reduce")}
        className="border border-r-0 px-3"
      >
        -
      </button>
      <div className="w-[35px] cursor-pointer border border-x-0 flex items-center justify-center bg-white  text-center">
        {amount}
      </div>
      <button
        type="button"
        onClick={() => runCartAction({ ...product, amount: 1 }, "add")}
        className="border border-l-0 px-3"
      >
        +
      </button>
    </div>
  );
}
