import { useMemo } from "react";
// import { priceWithDiscount } from "utils/utils";

export default function useDetailsOrder() {
  const cart = {};
  const summaryOrderValue = useMemo(() => {
    if (!cart) return;
    return 0;
    // return Math.ceil(
    //   Object.values(cart).reduce((initial, product) => {
    //     return priceWithDiscount(product) + initial;
    //   }, 0)
    // );
  }, [cart]);

  const discountInOrder = useMemo(() => {
    // if (summaryOrderValue && order?.discount) {
    //   return Math.floor(summaryOrderValue / order.discount);
    // }
  }, []);

  return { summaryOrderValue, discountInOrder };
}
