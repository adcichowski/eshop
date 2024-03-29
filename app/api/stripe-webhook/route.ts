/// <reference types="stripe-event-types" />

import { updateStatusOrderPaid } from "lib";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getEnv } from "utils/utils";

const stripeKey = getEnv(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY",
);

const handler = async (req: NextRequest) => {
  const payload = await req.text();
  const sig = req.headers.get("stripe-signature");
  try {
    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });

    if (typeof sig !== "string") {
      throw new Error("Signature is not a string!");
    }
    const event = stripe.webhooks.constructEvent(
      payload,
      sig,
      getEnv(process.env.STRIPE_WEBHOOK, "STRIPE_WEBHOOK"),
    );
    console.log(event);
    // Handle the event
    eventStripeWebhook(event);
    // Return a 200 response to acknowledge receipt of the event
    return NextResponse.json({ status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        { message: `Webhook Error: ${err.message}` },
        {
          status: 400,
        },
      );
    }
  }
  return NextResponse.json({ status: 200 });
};

const eventStripeWebhook = async (event: Stripe.Event) => {
  const type = event.type;
  switch (type) {
    case "charge.succeeded":
      const { payment_intent, payment_method } = event.data.object;

      if (
        typeof payment_intent === "string" &&
        typeof payment_method === "string"
      ) {
        await updateStatusOrderPaid({
          stripeCheckoutId: payment_intent,
          paymentMethod: payment_method,
        });
      }
      return;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
};

export { handler as POST };
