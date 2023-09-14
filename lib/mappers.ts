import { ProductPageProps } from "app/poster/[slug]/components/product/ProductPage";
import { ProductDetailsFragment } from "./hygraph/generated/graphql";

export const reshapeProductDetails = (
  productDetailsFragment: ProductDetailsFragment,
): ProductPageProps => ({
  id: productDetailsFragment.id,
  name: productDetailsFragment.name,
  variants: productDetailsFragment.variants,
  image: productDetailsFragment.images[0].url,
  description: productDetailsFragment.description,
  slug: productDetailsFragment.slug,
  attributes: {
    category: productDetailsFragment.categories[0].name,
    color: productDetailsFragment.color,
    finish: productDetailsFragment.finish,
    whiteFrame: productDetailsFragment.whiteFrame,
    orientation: productDetailsFragment.orientation,
    sale: Number(productDetailsFragment.sale),
    paperWeight: productDetailsFragment.paperWeight,
  },
});
