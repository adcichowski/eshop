import React, { createContext, useContext, useState } from "react";

interface CartItems {
  prize: string;
  title: string;
}
interface CartContextType {
  items: CartItems[];
}
const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<CartItems[] | []>([]);
  return (
    <CartContext.Provider value={{ items: cart }}>
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
