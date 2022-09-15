import { GetProductsDocument, GetProductsQuery } from "generated/graphql";
import { apolloClient } from "graphql/apolloClient";
import { InferGetStaticPropsType } from "next";

async function getStaticProps() {
  const { data } = await apolloClient.query<GetProductsQuery>({
    query: GetProductsDocument,
  });

  return {
    props: { data },
  };
}

export default function ProductsPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>ProductsPage</div>;
}
