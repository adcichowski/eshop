import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { registerAccountSchema } from "../schemas/registerAccountSchema";
import { loginAccountSchema } from "../schemas/loginAccountSchema";

type TypeSchemas = {
  register: {
    schema: typeof registerAccountSchema;
    fields: JSX.IntrinsicElements["input"][];
  };
  login: {
    schema: typeof loginAccountSchema;
    fields: JSX.IntrinsicElements["input"][];
  };
};

const AVAIBLE_SCHEMAS: TypeSchemas = {
  register: {
    schema: registerAccountSchema,
    fields: [
      { name: "E-mail", type: "email" },
      { name: "Hasło", type: "password" },
    ],
  },
  login: {
    schema: loginAccountSchema,
    fields: [
      { name: "E-mail", type: "email" },
      { name: "Hasło", type: "password" },
    ],
  },
};

export function useAccountForm(typeScheme: keyof TypeSchemas) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AVAIBLE_SCHEMAS[typeScheme].schema),
  });
  return {
    register,
    handleSubmit,
    errors,
    fields: AVAIBLE_SCHEMAS[typeScheme].fields,
  };
}
