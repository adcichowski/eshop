import React from "react";
import AccountStep from "../AccountStep/AccountStep";
import { CartStep } from "../CartStep/CartStep";
import { ShippingStep } from "../ShippingStep/ShippingStep";
import { useOrderFormContext } from "./context/OrderFormContext";

export function OrderFormStepper() {
  const { step } = useOrderFormContext();
  switch (step) {
    case "cart":
      return <CartStep />;
    case "account":
      return <AccountStep />;
    case "shipping":
      return <ShippingStep />;
    case "summary":
      return <>Summary Step</>;
  }
}
