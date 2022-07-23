import { useCartContext } from "context/CartContext";
import React from "react";

export default function CartPage() {
  const { items } = useCartContext();
  return (
    <main className="flex flex-grow">
      <div className="flex flex-grow items-center justify-center">
        {items.length ? (
          items.map((item) => (
            <h2 className="text-2xl" key={item.title}>
              item.
            </h2>
          ))
        ) : (
          <h1 className="text-2xl">You dont have any poster in cart!</h1>
        )}
      </div>
    </main>
  );
}
