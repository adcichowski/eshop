import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import tailwindConfig from "tailwind.config";
import CheckoutForm from "./components/CheckoutForm";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { getEnv } from "utils/utils";
import ContentInStep from "../ContentInStep/ContentInStep";
import BoxWithSelects from "./components/BoxWithSelects/BoxWithSelects";
import { DetailsOrder } from "../DetailsOrder/DetailsOrder";
import { Button } from "components/Button/Button";
import { DeliverySelect } from "./components/DeliverySelect/DeliverySelect";
const stripePromise = loadStripe(
  getEnv(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
);

export function ShippingStep() {
  const [clientSecret, setClientSecret] = React.useState<undefined | string>();

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
    console.log(clientSecret);
  }, []);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: tailwindConfig.theme.colors.primary,
      },
    },
  };

  return (
    <ContentInStep header="Delivery and payment">
      <div className="grid md:grid-cols-3 md:gap-x-12">
        <div className="col-span-2 flex flex-col gap-y-2">
          <DeliverySelect />
          <BoxWithSelects
            id="delivery-method"
            header="Choose a delivery method"
          >
            {clientSecret ? (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            ) : (
              <></>
            )}
          </BoxWithSelects>
        </div>
        <div className="flex flex-col">
          <DetailsOrder />
          <Button className="mt-4 rounded-none py-2">I order and pay</Button>
        </div>
      </div>
    </ContentInStep>
  );
}
