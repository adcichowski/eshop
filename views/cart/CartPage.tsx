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
        <OrderFormStepper />
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
