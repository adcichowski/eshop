import { Resolver, yupResolver } from "@hookform/resolvers/yup";
import { useForm as useFormHook } from "react-hook-form";

export function useForm<T extends Parameters<Resolver>[0]>(provideSchema: T) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useFormHook({
    resolver: yupResolver(provideSchema),
  });
  return {
    register,
    handleSubmit,
    errors,
    isDirty,
    isValid,
  };
}
