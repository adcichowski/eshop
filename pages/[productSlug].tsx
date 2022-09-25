import {
  GetProductDetailsBySlugDocument,
  GetProductDetailsBySlugQuery,
  GetProductDetailsBySlugQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from "generated/graphql";
import { apolloClient } from "graphql/apolloClient";
import { InferGetStaticPropsType } from "next";
import { InferGetStaticPathsType } from "types/types";
import { ProductPage } from "src/pages/product/ProductPage";

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

  return {
    props: { product: data.product }, // will be passed to the page component as props
  };
}

const MainProductPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => <ProductPage product={props.product} />;

export default MainProductPage;
