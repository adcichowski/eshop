import { useToastContext } from "context/ToastContext/ToastContext";
import { useSession } from "next-auth/react";
import React, { useRef, useState } from "react";
import { useMutation } from "react-query";
import { fetcher } from "utils/fetcher";

export default function useDiscountCodeInput({
  setForm,
}: {
  setForm: (params: {
    code: string | undefined;
    discount: number | undefined;
  }) => void;
}) {
  const refCode = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<undefined | string>(undefined);
  const [haveDiscount, setHaveDiscount] = useState(false);
  const handleHaveDiscount = () => {
    setHaveDiscount((prev) => !prev);
    if (haveDiscount) setForm({ code: undefined, discount: undefined });
  };
  const { addToast } = useToastContext();
  const { isLoading, mutate } = useMutation(
    async (data: { email: string; code: string }) => {
      return await fetcher<{ code: string; discount: number }>(
        "/api/checkCode",
        {
          method: "POST",
          body: data,
        }
      );
    },
    {
      onSuccess: (
        res: { code: string; discount: number } | { error: string }
      ) => {
        if ("code" in res) {
          addToast("success", "Success! Your discount code has been applied.");
          setForm(res);
        }
        if ("error" in res) {
          addToast(
            "error",
            "Sorry, the discount code you entered is invalid or has already been used. "
          );
        }
      },
    }
  );
  const { data } = useSession();
  const handleCheckCode = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e?.preventDefault();
    if (refCode.current === null) {
      return setError("Code is required");
    }
    if (!data?.user) {
      return addToast("info", "Code can only use sign in user");
    }
    mutate({
      email: data.user.email,
      code: refCode.current.value,
    });
  };
  return {
    handleCheckCode,
    refCode,
    isLoading,
    error,
    haveDiscount,
    handleHaveDiscount,
  };
}
