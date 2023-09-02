import React from "react";
import ContentInStep from "../ContentInStep/ContentInStep";
import { useOrderFormContext } from "../../context/OrderFormContext";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import tailwindConfig from "tailwind.config";
import { getEnv } from "utils/utils";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./components/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  getEnv(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"
  )
);

export function PaymentStep() {
  const { payment } = useOrderFormContext();
  const options: StripeElementsOptions = {
    clientSecret: payment?.id,
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: tailwindConfig.theme.colors.primary,
      },
    },
  };
  return (
    <ContentInStep header="Payment For Order">
      <form id="payment-form">
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </form>
    </ContentInStep>
  );
}
