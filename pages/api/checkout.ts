import { Stripe } from "stripe";
import {
  GetVariantsByIdsDocument,
  GetVariantsByIdsQuery,
  GetVariantsByIdsQueryVariables,
} from "generated/graphql";
import { authorizedApolloClient } from "graphql/apolloClient";
import { NextApiHandler } from "next";

export type UserDataBody = {
  products: SecuredProduct[];
};

export type SecuredProduct = {
  __typename?: "ProductVariantType" | undefined;
  price: number;
  id: string;
  variantId: string;
  amount: number;
  title: string;
};
const handler: NextApiHandler = async (req, res) => {
  const userData = JSON.parse(req.body) as UserDataBody;
  const { data } = await authorizedApolloClient.query<
    GetVariantsByIdsQuery,
    GetVariantsByIdsQueryVariables
  >({
    query: GetVariantsByIdsDocument,
    variables: {
      variants: userData.products
        .map((product) => product.variantId)
        .filter((variant, index, array) => array.indexOf(variant) === index),
    },
  });
  const securedProducts = userData.products
    .map((product) => {
      const securedVariant = data.productVariantTypes.find(
        (resVariant) => resVariant.id === product.variantId
      );
      if (securedVariant) return { ...product, ...securedVariant };
    })
    .filter((product): product is SecuredProduct => Boolean(product));

  const stripeLineItems = securedProducts.map((product) => ({
    price_data: {
      currency: "USD",
      unit_amount: product.price,
      product_data: {
        name: product.title,
      },
    },
    quantity: product?.amount,
  }));
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey)
    return res.status(405).json({ error: "Stripe secret key not set" });
  const stripe = new Stripe(stripeSecretKey, { apiVersion: "2022-11-15" });

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    locale: "pl",
    payment_method_types: ["blik", "card", "p24"],
    success_url: "https://localhost:3000/checkout/success",
    cancel_url: "https://localhost:3000/checkout/cancel",
    line_items: stripeLineItems,
  });

  return res.status(200).json({ session });
};
export default handler;
