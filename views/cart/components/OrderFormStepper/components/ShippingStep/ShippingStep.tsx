import React, { FormEvent } from "react";
import ContentInStep from "../ContentInStep/ContentInStep";
// import { useCreatePayment } from "./hooks/useCreatePayment";
// import { useOrderFormContext } from "../../context/OrderFormContext";
import { DeliverySelect } from "./components/DeliverySelect/DeliverySelect";
import { DetailsOrder } from "views/cart/components/DetailsOrder/DetailsOrder";
import { Action } from "components/Action/Action";

export function ShippingStep() {
  // const { order, account } = useOrderFormContext();
  // const { mutateAsync } = useCreatePayment();
  // const orderProducts = useMemo(() => {
  // if (order?.products) {
  //   return order.products.map((product) => ({
  //     variantId: product.variant.id,
  //     amount: product.amount,
  //     productId: product.id,
  //   }));
  // }
  // }, [order?.products]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // if (!account || !orderProducts) return;
    // const data = await mutateAsync({
    //   email: account.email,
    //   orderProducts,
    // });

    // if (data?.clientSecret) {
    //   handleSetPayment({ paymentId: data.clientSecret, orderId: data.orderId });
    //   handleSetShipping({ label: "DPD", value: 909 });
    // }
  };

  return (
    <ContentInStep header="Delivery order">
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-3 md:gap-x-12 mb-32"
      >
        <div className="col-span-2 flex flex-col gap-y-2">
          <DeliverySelect />
        </div>
        <div className="flex flex-col relative">
          <div className="flex flex-col sticky">
            <DetailsOrder />
            <Action as="button" type="submit">
              I order and pay
            </Action>
          </div>
        </div>
      </form>
    </ContentInStep>
  );
}
