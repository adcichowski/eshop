import { Button } from "components/Button/Button";
import React from "react";
import CartIcon from "components/Header/icons/cart.svg";
import { useCartContext } from "context/CartContext/CartContext";
import { ProductCartPopper } from "./components/ProductCartPopper";
export function CartPopper() {
  const { cart } = useCartContext();
  return (
    <section>
      <div className="flex flex-col items-center px-10 text-center">
        {!cart ? (
          <>
            <div className="justify-self-center">
              <CartIcon />
            </div>
            <div className="line mt-1 whitespace-nowrap text-sm leading-6">
              Your cart is empty
            </div>
            <Button className="mt-2 rounded-[10px] px-16 py-[5px] text-sm md:text-sm">
              <span className="min-w-fit whitespace-nowrap">
                go to new products
              </span>
            </Button>
          </>
        ) : (
          <>
            <div className="flex h-auto w-full flex-col gap-y-2">
              {Object.entries(cart).map(([id, product]) => (
                <ProductCartPopper key={id} {...product} />
              ))}
            </div>
            <Button className="mt-2 rounded-[10px] px-16 py-[5px] text-sm md:text-sm">
              <span className="whitespace-nowrap">Go to cart</span>
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
