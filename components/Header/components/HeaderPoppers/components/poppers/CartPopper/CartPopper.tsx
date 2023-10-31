import { Action } from "components/Action/Action";
import { CartProduct } from "lib/actions/cart";
import { ShoppingCartIcon } from "lucide-react";
import { changeValueCurrency } from "utils/utils";
import { ProductCartPopper } from "./components/ProductCartPopper";
import Link from "next/link";
import { useClientContext } from "context/ClientContext/ClientContext";
export const CartPopper = () => {
  const { cart } = useClientContext();
  return (
    <section className="flex justify-center w-full px-3 py-4">
      <div className="flex flex-col items-center text-center">
        {cart?.length ? (
          <ViewWithProducts cart={cart} />
        ) : (
          <ViewWithoutProducts />
        )}
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

const ViewWithProducts = ({ cart }: { cart: CartProduct[] | undefined }) => {
  const totalCostCart = cart?.reduce(
    (total, product) => total + product.amount * product.price,
    0,
  );

  return (
    <>
      <ul className="grid max-h-[278px] w-full gap-y-2 overflow-hidden overflow-y-auto scroll-smooth pr-4">
        {cart?.map((product) => (
          <li key={product.id}>
            <ProductCartPopper {...product} />
          </li>
        ))}
      </ul>
      <div className="my-4 flex w-full text-left pr-4">
        <p className="grow text-sm">Total cost:</p>{" "}
        <p className="text-md font-semibold">
          {totalCostCart && changeValueCurrency(totalCostCart)}
        </p>
      </div>

      <Link
        href="/cart/details"
        className="w-full rounded-[10px] px-16 py-[5px] text-sm md:text-sm bg-primary text-white"
      >
        Go to cart
      </Link>
    </>
  );
};
