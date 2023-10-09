import { FavoriteProduct } from "./FavoritesContext";

export const manageFavorites = (
  product: FavoriteProduct,
  favorite: FavoriteProduct[] | [],
) => {
  const productInFavorite = favorite.find((p) => p.id === product.id);
  if (productInFavorite) {
    const removedProductFromFavorite = favorite.filter(
      (p) => p.id === product.id,
    );
    return {
      favorite: removedProductFromFavorite,
      action: "unlike",
    } as const;
  }
  return { favorite: [...favorite, product], action: "like" };
};
