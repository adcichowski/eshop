import { HeaderInStep } from "app/cart/components/HeaderInStep";
import { LayoutStepPage } from "app/cart/components/LayoutStepPage";
import { StepDetails } from "../details/StepDetails";

export default function Page() {
  return (
    <LayoutStepPage step="shipping">
      <HeaderInStep header="Select the delivery">
        <StepDetails />
      </HeaderInStep>
    </LayoutStepPage>
  );
}
