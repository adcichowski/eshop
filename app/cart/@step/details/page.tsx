import React from "react";
import { StepDetails } from "./StepDetails";
import { LayoutStepPage } from "app/cart/components/LayoutStepPage";
import { HeaderInStep } from "app/cart/components/HeaderInStep";

export default function Page() {
  return (
    <LayoutStepPage step="details">
      <HeaderInStep header="Your cart">
        <StepDetails />
      </HeaderInStep>
    </LayoutStepPage>
  );
}
