import React from "react";
import { changeValueCurrency } from "utils/utils";
import useDetailsOrder from "./useDetailsOrder";

const DELIVERY_PRICE = 1190;

export function DetailsOrder() {
  const { summaryOrderValue, discountInOrder } = useDetailsOrder();
  if (!summaryOrderValue) return <></>;
  return (
    <dl className="flex flex-col gap-y-4">
      <div className="flex flex-wrap justify-between">
        <dt>Order value</dt>
        <dd>{changeValueCurrency(summaryOrderValue)}</dd>
      </div>
      {discountInOrder ? (
        <div className="flex flex-wrap justify-between">
          <dt>Discount</dt>
          <dd className="font-semibold text-red-300">
            -{changeValueCurrency(discountInOrder)}
          </dd>
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-wrap justify-between">
        <dt>Delivery</dt>
        <dd>{changeValueCurrency(DELIVERY_PRICE)}</dd>
      </div>
      <div className="flex flex-wrap justify-between border-t pt-4 text-lg font-semibold">
        <dt>Total to pay</dt>
        <dd>{changeValueCurrency(DELIVERY_PRICE + summaryOrderValue)}</dd>
      </div>
    </dl>
  );
}
