import { Button } from "components/Button/Button";
import { useCartContext } from "context/CartContext/CartContext";
import React, { useMemo } from "react";
import { changeValueCurrency, priceWithDiscount } from "utils/utils";

import { NavigationCart } from "./components/NavigationCart";
import SummaryTableCart from "./components/SummaryTableCart/SummaryTableCart";

const DELIVERY_PRICE = 1190;
export default function CartPage() {
  const { cart } = useCartContext();
  const summaryOrderValue = useMemo(() => {
    if (!cart) return undefined;
    return Math.ceil(
      Object.values(cart).reduce((initial, product) => {
        return priceWithDiscount(product) + initial;
      }, 0)
    );
  }, [cart]);
  if (!cart || !summaryOrderValue) {
    return (
      <p className="m-auto text-center md:text-lg">
        Your cart is empty, add product to fill this page
      </p>
    );
  }

  return (
    <div className="m-2 md:mx-20">
      <NavigationCart />
      <aside className="mt-[30px] w-full bg-green-100 py-5 text-center text-sm md:text-base">
        Will you give it a try?
        <span className="font-bold"> Buy for an additional 46.40 USD </span>
        and qualify for <span className="font-bold">FREE</span> shipping!
      </aside>
      <article className="mt-10">
        <h2 className="text-xl font-medium">Your cart</h2>
        <SummaryTableCart cart={cart} />
      </article>
      <section className="mt-7 flex w-full flex-col sm:flex-row">
        <div className="grow"></div>
        <div className="grow md:max-w-md">
          <dl className="flex flex-col gap-y-4">
            <div className="flex flex-wrap justify-between">
              <dt>Order value</dt>
              <dd>{changeValueCurrency(summaryOrderValue)}</dd>
            </div>
            <div className="flex flex-wrap justify-between">
              <dt>Delivery</dt>
              <dd>{changeValueCurrency(DELIVERY_PRICE)}</dd>
            </div>
            <div className="flex flex-wrap justify-between border-t pt-4 text-lg font-semibold">
              <dt>Total to pay</dt>
              <dd>{changeValueCurrency(DELIVERY_PRICE + summaryOrderValue)}</dd>
            </div>
            <Button className="mt-1 rounded-none py-2">Dalej</Button>
          </dl>
        </div>
      </section>
    </div>
  );
}
