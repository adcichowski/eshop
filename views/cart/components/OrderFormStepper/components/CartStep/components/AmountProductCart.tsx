import React from "react";

export function AmountProductCart({
  amount, // product,
}: {
  amount: number;
  // product: CartItem;
}) {
  return (
    <div className="flex h-10">
      <button
        type="button"
        // onClick={() => deleteProduct(product)}
        className="border border-r-0 px-3"
      >
        -
      </button>
      <input
        className="w-[35px] cursor-pointer border border-x-0  bg-white p-1 px-2 text-center"
        type="number"
        inputMode="numeric"
        pattern="[0-9]"
        min={1}
        value={amount}
        // onChange={(e) => {
        //   if (e.currentTarget.value === "") return;
        //   changeAmountProduct({
        //     ...product,
        //     amount: Number(e.currentTarget.value),
        //   });
        // }}
      />
      <button
        type="button"
        // onClick={() => addProduct({ ...product, amount: 1 })}
        className="border border-l-0 px-3"
      >
        +
      </button>
    </div>
  );
}
