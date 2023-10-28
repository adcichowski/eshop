"use client";
import { createContext, useContext } from "react";
import { CartProduct } from "lib/actions/cart";
import { FavoriteProduct } from "lib/actions/favorite";
//TODO: Currently unable to retrieve popper open status in RSC due to URL reading issue.
// Will update once intercepting routes are included.
type ClientContextType = {
  cart: CartProduct[] | undefined;
  favorites: FavoriteProduct[] | undefined;
};

export const MAX_RENDER_TOASTS = 4;
const ClientContext = createContext<ClientContextType | null>(null);
export const ClientProvider = ({
  children,
  cart,
  favorites,
}: {
  readonly children: React.ReactNode;
  readonly cart: CartProduct[] | undefined;
  readonly favorites: FavoriteProduct[] | undefined;
}) => {
  return (
    <ClientContext.Provider value={{ cart, favorites }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("Wrap components using Toast Context Provider");
  }
  return context;
};
