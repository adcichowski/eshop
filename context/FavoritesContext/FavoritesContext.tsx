import { createContext, useContext, useState } from "react";
import { manageFavorites } from "./utilsFavorites";
import { baseUrl } from "../../constants";

type FavoritesContextType = {
  readonly handleFavorite: (type: FavoriteProduct) => void;
  favorites: FavoriteProduct[];
  isFavoriteProduct: (productId: string) => boolean;
};

export type FavoriteProduct = {
  id: string;
  image: string;
  name: string;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);
export const FavoritesProvider = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<FavoriteProduct[]>([]);

  return (
    <FavoritesContext.Provider
      value={{
        handleFavorite: async (product: FavoriteProduct) => {
          const managedFavorite = manageFavorites(product, favorites);
          const res = await fetch(`${baseUrl}/api/favorites`, {
            method: "POST",
            body: JSON.stringify(managedFavorite.favorite),
          });

          if (res.status !== 200) return;
          if (managedFavorite.action === "like") {
            setFavorites(managedFavorite.favorite);
            return;
          }
          setFavorites(managedFavorite.favorite);
          return;
        },
        favorites,
        isFavoriteProduct: (productId: string) =>
          Boolean(favorites.find((p) => p.id === productId)),
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("Wrap components using Favorites Context Provider");
  }
  return context;
};
