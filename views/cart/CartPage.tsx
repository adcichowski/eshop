import React from "react";
import { OrderFormProvider } from "./components/OrderFormStepper/context/OrderFormContext";
import { EmptyCartPageView } from "./components/CartPageView";

export const CartPageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cart = {};
  if (!cart) return <EmptyCartPageView />;
  return <OrderFormProvider>{children}</OrderFormProvider>;
};
