import { Button } from "components/Button/Button";
import { useCartContext } from "context/CartContext/CartContext";
import React from "react";
import { useForm } from "react-hook-form";

import { CartItem } from "context/CartContext/types";
import DiscountCodeInput from "./components/DiscountCodeInput/DiscountCodeInput";
import SummaryTableCart from "./components/SummaryTableCart/SummaryTableCart";
import { DetailsOrder } from "../DetailsOrder/DetailsOrder";
import { useOrderFormContext } from "../OrderFormStepper/context/OrderFormContext";

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
    <>
      <aside className="mt-[30px] w-full bg-green-100 px-2 py-5 text-center text-sm md:text-base">
        Will you give it a try?
        <span className="font-bold"> Buy for an additional 46.40 USD </span>
        and qualify for <span className="font-bold">FREE</span> shipping!
      </aside>

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
    </>
  );
}
