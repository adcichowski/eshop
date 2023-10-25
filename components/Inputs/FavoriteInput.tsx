"use client";
import { HeartIcon } from "lucide-react";
import { useToastContext } from "context/ToastContext/ToastContext";
import clsx from "clsx";
import { favoriteProductAction } from "../../lib/actions/favorite";

export function FavoriteInput({
  product,
  size,
}: {
  product: {
    readonly id: string;
    readonly name: string;
    readonly image: string;
    readonly favorite: boolean;
    readonly slug: string;
    readonly category: string;
  };
  readonly size?: number;
}) {
  const { addToast } = useToastContext();
  const handleFavorite = async () => {
    const { action } = await favoriteProductAction(product);
    if (action === "added") {
      addToast("success", "Product has been added as favorite");
    }
    if (action === "removed") {
      addToast("success", "Product has been removed from favorite");
    }
  };
  return (
    <div className="relative">
      <input
        type="checkbox"
        id={product.id}
        onChange={handleFavorite}
        name="A3-confirmation"
        checked={product.favorite}
        className="favorite absolute  box-border h-full w-full cursor-pointer opacity-0"
      />
      <div>
        <HeartIcon
          size={size}
          className={clsx(product.favorite && `fill-red-200 stroke-red-200`)}
        />
      </div>
      <label htmlFor={product.id} className="sr-only">
        {product.favorite
          ? "Remove from favorite lies"
          : "Set as favorite product"}
      </label>
    </div>
  );
}
