import React from "react";
import { EmptyCartPageView } from "./components/CartPageView";

export const CartPageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cart = {};
  if (!cart) return <EmptyCartPageView />;
  return { children };
};
