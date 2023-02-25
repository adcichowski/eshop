import { AccountPopper } from "components/Header/components/HeaderPoppers/components/AccountPopper";
import { CartPopper } from "components/Header/components/HeaderPoppers/components/CartPopper/CartPopper";
import { FavoritePopper } from "components/Header/components/HeaderPoppers/components/FavoritePopper";

export function HeaderPoppers({ type }: { readonly type: string | undefined }) {
  if (type === undefined) return <></>;
  return (
    <div className="border-gray absolute top-9 -left-28 z-10 flex w-[400px] max-w-[400px] justify-center border-[0.5px] bg-white py-[19px]">
      {type === "cart" && <CartPopper />}
      {type === "account" && <AccountPopper />}
      {type === "favorite" && <FavoritePopper />}
    </div>
  );
}
