"use server";
import { createOrder, getProductsByIds } from "lib";
import { StatusOrder } from "lib/hygraph/generated/graphql";
import { Stripe } from "stripe";
import { getEnv } from "utils/utils";
import { CartProduct } from "./cart";
import { cookies } from "next/headers";

export type CreatePaymentParamsType = {
  orderProducts: CartProduct[];
  email: string;
};

export type ProductToPaymentType = {
  width: number;
  height: number;
  id: string;
  quantity: number;
  price: number;
  variantId: string;
};

export type SuccessCreatePaymentIntent = {
  clientSecret: string;
  orderId: string;
};

export type ErrorCreatePaymentIntent = {
  error: string;
};

const FIVE_MINUTES = 300000;
export const createPaymentIntent = async ({
  orderProducts,
  email,
}: CreatePaymentParamsType) => {
  const productsData = await getProductsByIds(orderProducts.map((v) => v.id));

  //Check products price and filter if is not equal
  const productsToPayment = orderProducts
    .map((dangerProduct) => {
      const securedProduct = productsData.find(
        (resProduct) => resProduct.id === dangerProduct.id,
      );
      const securedVariant = securedProduct?.variants.find(
        (variant) => variant.id === dangerProduct.variant.id,
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
    .filter((product): product is ProductToPaymentType => Boolean(product));

  const stripeSecretKey = getEnv(
    process.env.STRIPE_SECRET_KEY,
    "STRIPE_SECRET_KEY",
  );

  const stripe = new Stripe(stripeSecretKey, { apiVersion: "2023-10-16" });

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    payment_method_types: ["card", "p24", "paypal"],
    amount: calculateOrderAmount(productsToPayment),
    currency: "eur",
  });

  const order = await createOrder({
    email,
    orderItems: {
      create: productsToPayment.map(({ width, height, quantity, price }) => ({
        width,
        height,
        quantity,
        total: quantity * price,
      })),
    },
    statusOrder: StatusOrder.Unpaid,
    totalOrderPrice: calculateOrderAmount(productsToPayment),
    stripeCheckoutId: paymentIntent.id,
  });

  if (!order) {
    throw new Error("Order not created");
  }
  if (!paymentIntent.client_secret) {
    throw new Error("Client secret not created");
  }

  cookies().set("order", JSON.stringify({ orderId: order.id }), {
    httpOnly: true,
    expires: Date.now() + FIVE_MINUTES,
  });

  return { orderId: order.id, clientSecret: paymentIntent.client_secret };
};

const calculateOrderAmount = (securedProducts: ProductToPaymentType[]) =>
  securedProducts.reduce((orderAmount, product) => {
    return orderAmount + product.price * product.quantity;
  }, 0);
