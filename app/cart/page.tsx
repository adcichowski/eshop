import { CartPageProvider } from "views/cart/CartPage";
import { CartPageView } from "views/cart/components/CartPageView";

export default function Cart() {
  return (
    <CartPageProvider>
      <CartPageView />
    </CartPageProvider>
  );
}
