import type { InputProps } from "components/Inputs/Inputs";
import type { GetStaticPropsContext } from "next";
import type { ParsedUrlQuery } from "querystring";
import type { AnyObjectSchema, InferType } from "yup";

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  readonly paths: ReadonlyArray<{ readonly params: infer R }>;
}>
  ? R extends ParsedUrlQuery
    ? GetStaticPropsContext<R>
    : never
  : never;

export type GenerateFields<
  Schema extends AnyObjectSchema,
  StructureSchema = InferType<Schema>
> = {
  readonly [Keys in keyof StructureSchema]: InputProps;
};
