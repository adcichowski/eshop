import { Button } from "components/Button/Button";
import React from "react";
import CartIcon from "components/Header/icons/cart.svg";
import { useCartContext } from "context/CartContext/CartContext";
import { ProductCartPopper } from "./components/ProductCartPopper";
export function CartPopper() {
  const { cart } = useCartContext();
  return (
    <section>
      <div className="flex flex-col text-center px-10 items-center">
        {!cart ? (
          <>
            <div className="justify-self-center">
              <CartIcon />
            </div>
            <div className="text-sm line leading-6 whitespace-nowrap mt-1">
              Your cart is empty
            </div>
            <Button className="md:text-sm px-16 py-[5px] rounded-[10px] text-sm mt-2">
              <span className="whitespace-nowrap min-w-fit">
                go to new products
              </span>
            </Button>
          </>
        ) : (
          <>
            <div className="flex flex-col h-auto w-full gap-y-2">
              {Object.entries(cart).map(([id, product]) => (
                <ProductCartPopper key={id} {...product} />
              ))}
            </div>
            <Button className="md:text-sm px-16 py-[5px] rounded-[10px] text-sm mt-2">
              <span className="whitespace-nowrap">Go to cart</span>
            </Button>
          </>
        )}
      </div>
    </section>
  );
}