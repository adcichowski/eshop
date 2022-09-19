import {
  GetProductDetailsBySlugDocument,
  GetProductDetailsBySlugQuery,
  GetProductDetailsBySlugQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from "generated/graphql";
import Image from "next/image";
import { apolloClient } from "graphql/apolloClient";
import { InferGetStaticPropsType } from "next";
import { InferGetStaticPathsType } from "types/utils";

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

const ProductPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="grid grid-cols-3">
        <div className="mt-12">Categories</div>
        <section className="col-span-2 mt-10 text-3xl">
          {product?.name}
          <div className="grid grid-cols-3">
            <div className="col-span-2 self-start">
              <Image
                layout="responsive"
                objectFit="contain"
                width={4}
                height={3}
                alt={product?.name}
                src={product?.images[0].url}
              />
            </div>
            <div>1</div>
          </div>
        </section>
      </main>
      <pre>{JSON.stringify(product, null, 2)}</pre>
      <footer>Footer</footer>
    </div>
  );
};

export default ProductPage;
