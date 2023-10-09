"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { CartContextProvider } from "./CartContext/CartContext";
import { ToastProvider } from "./ToastContext/ToastContext";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "lib/apollo";
import { FavoritesProvider } from "./FavoritesContext/FavoritesContext";

export default function ClientContext({ children }: { children: JSX.Element }) {
  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider>
        <ToastProvider>
          <FavoritesProvider>
            <CartContextProvider>{children}</CartContextProvider>
          </FavoritesProvider>
        </ToastProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}
