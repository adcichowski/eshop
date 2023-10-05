import { Action } from "components/Action/Action";
import { ShoppingCartIcon } from "lucide-react";
import { useCartContext } from "context/CartContext/CartContext";
import { CartItem } from "context/CartContext/types";
import { useMemo } from "react";
import { changeValueCurrency } from "utils/utils";
import { ProductCartPopper } from "./components/ProductCartPopper";
import Link from "next/link";
export const CartPopper = () => {
  const { cart } = useCartContext();

  return (
    <section>
      <div className="flex flex-col items-center text-center">
        {!cart ? <ViewWithoutProducts /> : <ViewWithProducts cart={cart} />}
      </div>
    </section>
  );
};

const ViewWithoutProducts = () => {
  return (
    <>
      <div className="justify-self-center">
        <ShoppingCartIcon size={28} strokeWidth={1.5} />
      </div>
      <div className="line mt-1 whitespace-nowrap text-sm leading-6">
        Your cart is empty
      </div>
      <Action as="link" href="/">
        <span className="min-w-fit whitespace-nowrap">go to new products</span>
      </Action>
    </>
  );
};

const ViewWithProducts = ({ cart }: { cart: Record<string, CartItem> }) => {
  const totalCostCart = useMemo(() => {
    return Object.values(cart).reduce(
      (total, { amount, price }) => total + amount * price,
      0,
    );
  }, [cart]);
  return (
    <>
      <ul className="grid max-h-80 w-full gap-y-2 overflow-hidden overflow-y-auto scroll-smooth pr-4">
        {Object.entries(cart).map(([id, product]) => (
          <li key={id}>
            <ProductCartPopper {...product} />
          </li>
        ))}
      </ul>
      <div className="my-4 flex w-full text-left pr-4">
        <p className="grow text-sm">Total cost:</p>{" "}
        <p className="text-md font-semibold">
          {changeValueCurrency(totalCostCart)}
        </p>
      </div>

      <Link
        href="/cart"
        className="w-full rounded-[10px] px-16 py-[5px] text-sm md:text-sm bg-primary text-white"
      >
        Go to cart
      </Link>
    </>
  );
};
