import type { Resolver } from "@hookform/resolvers/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { FieldValues } from "react-hook-form";
import { useForm as useFormHook } from "react-hook-form";

export function useForm<TFieldValues extends FieldValues>(
  provideSchema: Parameters<Resolver>[0]
) {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isValid, isDirty },
    watch,
  } = useFormHook<TFieldValues>({
    resolver: yupResolver(provideSchema),
  });
  return {
    register,
    handleSubmit,
    errors,
    isDirty,
    isValid,
    watch,
    formState,
  };
}
