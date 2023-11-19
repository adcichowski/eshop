"use client";
import { Action } from "components/Action/Action";
import { useToastContext } from "context/ToastContext/ToastContext";
import { CartProduct, runCartAction } from "lib/actions/cart";

export function AddProductAction({ product }: { product: CartProduct }) {
  const { addToast } = useToastContext();
  return (
    <Action
      fullWidth
      as="button"
      data-outside="false"
      onClick={() => {
        runCartAction(product, "add");
        addToast("success", "Product has been added");
      }}
    >
      <div className="text-base">To Cart</div>
    </Action>
  );
}
