"use server";
import { AccountPopper } from "./poppers/AccountPopper";
import { CartPopper } from "./poppers/CartPopper/CartPopper";
import { FavoritePopper } from "./poppers/FavoritePopper";
export const Poppers = ({
  popper,
}: {
  readonly popper: string | undefined;
}) => {
  switch (popper) {
    case "cart":
      return <CartPopper />;
    case "account":
      return <AccountPopper />;
    case "favorite":
      return <FavoritePopper />;
    default:
      return <></>;
  }
};
