"use server";
import { FAVORITES_PRODUCTS_COOKIE } from "constants/constants";
import { cookies } from "next/headers";
import { jsonParse } from "utils/utils";

export type FavoriteProduct = {
  id: string;
  category: string;
  image: string;
  slug: string;
  whiteFrame: boolean;
  name: string;
};

export const favoriteProductAction = (product: FavoriteProduct) => {
  const favorite = getFavoriteProducts();
  const actionOnFavorite = manageFavoriteList(product, favorite?.products);

  cookies().set(
    FAVORITES_PRODUCTS_COOKIE,
    JSON.stringify({ products: actionOnFavorite.list }),
    { httpOnly: true },
  );

  return {
    favorite: actionOnFavorite.list,
    action: actionOnFavorite.action,
  } as const;
};

export const getFavoriteProducts = () =>
  jsonParse<{ products: FavoriteProduct[] }>(
    cookies().get(FAVORITES_PRODUCTS_COOKIE)?.value,
  );

const manageFavoriteList = (
  item: FavoriteProduct,
  listItems?: FavoriteProduct[],
) => {
  const productInFavorite = listItems?.find((p) => p.id === item.id);
  if (productInFavorite) {
    const list = listItems?.filter((p) => p.id !== item.id);
    return { list, action: "removed" };
  }
  return {
    list: [item, ...(listItems || [])],
    action: "added",
  };
};
