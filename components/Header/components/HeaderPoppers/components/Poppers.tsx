import { FavoriteProduct } from "lib/actions/favorite";
import { AccountPopper } from "./poppers/AccountPopper";
import { CartPopper } from "./poppers/CartPopper/CartPopper";
import { FavoritesPopper } from "./poppers/CartPopper/FavoritesPopper/FavoritesPopper";
import { CartProduct } from "lib/actions/cart";
export const Poppers = ({
  popper,
  favorites,
  cart,
}: {
  popper?: string;
  favorites: FavoriteProduct[] | undefined;
  cart: CartProduct[] | undefined;
}) => {
  switch (popper) {
    case "cart":
      return <CartPopper cart={cart} />;
    case "account":
      return <AccountPopper />;
    case "favorite":
      return <FavoritesPopper favorites={favorites} />;
    default:
      return <></>;
  }
};
