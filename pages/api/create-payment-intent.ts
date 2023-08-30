import {
  CreateOrderDocument,
  CreateOrderMutation,
  CreateOrderMutationVariables,
  GetProductsByIdsDocument,
  GetProductsByIdsQuery,
  GetProductsByIdsQueryVariables,
  StatusOrder,
} from "generated/graphql";
import { authorizedApolloClient } from "graphql/apolloClient";
import { NextApiHandler } from "next";
import { Stripe } from "stripe";

export type UserDataBody = {
  orderProducts: { variantId: string; amount: number; productId: string }[];
  email: string;
};

export type SecuredProduct = {
  price: number;
  id: string;
  variantId: string;
  quantity: number;
  width: number;
  height: number;
};

export type SuccessCreatePaymentIntent = {
  clientSecret: string | undefined;
};

export type ErrorCreatePaymentIntent = {
  error: string;
};

const handler: NextApiHandler<
  SuccessCreatePaymentIntent | ErrorCreatePaymentIntent
> = async (req, res) => {
  const user = req.body as UserDataBody;
  const { data } = await authorizedApolloClient.query<
    GetProductsByIdsQuery,
    GetProductsByIdsQueryVariables
  >({
    query: GetProductsByIdsDocument,
    variables: {
      productsId: user.orderProducts.map(({ productId }) => productId),
    },
  });

  //Check products price and filter if is not equal
  const filteredDangerousProducts = user.orderProducts
    .map((dangerProduct) => {
      const securedProduct = data.products.find(
        (resProduct) => resProduct.id === dangerProduct.productId
      );
      const securedVariant = securedProduct?.variants.find(
        (variant) => variant.id === dangerProduct.variantId
      );
      if (securedProduct && securedVariant) {
        const { width, height, price } = securedVariant;
        return {
          width,
          height,
          id: securedProduct.id,
          quantity: dangerProduct.amount,
          price,
          variantId: securedVariant.id,
        };
      }
    })
    .filter((product): product is SecuredProduct => Boolean(product));

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey)
    return res.status(405).json({ error: "Stripe secret key not set" });
  const stripe = new Stripe(stripeSecretKey, { apiVersion: "2022-11-15" });

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    payment_method_types: ["card", "p24", "paypal"],
    amount: calculateOrderAmount(filteredDangerousProducts),
    currency: "eur",
  });

  await authorizedApolloClient.mutate<
    CreateOrderMutation,
    CreateOrderMutationVariables
  >({
    mutation: CreateOrderDocument,
    variables: {
      email: user.email,
      orderItems: {
        create: filteredDangerousProducts.map(
          ({ width, height, quantity, price }) => ({
            width,
            height,
            quantity,
            total: quantity * price,
          })
        ),
      },
      statusOrder: StatusOrder.Progress,
      totalOrderPrice: calculateOrderAmount(filteredDangerousProducts),
      stripeCheckoutId: paymentIntent.id,
    },
  });
  // if (!userOrder.data?.createOrder) {
  //   return res.json({ error: "Problem while create order" });
  // }
  console.log(paymentIntent.client_secret);
  return res.json({
    clientSecret: paymentIntent.client_secret ?? undefined,
  });
};

export default handler;

const calculateOrderAmount = (securedProducts: SecuredProduct[]) =>
  securedProducts.reduce((orderAmount, product) => {
    return orderAmount + product.price * product.quantity;
  }, 0);
