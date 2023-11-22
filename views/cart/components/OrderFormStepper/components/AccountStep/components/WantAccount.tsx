"use client";
import { Checkbox } from "components/Inputs/components/Checkbox";
import { useState } from "react";
import { RowInputs } from "./RowInputs";
import { Input } from "components/Inputs/components/Input";

export function WantAccount() {
  const [wantAccount, setWantAccount] = useState(false);
  return (
    <>
      <Checkbox
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
      )}{" "}
    </>
  );
}
