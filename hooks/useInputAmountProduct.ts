import React, { useState } from "react";

export function useInputAmountProduct() {
  const [amountProduct, setAmountProduct] = useState("1");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    if (value < 0 || value > 99) return;
    setAmountProduct(e.currentTarget.value);
  };

  return {
    value: amountProduct,
    onChange,
  };
}
