import { getEnv } from "utils/utils";
import {
  GetCategoriesDocument,
  GetProductBySlugDocument,
  GetProductReviewsBySlugDocument,
  GetProductsByCategorySlugDocument,
  GetProductsToCarrouselDocument,
  TypedDocumentString,
} from "./hygraph/generated/graphql";
import {
  reshapeGetCategories,
  reshapeProductDisplay,
  reshapeProductDetails,
  reshapeProductReviews,
} from "./mappers";
import { baseUrl } from "../constants";
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
    query: GetProductBySlugDocument,
    cache: "no-store",
  });

  if (!data) {
    throw new Error(`Problem to fetch products!`);
  }

  return data;
}

export async function getProductsToCarrousel() {
  const data = await fetcher({
    query: GetProductsToCarrouselDocument,
    cache: "no-store",
  });

  if (!data.products) {
    throw new Error(`Problem to get products to carrousel!`);
  }

  return reshapeProductDisplay(data.products);
}

export async function getAllCategories() {
  const data = await fetcher({
    query: GetCategoriesDocument,
  });

  if (!data.categories) {
    throw new Error(`Problem to get categories!`);
  }

  return reshapeGetCategories(data.categories);
}

export async function getProductBySlug(slug: string) {
  const data = await fetcher({
    query: GetProductBySlugDocument,
    variables: {
      slug: slug,
    },
    cache: "no-store",
  });

  if (!data.product) {
    throw new Error(`Product not found: ${slug}`);
  }

  return reshapeProductDetails(data.product);
}

export async function getProductReviewsBySlug(slug: string) {
  const data = await fetcher({
    query: GetProductReviewsBySlugDocument,
    variables: {
      slug: slug,
    },
    cache: "no-store",
  });

  if (!data.product) {
    throw new Error(`Product reviews not found: ${slug}`);
  }

  return reshapeProductReviews(data.product.reviews);
}

export async function getProductsByCategorySlug(categorySlug: string) {
  const { category } = await fetcher({
    query: GetProductsByCategorySlugDocument,
    cache: "no-store",
    variables: {
      categorySlug,
    },
  });

  if (!category) {
    throw new Error(`Problem to find products from category!`);
  }

  return {
    name: category.name,
    id: category.id,
    products: reshapeProductDisplay(category.products),
  };
}
