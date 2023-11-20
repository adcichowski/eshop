import { Action } from "components/Action/Action";
import { Checkbox } from "components/Inputs/components/Checkbox";
import { Input } from "components/Inputs/components/Input";
import { useState } from "react";
import FormAccountWrapper from "./components/FormAccountWrapper";
import { HeaderInStep } from "app/cart/components/HeaderInStep";

export function AccountStep() {
  const benefitsInfo = [
    "10% discount on first purchases for new users",
    "the possibility of receiving discounts and promotional coupons",
    "preview of order fulfillment status",
  ];
  // const [wantAccount, setWantAccount] = useState(false);
  return (
    <HeaderInStep header="Your personal data">
      <div className="grid gap-x-5 gap-y-5 md:grid-cols-3">
        <div>
          <FormAccountWrapper title="Have an account">
            <>
              <Input className="flex w-full" id="email" text="Email:" />
              <Input
                className="flex"
                id="password"
                type="password"
                text="Password:"
              />
              {/* <Action as="button" onClick={() => {}}>
                Log in
              </Action> */}
            </>
          </FormAccountWrapper>
        </div>
        <div className="md:col-span-2">
          <FormAccountWrapper title="Still don't have account">
            <>
              <section>
                <h4>
                  Do not have an account yet? Create one and take advantage of
                  the benefits for regular customers:
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
              <div className="flex flex-col gap-y-3">
                <Input className="flex w-full" id="emailOrder" text="Email:" />
                <Input id="phoneOrder" className="w-full" text="Phone:" />
                <RowInputs>
                  <Input id="firstName" text="First name:" />
                  <Input id="lastName" text="Last name:" />
                </RowInputs>
                <Input id="street" text="Street:" />
                <RowInputs>
                  <div className="flex-none">
                    <Input id="postalCode" text="Postal Code:" />
                  </div>
                  <Input id="City" text="City:" />
                </RowInputs>
                {/* <Checkbox
                  checked={wantAccount}
                  onClick={() => setWantAccount((prev) => !prev)}
                  text="I want create account in shop"
                  id="createAccount"
                />
                {wantAccount ? (
                  <RowInputs>
                    <Input id="newPassword" text="Password:" />
                    <Input id="newPasswordRepeat" text="Repeat Password:" />
                  </RowInputs>
                ) : (
                  <></>
                )} */}
                <Checkbox
                  id="acceptTerm"
                  text="*I accept the terms and conditions of the service and have read the information regarding my personal data below."
                />
                <Checkbox
                  id="acceptTerm"
                  text="I want to sign up for the newsletter to receive updates and promotions, as well as receive a 10% discount coupon on my first purchase."
                />
              </div>
              <Action as="button">Sign up</Action>
            </>
          </FormAccountWrapper>
          {/* <Action as="button" onClick={() => {}}>
            Set Delivery
          </Action> */}
        </div>
      </div>
    </HeaderInStep>
  );
}

const RowInputs = ({ children }: { children: JSX.Element[] }) => (
  <div className="flex flex-wrap gap-x-2 gap-y-2 sm:flex-nowrap ">
    {children}
  </div>
);
