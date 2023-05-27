import { useToastContext } from "context/ToastContext/ToastContext";
import React, { createContext, useContext, useEffect, useState } from "react";
import type { CartContextType, CartItem } from "./types";
import { addProductToCart, deleteProductFromCart } from "./utilsCart";

const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({
  children,
}: {
  readonly children?: React.ReactNode;
}) => {
  const [cart, setCart] = useState<Record<string, CartItem> | undefined>(
    undefined
  );
  const { addToast } = useToastContext();

  useEffect(() => {
    setCartInLocalStorage(cart);
  }, [cart]);

  useEffect(() => {
    setCart(getCartFromLocalStorage());
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct: (product) => {
          setCart(addProductToCart(product, cart));
          addToast("success", "Successful add product to cart");
        },
        deleteProduct: (product) => {
          setCart(deleteProductFromCart(product, cart));
          addToast("success", "Successful remove product from cart");
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
  if (cart === undefined) localStorage.removeItem("cart");
  return localStorage.setItem("cart", JSON.stringify(cart));
};
