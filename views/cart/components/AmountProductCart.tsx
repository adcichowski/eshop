import React from "react";

export function AmountProductCart({ amount }: { amount: number }) {
  return (
    <div className="flex h-10">
      <button className="border border-r-0 px-3">-</button>
      <input
        className="w-[30px] cursor-pointer border border-x-0  bg-white p-1 px-2 text-center"
        type="number"
        inputMode="numeric"
        pattern="[0-9]"
        min={1}
        value={amount}
      />
      <button className="border border-l-0 px-3">+</button>
    </div>
  );
}
