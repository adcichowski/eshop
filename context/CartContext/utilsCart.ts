import type { CartContextType, CartItem } from "./types";

export const deleteProductFromCart = (
  product: CartItem,
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
    return { ...cartState, [product.id]: { ...product, amount: 1 } };
  }

  return {
    ...cartState,
    [product.id]: {
      ...product,
      amount: Number(cartState?.[product.id].amount) + 1,
    },
  };
};
