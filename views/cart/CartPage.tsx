import { useCartContext } from "context/CartContext/CartContext";
import React from "react";

import { NavigationCart } from "./components/NavigationCart";
import SummaryTableCart from "./components/SummaryTableCart";

export default function CartPage() {
  const { cart } = useCartContext();
  if (!cart) {
    return (
      <p className="m-auto text-lg">
        Your cart is empty, add product to fill this page
      </p>
    );
  }
  return (
    <div className="mx-20">
      <NavigationCart />
      <aside className="mt-[30px] w-full bg-green-100 py-5 text-center">
        Will you give it a try?
        <span className="font-bold"> Buy for an additional 46.40 USD </span>
        and qualify for <span className="font-bold">FREE</span> shipping!
      </aside>
      <article className="mt-10">
        <h2 className="text-xl font-medium">Your cart</h2>
        <SummaryTableCart cart={cart} />
      </article>
    </div>
  );
}
