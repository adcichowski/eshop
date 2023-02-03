import React from "react";
import { AccountPopper } from "components/Header/components/HeaderPoppers/components/AccountPopper";
import { CartPopper } from "components/Header/components/HeaderPoppers/components/CartPopper/CartPopper";
import { FavoritePopper } from "components/Header/components/HeaderPoppers/components/FavoritePopper";

export function HeaderPoppers({ type }: { readonly type: string | undefined }) {
  if (type === undefined) return <></>;
  return (
    <div className="absolute flex justify-center py-[19px] bg-white border-gray border-[0.5px] top-9 -left-28 max-w-[400px] w-[400px] z-10">
      {type === "cart" && <CartPopper />}
      {type === "account" && <AccountPopper />}
      {type === "favorite" && <FavoritePopper />}
    </div>
  );
}
