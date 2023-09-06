"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { CartContextProvider } from "./CartContext/CartContext";
import { ToastProvider } from "./ToastContext/ToastContext";

export default function ClientContext({ children }: { children: JSX.Element }) {
  return (
    <SessionProvider>
      <ToastProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </ToastProvider>
    </SessionProvider>
  );
}
