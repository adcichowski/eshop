import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useMemo, useState } from "react";

type OrderContext = {
  readonly order: OrderDataType | null;
  readonly setOrder: (args: OrderDataType) => void;
  readonly personData: PersonDataType | null;
  readonly setPersonData: (args: PersonDataType) => void;
};
export type PersonDataType = {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  street: string;
  postalCode: string;
  city: string;
};

export type OrderDataType = {
  orderId: string;
  clientSecret: string;
};

const OrderContext = createContext<OrderContext | null>(null);
export const OrderProvider = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [personData, setStatePersonData] = useState<PersonDataType | null>(
    null,
  );
  const [order, setOrder] = useState<OrderDataType | null>(null);

  const valueProvider = useMemo(
    () => ({
      setPersonData: (args: PersonDataType) => setStatePersonData(args),
      personData,
      order,
      setOrder,
    }),
    [personData, order],
  );

  if (
    pathname !== "/cart/details" &&
    pathname !== "/cart/account" &&
    personData === null
  ) {
    router.push("/cart/details");
  }

  return (
    <OrderContext.Provider value={valueProvider}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("Wrap components using Order Context Provider");
  }
  return context;
};
