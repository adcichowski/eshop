import { PaymentStep } from "./components/PaymentStep";
import { LayoutStepPage } from "app/cart/components/LayoutStepPage";
import { HeaderInStep } from "app/cart/components/HeaderInStep";

export default function Page() {
  return (
    <LayoutStepPage step="payment">
      <HeaderInStep header="Payment For Order">
        <PaymentStep />
      </HeaderInStep>
    </LayoutStepPage>
  );
}
