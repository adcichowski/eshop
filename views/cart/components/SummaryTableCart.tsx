import { CartItem } from "context/CartContext/types";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { DiscountFrame } from "components/DiscountFrame/DiscountFrame";
export default function SummaryTableCart({
  cart,
}: {
  cart: Record<string, CartItem>;
}) {
  console.log(cart);
  return (
    <table className="mt-10 w-full">
      <thead>
        <tr className="border-b-2 text-center">
          <td className="flex w-2/3 justify-center">
            <div className="w-2/3 rounded-t-md bg-green-100">Products</div>
          </td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(cart).map(([id, product]) => {
          return (
            <tr className="mt-4" key={id}>
              <td>
                <div className="mr-1 ml-4 flex flex-wrap items-center gap-x-6">
                  <figure className="flex flex-wrap items-center gap-x-1">
                    <Image
                      src={product.image.url}
                      alt=""
                      className={clsx(product.whiteFrame && "border p-2")}
                      width={100}
                      height={140}
                    />
                    <figcaption className="max-w-[250px]">
                      {product.title}
                    </figcaption>
                  </figure>

                  <DiscountFrame sale={product.sale} size="small" />
                  <div>{product.price}</div>
                  <div>{product.amount}</div>
                </div>
              </td>
              <td>{(product.price * product.amount) / 100}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const HeaderRow = ({
  name,
  hidden,
  ...props
}: {
  name: string;
  hidden?: boolean;
  className?: string;
}) => {
  if (hidden) {
    return (
      <td {...props}>
        <div>&nbsp;</div>
      </td>
    );
  }
  return (
    <td {...props}>
      <div className="flex justify-center text-center">
        <span className="p- rounded-t-md bg-green-100">{name}</span>
      </div>
    </td>
  );
};

// const BodyRow = ({
//   name,
//   image,
// }: {
//   name: string;
//   amount: number;
//   price: number;
// }) => {};
