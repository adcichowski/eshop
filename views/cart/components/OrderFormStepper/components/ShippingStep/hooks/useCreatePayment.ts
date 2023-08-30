import type {
  ErrorCreatePaymentIntent,
  SuccessCreatePaymentIntent,
  UserDataBody,
} from "pages/api/create-payment-intent";
import { useMutation } from "react-query";
import { useOrderFormContext } from "../../../context/OrderFormContext";

export function useCreatePayment() {
  const { handleSetPayment } = useOrderFormContext();
  const mutation = useMutation<
    SuccessCreatePaymentIntent,
    ErrorCreatePaymentIntent,
    UserDataBody
  >(["createOrder"], async (mutateData) => {
    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mutateData),
    });
    const data = await res.json();
    return data;
  });

  return mutation;
}
