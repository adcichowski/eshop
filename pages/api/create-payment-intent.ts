import { NextApiHandler } from "next";
import { Stripe } from "stripe";
const calculateOrderAmount = () => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

const handler: NextApiHandler = async (_req, res) => {
  // const { items } = req.body;

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey)
    return res.status(405).json({ error: "Stripe secret key not set" });
  const stripe = new Stripe(stripeSecretKey, { apiVersion: "2022-11-15" });

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    clientSecret: paymentIntent.client_secret,
  });
};

export default handler;
