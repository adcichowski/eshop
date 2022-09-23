import { changeValueCurrency, priceWithDiscount } from "utils/utils";
import { useSelect } from "downshift";
export function SelectExample({ discount }: { discount: number }) {
  const sizes = [
    { width: 21, height: 30, prize: 4300 },
    { width: 30, height: 40, prize: 6500 },
    { width: 40, height: 50, prize: 8700 },
    { width: 50, height: 70, prize: 10900 },
  ];

  function itemToString(
    item: { width: number; height: number; prize: number } | null
  ) {
    return item ? `${item.width} x ${item.height} cm` : "";
  }

  function Select() {
    const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
    } = useSelect({
      items: sizes,
      itemToString,
    });

    return (
      <div>
        <div>
          <button
            aria-label="toggle menu"
            className="p-2 bg-white flex justify-between border-[0.5px] border-black px-3 w-56"
            type="button"
            {...getToggleButtonProps()}
          >
            <div className="flex w-full justify-between">
              <div className="text-sm">
                {selectedItem ? itemToString(selectedItem) : "Wybierz rozmiar"}
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs line-through">
                  {selectedItem?.prize &&
                    priceWithDiscount(selectedItem?.prize, discount)}
                </div>
                <div className="text-sm text-discount font-semibold">
                  {selectedItem?.prize &&
                    changeValueCurrency(selectedItem?.prize)}
                </div>
              </div>
            </div>
          </button>
        </div>
        <ul
          {...getMenuProps()}
          className="max-h-80 overflow-auto absolute w-full max-w-[220px]"
        >
          {isOpen &&
            sizes.map((item, index) => (
              <li
                className="py-2 px-3 shadow-sm text-sm cursor-pointer bg-white"
                key={`${item.prize}${index}`}
                {...getItemProps({ item, index })}
              >
                <div className="flex w-full justify-between">
                  <div className="text-sm">{itemToString(item)}</div>
                  <div>
                    <div className="text-xs line-through">
                      {priceWithDiscount(item?.prize, discount)}
                    </div>
                    <div className="text-sm text-discount font-semibold">
                      {changeValueCurrency(item?.prize)}
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }

  return <Select />;
}
