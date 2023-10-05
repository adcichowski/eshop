// import {
//   PaymentElement,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// import { BoxWithSelects } from "../../../ShippingStep/components/BoxWithSelects/BoxWithSelects";
// import { DetailsOrder } from "views/cart/components/DetailsOrder/DetailsOrder";
// import { Button } from "components/Button/Button";
// import { useUpdateOrderPaymentByIdMutation } from "generated/graphql";
// import { useOrderFormContext } from "views/cart/components/OrderFormStepper/context/OrderFormContext";

// export function CheckoutForm() {
//   const stripe = useStripe();
//   const elements = useElements();
//   const { payment } = useOrderFormContext();
//   const [mutate] = useUpdateOrderPaymentByIdMutation();
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!stripe || !elements || !payment?.orderId) {
//       return;
//     }
//     const { error } = await stripe.confirmPayment({
//       elements,
//       redirect: "if_required",
//       confirmParams: {
//         payment_method_data: {
//           billing_details: {
//             address: {
//               city: "Gdansk",
//               country: "pl",
//               line1: "Lawendowe Wzgórze",
//               line2: "Bulonska",
//               postal_code: "80-288",
//               state: "pl",
//             },
//             email: "a@gmail.com",
//           },
//         },
//         return_url: `http://localhost:3000/cart?order=${payment.orderId}`,
//       },
//     });
//     if (error) return;
//     await mutate({ variables: { orderId: payment.orderId } });
//   };

//   return (
//     <form
//       id="payment-form"
//       onSubmit={handleSubmit}
//       className="grid md:grid-cols-3 md:gap-x-12 mb-32"
//     >
//       <div className="col-span-2 flex flex-col gap-y-2">
//         <BoxWithSelects id="delivery-method" header="Choose a delivery method">
//           <PaymentElement
//             options={{
//               fields: { billingDetails: { address: "never" } },
//               layout: "accordion",
//             }}
//             id="payment-element"
//           />
//         </BoxWithSelects>
//       </div>
//       <div className="flex flex-col col-span-2 md:col-span-1 md:mx-2 relative">
//         <div className="flex flex-col sticky">
//           <DetailsOrder />
//           <Button type="submit" className="mt-4 rounded-none py-2">
//             I order and pay
//           </Button>
//         </div>
//       </div>
//     </form>
//   );
// }
