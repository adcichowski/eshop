"use client";
import { NavigationCart } from "./NavigationCart";
import { OrderFormStepper } from "./OrderFormStepper/OrderFormStepper";

export const CartPageView = () => {
  return (
    <div className="m-2 md:mx-16">
      <NavigationCart />
      <aside className="mt-[30px] w-full bg-green-100 px-2 py-5 text-center text-sm md:text-base">
        Will you give it a try?
        <span className="font-bold"> Buy for an additional 46.40 USD </span>
        and qualify for <span className="font-bold">FREE</span> shipping!
      </aside>
      <OrderFormStepper />
    </div>
  );
};

export const EmptyCartPageView = () => {
  return (
    <p className="m-auto text-center md:text-lg">
      Your cart is empty, add product to fill this page
    </p>
  );
};
