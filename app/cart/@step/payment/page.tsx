import React from "react";
import { PaymentStep } from "./components/PaymentStep";
import { LayoutStepPage } from "app/cart/components/LayoutStepPage";
import { HeaderInStep } from "app/cart/components/HeaderInStep";

export default function page() {
  return (
    <LayoutStepPage step="payment">
      <HeaderInStep header="Payment For Order">
        <PaymentStep />
      </HeaderInStep>
    </LayoutStepPage>
  );
}
