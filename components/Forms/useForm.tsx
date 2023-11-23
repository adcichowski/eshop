import { yupResolver } from "@hookform/resolvers/yup";
import type { FieldValues } from "react-hook-form";
import { useForm as useFormHook } from "react-hook-form";

export function useForm<TFieldValues extends FieldValues>(
  provideSchema: Parameters<typeof yupResolver<TFieldValues>>[0],
) {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isValid, isDirty, defaultValues },
    watch,
    control,
    ...rest
  } = useFormHook({
    resolver: yupResolver(provideSchema),
  });
  return {
    ...rest,
    register,
    handleSubmit,
    errors,
    isDirty,
    defaultValues,
    isValid,
    watch,
    control,
    formState,
  };
}
