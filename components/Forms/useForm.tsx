import type { Resolver } from "@hookform/resolvers/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm as useFormHook } from "react-hook-form";

export function useForm<T extends Parameters<Resolver>[0]>(provideSchema: T) {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isValid, isDirty },
    watch,
  } = useFormHook({
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
