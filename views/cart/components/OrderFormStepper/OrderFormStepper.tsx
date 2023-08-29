import React from "react";
import AccountStep from "./components/AccountStep/AccountStep";
import { CartStep } from "./components/CartStep/CartStep";
import { ShippingStep } from "./components/ShippingStep/ShippingStep";
import { useOrderFormContext } from "./context/OrderFormContext";
import { PaymentStep } from "./components/PaymentStep/PaymentStep";

export function OrderFormStepper() {
  const { step } = useOrderFormContext();
  switch (step) {
    case "cart":
      return <CartStep />;
    case "account":
      return <AccountStep />;
    case "shipping":
      return <ShippingStep />;
    case "payment":
      return <PaymentStep />;
    case "summary":
      return <>Summary Step</>;
  }
}
