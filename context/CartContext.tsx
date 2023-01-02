import React, { createContext, useContext, useState } from "react";

interface CartItem {
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
      if (prev?.[product.id] === undefined) {
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
  return (
    <CartContext.Provider value={{ cart, addProductToCart }}>
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
