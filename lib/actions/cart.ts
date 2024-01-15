"use server";
import { CART_COOKIE } from "constants/constants";
import { cookies } from "next/headers";
import { jsonParse } from "utils/utils";

type CartActions = "remove" | "reduce" | "add" | "changeAmount";
export interface CartProduct {
  readonly id: string;
  readonly whiteFrame: boolean;
  readonly sale: number | null | undefined;
  readonly image: string;
  readonly variant: {
    readonly id: string;
    readonly width: number;
    readonly height: number;
  };
  readonly title: string;
  readonly amount: number;
  readonly price: number;
}

export const getCartProducts = () =>
  jsonParse<{ cart: CartProduct[] }>(cookies().get(CART_COOKIE)?.value);

export const runCartAction = (product: CartProduct, action: CartActions) => {
  const updatedCart = getUpdatedCart(product, action);
  cookies().set(CART_COOKIE, JSON.stringify({ cart: updatedCart }), {
    httpOnly: true,
  });
  return updatedCart;
};

const reduceNumberProductFromCart = (
  product: CartProduct,
  cart: CartProduct[] | undefined,
) => {
  const removedProduct = cart?.find(
    (cartProduct) => cartProduct.id === product.id,
  );
  if (removedProduct?.amount === 1) {
    return removeProductFromCart(product, cart);
  }

  if (removedProduct) {
    return cart?.map((cartProduct) => {
      if (cartProduct.id === product.id) {
        return { ...cartProduct, amount: removedProduct.amount - 1 };
      }
      return cartProduct;
    });
  }
};

export const clearCartCookie = () => {
  cookies().delete(CART_COOKIE);
};

const addProductToCart = (
  product: CartProduct,
  cart: CartProduct[] | undefined,
) => {
  const addedProduct = cart?.find(
    (cartProduct) => cartProduct.id === product.id,
  );
  if (addedProduct) {
    return cart?.map((cartProduct) => {
      if (cartProduct.id === product.id) {
        return { ...addedProduct, amount: addedProduct?.amount + 1 };
      }
      return cartProduct;
    });
  }

  return [...(cart || []), product];
};

const removeProductFromCart = (
  product: CartProduct,
  cart: CartProduct[] | undefined,
) => cart?.filter((cartProduct) => cartProduct.id !== product.id);

const getUpdatedCart = (product: CartProduct, action: CartActions) => {
  const data = getCartProducts();
  switch (action) {
    case "reduce":
      return reduceNumberProductFromCart(product, data?.cart);
    case "remove":
      return removeProductFromCart(product, data?.cart);
    case "add":
      return addProductToCart(product, data?.cart);
  }
};
