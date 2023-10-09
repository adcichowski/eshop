import { HeartIcon } from "lucide-react";
import { useFavoritesContext } from "context/FavoritesContext/FavoritesContext";

export function FavoriteInput({
  id,
  name,
  image,
}: {
  readonly id: string;
  name: string;
  image: string;
}) {
  const { handleFavorite, isFavoriteProduct } = useFavoritesContext();
  return (
    <>
      <input
        type="checkbox"
        id={id}
        onChange={() => handleFavorite({ id, name, image })}
        name="A3-confirmation"
        checked={isFavoriteProduct(id)}
        className="favorite absolute  box-border h-full w-full cursor-pointer opacity-0"
      />
      <div>
        <HeartIcon />
      </div>
      <label htmlFor={id} className="sr-only">
        Favorite product
      </label>
    </>
  );
}
