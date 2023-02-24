import Clsx from "clsx";
import { changeValueCurrency, priceWithDiscount } from "utils/utils";
export function ProductPrice({
  sale,
  price,
}: {
  readonly sale: string | undefined | null;
  readonly price: number;
}) {
  return (
    <div className="flex mt-2">
      <div className={`text-4xl ${Clsx(sale && "text-red-300")} font-semibold`}>
        {priceWithDiscount(price, Number(sale))}
      </div>
      {sale ? (
        <div className="text-2xl line-through self-center ml-3">
          {changeValueCurrency(price)}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
