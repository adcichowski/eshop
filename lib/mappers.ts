import { ProductPageProps } from "app/[categorySlug]/poster/[slug]/components/product/ProductPage";
import {
  CategoriesFragment,
  ProductDetailsFragment,
  ProductDisplayFragment,
  ReviewProductFragment,
} from "./hygraph/generated/graphql";
import { ReviewByPersonProps } from "app/[categorySlug]/poster/[slug]/components/product/components/ProductReviews/ReviewByPerson";
import { ProductCarrouselPropsType } from "components/ProductsCarrousel/types";

export const reshapeProductDetails = (
  productDetailsFragment: ProductDetailsFragment,
): ProductPageProps => ({
  favorite: false,
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

export const reshapeProductDisplay = (
  products: ProductDisplayFragment[],
): ProductCarrouselPropsType[] =>
  products.map(
    ({
      id,
      name,
      whiteFrame,
      variants,
      sale,
      orientation,
      slug,
      categories,
      ...product
    }) => ({
      favorite: false,
      id,
      whiteFrame,
      sale: Number(sale),
      image: product.images[0].url,
      variant: {
        id: variants[0].id,
        width: variants[0].width,
        height: variants[0].height,
      },
      category: {
        slug: categories[0].slug,
      },
      slug,
      orientation,
      price: variants[0].price,
      amount: 1,
      name,
    }),
  );

export const reshapeGetCategories = (
  categories: CategoriesFragment[],
): { id: string; slug: string; name: string }[] =>
  categories.map(({ id, name, slug }) => ({ id, name, slug }));
