import { Action } from "components/Action/Action";
import React from "react";
import { DiscountCodeInput } from "./components/DiscountCodeInput/DiscountCodeInput";
import { DetailsOrder } from "views/cart/components/DetailsOrder/DetailsOrder";
import SummaryTableCart from "./components/SummaryTableCart";

export type StepDetailsType = {
  code?: string;
  discount?: number;
};
export function StepDetails() {
  return (
    <form noValidate>
      <SummaryTableCart />
      <section className="mt-7 flex w-full flex-col gap-y-2 sm:flex-row">
        <DiscountCodeInput />
        <div className="grow md:max-w-md">
          <DetailsOrder />
          <div className="mt-2">
            <Action fullWidth as="button">
              <div className="px-1 py-1 text-sm">Set Delivery</div>
            </Action>
          </div>
        </div>
      </section>
    </form>
  );
}
