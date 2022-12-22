import { Button } from "components/Button/Button";
import React from "react";
import CartIcon from "components/Header/icons/cart.svg";
export function CartPopper() {
  return (
    <div>
      <div className="flex flex-col text-center px-10 items-center">
        <div className="justify-self-center">
          <CartIcon />
        </div>
        <div className="text-sm line leading-6 whitespace-nowrap mt-1">
          Twój koszyk jest pusty
        </div>
        <Button className="md:text-sm px-16 py-[5px] rounded-[10px] text-sm mt-2">
          <span className="w-full whitespace-nowrap">Przejdź do nowości</span>
        </Button>
      </div>
    </div>
  );
}
