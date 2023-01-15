import React, { createContext, useContext, useState } from "react";
import type { CartContextType, CartItem } from "./types";
import { addProductToCart, deleteProductFromCart } from "./utilsCart";

const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<Record<string, CartItem> | undefined>(
    undefined
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct: (product: CartItem) => {
          setCart(addProductToCart(product, cart));
        },
        deleteProduct: (product: CartItem) => {
          setCart(deleteProductFromCart(product, cart));
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("Wrap components using CartContextProvider");
  }
  return cartContext;
};
