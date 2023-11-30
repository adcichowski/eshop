import React from "react";
import { changeValueCurrency } from "utils/utils";

export function DetailsOrderSummary({
  totalOrder,
  discount,
  delivery,
}: {
  totalOrder: number;
  discount: number;
  delivery: number;
}) {
  return (
    <dl className="flex flex-col gap-y-4 -mt-1">
      <div className="flex flex-wrap justify-between">
        <dt>Order value</dt>
        <dd>{changeValueCurrency(totalOrder)}</dd>
      </div>
      {discount ? (
        <div className="flex flex-wrap justify-between">
          <dt>Discount</dt>
          <dd className="font-semibold text-red-300">
            -{changeValueCurrency(discount)}
          </dd>
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-wrap justify-between">
        <dt>Delivery</dt>
        <dd>{changeValueCurrency(delivery)}</dd>
      </div>
      <div className="flex flex-wrap justify-between border-t pt-4 text-lg font-semibold">
        <dt>Total to pay</dt>
        <dd>{changeValueCurrency(totalOrder - discount)}</dd>
      </div>
    </dl>
  );
}
