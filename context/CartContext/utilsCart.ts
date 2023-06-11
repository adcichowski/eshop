import type { CartContextType, CartItem } from "./types";

export const changeAmountOfProduct = (
  product: { id: string; amount: number },
  cartState: CartContextType["cart"] | undefined
) => {
  if (!cartState) return;
  const productCart = cartState?.[product.id];
  const quantityDifference = productCart.amount - product.amount;
  if (product.amount === 0) {
    const updatedStateCart = Object.fromEntries(
      Object.entries(cartState).filter(([id]) => id !== product.id)
    );
    return {
      quantityDifference,
      updatedStateCart,
    };
  }
  const updatedStateCart = {
    ...cartState,
    [product.id]: { ...productCart, amount: product.amount },
  };
  return {
    quantityDifference,
    updatedStateCart,
  };
};

export const deleteProductFromCart = (
  product: { id: string },
  cartState: CartContextType["cart"] | undefined
) => {
  const deleteProduct = cartState?.[product.id];
  if (!deleteProduct) return cartState;
  if (deleteProduct.amount === 1) {
    const cartWithoutDeleted = Object.entries(cartState).filter(
      ([id]) => id !== product.id
    );
    if (cartWithoutDeleted.length === 0) return undefined;
    return Object.fromEntries(cartWithoutDeleted);
  }
  return {
    ...cartState,
    [product.id]: { ...deleteProduct, amount: deleteProduct.amount - 1 },
  };
};

export const addProductToCart = (
  product: CartItem,
  cartState: CartContextType["cart"] | undefined
) => {
  const productInCart = cartState?.[product.id];
  if (!productInCart) {
    return {
      ...cartState,
      [product.id]: { ...product, amount: product.amount },
    };
  }

  return {
    ...cartState,
    [product.id]: {
      ...product,
      amount: Number(cartState?.[product.id].amount) + product.amount,
    },
  };
};
