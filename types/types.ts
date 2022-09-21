import { InputProps } from "components/Inputs/Inputs";
import type { GetStaticPropsContext } from "next";
import type { ParsedUrlQuery } from "querystring";
import { AnyObjectSchema, InferType } from "yup";

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R extends ParsedUrlQuery
    ? GetStaticPropsContext<R>
    : never
  : never;

export type GenerateFields<
  Schema extends AnyObjectSchema,
  StructureSchema = InferType<Schema>
> = {
  [Keys in keyof StructureSchema]: InputProps;
};
