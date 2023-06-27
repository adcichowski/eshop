import React from "react";
import { CartStep } from "../CartStep/CartStep";
import { useOrderFormContext } from "./context/OrderFormContext";

export function OrderFormStepper() {
  const { step } = useOrderFormContext();
  switch (step) {
    case "cart":
      return <CartStep />;
    case "account":
      return <>Account Step</>;
    case "shipping":
      return <>Shipping Step</>;
    case "summary":
      return <>Summary Step</>;
  }
}
