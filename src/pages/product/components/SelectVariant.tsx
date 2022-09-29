import { changeValueCurrency, priceWithDiscount } from "utils/utils";
import { useSelect } from "downshift";
import { clsx } from "clsx";
import type { StateSelect } from "src/pages/product/types";
import type { Dispatch } from "react";

type ProductVariants = {
  price: number;
  id: string;
  width: number | undefined;
  height: number | undefined;
};

export function SelectVariant({
  sale,
  productVariants,
  selectedVariant,
  setSelectedVariant,
}: {
  sale?: string | null;
  productVariants: ProductVariants[];
  selectedVariant: StateSelect;
  setSelectedVariant: Dispatch<StateSelect>;
}) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
  } = useSelect({
    items: productVariants,
    itemToString,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) =>
      newSelectedItem && setSelectedVariant(newSelectedItem),
  });

  return (
    <div className="bg-white z-10">
      <div className="relative">
        <button
          aria-label="toggle menu"
          className="p-[0.2px] bg-white flex justify-between border-[0.5px] border-black px-3 w-60"
          type="button"
          {...getToggleButtonProps()}
        >
          <div className="flex w-full justify-between">
            <div className="text-[0.8175rem] ">
              {selectedItem ? itemToString(selectedItem) : "Choose size"}
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[0.6875rem] line-through">
                {selectedVariant?.price &&
                  sale &&
                  changeValueCurrency(selectedVariant.price)}
              </div>
              <div
                className={`text-[0.8175rem] ${clsx(
                  sale && "text-discount"
                )} font-semibold`}
              >
                {priceWithDiscount(selectedVariant.price, Number(sale))}
              </div>
            </div>
          </div>
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
                  {sale && (
                    <span className="text-[0.6875rem] mr-1 line-through">
                      {changeValueCurrency(item?.price)}
                    </span>
                  )}
                  <span
                    className={`text-sm ${clsx(
                      sale && "text-discount"
                    )} font-semibold`}
                  >
                    {priceWithDiscount(item?.price, Number(sale))}
                  </span>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

function itemToString(item: ProductVariants | null) {
  return item ? `${item.width} x ${item.height} cm` : "";
}
