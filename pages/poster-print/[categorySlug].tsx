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
    <section className="mt-11 ml-5 grid max-w-6xl grid-cols-1 lg:grid-cols-3">
      <Categories className="hidden lg:block" />
      <section className="lg:col-start-2 lg:col-end-4">
        <h3 className="mx-4 mb-6 border-b-[1px] border-b-black pb-3 text-center text-2xl">
          {props.categoryName}
        </h3>
        <ul className="grid grid-cols-2 justify-center gap-2 md:grid-cols-3 md:gap-6">
          {props.products.map(({ id, slug, name, variants, images }) => (
            <li key={id} className="flex justify-center">
              <ProductCarrousel
                {...{ id, slug, name, price: variants[0].price, images }}
              />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
