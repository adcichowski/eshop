import { Action } from "components/Action/Action";
import React from "react";
import { DiscountCodeInput } from "./components/DiscountCodeInput/DiscountCodeInput";
import { SummaryTableCart } from "./components/SummaryTableCart";
import { DetailsOrder } from "app/cart/@step/details/components/DetailsOrder/DetailsOrder";

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
          <div className="mt-2 flex items-stretch text-center">
            <Action fullWidth as="link" href="/cart/account">
              <div className="text-sm py-2">Set Delivery</div>
            </Action>
          </div>
        </div>
      </section>
    </form>
  );
}
