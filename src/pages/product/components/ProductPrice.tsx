import clsx from "clsx";
import { changeValueCurrency, priceWithDiscount } from "utils/utils";
export function ProductPrice({
  sale,
  price,
}: {
  sale: string | undefined | null;
  price: number;
}) {
  return (
    <div className="flex mt-4">
      <div
        className={`text-4xl ${clsx(sale && "text-discount")} font-semibold`}
      >
        {changeValueCurrency(price)}
      </div>
      {sale ? (
        <div className="text-2xl line-through self-center ml-3">
          {priceWithDiscount(price, Number(sale))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
