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
  readonly cart: readonly CartItem[];
  readonly addProductToCart: (product: Omit<CartItem, "amount">) => void;
}
const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<readonly CartItem[] | readonly []>([]);
  const addProductToCart = (product: Omit<CartItem, "amount">) => {
    setCart((cartItems) => {
      const productInCart = cartItems.find((item) => item.id === product.id);
      if (productInCart) {
        return [
          ...cart,
          { ...productInCart, amount: productInCart.amount + 1 },
        ];
      }
      return [...cart, { ...product, amount: 1 }];
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
