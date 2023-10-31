import { clsx } from "clsx";
import { useSelect } from "downshift";
import { changeValueCurrency, priceWithDiscount } from "utils/utils";

import Link from "next/link";

export type ProductVariant = {
  readonly price: number;
  readonly id: string;
  readonly width: number;
  readonly height: number;
};

export function ProductSelectVariant({
  sale,
  productVariants,
  selectedVariant,
}: {
  readonly sale: number | null | undefined;
  readonly productVariants: readonly ProductVariant[];
  readonly selectedVariant: ProductVariant;
}) {
  const { isOpen, getToggleButtonProps, getMenuProps, getItemProps } =
    useSelect({
      items: [...productVariants],
      itemToString,
      defaultHighlightedIndex: 0,
    });

  const productHaveDiscount = sale !== null;

  return (
    <div className="z-10 bg-white">
      <div className="relative">
        <button
          aria-label="toggle menu"
          className="flex w-60 justify-between border-[0.5px] border-black bg-white p-[0.2px] px-3"
          type="button"
          {...getToggleButtonProps()}
        >
          {selectedVariant && (
            <div className="flex w-full justify-between">
              <div className="text-[0.8175rem]">
                {itemToString(selectedVariant)}
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[0.6875rem] line-through">
                  {productHaveDiscount &&
                    changeValueCurrency(selectedVariant.price)}
                </div>
                <div className="text-[0.8125rem]">
                  <SaleView sale={sale} price={selectedVariant.price} />
                </div>
              </div>
            </div>
          )}
        </button>
      </div>
      <ul
        {...getMenuProps()}
        className="absolute max-h-80 w-full max-w-[240px] bg-white"
      >
        {isOpen &&
          productVariants.map((item, index) => (
            <li
              className={clsx(
                "cursor-pointer border-[0.2px] border-black border-t-white py-2 px-3 hover:bg-gray-100/30 text-sm shadow-sm",
                selectedVariant.id === item.id && "bg-gray-100/20",
              )}
              key={`${item.price}${index}`}
              {...getItemProps({ item, index })}
            >
              <Link
                href={{
                  query: {
                    width: item.width,
                    height: item.height,
                  },
                }}
              >
                <div className="flex w-full items-center justify-between text-[0.8125rem]">
                  <div>{itemToString(item)}</div>
                  <div>
                    <span
                      className={`mr-1 text-[0.6875rem] ${clsx(
                        sale && "line-through",
                      )}`}
                    >
                      {changeValueCurrency(item?.price)}
                    </span>

                    <span className="text-sm">
                      {sale && <SaleView price={item.price} sale={sale} />}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

function itemToString(item: ProductVariant | null) {
  if (item && Object.values(item).some((itemAttr) => itemAttr === undefined))
    return "";
  return item ? `${item.width} x ${item.height} cm` : "";
}

const SaleView = ({
  sale,
  price,
}: {
  readonly sale: number | null | undefined;
  readonly price: number;
}) => {
  return (
    <span className={`${clsx(sale && "text-red-300")} font-semibold`}>
      {changeValueCurrency(priceWithDiscount({ price, sale }))}
    </span>
  );
};
