import { clsx } from "clsx";
import { Action } from "components/Action/Action";
import { FavoriteInput } from "components/Inputs/FavoriteInput";
import { useClientContext } from "context/ClientContext/ClientContext";
import { FavoriteProduct } from "lib/actions/favorite";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
export function FavoritesPopper() {
  const { favorites } = useClientContext();
  if (!favorites || !favorites.length) return <EmptyFavoritesPopper />;
  return (
    <section className="px-2 w-full flex flex-col gap-2">
      <h2 className="font-medium my-3">Favorites</h2>

      <ul className="max-h-52 w-full grid grid-cols-2 gap-x-6 gap-y-7 overflow-y-scroll items-center justify-center md:justify-normal">
        {favorites.map((product) => (
          <FavoriteProductPopper key={product.id} {...product} />
        ))}
      </ul>
      <span className="text-xs self-end my-2">
        Number of products: {favorites.length}
      </span>
    </section>
  );
}

const EmptyFavoritesPopper = () => {
  return (
    <div className="flex flex-col items-center gap-y-2 px-10 text-center w-full py-3">
      <div className="justify-self-center">
        <HeartIcon size={30} strokeWidth={1.5} />
      </div>
      <div className="line whitespace-nowrap text-sm leading-6">
        Your likes list are empty
      </div>
      <Action as="link" href="/">
        <span className="whitespace-nowrap">Go to new products</span>
      </Action>
    </div>
  );
};

export function FavoriteProductPopper(favorite: FavoriteProduct) {
  return (
    <section
      className="flex flex-col items-center gap-1"
      aria-labelledby={favorite.id}
    >
      <Image
        width={90}
        className={`border ${clsx(favorite.whiteFrame && "p-1")}`}
        aria-describedby={favorite.id}
        height={110}
        alt=""
        src={favorite.image}
      />
      <Action
        href={`/${favorite.category}/poster/${favorite.slug}`}
        as="link"
        className="text-sm hover:underline cursor-pointer hover:font-medium"
      >
        <h3 id={favorite.id} className="max-w-[150px] truncate">
          {favorite.name}
        </h3>
      </Action>
      <FavoriteInput product={{ ...favorite, favorite: true }} size={20} />
    </section>
  );
}
