import { AccountPopper } from "./poppers/AccountPopper";
import { CartPopper } from "./poppers/CartPopper/CartPopper";
import { FavoritesPopper } from "./poppers/FavoritesPopper/FavoritesPopper";
export const Poppers = ({ popper }: { popper?: string }) => {
  switch (popper) {
    case "cart":
      return <CartPopper />;
    case "account":
      return <AccountPopper />;
    case "favorite":
      return <FavoritesPopper />;
    default:
      return <></>;
  }
};
