import { CartItem } from "context/CartContext/types";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { DiscountFrame } from "components/DiscountFrame/DiscountFrame";
import { priceWithDiscount } from "utils/utils";
import { AmountProductCart } from "./AmountProductCart";
export default function SummaryTableCart({
  cart,
}: {
  cart: Record<string, CartItem>;
}) {
  console.log(cart);
  return (
    <table className="mt-10 w-full">
      <thead>
        <tr className="grid grid-cols-4 gap-x-5 border-b-2 text-center">
          <td className=" col-span-3 flex justify-center">
            <div className="w-full rounded-t-md bg-green-100">Products</div>
          </td>

          <td className="flex justify-center">
            <div className="w-full rounded-t-md bg-green-100">Total</div>
          </td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(cart).map(([id, product]) => {
          return (
            <tr
              className="mt-4 grid grid-cols-4 content-center items-center"
              key={id}
            >
              <td className="col-span-3">
                <div className="mr-1 ml-2 grid items-center gap-x-6 gap-y-2 sm:grid-cols-2">
                  <figure className="flex flex-wrap items-center gap-x-2 self-stretch md:flex-nowrap">
                    <Image
                      src={product.image.url}
                      alt=""
                      className={clsx(product.whiteFrame && "border p-2")}
                      width={100}
                      height={140}
                    />
                    <figcaption className="basis-3/5 truncate">
                      {product.title}
                    </figcaption>
                  </figure>
                  <div className="flex items-center gap-x-6 sm:justify-end">
                    <DiscountFrame sale={product.sale} size="small" />
                    {priceWithDiscount(product.price, Number(product.sale))}
                    <AmountProductCart amount={product.amount} />
                  </div>
                </div>
              </td>
              <td className="mr-2 justify-self-end sm:mr-0 sm:justify-self-center">
                {(product.price * product.amount) / 100}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
