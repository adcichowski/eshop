import type { InputProps } from "components/Inputs/types";
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
export type TypeHeadlineTags = "h1" | "h2" | "h3" | "h4" | "h5";
