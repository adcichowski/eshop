import React, { createContext, useContext, useEffect, useState } from "react";
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
  useEffect(() => {
    setCart(getCartFromLocalStorage());
  }, []);

  useEffect(() => {
    setCartInLocalStorage(cart);
  }, [cart]);
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

const getCartFromLocalStorage = () => {
  try {
    const cartLocalStorage = localStorage.getItem("cart");
    if (cartLocalStorage === null) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- i will provide schema to validate this
    return JSON.parse(cartLocalStorage) as Record<string, CartItem>;
  } catch (error) {
    return undefined;
  }
};

const setCartInLocalStorage = (cart: Record<string, CartItem> | undefined) => {
  if (cart === undefined) return;
  return localStorage.setItem("cart", JSON.stringify(cart));
};
