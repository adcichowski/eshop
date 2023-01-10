import { faker } from "@faker-js/faker";
import React, { createContext, useContext, useState } from "react";

export interface CartItem {
  readonly id: string;
  readonly image: {
    readonly url: string;
    readonly alt?: string | null;
  };
  readonly amount: number;
  readonly price: number;
  readonly title: string;
}
interface CartContextType {
  readonly cart: Record<string, CartItem> | undefined;
  readonly addProductToCart: (product: Omit<CartItem, "amount">) => void;
  readonly deleteProductFromCart: (product: Omit<CartItem, "amount">) => void;
}
const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<Record<string, CartItem> | undefined>(
    undefined
  );

  const addProductToCart = (product: Omit<CartItem, "amount">) => {
    setCart((prev) => {
      const productInCart = prev?.[product.id];
      if (!productInCart) {
        return { ...prev, [product.id]: { ...product, amount: 1 } };
      }

      return {
        ...prev,
        [product.id]: {
          ...product,
          amount: Number(prev?.[product.id].amount) + 1,
        },
      };
    });
  };

  const deleteProductFromCart = (product: Omit<CartItem, "amount">) => {
    setCart((prev) => {
      const deleteProduct = prev?.[product.id];
      if (!deleteProduct) return prev;
      if (deleteProduct.amount === 1) {
        const cartWithoutDeleted = Object.entries(prev).filter(
          ([id]) => id !== product.id
        );
        if (cartWithoutDeleted.length === 0) return undefined;
        return Object.fromEntries(cartWithoutDeleted);
      }
      return {
        ...prev,
        [product.id]: { ...deleteProduct, amount: deleteProduct.amount - 1 },
      };
    });
  };
  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, deleteProductFromCart }}
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
