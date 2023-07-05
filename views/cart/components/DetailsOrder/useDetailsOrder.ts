import { useCartContext } from "context/CartContext/CartContext";
import { useMemo } from "react";
import { priceWithDiscount } from "utils/utils";
import { useOrderFormContext } from "../OrderFormStepper/context/OrderFormContext";

export default function useDetailsOrder() {
  const { cart } = useCartContext();
  const { order } = useOrderFormContext();
  const summaryOrderValue = useMemo(() => {
    if (!cart) return;
    return Math.ceil(
      Object.values(cart).reduce((initial, product) => {
        return priceWithDiscount(product) + initial;
      }, 0)
    );
  }, [cart]);

  const discountInOrder = useMemo(() => {
    if (summaryOrderValue && order?.discount) {
      return Math.floor(summaryOrderValue / order.discount);
    }
  }, [summaryOrderValue, order]);

  return { summaryOrderValue, discountInOrder };
}