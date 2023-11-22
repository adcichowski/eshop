"use client";
import React from "react";
import { OrderProvider } from "./OrderContext";

export function ProviderOrderContext({ children }: { children: JSX.Element }) {
  return <OrderProvider>{children}</OrderProvider>;
}
