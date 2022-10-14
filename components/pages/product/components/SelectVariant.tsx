import { clsx } from "clsx";
import { useSelect } from "downshift";
import { changeValueCurrency, priceWithDiscount } from "utils/utils";

import type { Dispatch } from "react";
import type { ProductVariant } from "../types";

export function SelectVariant({
  sale,
  productVariants,
  selectedVariant,
  setSelectedVariant,
}: {
  readonly sale?: string | null;
  readonly productVariants: readonly ProductVariant[];
  readonly selectedVariant: ProductVariant;
  readonly setSelectedVariant: Dispatch<ProductVariant>;
}) {
  const { isOpen, getToggleButtonProps, getMenuProps, getItemProps } =
    useSelect({
      items: [...productVariants],
      itemToString,
      defaultHighlightedIndex: 0,
      onSelectedItemChange: ({ selectedItem: newSelectedItem }) =>
        newSelectedItem && setSelectedVariant(newSelectedItem),
    });

  const productHaveDiscount = sale !== null;
  return (
    <div className="bg-white z-10">
      <div className="relative">
        <button
          aria-label="toggle menu"
          className="p-[0.2px] bg-white flex justify-between border-[0.5px] border-black px-3 w-60"
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
        className="max-h-80 absolute w-full max-w-[240px] bg-white"
      >
        {isOpen &&
          productVariants.map((item, index) => (
            <li
              className="py-2 px-3 shadow-sm text-sm cursor-pointer border-[0.2px] border-t-white border-black bg-white"
              key={`${item.price}${index}`}
              {...getItemProps({ item, index })}
            >
              <div className="flex w-full text-[0.8125rem] items-center justify-between">
                <div>{itemToString(item)}</div>
                <div>
                  <span
                    className={`text-[0.6875rem] mr-1 ${clsx(
                      sale && "line-through"
                    )}`}
                  >
                    {changeValueCurrency(item?.price)}
                  </span>

                  <span className="text-sm">
                    {sale && <SaleView price={item.price} sale={sale} />}
                  </span>
                </div>
              </div>
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
  readonly sale: string | null | undefined;
  readonly price: number;
}) => {
  return (
    <span className={`${clsx(sale && "text-discount")} font-semibold`}>
      {priceWithDiscount(price, Number(sale))}
    </span>
  );
};
