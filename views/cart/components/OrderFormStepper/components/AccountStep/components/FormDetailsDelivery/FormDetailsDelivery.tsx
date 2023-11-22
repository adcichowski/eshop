"use client";
import React, { useState } from "react";
import { FormAccountWrapper } from "../FormAccountWrapper";
import { Action } from "components/Action/Action";
import { Checkbox } from "components/Inputs/components/Checkbox";

import { RowInputs } from "../RowInputs";
import { Input } from "components/Inputs/components/Input";
import { Session } from "next-auth";
import { useForm } from "components/Forms/useForm";
import { detailsDeliverySchema } from "components/Forms/schemas/detailsDeliverySchema";
import * as Yup from "yup";
const benefitsInfo = [
  "10% discount on first purchases for new users",
  "the possibility of receiving discounts and promotional coupons",
  "preview of order fulfillment status",
];

export function FormDetailsDelivery({ session }: { session: Session | null }) {
  const [wantAccount, setWantAccount] = useState(false);

  const { register, errors, handleSubmit } = useForm(detailsDeliverySchema);

  const onSubmit = (
    _data: Yup.InferType<typeof detailsDeliverySchema>,
    e?: React.BaseSyntheticEvent,
  ) => {
    e?.preventDefault();
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
                  error={errors.emailOrder?.message}
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
              <Checkbox
                checked={wantAccount}
                onClick={() => setWantAccount((prev) => !prev)}
                text="I want create account in shop"
                id="createAccount"
              />
              <RowInputs>
                <Input id="newPassword" text="Password:" />
                <Input id="newPasswordRepeat" text="Repeat Password:" />
              </RowInputs>
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
