import React from "react";

type ProductQuantityInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function ProductQuantityInput(props: ProductQuantityInputProps) {
  return (
    <label className="mt-5 flex items-center">
      <span className="w-24 text-base">Quantity:</span>
      <div>
        <input
          className="h-10 w-[50px] cursor-pointer border-[0.5px] border-black bg-white p-2 px-3 text-center"
          type="number"
          inputMode="numeric"
          pattern="[0-9]"
          min={1}
          {...props}
        />
        <span className="ml-1">szt</span>
      </div>
    </label>
  );
}
