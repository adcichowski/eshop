import React from "react";
import Image from "next/image";
import { DiscountFrame } from "components/DiscountFrame/DiscountFrame";
import { changeValueCurrency, priceWithDiscount } from "utils/utils";
import { AmountProductCart } from "./AmountProductCart";
import { getCartProducts } from "lib/actions/cart";
export default function SummaryTableCart() {
  const data = getCartProducts();
  if (!data?.cart) return <></>;
  return (
    <table className="w-full">
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
        {data.cart.map((product) => {
          return (
            <tr
              className="my-4 grid grid-cols-4 content-center items-center"
              key={product.id}
            >
              <td className="col-span-3">
                <div className="ml-2 mr-1 grid items-center gap-x-6 gap-y-2 sm:grid-cols-2">
                  <figure className="flex flex-wrap items-center gap-x-2 self-stretch xl:flex-nowrap">
                    <Image
                      src={product.image}
                      alt=""
                      width={100}
                      height={140}
                    />
                    <figcaption className="mt-1 sm:mt-0">
                      {product.title}
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
  );
}
