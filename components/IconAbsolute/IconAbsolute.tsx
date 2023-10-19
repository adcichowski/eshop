import type { CartItem } from "context/CartContext/types";
import React from "react";

export function IconAbsolute({ children }: { readonly children: JSX.Element }) {
  const cart = {};
  const numberItemsInCart = sumCartItems(cart);
  if (cart === undefined) return children;
  return (
    <div>
      {children}
      <div className="absolute -top-1 right-0 flex h-[18px] w-[18px] items-center justify-center rounded-[9px] bg-black text-xs text-white">
        {numberItemsInCart}
      </div>
    </div>
  );
}

const sumCartItems = (cart: Record<string, CartItem> | undefined) => {
  if (cart)
    return Object.entries(cart).reduce(
      (prev, [_v, product]) => prev + product.amount,
      0,
    );
};
