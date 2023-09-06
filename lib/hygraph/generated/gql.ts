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
  "mutation CreateOrder($email: String!, $totalOrderPrice: Int!, $stripeCheckoutId: String!, $orderItems: OrderItemCreateManyInlineInput!, $statusOrder: StatusOrder!) {\n  createOrder(\n    data: {email: $email, total: $totalOrderPrice, stripeCheckoutId: $stripeCheckoutId, orderItems: $orderItems, statusOrder: $statusOrder}\n  ) {\n    id\n  }\n}\n\nmutation UpdateOrderPaymentById($orderId: ID!) {\n  updateOrder(data: {statusOrder: PAID}, where: {id: $orderId}) {\n    id\n  }\n}":
    types.CreateOrderDocument,
  'query GetProducts {\n  products {\n    sale\n    id\n    name\n    slug\n    orientation\n    whiteFrame\n    variants(orderBy: price_ASC, first: 1) {\n      price\n      width\n      height\n    }\n    images(first: 1) {\n      id\n      alt\n      url\n    }\n  }\n}\n\nquery GetProductsSlugs {\n  products {\n    slug\n  }\n}\n\nquery GetProductDetailsBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    id\n    name\n    description\n    paperWeight\n    orientation\n    color\n    sale\n    whiteFrame\n    paperWeight\n    finish\n    categories {\n      name\n    }\n    variants {\n      ... on ProductVariantType {\n        id\n        price\n        width\n        height\n      }\n    }\n    images {\n      url\n      alt\n    }\n  }\n}\n\nquery GetCategories {\n  categories {\n    name\n    slug\n  }\n}\n\nmutation CreateAccount($email: String!, $password: String!) {\n  createAccount(\n    data: {email: $email, password: $password, discountCode: {create: {DiscountCode: {code: "START15", used: false, discount: 15}}}}\n  ) {\n    email\n    id\n  }\n}\n\nquery GetDiscountCodes($code: String!, $email: String!) {\n  discountCodes(\n    where: {code_contains: $code, used: false, accounts_some: {email: $email}}\n    stage: DRAFT\n  ) {\n    code\n    discount\n    used\n  }\n}\n\nquery GetAccountByEmail($email: String!) {\n  account(where: {email: $email}, stage: DRAFT) {\n    id\n    email\n    password\n  }\n}\n\nmutation CreateReviewProduct($review: ReviewCreateInput!) {\n  createReview(data: $review) {\n    id\n    stage\n  }\n}\n\nquery GetProductReviewsBySlug($slug: String!) {\n  product(where: {slug: $slug}, stage: DRAFT) {\n    reviews {\n      id\n      email\n      rating\n      content\n      name\n    }\n  }\n}\n\nquery GetProductsByCategory($categorySlug: String!) {\n  products(where: {categories_some: {slug: $categorySlug}}) {\n    whiteFrame\n    name\n    slug\n    orientation\n    images(first: 1) {\n      id\n      alt\n      url\n    }\n    id\n    variants(orderBy: price_ASC, first: 1) {\n      id\n      price\n      width\n      height\n    }\n    categories(where: {slug: $categorySlug}) {\n      name\n    }\n  }\n}\n\nquery GetProductsByIds($productsId: [ID!]!) {\n  products(where: {id_in: $productsId}) {\n    id\n    variants {\n      id\n      price\n      width\n      height\n    }\n  }\n}':
    types.GetProductsDocument,
};

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
  source: 'query GetProducts {\n  products {\n    sale\n    id\n    name\n    slug\n    orientation\n    whiteFrame\n    variants(orderBy: price_ASC, first: 1) {\n      price\n      width\n      height\n    }\n    images(first: 1) {\n      id\n      alt\n      url\n    }\n  }\n}\n\nquery GetProductsSlugs {\n  products {\n    slug\n  }\n}\n\nquery GetProductDetailsBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    id\n    name\n    description\n    paperWeight\n    orientation\n    color\n    sale\n    whiteFrame\n    paperWeight\n    finish\n    categories {\n      name\n    }\n    variants {\n      ... on ProductVariantType {\n        id\n        price\n        width\n        height\n      }\n    }\n    images {\n      url\n      alt\n    }\n  }\n}\n\nquery GetCategories {\n  categories {\n    name\n    slug\n  }\n}\n\nmutation CreateAccount($email: String!, $password: String!) {\n  createAccount(\n    data: {email: $email, password: $password, discountCode: {create: {DiscountCode: {code: "START15", used: false, discount: 15}}}}\n  ) {\n    email\n    id\n  }\n}\n\nquery GetDiscountCodes($code: String!, $email: String!) {\n  discountCodes(\n    where: {code_contains: $code, used: false, accounts_some: {email: $email}}\n    stage: DRAFT\n  ) {\n    code\n    discount\n    used\n  }\n}\n\nquery GetAccountByEmail($email: String!) {\n  account(where: {email: $email}, stage: DRAFT) {\n    id\n    email\n    password\n  }\n}\n\nmutation CreateReviewProduct($review: ReviewCreateInput!) {\n  createReview(data: $review) {\n    id\n    stage\n  }\n}\n\nquery GetProductReviewsBySlug($slug: String!) {\n  product(where: {slug: $slug}, stage: DRAFT) {\n    reviews {\n      id\n      email\n      rating\n      content\n      name\n    }\n  }\n}\n\nquery GetProductsByCategory($categorySlug: String!) {\n  products(where: {categories_some: {slug: $categorySlug}}) {\n    whiteFrame\n    name\n    slug\n    orientation\n    images(first: 1) {\n      id\n      alt\n      url\n    }\n    id\n    variants(orderBy: price_ASC, first: 1) {\n      id\n      price\n      width\n      height\n    }\n    categories(where: {slug: $categorySlug}) {\n      name\n    }\n  }\n}\n\nquery GetProductsByIds($productsId: [ID!]!) {\n  products(where: {id_in: $productsId}) {\n    id\n    variants {\n      id\n      price\n      width\n      height\n    }\n  }\n}',
): typeof import("./graphql").GetProductsDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
