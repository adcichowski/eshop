import React, { createContext, useContext, useState } from "react";

interface CartItem {
  readonly id: string;
  readonly image: {
    readonly url: string;
    readonly alt?: string | null;
  };
  readonly price: number;
  readonly title: string;
}
interface CartContextType {
  readonly cart: Record<string, CartItem> | undefined;
  readonly addProductToCart: (product: CartItem) => void;
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
  const addProductToCart = (product: CartItem) => {
    setCart((prev) => ({ ...prev, product }));
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
