import { Action } from "components/Action/Action";
import React from "react";
import DiscountCodeInput from "./components/DiscountCodeInput/DiscountCodeInput";
import SummaryTableCart from "./components/SummaryTableCart/SummaryTableCart";
import { DetailsOrder } from "../../../DetailsOrder/DetailsOrder";
import ContentInStep from "../ContentInStep/ContentInStep";

export type CartStepType = {
  code?: string;
  discount?: number;
};
export function CartStep() {
  const cart = {};
  // const { handleSetProducts } = useOrderFormContext();

  if (!cart) return <></>;

  return (
    <ContentInStep header="Your cart">
      <form noValidate>
        <SummaryTableCart />

        <section className="mt-7 flex w-full flex-col gap-y-2 sm:flex-row">
          <DiscountCodeInput />
          <div className="grow md:max-w-md">
            <DetailsOrder />
            <div className="mt-2">
              <Action as="button">
                <div className="px-1 py-1 text-sm">Set Delivery</div>
              </Action>
            </div>
          </div>
        </section>
      </form>
    </ContentInStep>
  );
}
