"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { CartContextProvider } from "./CartContext/CartContext";
import { ToastProvider } from "./ToastContext/ToastContext";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "lib/apollo";

export default function ClientContext({ children }: { children: JSX.Element }) {
  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider>
        <ToastProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </ToastProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}