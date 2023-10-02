import { AccountPopper } from "./poppers/AccountPopper";
import { CartPopper } from "./poppers/CartPopper/CartPopper";
import { FavoritePopper } from "./poppers/FavoritePopper";
import { useClickOutside } from "hooks/useClickOutside";
import { useRef } from "react";
export const Poppers = ({
  popper,
  resetPopper,
}: {
  readonly popper: string;
  resetPopper: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, resetPopper);
  return <div ref={ref}>{popperByType(popper)}</div>;
};

const popperByType = (popper: string) => {
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
