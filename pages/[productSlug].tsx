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
        <section className="col-span-2 mt-10 text-[32px]">
          <div className="grid grid-cols-2">
            <div>
              <h2>{product?.name}</h2>
              <div className="grid grid-cols-2 mt-5">
                <div className="col-span-2 self-start">
                  <div className="flex">
                    <Image
                      objectPosition="left"
                      width={392.36}
                      height={551.43}
                      alt={product?.name}
                      src={product?.images[0].url}
                    />
                    <div className="ml-4 text-xl">
                      <DiscountProduct />
                      <div className="mt-6">Rozmiar:</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
      <footer>Footer</footer>
    </div>
  );
};

export default ProductPage;

const DiscountProduct = () => (
  <div className="bg-black px-8 py-2 font-semibold text-white">-30%</div>
);
