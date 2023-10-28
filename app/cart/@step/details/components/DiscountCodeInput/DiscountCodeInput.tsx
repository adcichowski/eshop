import React from "react";
// import { SpinIcon } from "components/Skeleton/SpinIcon";
// import useDiscountCodeInput from "./useDiscountCodeInput";

export function DiscountCodeInput() {
  // const {
  //   refCode,
  //   error,
  //   handleHaveDiscount,
  //   haveDiscount,
  //   handleCheckCode,
  //   isLoading,
  // } = useDiscountCodeInput();
  return (
    <div className="mb-2 flex grow flex-col items-start gap-y-2 ">
      {/* <Checkbox
        id="isDiscountCode"
        text="I have discount code"
        onClick={handleHaveDiscount}
        type="checkbox"
      /> */}
      {/* {false && (
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
          <Action
            as="button"
            onClick={handleCheckCode}
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? <SpinIcon size="small" /> : <></>}
            <span>Use</span>
          </Action>
        </div>
      )} */}
    </div>
  );
}
