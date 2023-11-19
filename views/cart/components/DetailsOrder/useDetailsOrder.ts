import { useClientContext } from "context/ClientContext/ClientContext";
import { useMemo } from "react";
import { priceWithDiscount } from "utils/utils";

export function useDetailsOrder() {
  const { cart } = useClientContext();
  const summaryOrderValue = useMemo(() => {
    if (!cart) return;
    return Math.ceil(
      Object.values(cart).reduce((initial, product) => {
        return priceWithDiscount(product) + initial;
      }, 0),
    );
  }, [cart]);

  // const discountInOrder = useMemo(() => {
  //   if (summaryOrderValue && order?.discount) {
  //     return Math.floor(summaryOrderValue / order.discount);
  //   }
  // }, []);
  const discountInOrder = 0;
  return { summaryOrderValue, discountInOrder };
}
