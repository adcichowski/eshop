"use client";
import React from "react";
import { HeaderInStep } from "app/cart/components/HeaderInStep";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import tailwindConfig from "tailwind.config";
import { getEnv } from "utils/utils";
import { Elements } from "@stripe/react-stripe-js";
import { useOrderContext } from "context/OrderContext/OrderContext";
import { CheckoutForm } from "./CheckoutForm";

const stripePromise = loadStripe(
  getEnv(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY",
  ),
);

export function PaymentStep() {
  const { order } = useOrderContext();
  const options: StripeElementsOptions = {
    clientSecret: order?.clientSecret,
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: tailwindConfig.theme.colors.primary,
      },
    },
  };
  return (
    <Elements options={options} stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
