import { clsx } from "clsx";
import { useSelect } from "downshift";
import { changeValueCurrency, priceWithDiscount } from "utils/utils";

import type { Dispatch } from "react";
import type { StateSelect } from "../types";

type ProductVariants = {
  readonly price: number;
  readonly id: string;
  readonly width: number | undefined;
  readonly height: number | undefined;
};

export function SelectVariant({
  sale,
  productVariants,
  selectedVariant,
  setSelectedVariant,
}: {
  readonly sale?: string | null;
  readonly productVariants: readonly ProductVariants[];
  readonly selectedVariant: StateSelect;
  readonly setSelectedVariant: Dispatch<StateSelect>;
}) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
  } = useSelect({
    items: [...productVariants],
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
          <ViewSelectedVariant
            Sale={() => (
              <div className="text-[0.8175rem]">
                <SaleView sale={sale} price={selectedVariant.price} />
              </div>
            )}
            selectedItem={itemToString(selectedItem)}
            setSelectedVariant={setSelectedVariant}
            selectedVariant={selectedVariant}
          />
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
              <ProductVariant
                item={item}
                Sale={() => (
                  <>
                    <SaleView sale={sale} price={item.price} />
                  </>
                )}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

function itemToString(item: ProductVariants | null) {
  return item ? `${item.width} x ${item.height} cm` : "";
}

const ViewSelectedVariant = ({
  selectedVariant,
  selectedItem,
  Sale,
}: {
  readonly Sale: () => JSX.Element;
  readonly selectedItem: string | null | undefined;
  readonly selectedVariant: StateSelect;
  readonly setSelectedVariant: Dispatch<StateSelect>;
}) => {
  if (!selectedItem) {
    return (
      <div className="flex w-full justify-between">
        <div className="text-[0.8175rem] ">Choose size</div>
      </div>
    );
  }
  return (
    <div className="flex w-full justify-between">
      <div className="text-[0.8175rem]">{selectedItem}</div>
      <div className="flex items-center gap-2">
        <div className="text-[0.6875rem] line-through">
          {changeValueCurrency(selectedVariant.price)}
        </div>
        <Sale />
      </div>
    </div>
  );
};

const ProductVariant = ({
  item,
  Sale,
}: {
  readonly item: ProductVariants;
  readonly Sale?: () => JSX.Element;
}) => (
  <div className="flex w-full text-[0.8125rem] items-center justify-between">
    <div>{itemToString(item)}</div>
    <div>
      {Sale && (
        <span className="text-[0.6875rem] mr-1 line-through">
          {changeValueCurrency(item?.price)}
        </span>
      )}
      <span className="text-sm">{Sale && <Sale />}</span>
    </div>
  </div>
);

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
