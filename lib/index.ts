import { getEnv } from "utils/utils";
import {
  CreateAccountDocument,
  CreateOrderDocument,
  GetAccountByEmailDocument,
  GetCategoriesDocument,
  GetProductBySlugDocument,
  GetProductReviewsBySlugDocument,
  GetProductsByCategorySlugDocument,
  GetProductsByIdsDocument,
  GetProductsToCarrouselByCategorySlugDocument,
  GetProductsToCarrouselByCategorySlugWithoutProductDocument,
  OrderItemCreateManyInlineInput,
  StatusOrder,
  TypedDocumentString,
  UpdateOrderPaymentPaidDocument,
} from "./hygraph/generated/graphql";
import {
  reshapeGetCategories,
  reshapeProductDisplay,
  reshapeProductDetails,
  reshapeProductReviews,
} from "./mappers";
import { ADMIN_AUTH_TOKEN } from "../constants";
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

export async function getAllProducts() {
  const data = await fetcher({
    query: GetProductBySlugDocument,
    cache: "no-store",
  });

  if (!data) {
    throw new Error(`Problem to fetch products!`);
  }

  return data;
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

export async function getProductsToCarrouselByCategorySlug({
  categorySlug,
}: {
  categorySlug: string;
}) {
  const data = await fetcher({
    query: GetProductsToCarrouselByCategorySlugDocument,
    cache: "no-store",
    variables: {
      categorySlug,
    },
  });

  if (!data.products) {
    throw new Error(`Problem to get products to carrousel!`);
  }

  return reshapeProductDisplay(data.products);
}

export async function getProductsToCarrouselByCategorySlugWithoutProduct({
  categorySlug,
  productId,
}: {
  categorySlug: string;
  productId: string;
}) {
  const data = await fetcher({
    query: GetProductsToCarrouselByCategorySlugWithoutProductDocument,
    cache: "no-store",
    variables: {
      categorySlug,
      productId,
    },
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

export async function getProductsByCategorySlug({
  skip,
  first,
  slug,
}: {
  slug: string;
  skip: number;
  first: number;
}) {
  const {
    products,
    productsConnection: { pageInfo },
    categories,
  } = await fetcher({
    query: GetProductsByCategorySlugDocument,
    cache: "no-store",
    variables: {
      categorySlug: slug,
      skip,
      first,
    },
  });

  if (!products) {
    throw new Error(`Problem to find products from category!`);
  }
  const pageSize = pageInfo.pageSize || 0;
  return {
    products: reshapeProductDisplay(products),
    numberOfPages: Math.round((skip + pageSize) / first),
    categoryName: categories[0].name,
  };
}

export async function getAccountByEmail(email: string) {
  const data = await fetcher({
    query: GetAccountByEmailDocument,
    headers: {
      Authorization: `Bearer ${ADMIN_AUTH_TOKEN}`,
    },
    variables: {
      email,
    },
  });

  if (!data.account) {
    throw new Error(`Account not found: ${email}`);
  }

  return data.account;
}

export async function createAccount({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const data = await fetcher({
    query: CreateAccountDocument,
    headers: {
      Authorization: `Bearer ${ADMIN_AUTH_TOKEN}`,
    },
    variables: {
      email,
      password,
    },
  });
  const account = data.createAccount;
  if (!account) {
    throw new Error(`Problem while creating account with ${email}`);
  }
  return account;
}

export async function getProductsByIds(productsId: string[]) {
  const data = await fetcher({
    query: GetProductsByIdsDocument,
    variables: {
      productsId,
    },
  });
  const products = data.products;
  if (!products) {
    throw new Error(`Problem while get products with array ${productsId}`);
  }
  return products;
}

export async function createOrder(order: {
  email: string;
  totalOrderPrice: number;
  stripeCheckoutId: string;
  orderItems: OrderItemCreateManyInlineInput;
  statusOrder: StatusOrder;
}) {
  const data = await fetcher({
    query: CreateOrderDocument,
    headers: {
      Authorization: `Bearer ${ADMIN_AUTH_TOKEN}`,
    },
    variables: order,
  });
  const createdOrder = data.createOrder;
  if (!createdOrder) {
    throw new Error(`Problem while creating order`);
  }
  return createdOrder;
}

export async function updateStatusOrderPaid(stripeCheckoutId: string) {
  const data = await fetcher({
    query: UpdateOrderPaymentPaidDocument,
    headers: {
      Authorization: `Bearer ${ADMIN_AUTH_TOKEN}`,
    },
    variables: {
      stripeCheckoutId,
    },
  });
  const paidOrder = data.updateOrder;
  if (!paidOrder) {
    throw new Error(`Problem while updating order to paid`);
  }
  return paidOrder;
}
