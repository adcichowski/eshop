import { useCartContext } from "context/CartContext/CartContext";
import React from "react";
import { NavigationCart } from "./components/NavigationCart";
import { OrderFormProvider } from "./components/OrderFormStepper/context/OrderFormContext";
import { OrderFormStepper } from "./components/OrderFormStepper/OrderFormStepper";

export const CartPage = () => {
  const { cart } = useCartContext();

  if (!cart) return <EmptyCartPage />;
  return (
    <OrderFormProvider>
      <div className="m-2 md:mx-20">
        <NavigationCart />
        <aside className="mt-[30px] w-full bg-green-100 px-2 py-5 text-center text-sm md:text-base">
          Will you give it a try?
          <span className="font-bold"> Buy for an additional 46.40 USD </span>
          and qualify for <span className="font-bold">FREE</span> shipping!
        </aside>
        <article className="mt-10">
          <OrderFormStepper />
        </article>
      </div>
    </OrderFormProvider>
  );
};

const EmptyCartPage = () => {
  return (
    <p className="m-auto text-center md:text-lg">
      Your cart is empty, add product to fill this page
    </p>
  );
};
