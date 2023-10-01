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
  "fragment Images on Asset {\n  id\n  alt\n  url\n}": types.ImagesFragmentDoc,
  "fragment ProductCarousel on Product {\n  sale\n  id\n  name\n  slug\n  orientation\n  whiteFrame\n  variants(orderBy: price_ASC, first: 1) {\n    price\n    width\n    height\n  }\n  images {\n    ...Images\n  }\n}":
    types.ProductCarouselFragmentDoc,
  "fragment ProductDetails on Product {\n  id\n  name\n  description\n  paperWeight\n  orientation\n  slug\n  color\n  sale\n  whiteFrame\n  paperWeight\n  finish\n  variants {\n    ...Variant\n  }\n  categories {\n    id\n    name\n  }\n  images {\n    ...Images\n  }\n}":
    types.ProductDetailsFragmentDoc,
  "fragment ReviewProduct on Review {\n  name\n  id\n  email\n  rating\n  content\n}":
    types.ReviewProductFragmentDoc,
  "fragment Variant on ProductVariantType {\n  id\n  width\n  height\n  price\n}":
    types.VariantFragmentDoc,
  "mutation CreateOrder($email: String!, $totalOrderPrice: Int!, $stripeCheckoutId: String!, $orderItems: OrderItemCreateManyInlineInput!, $statusOrder: StatusOrder!) {\n  createOrder(\n    data: {email: $email, total: $totalOrderPrice, stripeCheckoutId: $stripeCheckoutId, orderItems: $orderItems, statusOrder: $statusOrder}\n  ) {\n    id\n  }\n}\n\nmutation UpdateOrderPaymentById($orderId: ID!) {\n  updateOrder(data: {statusOrder: PAID}, where: {id: $orderId}) {\n    id\n  }\n}":
    types.CreateOrderDocument,
  'query GetProductsToCarrousel {\n  products {\n    ...ProductCarousel\n  }\n}\n\nquery GetProductsSlugs {\n  products {\n    slug\n  }\n}\n\nquery GetProductBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    ...ProductDetails\n  }\n}\n\nquery GetCategories {\n  categories {\n    name\n    slug\n  }\n}\n\nmutation CreateAccount($email: String!, $password: String!) {\n  createAccount(\n    data: {email: $email, password: $password, discountCode: {create: {DiscountCode: {code: "START15", used: false, discount: 15}}}}\n  ) {\n    email\n    id\n  }\n}\n\nquery GetDiscountCodes($code: String!, $email: String!) {\n  discountCodes(\n    where: {code_contains: $code, used: false, accounts_some: {email: $email}}\n    stage: DRAFT\n  ) {\n    code\n    discount\n    used\n  }\n}\n\nquery GetAccountByEmail($email: String!) {\n  account(where: {email: $email}, stage: DRAFT) {\n    id\n    email\n    password\n  }\n}\n\nquery GetProductsByCategory($categorySlug: String!) {\n  products(where: {categories_some: {slug: $categorySlug}}) {\n    whiteFrame\n    name\n    slug\n    orientation\n    images(first: 1) {\n      id\n      alt\n      url\n    }\n    id\n    variants(orderBy: price_ASC, first: 1) {\n      id\n      price\n      width\n      height\n    }\n    categories(where: {slug: $categorySlug}) {\n      name\n    }\n  }\n}\n\nquery GetProductsByIds($productsId: [ID!]!) {\n  products(where: {id_in: $productsId}) {\n    id\n    variants {\n      id\n      price\n      width\n      height\n    }\n  }\n}':
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
  source: "fragment Images on Asset {\n  id\n  alt\n  url\n}",
): typeof import("./graphql").ImagesFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ProductCarousel on Product {\n  sale\n  id\n  name\n  slug\n  orientation\n  whiteFrame\n  variants(orderBy: price_ASC, first: 1) {\n    price\n    width\n    height\n  }\n  images {\n    ...Images\n  }\n}",
): typeof import("./graphql").ProductCarouselFragmentDoc;
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
  source: "mutation CreateOrder($email: String!, $totalOrderPrice: Int!, $stripeCheckoutId: String!, $orderItems: OrderItemCreateManyInlineInput!, $statusOrder: StatusOrder!) {\n  createOrder(\n    data: {email: $email, total: $totalOrderPrice, stripeCheckoutId: $stripeCheckoutId, orderItems: $orderItems, statusOrder: $statusOrder}\n  ) {\n    id\n  }\n}\n\nmutation UpdateOrderPaymentById($orderId: ID!) {\n  updateOrder(data: {statusOrder: PAID}, where: {id: $orderId}) {\n    id\n  }\n}",
): typeof import("./graphql").CreateOrderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetProductsToCarrousel {\n  products {\n    ...ProductCarousel\n  }\n}\n\nquery GetProductsSlugs {\n  products {\n    slug\n  }\n}\n\nquery GetProductBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    ...ProductDetails\n  }\n}\n\nquery GetCategories {\n  categories {\n    name\n    slug\n  }\n}\n\nmutation CreateAccount($email: String!, $password: String!) {\n  createAccount(\n    data: {email: $email, password: $password, discountCode: {create: {DiscountCode: {code: "START15", used: false, discount: 15}}}}\n  ) {\n    email\n    id\n  }\n}\n\nquery GetDiscountCodes($code: String!, $email: String!) {\n  discountCodes(\n    where: {code_contains: $code, used: false, accounts_some: {email: $email}}\n    stage: DRAFT\n  ) {\n    code\n    discount\n    used\n  }\n}\n\nquery GetAccountByEmail($email: String!) {\n  account(where: {email: $email}, stage: DRAFT) {\n    id\n    email\n    password\n  }\n}\n\nquery GetProductsByCategory($categorySlug: String!) {\n  products(where: {categories_some: {slug: $categorySlug}}) {\n    whiteFrame\n    name\n    slug\n    orientation\n    images(first: 1) {\n      id\n      alt\n      url\n    }\n    id\n    variants(orderBy: price_ASC, first: 1) {\n      id\n      price\n      width\n      height\n    }\n    categories(where: {slug: $categorySlug}) {\n      name\n    }\n  }\n}\n\nquery GetProductsByIds($productsId: [ID!]!) {\n  products(where: {id_in: $productsId}) {\n    id\n    variants {\n      id\n      price\n      width\n      height\n    }\n  }\n}',
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