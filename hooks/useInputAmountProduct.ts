import React, { useEffect, useState } from "react";

export function useInputAmountProduct() {
  const [amountProduct, setAmountProduct] = useState("");
  useEffect(() => {
    if (amountProduct.length < 0) {
      setAmountProduct("1");
    }
    if (amountProduct.length > 2) {
      setAmountProduct("99");
    }
  }, [amountProduct]);
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "-") {
      e.preventDefault();
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountProduct(e.currentTarget.value);
  };

  return {
    value: amountProduct,
    onChange,
    onKeyDown,
  };
}
