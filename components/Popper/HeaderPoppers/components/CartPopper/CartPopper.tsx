import { Button } from "components/Button/Button";
import React from "react";
import CartIcon from "components/Header/icons/cart.svg";
import { useCartContext } from "context/CartContext";
import { ProductCartPopper } from "./components/ProductCartPopper";
export function CartPopper() {
  const { cart } = useCartContext();
  return (
    <div>
      <div className="flex flex-col text-center px-10 items-center">
        {!cart ? (
          <>
            <div className="justify-self-center">
              <CartIcon />
            </div>
            <div className="text-sm line leading-6 whitespace-nowrap mt-1">
              Twój koszyk jest pusty
            </div>
          </>
        ) : (
          <div className="flex flex-col h-auto w-full">
            {Object.entries(cart).map(([id, product]) => (
              <ProductCartPopper key={id} {...product} numberOf={1} />
            ))}
          </div>
        )}
        <Button className="md:text-sm px-16 py-[5px] rounded-[10px] text-sm mt-2">
          <span className="w-full whitespace-nowrap">Przejdź do nowości</span>
        </Button>
      </div>
    </div>
  );
}
