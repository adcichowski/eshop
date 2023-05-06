import type {
  GetProductDetailsBySlugQuery,
  GetProductDetailsBySlugQueryVariables,
  GetProductsSlugsQuery,
} from "generated/graphql";
import {
  GetProductDetailsBySlugDocument,
  GetProductsSlugsDocument,
} from "generated/graphql";
import { apolloClient } from "graphql/apolloClient";
import type { InferGetStaticPropsType } from "next";
import type { InferGetStaticPathsType } from "types/types";
import { ProductPage } from "components/pages/product/ProductPage";
import { serialize } from "next-mdx-remote/serialize";

export async function getStaticPaths() {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });
  return {
    paths: data.products.map(({ slug }) => ({
      params: {
        productSlug: slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: InferGetStaticPathsType<typeof getStaticPaths>) {
  if (!params?.productSlug)
    return {
      props: {},
      notFound: true,
    };

  const { data } = await apolloClient.query<
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables
  >({
    variables: { slug: params.productSlug },
    query: GetProductDetailsBySlugDocument,
  });

  if (!data.product) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      product: {
        slug: params.productSlug,
        ...data.product,
        description: await serialize(data.product.description),
      },
    },
  };
}

const MainProductPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => <ProductPage product={props.product} />;

export default MainProductPage;
