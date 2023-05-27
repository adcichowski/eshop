import { Button } from "components/Button/Button";

import CartIcon from "components/Header/icons/cart.svg";
import { useCartContext } from "context/CartContext/CartContext";
import { CartItem } from "context/CartContext/types";
import { useMemo } from "react";
import { changeValueCurrency } from "utils/utils";
import { ProductCartPopper } from "./components/ProductCartPopper";
export const CartPopper = () => {
  const { cart } = useCartContext();

  return (
    <section>
      <div className="flex flex-col items-center px-10 text-center">
        {!cart ? <ViewWithoutProducts /> : <ViewWithProducts cart={cart} />}
      </div>
    </section>
  );
};

const ViewWithoutProducts = () => {
  return (
    <>
      <div className="justify-self-center">
        <CartIcon />
      </div>
      <div className="line mt-1 whitespace-nowrap text-sm leading-6">
        Your cart is empty
      </div>
      <Button className="mt-2 rounded-[10px] px-16 py-[5px] text-sm md:text-sm">
        <span className="min-w-fit whitespace-nowrap">go to new products</span>
      </Button>
    </>
  );
};

const ViewWithProducts = ({ cart }: { cart: Record<string, CartItem> }) => {
  const totalCostCart = useMemo(() => {
    return Object.values(cart).reduce(
      (total, { amount, price }) => total + amount * price,
      0
    );
  }, [cart]);
  return (
    <>
      <ul className="flex max-h-80 w-full flex-col gap-y-2 overflow-hidden overflow-y-auto">
        {Object.entries(cart).map(([id, product]) => (
          <li key={id}>
            <ProductCartPopper {...product} />
          </li>
        ))}
      </ul>
      <div className="my-4 flex w-full text-left">
        <p className="grow text-sm">Total cost:</p>{" "}
        <p className="text-md font-semibold">
          {changeValueCurrency(totalCostCart)}
        </p>
      </div>

      <Button className="rounded-[10px] px-16 py-[5px] text-sm md:text-sm">
        <span className="whitespace-nowrap">Go to cart</span>
      </Button>
    </>
  );
};
