import { NextApiHandler, PageConfig } from "next";
import { Readable } from "stream";
import { Stripe } from "stripe";
import { getEnv } from "utils/utils";

const handler: NextApiHandler = async (req, res) => {
  try {
    const stripeKey = getEnv(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    const stripe = new Stripe(stripeKey, { apiVersion: "2022-11-15" });
    const body = await buffer(req);
    const sig = req.headers["stripe-signature"];

    if (typeof sig !== "string") {
      throw new Error("Signature is not a string!");
    }

    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      getEnv(process.env.STRIPE_WEBHOOK)
    );
    // Handle the event
    switch (event.type) {
      case "checkout.session.async_payment_failed":
        const checkoutSessionAsyncPaymentFailed = event.data.object;
        // Then define and call a function to handle the event checkout.session.async_payment_failed
        break;
      case "checkout.session.async_payment_succeeded":
        const checkoutSessionAsyncPaymentSucceeded = event.data.object;
        // Then define and call a function to handle the event checkout.session.async_payment_succeeded
        break;
      case "checkout.session.completed":
        const checkoutSessionCompleted = event.data.object;
        // Then define and call a function to handle the event checkout.session.completed
        break;
      case "checkout.session.expired":
        const checkoutSessionExpired = event.data.object;
        // Then define and call a function to handle the event checkout.session.expired
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

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
