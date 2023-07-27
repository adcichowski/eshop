import { CartItem } from "context/CartContext/types";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { DiscountFrame } from "components/DiscountFrame/DiscountFrame";
import { changeValueCurrency, priceWithDiscount } from "utils/utils";
import { AmountProductCart } from "../AmountProductCart";
import { Button } from "components/Button/Button";
import { UserDataBody } from "pages/api/checkout";
export default function SummaryTableCart({
  cart,
}: {
  cart: Record<string, CartItem>;
}) {
  const send = async () => {
    const body = JSON.stringify({
      products: Object.values(cart).map((product) => ({
        variantId: product.variant.id,
        id: product.id,
        amount: product.amount,
      })),
    });
    const data = await fetch("/api/checkout", { body, method: "POST" });
    console.log(await data.json());
  };

  return (
    <>
      <h2 className="text-xl font-medium">Your cart</h2>
      <Button type="button" onClick={send}>
        Send Products
      </Button>
      <table className="mt-10 w-full">
        <thead>
          <tr className="grid grid-cols-4 gap-x-5 border-b-2 text-center">
            <td className="col-span-3 flex justify-center">
              <div className="w-full rounded-t-md bg-green-100">Products</div>
            </td>
            <td className="flex justify-center">
              <div className="w-full rounded-t-md bg-green-100">Total</div>
            </td>
          </tr>
        </thead>
        <tbody className="border-b">
          {Object.entries(cart).map(([id, product]) => {
            return (
              <tr
                className="my-4 grid grid-cols-4 content-center items-center"
                key={id}
              >
                <td className="col-span-3">
                  <div className="mr-1 ml-2 grid items-center gap-x-6 gap-y-2 sm:grid-cols-2">
                    <figure className="flex flex-wrap items-center gap-x-2 self-stretch xl:flex-nowrap">
                      <Image
                        src={product.image.url}
                        alt=""
                        className={clsx(product.whiteFrame && "border p-2")}
                        width={100}
                        height={140}
                      />
                      <figcaption className="mt-1 sm:mt-0">
                        {`${product.title} ${product.variant.width}cm x
                      ${product.variant.height}cm`}
                      </figcaption>
                    </figure>
                    <div className="flex items-center gap-x-6 sm:justify-end">
                      <DiscountFrame sale={product.sale} size="small" />
                      {changeValueCurrency(product.price)}
                      <AmountProductCart
                        product={product}
                        amount={product.amount}
                      />
                    </div>
                  </div>
                </td>
                <td className="mr-2 justify-self-end sm:mr-0 sm:justify-self-center">
                  {changeValueCurrency(priceWithDiscount(product))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
