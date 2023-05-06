import { Categories } from "components/Categories/Categories";
import { ProductCarrousel } from "components/ProductsCarrousel/components/ProductCarrousel/ProductCarrousel";
import {
  GetCategoriesDocument,
  GetCategoriesQuery,
  GetProductsByCategoryDocument,
  GetProductsByCategoryQuery,
  GetProductsByCategoryQueryVariables,
} from "generated/graphql";
import { apolloClient } from "graphql/apolloClient";
import { InferGetStaticPropsType } from "next";
import React from "react";
import { InferGetStaticPathsType } from "types/types";

export async function getStaticPaths() {
  const { data } = await apolloClient.query<GetCategoriesQuery>({
    query: GetCategoriesDocument,
  });

  return {
    paths: data.categories.map(({ slug }) => ({
      params: {
        categorySlug: slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: InferGetStaticPathsType<typeof getStaticPaths>) {
  if (!params?.categorySlug)
    return {
      props: {},
      notFound: true,
    };

  const { data } = await apolloClient.query<
    GetProductsByCategoryQuery,
    GetProductsByCategoryQueryVariables
  >({
    variables: { categorySlug: params.categorySlug },
    query: GetProductsByCategoryDocument,
  });

  if (!data.products || !data.products.length) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
      categoryName: data.products[0].categories[0].name ?? null,
    },
  };
}
export default function ProductsByCategory(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  if (props.products === undefined) {
    return <>Page not found!</>;
  }
  return (
    <section className="mt-11 grid max-w-6xl grid-cols-3">
      <Categories />
      <ul className="col-start-2 col-end-4 flex basis-44 flex-row flex-wrap gap-y-2">
        {props.products.map(({ id, slug, name, variants, images }) => (
          <li key={id}>
            <ProductCarrousel
              {...{ id, slug, name, price: variants[0].price, images }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
