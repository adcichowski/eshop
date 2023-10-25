import { Action } from "components/Action/Action";
import React from "react";
import { useForm } from "react-hook-form";
import DiscountCodeInput from "./components/DiscountCodeInput/DiscountCodeInput";
import SummaryTableCart from "./components/SummaryTableCart/SummaryTableCart";
import { DetailsOrder } from "../../../DetailsOrder/DetailsOrder";
import { useOrderFormContext } from "../../../OrderFormStepper/context/OrderFormContext";
import ContentInStep from "../ContentInStep/ContentInStep";

export type CartStepType = {
  code?: string;
  discount?: number;
};
export function CartStep() {
  const cart = {};
  const { handleSetProducts } = useOrderFormContext();
  const { handleSubmit } = useForm<CartStepType>();
  if (!cart) return <></>;

  const onSubmit = handleSubmit(() => handleSetProducts(Object.values(cart)));
  return (
    <ContentInStep header="Your cart">
      <form noValidate onSubmit={onSubmit}>
        <SummaryTableCart cart={cart} />

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
