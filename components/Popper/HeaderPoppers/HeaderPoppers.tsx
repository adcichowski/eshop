import React from "react";
import { AccountPopper } from "components/Popper/HeaderPoppers/components/AccountPopper";
import { CartPopper } from "components/Popper/HeaderPoppers/components/CartPopper/CartPopper";
import { FavoritePopper } from "components/Popper/HeaderPoppers/components/FavoritePopper";

export function HeaderPoppers({ type }: { readonly type: string | undefined }) {
  if (type === undefined) return <></>;
  switch (type) {
    case "cart":
      return <CartPopper />;
    case "account":
      return <AccountPopper />;
    case "favorite":
      return <FavoritePopper />;
    default:
      return <></>;
  }
}
