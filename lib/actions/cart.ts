"use server";
import { cookies } from "next/headers";
import { CART_COOKIE } from "../../constants";
import { jsonParse } from "utils/utils";

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

export const runCartAction = (
  product: CartProduct,
  action: "remove" | "add" | "delete",
) => {
  const data = getCartProducts();
  if (action === "remove") {
    const listAfterRemove = removeProductFromCart(product, data?.cart);

    cookies().set(CART_COOKIE, JSON.stringify({ cart: listAfterRemove }), {
      httpOnly: true,
    });

    return {
      cart: listAfterRemove,
    };
  }

  if (action === "add") {
    const updatedCart = addProductToCart(product, data?.cart);
    cookies().set(CART_COOKIE, JSON.stringify({ cart: updatedCart }), {
      httpOnly: true,
    });
    return { cart: updatedCart };
  }
};

const removeProductFromCart = (product: CartProduct, cart?: CartProduct[]) => {
  const removedProduct = cart?.find(
    (cartProduct) => cartProduct.id === product.id,
  );
  if (removedProduct?.amount === 1) {
    return cart?.filter((productCart) => productCart.id !== product.id);
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

const addProductToCart = (product: CartProduct, cart?: CartProduct[]) => {
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
