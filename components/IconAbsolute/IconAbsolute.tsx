import { useCartContext } from "context/CartContext/CartContext";
import type { CartItem } from "context/CartContext/types";
import React, { useMemo } from "react";

export function IconAbsolute({ children }: { readonly children: JSX.Element }) {
  const { cart } = useCartContext();
  const numberItemsInCart = useMemo(() => sumCartItems(cart), [cart]);
  if (cart === undefined) return children;
  return (
    <div>
      {children}
      <div className="flex items-center justify-center absolute -top-1 rounded-[9px] w-[18px] h-[18px] bg-black text-white text-xs right-0">
        {numberItemsInCart}
      </div>
    </div>
  );
}

const sumCartItems = (cart: Record<string, CartItem> | undefined) => {
  if (cart)
    return Object.entries(cart).reduce(
      (prev, [_, product]) => prev + product.amount,
      0
    );
};
