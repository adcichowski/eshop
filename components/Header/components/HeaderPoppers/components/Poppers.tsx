import { FavoriteProduct } from "app/actions";
import { AccountPopper } from "./poppers/AccountPopper";
import { CartPopper } from "./poppers/CartPopper/CartPopper";
import { FavoritesPopper } from "./poppers/CartPopper/FavoritesPopper/FavoritesPopper";
export const Poppers = ({
  popper,
  favorites,
}: {
  popper?: string;
  favorites: FavoriteProduct[] | undefined;
}) => {
  switch (popper) {
    case "cart":
      return <CartPopper />;
    case "account":
      return <AccountPopper />;
    case "favorite":
      return <FavoritesPopper favorites={favorites} />;
    default:
      return <></>;
  }
};
