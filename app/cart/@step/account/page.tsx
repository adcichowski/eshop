import { HeaderInStep } from "app/cart/components/HeaderInStep";
import { LayoutStepPage } from "app/cart/components/LayoutStepPage";
import clsx from "clsx";
import { getServerSession } from "next-auth";
import React from "react";
import { FormDetailsDelivery } from "./components/FormDetailsDelivery/FormDetailsDelivery";
import { LoginFormAccount } from "./components/LoginFormAccount";
import { authOptions } from "app/api/auth/[...nextauth]";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <LayoutStepPage step="account">
      <HeaderInStep header="Your personal data">
        <div
          className={clsx(
            `flex justify-center gap-4 flex-wrap`,
            !session && "justify-between",
          )}
        >
          {!session && <LoginFormAccount />}
          <FormDetailsDelivery session={session} />
        </div>
      </HeaderInStep>
    </LayoutStepPage>
  );
}
