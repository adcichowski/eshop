import { HeaderInStep } from "app/cart/components/HeaderInStep";
import { LayoutStepPage } from "app/cart/components/LayoutStepPage";
import React from "react";
import { AccountStep } from "views/cart/components/OrderFormStepper/components/AccountStep/AccountStep";

export default function Page() {
  return (
    <LayoutStepPage step="account">
      <HeaderInStep header="Your personal data">
        <AccountStep />
      </HeaderInStep>
    </LayoutStepPage>
  );
}
