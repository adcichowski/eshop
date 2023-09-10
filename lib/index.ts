import { getEnv } from "utils/utils";
import {
  GetCategoriesDocument,
  GetProductsDocument,
  TypedDocumentString,
} from "./hygraph/generated/graphql";
export * from "./hygraph/generated/gql";

type GraphQlError = {
  message: string;
};
type GraphQlErrorResponse<T> =
  | { data: T }
  | { errors: readonly GraphQlError[] };

export async function fetcher<Result, Variables>({
  query,
  variables,
  headers,
  cache = "force-cache",
  next,
}: {
  query: TypedDocumentString<Result, Variables>;
  variables?: Variables;
  headers?: HeadersInit;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
}): Promise<Result> {
  const endpoint = getEnv(process.env.NEXT_PUBLIC_API, `Missing HYGRAPH_URL!`);

  const result = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify({
      query: query.toString(),
      ...(variables && { variables }),
    }),
    cache,
    next,
  });

  const body = (await result.json()) as GraphQlErrorResponse<Result>;

  if ("errors" in body) {
    throw body.errors[0];
  }

  return body.data;
}

export async function getProducts() {
  const data = await fetcher({
    query: GetProductsDocument,
    cache: "no-store",
  });

  if (!data.products) {
    throw new Error(`Problem to fetch products!`);
  }

  return data;
}

export async function getAllCategories() {
  const data = await fetcher({
    query: GetCategoriesDocument,
    cache: "no-store",
  });

  if (!data.categories) {
    throw new Error(`Problem to get categories!`);
  }

  return data;
}
