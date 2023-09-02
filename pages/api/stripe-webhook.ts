/// <reference types="stripe-event-types" />

import { NextApiHandler, PageConfig } from "next";
import { Readable } from "stream";
import { Stripe } from "stripe";
import { getEnv } from "utils/utils";

const handler: NextApiHandler = async (req, res) => {
  try {
    const stripeKey = getEnv(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"
    );
    const stripe = new Stripe(stripeKey, { apiVersion: "2022-11-15" });
    const body = await buffer(req);
    const sig = req.headers["stripe-signature"];

    if (typeof sig !== "string") {
      throw new Error("Signature is not a string!");
    }

    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      getEnv(process.env.STRIPE_WEBHOOK, "STRIPE_WEBHOOK")
    );

    // Handle the event
    eventStripeWebhook(event);

    // Return a 200 response to acknowledge receipt of the event
    res.status(200).end();
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  }
};

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default handler;

const eventStripeWebhook = async (event: Stripe.Event) => {
  const type = event.type as Stripe.DiscriminatedEvent.Type;
  // const charge = event.data.object as Stripe.Charge;
  switch (type) {
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
};
