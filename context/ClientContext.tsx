"use client";

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "graphql/apolloClient";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartContextProvider } from "./CartContext/CartContext";
import { ToastProvider } from "./ToastContext/ToastContext";

const queryClient = new QueryClient();

export default function ClientContext({ children }: { children: JSX.Element }) {
  return (
    <SessionProvider>
      <ApolloProvider client={apolloClient}>
        <ToastProvider>
          <CartContextProvider>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </CartContextProvider>
        </ToastProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}
