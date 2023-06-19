import { useForm } from "components/Forms/useForm";
import { Checkbox } from "components/Inputs/components/Checkbox";
import { Input } from "components/Inputs/components/Input";
import { useToastContext } from "context/ToastContext/ToastContext";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import * as Yup from "yup";
import { useMutation } from "react-query";
import CheckIcon from "../../assets/check.svg";
import { SpinIcon } from "components/Skeleton/SpinIcon";

export default function DiscountCodeInput() {
  const [haveDiscount, setHaveDiscount] = useState(false);
  const { addToast } = useToastContext();
  const { mutate, isLoading } = useMutation(
    async (data: { email: string; code: string }) => {
      const response = await fetch("/api/checkCode", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return await response.json();
    }
  );
  const { register, handleSubmit, errors } = useForm<{ code: string }>(
    Yup.object({
      code: Yup.string().required("Code is required"),
    })
  );
  const { data } = useSession();
  const onSubmit = handleSubmit(async ({ code }, e) => {
    e?.preventDefault();
    if (!data?.user) {
      addToast("info", "Code can only use sign in user");
      return;
    }
    mutate({ email: data.user.email, code });
  });
  console.log(errors, isLoading);
  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={onSubmit}
      className="mb-2 flex grow flex-col items-start gap-y-2 "
    >
      <Checkbox
        id="isDiscountCode"
        text="I have discount code"
        onClick={() => setHaveDiscount((prev) => !prev)}
        type="checkbox"
      />
      {haveDiscount && (
        <div className="flex">
          <div>
            <Input
              id="discountCode"
              text="Discount Code"
              hideLabel
              type="text"
              size="small"
              error={errors.code?.message}
              className="h-full border-r-0"
              {...register("code")}
            />
          </div>
          <button
            type="submit"
            className="flex grow-0 items-center gap-x-2 rounded-br-md rounded-tr-md border border-primary p-2 text-sm font-semibold text-primary"
          >
            <SpinIcon size="small" />
            <span>Use</span>
          </button>
        </div>
      )}
    </form>
  );
}
