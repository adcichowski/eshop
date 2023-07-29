import { Button } from "components/Button/Button";
import { useCartContext } from "context/CartContext/CartContext";
import React from "react";
import { useForm } from "react-hook-form";
import DiscountCodeInput from "./components/DiscountCodeInput/DiscountCodeInput";
import SummaryTableCart from "./components/SummaryTableCart/SummaryTableCart";
import { DetailsOrder } from "../DetailsOrder/DetailsOrder";
import { useOrderFormContext } from "../OrderFormStepper/context/OrderFormContext";
import ContentInStep from "../ContentInStep/ContentInStep";

export type CartStepType = {
  code?: string;
  discount?: number;
};
export function CartStep() {
  const { cart } = useCartContext();
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
            <Button className="mt-4 w-full rounded-none py-2">
              Set Delivery
            </Button>
          </div>
        </section>
      </form>
    </ContentInStep>
  );
}
