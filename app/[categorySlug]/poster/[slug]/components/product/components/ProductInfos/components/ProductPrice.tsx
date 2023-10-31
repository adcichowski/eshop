import Clsx from "clsx";
import { changeValueCurrency, priceWithDiscount } from "utils/utils";
export function ProductPrice({
  sale,
  price,
}: {
  readonly sale: number | undefined | null;
  readonly price: number;
}) {
  return (
    <div className="mt-2 flex">
      <div className={`text-4xl ${Clsx(sale && "text-red-300")} font-semibold`}>
        {changeValueCurrency(priceWithDiscount({ price, sale }))}
      </div>
      {sale ? (
        <div className="ml-3 self-center text-2xl line-through">
          {changeValueCurrency(price)}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
