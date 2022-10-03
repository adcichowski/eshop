import React, { createContext, useContext, useState } from "react";

interface CartItems {
  readonly prize: string;
  readonly title: string;
}
interface CartContextType {
  readonly items: readonly CartItems[];
}
const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<readonly CartItems[] | readonly []>([]);
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
