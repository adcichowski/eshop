/* eslint-disable */
import * as types from "./graphql";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'mutation CreateAccount($email: String!, $password: String!) {\n  createAccount(\n    data: {email: $email, password: $password, discountCode: {create: {DiscountCode: {code: "START15", used: false, discount: 15}}}}\n  ) {\n    email\n    id\n  }\n}':
    types.CreateAccountDocument,
  "query GetAccountByEmail($email: String!) {\n  account(where: {email: $email}, stage: DRAFT) {\n    id\n    email\n    password\n  }\n}":
    types.GetAccountByEmailDocument,
  "query GetCategories {\n  categories(orderBy: name_ASC) {\n    ...Categories\n  }\n}":
    types.GetCategoriesDocument,
  "fragment Categories on Category {\n  id\n  name\n  slug\n}":
    types.CategoriesFragmentDoc,
  "fragment Images on Asset {\n  id\n  alt\n  url\n}": types.ImagesFragmentDoc,
  "fragment ProductDisplay on Product {\n  sale\n  id\n  name\n  slug\n  orientation\n  whiteFrame\n  variants(orderBy: price_ASC, first: 1) {\n    id\n    price\n    width\n    height\n  }\n  categories {\n    slug\n  }\n  images {\n    ...Images\n  }\n}":
    types.ProductDisplayFragmentDoc,
  "fragment ProductDetails on Product {\n  id\n  name\n  description\n  paperWeight\n  orientation\n  slug\n  color\n  sale\n  whiteFrame\n  paperWeight\n  finish\n  variants {\n    ...Variant\n  }\n  categories {\n    id\n    name\n  }\n  images {\n    ...Images\n  }\n}":
    types.ProductDetailsFragmentDoc,
  "fragment ReviewProduct on Review {\n  name\n  id\n  email\n  rating\n  content\n}":
    types.ReviewProductFragmentDoc,
  "fragment Variant on ProductVariantType {\n  id\n  width\n  height\n  price\n}":
    types.VariantFragmentDoc,
  "mutation CreateOrder($email: String!, $totalOrderPrice: Int!, $stripeCheckoutId: String!, $orderItems: OrderItemCreateManyInlineInput!, $statusOrder: StatusOrder!) {\n  createOrder(\n    data: {email: $email, total: $totalOrderPrice, stripeCheckoutId: $stripeCheckoutId, orderItems: $orderItems, statusOrder: $statusOrder}\n  ) {\n    id\n  }\n}\n\nmutation UpdateOrderPaymentPaid($stripeCheckoutId: String!) {\n  updateOrder(\n    data: {statusOrder: PAID}\n    where: {stripeCheckoutId: $stripeCheckoutId}\n  ) {\n    id\n  }\n}":
    types.CreateOrderDocument,
  "query GetProductsToCarrousel {\n  products(first: 12) {\n    ...ProductDisplay\n  }\n}\n\nquery GetProductsToCarrouselByCategorySlugWithoutProduct($categorySlug: String!, $productId: ID!) {\n  products(\n    first: 12\n    where: {categories_some: {slug: $categorySlug}, id_not: $productId}\n  ) {\n    ...ProductDisplay\n  }\n}\n\nquery GetProductsToCarrouselByCategorySlug($categorySlug: String!) {\n  products(first: 12, where: {categories_some: {slug: $categorySlug}}) {\n    ...ProductDisplay\n  }\n}\n\nquery GetProductsSlugs {\n  products {\n    slug\n  }\n}\n\nquery GetProductBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    ...ProductDetails\n  }\n}\n\nquery GetDiscountCodes($code: String!, $email: String!) {\n  discountCodes(\n    where: {code_contains: $code, used: false, accounts_some: {email: $email}}\n    stage: DRAFT\n  ) {\n    code\n    discount\n    used\n  }\n}\n\nquery GetProductsByIds($productsId: [ID!]!) {\n  products(where: {id_in: $productsId}) {\n    id\n    variants {\n      id\n      price\n      width\n      height\n    }\n  }\n}\n\nquery GetProductsByCategorySlug($categorySlug: String!, $skip: Int!, $first: Int!) {\n  products(\n    first: $first\n    where: {categories_some: {slug: $categorySlug}}\n    skip: $skip\n  ) {\n    ...ProductDisplay\n  }\n  categories(where: {slug: $categorySlug}) {\n    name\n  }\n  productsConnection(skip: $skip, where: {categories_some: {slug: $categorySlug}}) {\n    pageInfo {\n      pageSize\n    }\n  }\n}":
    types.GetProductsToCarrouselDocument,
  "mutation CreateReviewProduct($review: ReviewCreateInput!) {\n  createReview(data: $review) {\n    id\n    stage\n  }\n}":
    types.CreateReviewProductDocument,
  "query GetProductReviewsBySlug($slug: String!) {\n  product(where: {slug: $slug}, stage: DRAFT) {\n    reviews {\n      id\n      email\n      rating\n      content\n      name\n    }\n  }\n}":
    types.GetProductReviewsBySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CreateAccount($email: String!, $password: String!) {\n  createAccount(\n    data: {email: $email, password: $password, discountCode: {create: {DiscountCode: {code: "START15", used: false, discount: 15}}}}\n  ) {\n    email\n    id\n  }\n}',
): typeof import("./graphql").CreateAccountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetAccountByEmail($email: String!) {\n  account(where: {email: $email}, stage: DRAFT) {\n    id\n    email\n    password\n  }\n}",
): typeof import("./graphql").GetAccountByEmailDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetCategories {\n  categories(orderBy: name_ASC) {\n    ...Categories\n  }\n}",
): typeof import("./graphql").GetCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment Categories on Category {\n  id\n  name\n  slug\n}",
): typeof import("./graphql").CategoriesFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment Images on Asset {\n  id\n  alt\n  url\n}",
): typeof import("./graphql").ImagesFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ProductDisplay on Product {\n  sale\n  id\n  name\n  slug\n  orientation\n  whiteFrame\n  variants(orderBy: price_ASC, first: 1) {\n    id\n    price\n    width\n    height\n  }\n  categories {\n    slug\n  }\n  images {\n    ...Images\n  }\n}",
): typeof import("./graphql").ProductDisplayFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ProductDetails on Product {\n  id\n  name\n  description\n  paperWeight\n  orientation\n  slug\n  color\n  sale\n  whiteFrame\n  paperWeight\n  finish\n  variants {\n    ...Variant\n  }\n  categories {\n    id\n    name\n  }\n  images {\n    ...Images\n  }\n}",
): typeof import("./graphql").ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ReviewProduct on Review {\n  name\n  id\n  email\n  rating\n  content\n}",
): typeof import("./graphql").ReviewProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment Variant on ProductVariantType {\n  id\n  width\n  height\n  price\n}",
): typeof import("./graphql").VariantFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "mutation CreateOrder($email: String!, $totalOrderPrice: Int!, $stripeCheckoutId: String!, $orderItems: OrderItemCreateManyInlineInput!, $statusOrder: StatusOrder!) {\n  createOrder(\n    data: {email: $email, total: $totalOrderPrice, stripeCheckoutId: $stripeCheckoutId, orderItems: $orderItems, statusOrder: $statusOrder}\n  ) {\n    id\n  }\n}\n\nmutation UpdateOrderPaymentPaid($stripeCheckoutId: String!) {\n  updateOrder(\n    data: {statusOrder: PAID}\n    where: {stripeCheckoutId: $stripeCheckoutId}\n  ) {\n    id\n  }\n}",
): typeof import("./graphql").CreateOrderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetProductsToCarrousel {\n  products(first: 12) {\n    ...ProductDisplay\n  }\n}\n\nquery GetProductsToCarrouselByCategorySlugWithoutProduct($categorySlug: String!, $productId: ID!) {\n  products(\n    first: 12\n    where: {categories_some: {slug: $categorySlug}, id_not: $productId}\n  ) {\n    ...ProductDisplay\n  }\n}\n\nquery GetProductsToCarrouselByCategorySlug($categorySlug: String!) {\n  products(first: 12, where: {categories_some: {slug: $categorySlug}}) {\n    ...ProductDisplay\n  }\n}\n\nquery GetProductsSlugs {\n  products {\n    slug\n  }\n}\n\nquery GetProductBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    ...ProductDetails\n  }\n}\n\nquery GetDiscountCodes($code: String!, $email: String!) {\n  discountCodes(\n    where: {code_contains: $code, used: false, accounts_some: {email: $email}}\n    stage: DRAFT\n  ) {\n    code\n    discount\n    used\n  }\n}\n\nquery GetProductsByIds($productsId: [ID!]!) {\n  products(where: {id_in: $productsId}) {\n    id\n    variants {\n      id\n      price\n      width\n      height\n    }\n  }\n}\n\nquery GetProductsByCategorySlug($categorySlug: String!, $skip: Int!, $first: Int!) {\n  products(\n    first: $first\n    where: {categories_some: {slug: $categorySlug}}\n    skip: $skip\n  ) {\n    ...ProductDisplay\n  }\n  categories(where: {slug: $categorySlug}) {\n    name\n  }\n  productsConnection(skip: $skip, where: {categories_some: {slug: $categorySlug}}) {\n    pageInfo {\n      pageSize\n    }\n  }\n}",
): typeof import("./graphql").GetProductsToCarrouselDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "mutation CreateReviewProduct($review: ReviewCreateInput!) {\n  createReview(data: $review) {\n    id\n    stage\n  }\n}",
): typeof import("./graphql").CreateReviewProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetProductReviewsBySlug($slug: String!) {\n  product(where: {slug: $slug}, stage: DRAFT) {\n    reviews {\n      id\n      email\n      rating\n      content\n      name\n    }\n  }\n}",
): typeof import("./graphql").GetProductReviewsBySlugDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
