import { fetcher } from "lib";
import { GetProductBySlugDocument } from "lib/hygraph/generated/graphql";
import { reshapeProductDetails } from "lib/mappers";

export async function getProductBySlug(slug: string) {
  const data = await fetcher({
    query: GetProductBySlugDocument,
    variables: {
      slug: slug,
    },
    cache: "no-store",
  });

  if (!data.product) {
    throw new Error(`Product not found: ${slug}`);
  }

  return reshapeProductDetails(data.product);
}
