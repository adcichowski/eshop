import { CartItem } from "context/CartContext/types";
import React, { createContext, useContext, useState } from "react";

export type StepsFormOrder =
  | "cart"
  | "account"
  | "shipping"
  | "summary"
  | "payment";

type OrderFormState = {
  products?: CartItem[];
  discount?: number;
  code?: string;
};

type OrderFormContextType = {
  payment: { id: string } | undefined;
  shipping: { label: string; value: number } | undefined;
  order: OrderFormState | undefined;
  step: StepsFormOrder;
  account: { email: string } | undefined;
  handleSetShipping: (shipping: { label: string; value: number }) => void;
  handleSetPayment: (paymentId: string) => void;
  handleSetProducts: (products: CartItem[]) => void;
  handleSetDiscount: (code?: string, discount?: number) => void;
  handleSetAccount: ({ email }: { email: string }) => void;
};

const OrderFormContext = createContext<OrderFormContextType | null>(null);

export const OrderFormProvider = ({
  children,
}: {
  readonly children?: React.ReactNode;
}) => {
  const [step, setStep] = useState<StepsFormOrder>("cart");
  const [order, setOrder] = useState<OrderFormState | undefined>();
  const [payment, setPayment] = useState<{ id: string } | undefined>();
  const [account, setAccount] = useState<{ email: string } | undefined>();
  const [shipping, setShipping] = useState<
    { label: string; value: number } | undefined
  >();
  return (
    <OrderFormContext.Provider
      value={{
        payment,
        shipping,
        account,
        order,
        step,
        handleSetDiscount: (code?: string, discount?: number) => {
          setOrder((prev) => ({ ...prev, code, discount }));
        },
        handleSetProducts: (products: CartItem[]) => {
          setStep("account");
          setOrder((prev) => ({ ...prev, products }));
        },
        handleSetAccount: (account: { email: string }) => {
          setStep("shipping");
          setAccount(account);
        },
        handleSetShipping: (shipping: { label: string; value: number }) => {
          setStep("payment");
          setShipping(shipping);
        },
        handleSetPayment: (paymentId: string) => setPayment({ id: paymentId }),
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
