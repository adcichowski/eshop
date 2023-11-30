"use client";
import React, { useState } from "react";
import { Action } from "components/Action/Action";
import { Checkbox } from "components/Inputs/components/Checkbox";

import { RowInputs } from "../RowInputs";
import { Input } from "components/Inputs/components/Input";
import { Session } from "next-auth";
import { useForm } from "components/Forms/useForm";
import {
  shippingAsGuest,
  shippingLoggedUser,
  shippingWithRegistration,
} from "components/Forms/schemas/detailsDeliverySchema";
import type {
  ShippingAsGuestType,
  ShippingLoggedUserType,
  ShippingWithRegistrationType,
} from "components/Forms/schemas/detailsDeliverySchema";
import { useOrderContext } from "context/OrderContext/OrderContext";
import { useRouter } from "next/navigation";
import { generateUrlForToast } from "context/ToastContext/utilsToast";
import { createPaymentIntent } from "lib/actions/paymen-intent";
import { useClientContext } from "context/ClientContext/ClientContext";
import { FormAccountWrapper } from "../FormAccountWrapper";

const benefitsInfo = [
  "10% discount on first purchases for new users",
  "the possibility of receiving discounts and promotional coupons",
  "preview of orderx fulfillment status",
];

export function FormDetailsDelivery({ session }: { session: Session | null }) {
  const { push } = useRouter();
  const { cart } = useClientContext();
  const { setPersonData, setOrder } = useOrderContext();
  const [wantAccount, setWantAccount] = useState(false);
  const { register, errors, handleSubmit } = useForm<
    ShippingAsGuestType | ShippingLoggedUserType | ShippingWithRegistrationType
  >(
    session
      ? shippingLoggedUser
      : wantAccount
      ? shippingWithRegistration
      : shippingAsGuest,
  );

  const onSubmit = async (
    data:
      | ShippingAsGuestType
      | ShippingLoggedUserType
      | ShippingWithRegistrationType,
    e?: React.BaseSyntheticEvent,
  ) => {
    e?.preventDefault();
    if (!cart) return;
    const email = "emailOrder" in data ? data.emailOrder : session?.user.email;
    if (!email) return;
    if ("newPassword" in data && wantAccount) {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password: data.newPassword,
        }),
      });
      if (!res.ok) {
        return push(generateUrlForToast("/cart/account", "REGISTER_ERROR"));
      }
    }

    const paymentIntent = await createPaymentIntent({
      orderProducts: cart,
      email,
    });
    setPersonData({
      ...data,
      email,
    });
    if (paymentIntent) {
      setOrder(paymentIntent);
      push("/cart/payment");
    }
  };

  return (
    <div>
      <FormAccountWrapper title="Set details delivery">
        <>
          <section>
            <h4>
              Do not have an account yet? Create one and take advantage of the
              benefits for regular customers:
            </h4>
            <ul className="text-primary list-inside list-disc">
              {benefitsInfo.map((benefit) => (
                <li key={benefit} className="px-1">
                  <span className="text-black">{benefit}</span>
                </li>
              ))}
            </ul>
            <span className="font-semibold">or</span>
            <p>continue as a guest</p>
          </section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-3 mb-5">
              {!session && (
                <Input
                  error={
                    "emailOrder" in errors ? errors?.emailOrder?.message : ""
                  }
                  {...register("emailOrder")}
                  id="emailOrder"
                  text="Email:"
                />
              )}
              <Input
                error={errors.phoneNumber?.message}
                id="phoneOrder"
                {...register("phoneNumber")}
                text="Phone:"
              />
              <RowInputs>
                <Input
                  error={errors.firstName?.message}
                  id="firstName"
                  {...register("firstName")}
                  text="First name:"
                />
                <Input
                  error={errors.lastName?.message}
                  id="lastName"
                  {...register("lastName")}
                  text="Last name:"
                />
              </RowInputs>
              <Input
                id="street"
                error={errors.street?.message}
                {...register("street")}
                text="Street:"
              />
              <RowInputs>
                <div className="flex-none">
                  <Input
                    error={errors.postalCode?.message}
                    id="postalCode"
                    {...register("postalCode")}
                    text="Postal Code:"
                  />
                </div>
                <Input
                  error={errors.city?.message}
                  id="City"
                  {...register("city")}
                  text="City:"
                />
              </RowInputs>

              <>
                {!session && (
                  <Checkbox
                    checked={wantAccount}
                    onChange={() => setWantAccount((prev) => !prev)}
                    text="I want create account in shop"
                    id="createAccount"
                  />
                )}
                {wantAccount && (
                  <RowInputs>
                    <Input
                      id="newPassword"
                      type="password"
                      {...register("newPassword")}
                      error={
                        "newPassword" in errors
                          ? errors?.newPassword?.message
                          : ""
                      }
                      text="Password:"
                    />
                    <Input
                      error={
                        "newPassword" in errors
                          ? errors?.repeatedNewPassword?.message
                          : ""
                      }
                      type="password"
                      {...register("repeatedNewPassword")}
                      id="repeatedNewPassword"
                      text="Repeat Password:"
                    />
                  </RowInputs>
                )}
              </>
              <Checkbox
                error={errors.acceptTerm?.message}
                {...register("acceptTerm")}
                id="acceptTerm"
                text="*I accept the terms and conditions of the service and have read the information regarding my personal data below."
              />
              <Checkbox
                id="newsletter"
                text="I want to sign up for the newsletter to receive updates and promotions, as well as receive a 10% discount coupon on my first purchase."
              />
            </div>
            <Action as="button" fullWidth type="submit">
              <div className="py-1 text-base">Sign up</div>
            </Action>
          </form>
        </>
      </FormAccountWrapper>
    </div>
  );
}
