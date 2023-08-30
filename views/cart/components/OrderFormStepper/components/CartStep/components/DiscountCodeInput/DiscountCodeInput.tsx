import { Checkbox } from "components/Inputs/components/Checkbox";
import { Input } from "components/Inputs/components/Input";
import React from "react";
import { SpinIcon } from "components/Skeleton/SpinIcon";
import { Button } from "components/Button/Button";
import useDiscountCodeInput from "./useDiscountCodeInput";

export default function DiscountCodeInput() {
  const {
    refCode,
    error,
    handleHaveDiscount,
    haveDiscount,
    handleCheckCode,
    isLoading,
  } = useDiscountCodeInput();
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
            className="border-primary text-primary flex grow-0 items-center gap-x-1 rounded-none rounded-br-md rounded-tr-md border bg-white p-2 text-sm font-semibold normal-case"
          >
            {isLoading ? <SpinIcon size="small" /> : <></>}
            <span>Use</span>
          </Button>
        </div>
      )}
    </div>
  );
}
