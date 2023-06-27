import { Checkbox } from "components/Inputs/components/Checkbox";
import { Input } from "components/Inputs/components/Input";
import React from "react";
import { SpinIcon } from "components/Skeleton/SpinIcon";
import { Button } from "components/Button/Button";
import useDiscountCodeInput from "./useDiscountCodeInput";

export default function DiscountCodeInput({
  setForm,
}: {
  setForm: (params: {
    code: string | undefined;
    discount: number | undefined;
  }) => void;
}) {
  const {
    refCode,
    error,
    handleHaveDiscount,
    haveDiscount,
    handleCheckCode,
    isLoading,
  } = useDiscountCodeInput({ setForm });
  return (
    <div className="mb-2 flex grow flex-col items-start gap-y-2 ">
      <Checkbox
        id="isDiscountCode"
        text="I have discount code"
        onClick={handleHaveDiscount}
        type="checkbox"
      />
      {haveDiscount && (
        <div className="flex">
          <div>
            <Input
              ref={refCode}
              id="discountCode"
              text="Discount Code"
              hideLabel
              type="text"
              size="small"
              error={error}
              className="h-full border-r-0"
            />
          </div>
          <Button
            onClick={handleCheckCode}
            disabled={isLoading}
            type="submit"
            className="flex grow-0 items-center gap-x-1 rounded-none rounded-br-md rounded-tr-md border border-primary bg-white p-2 text-sm font-semibold normal-case text-primary"
          >
            {isLoading ? <SpinIcon size="small" /> : <></>}
            <span>Use</span>
          </Button>
        </div>
      )}
    </div>
  );
}
