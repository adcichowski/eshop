import { HeaderInStep } from "app/cart/components/HeaderInStep";
import { LayoutStepPage } from "app/cart/components/LayoutStepPage";
import { PackageIcon } from "lucide-react";
import { SubsectionsSummary } from "./components/SubsectionsSummary";
export default function PageSummary() {
  return (
    <LayoutStepPage step="summary">
      <HeaderInStep header="Summary">
        <>
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-y-3">
              <PackageIcon
                strokeWidth={1.25}
                aria-describedby="orderInfo"
                className="bg-primary rounded-full p-[10px] stroke-white border-none"
                size={60}
              />
              <p id="orderInfo" className="text-base">
                Order placed successfully
              </p>
            </div>
          </div>
          <div className="text-base">
            <HeaderInStep
              headingWeight="font-normal"
              headingSize="small"
              header="Order Details"
            >
              <SubsectionsSummary />
            </HeaderInStep>
          </div>
        </>
      </HeaderInStep>
    </LayoutStepPage>
  );
}
