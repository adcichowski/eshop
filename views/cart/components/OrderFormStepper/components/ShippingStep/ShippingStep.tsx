import React, { FormEvent, useMemo } from "react";
import tailwindConfig from "tailwind.config";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { getEnv } from "utils/utils";
import ContentInStep from "../ContentInStep/ContentInStep";
import { useCreatePayment } from "./hooks/useCreatePayment";
import { useOrderFormContext } from "../../context/OrderFormContext";
import { DeliverySelect } from "./components/DeliverySelect/DeliverySelect";
import { DetailsOrder } from "views/cart/components/DetailsOrder/DetailsOrder";
import { Button } from "components/Button/Button";

export function ShippingStep() {
  const { data, mutate, status } = useCreatePayment();
  const { order, account } = useOrderFormContext();

  const orderProducts = useMemo(() => {
    if (order?.products) {
      return order.products.map((product) => ({
        variantId: product.variant.id,
        amount: product.amount,
        productId: product.id,
      }));
    }
  }, [order?.products]);
  const { handleSetPayment } = useOrderFormContext();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (account && orderProducts) {
      console.log({
        email: account.email,
        orderProducts,
      });
      // mutate({
      //   email: account.email,
      //   orderProducts,
      // });
    }

    if (data?.clientSecret) handleSetPayment(data.clientSecret);
  };

  return (
    <ContentInStep header="Delivery order">
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-3 md:gap-x-12 mb-32"
      >
        <div className="col-span-2 flex flex-col gap-y-2">
          <DeliverySelect />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col sticky top-40">
            <DetailsOrder />
            <Button type="submit" className="mt-4 rounded-none py-2">
              I order and pay
            </Button>
          </div>
        </div>
      </form>
    </ContentInStep>
  );
}

// {data?.clientSecret ? (
//   <Elements options={options} stripe={stripePromise}>
//     <CheckoutForm />
//   </Elements>
// ) : (
//   <></>
// )}
