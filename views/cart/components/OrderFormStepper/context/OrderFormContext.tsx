import { CartItem } from "context/CartContext/types";
import React, { createContext, useContext, useState } from "react";

export type StepsFormOrder = "cart" | "account" | "shipping" | "summary";

type OrderFormState = {
  products?: CartItem[];
  discount?: number;
  code?: string;
};

type OrderFormContextType = {
  order: OrderFormState | undefined;
  step: StepsFormOrder;
  handleSetProducts: (products: CartItem[]) => void;
  handleSetDiscount: (code?: string, discount?: number) => void;
};

const OrderFormContext = createContext<OrderFormContextType | null>(null);

export const OrderFormProvider = ({
  children,
}: {
  readonly children?: React.ReactNode;
}) => {
  const [step, setStep] = useState<StepsFormOrder>("cart");
  const [order, setOrder] = useState<OrderFormState | undefined>();

  return (
    <OrderFormContext.Provider
      value={{
        order,
        step,
        handleSetDiscount: (code?: string, discount?: number) => {
          setOrder((prev) => ({ ...prev, code, discount }));
        },
        handleSetProducts: (products: CartItem[]) => {
          setStep("account");
          setOrder((prev) => ({ ...prev, products }));
        },
      }}
    >
      {children}
    </OrderFormContext.Provider>
  );
};

export const useOrderFormContext = () => {
  const stepFormContext = useContext(OrderFormContext);
  if (!stepFormContext) {
    throw new Error("Wrap components using OrderFormContextProvider");
  }
  return stepFormContext;
};
