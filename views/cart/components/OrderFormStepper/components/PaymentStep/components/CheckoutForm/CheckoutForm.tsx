import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { BoxWithSelects } from "../../../ShippingStep/components/BoxWithSelects/BoxWithSelects";
import { DetailsOrder } from "../../../../../DetailsOrder/DetailsOrder";
import { Button } from "components/Button/Button";
import { DeliverySelect } from "../../../ShippingStep/components/DeliverySelect/DeliverySelect";

export function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        payment_method_data: {
          billing_details: {
            address: {
              city: "Gdansk",
              country: "pl",
              line1: "Lawendowe Wzgórze",
              line2: "Bulonska",
              postal_code: "80-288",
              state: "pl",
            },
            email: "a@gmail.com",
          },
        },
        return_url: "http://localhost:3000",
      },
    });
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
      <div className="flex flex-col">
        <div className="flex flex-col sticky top-40">
          <DetailsOrder />
          <Button type="submit" className="mt-4 rounded-none py-2">
            I order and pay
          </Button>
        </div>
      </div>
    </form>
  );
}
