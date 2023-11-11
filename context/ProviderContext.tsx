"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { ToastProvider } from "./ToastContext/ToastContext";
import { ClientProvider } from "./ClientContext/ClientContext";
import { FavoriteProduct } from "lib/actions/favorite";
import { CartProduct } from "lib/actions/cart";
import { queryClient } from "lib/tanstack";
import { QueryClientProvider } from "@tanstack/react-query";

export function ProviderContext({
  children,
  favorites,
  cart,
}: {
  children: JSX.Element;
  favorites: FavoriteProduct[] | undefined;
  cart: CartProduct[] | undefined;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <ClientProvider favorites={favorites} cart={cart}>
        <SessionProvider>
          <ToastProvider>{children}</ToastProvider>
        </SessionProvider>
      </ClientProvider>
    </QueryClientProvider>
  );
}
