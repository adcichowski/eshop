// "use client";
// import type { TypeHeadlineTags } from "types/types";
// import { defaultSchema } from "../schemas/defaultSchema";
// import { useForm } from "../useForm";
// import * as Yup from "yup";
// import { useMutation } from "react-query";
// import { fetcher } from "utils/fetcher";
// import { Input } from "components/Inputs/components/Input";
// import { useRouter } from "next/navigation";
// import { schemaResponseMailerLite } from "demo/api/newsletter";

// const DISCOUNT_PERCENT = "10%";
// export type NewsletterProps = {
//   readonly HeaderTag: TypeHeadlineTags;
// };

// // const checkIsCookieMailerLite = () => {
// //   const COOKIE_VALUE_MAILERLITE = "ML=1";
// //   const cookie = document.cookie;
// //   return cookie === COOKIE_VALUE_MAILERLITE;
// // };

// const PATHS_RENDER = ["/account", "/"];

// export function Newsletter({ HeaderTag }: NewsletterProps) {
//   const router = useRouter();
//   const isCookieAvaible = false; //checkIsCookieMailerLite
//   const schemaEmail = Yup.object({ email: defaultSchema.email });
//   const { errors, register, handleSubmit } = useForm<{
//     readonly email: string;
//   }>(schemaEmail);
//   const { mutate } = useMutation(
//     ["addToNewsletter"],
//     async (data: { readonly email: string }) => {
//       await fetcher<Yup.InferType<typeof schemaResponseMailerLite>["data"]>(
//         "/api/newsletter",
//         {
//           method: "POST",
//           body: data,
//         }
//       );
//     }
//   );
//   const onSumbit = handleSubmit((data) => {
//     mutate(data);
//   });
//   // if (!PATHS_RENDER.includes(router.asPath)) {
//   //   return <></>;
//   // }
//   return !isCookieAvaible ? (
//     <section
//       className="bg-primary w-full p-6"
//       role="dialog"
//       aria-labelledby="newsletterHeading"
//       aria-describedby="newsletterDescription"
//     >
//       <div className="flex flex-col items-center">
//         <HeaderTag
//           id="newsletterHeading"
//           className="text-center text-xl font-semibold uppercase md:text-left md:text-2xl"
//         >
//           Sign up for our newsletter
//         </HeaderTag>

//         <div
//           className="mt-3 w-3/4 text-center text-xl md:text-2xl"
//           id="newsletterDescription"
//         >
//           <div className="-mt-2 inline-flex flex-wrap items-center justify-center">
//             get
//             <span className="mx-1 text-4xl font-semibold text-white">
//               {DISCOUNT_PERCENT}
//             </span>
//             <span>discounts on your first purchase</span>
//             <form
//               noValidate
//               className="ml-2 flex items-center text-sm md:text-base"
//               onSubmit={onSumbit}
//             >
//               <fieldset className="my-2 inline xl:my-0">
//                 <div className="flex flex-wrap items-center">
//                   <div className="flex">
//                     <Input
//                       id="newsletterEmail"
//                       text="Your email"
//                       hideLabel
//                       {...register("email")}
//                       error={errors?.email?.message}
//                     />
//                   </div>
//                   <button
//                     className="border-2 border-black py-2 px-2 font-semibold uppercase"
//                     type="submit"
//                   >
//                     Sign in
//                   </button>
//                 </div>
//               </fieldset>
//             </form>
//           </div>
//           <div className="mt-1 text-xs font-medium md:text-sm">
//             and receive information about news and promotions
//           </div>
//         </div>
//       </div>
//     </section>
//   ) : (
//     <></>
//   );
// }
