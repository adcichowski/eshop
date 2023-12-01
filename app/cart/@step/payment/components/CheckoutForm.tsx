"use client";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { DetailsOrder } from "views/cart/components/DetailsOrder/DetailsOrder";
import { BoxWithSelects } from "./BoxWithSelects/BoxWithSelects";
import { Action } from "components/Action/Action";
import { useOrderContext } from "context/OrderContext/OrderContext";
import { useRouter } from "next/navigation";

export function CheckoutForm() {
  const { push } = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const { personData } = useOrderContext();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      confirmParams: {
        payment_method_data: {
          billing_details: {
            address: {
              city: personData?.city,
              country: "pl",
              line1: personData?.street,
              line2: "",
              postal_code: personData?.postalCode,
              state: "pl",
            },

            email: personData?.email,
          },
        },
      },
    });
    if (error) return;
    push("/cart/summary");
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="grid md:grid-cols-3 md:gap-x-12 mb-32"
    >
      <div className="col-span-2 flex flex-col gap-y-2">
        <BoxWithSelects id="delivery-method" header="Choose a delivery method">
          <PaymentElement
            options={{
              fields: { billingDetails: { address: "never" } },
              layout: "accordion",
            }}
            id="payment-element"
          />
        </BoxWithSelects>
      </div>
      <div className="flex flex-col col-span-2 md:col-span-1 md:mx-2 relative">
        <div className="flex flex-col sticky gap-2">
          <DetailsOrder />
          <Action as="button" type="submit">
            <div className="py-2 text-sm">I order and pay</div>
          </Action>
        </div>
      </div>
    </form>
  );
}
