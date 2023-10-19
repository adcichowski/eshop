"use server";

import { FAVORITES_PRODUCTS_COOKIE } from "../constants";
import { cookies } from "next/headers";
import { jsonParse } from "../utils/utils";
export type FavoriteProduct = {
  id: string;
  image: string;
  name: string;
};

export const manageFavorites = async (product: FavoriteProduct) => {
  const favorite = getFavoriteProducts();
  const productInFavorite = favorite?.products.find((p) => p.id === product.id);
  if (productInFavorite) {
    const removedProductFromFavorite = favorite?.products.filter(
      (p) => p.id !== product.id,
    );

    cookies().set(
      FAVORITES_PRODUCTS_COOKIE,
      JSON.stringify({ products: removedProductFromFavorite }),
      { httpOnly: true },
    );

    return {
      favorite: removedProductFromFavorite,
      action: "unlike",
    } as const;
  }
  cookies().set(
    FAVORITES_PRODUCTS_COOKIE,
    JSON.stringify({ products: [...(favorite?.products || []), product] }),
    { httpOnly: true },
  );
  return { favorite: [...(favorite?.products || []), product], action: "like" };
};

export const getFavoriteProducts = () =>
  jsonParse<{ products: FavoriteProduct[] }>(
    cookies().get(FAVORITES_PRODUCTS_COOKIE)?.value,
  );
