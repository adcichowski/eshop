import { ProductPageProps } from "app/poster/[slug]/components/product/ProductPage";
import {
  ProductDetailsFragment,
  ReviewProductFragment,
} from "./hygraph/generated/graphql";
import { ReviewByPersonProps } from "app/poster/[slug]/components/product/components/ProductReviews/ReviewByPerson";

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

export const reshapeProductReviews = (
  reviews: ReviewProductFragment[],
): ReviewByPersonProps[] =>
  reviews.map(({ name, content, rating, email, id }) => ({
    id,
    name,
    content,
    rating,
    email,
  }));
