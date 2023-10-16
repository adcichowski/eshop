"use client";
import { HeartIcon } from "lucide-react";
import { manageFavorites } from "app/actions";
import { useToastContext } from "context/ToastContext/ToastContext";

export function FavoriteInput({
  id,
  name,
  image,
  favorite,
}: {
  readonly id: string;
  name: string;
  image: string;
  favorite: boolean;
}) {
  const { addToast } = useToastContext();
  const handleFavorite = async (product: {
    id: string;
    name: string;
    image: string;
  }) => {
    const { action } = await manageFavorites(product);
    if (action === "like") {
      addToast("success", "Product has been added as favorite");
    }
    if (action === "unlike") {
      addToast("success", "Product has been removed from favorite");
    }
  };
  return (
    <>
      <input
        type="checkbox"
        id={id}
        onChange={() => handleFavorite({ id, name, image })}
        name="A3-confirmation"
        checked={favorite}
        className="favorite absolute  box-border h-full w-full cursor-pointer opacity-0"
      />
      <div>
        <HeartIcon />
      </div>
      <label htmlFor={id} className="sr-only">
        {favorite ? "Remove from favorite lies" : "Set as favorite product"}
      </label>
    </>
  );
}
