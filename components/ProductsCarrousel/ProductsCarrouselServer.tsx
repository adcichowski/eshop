import {
  getProductsToCarrouselByCategorySlug,
  getProductsToCarrouselByCategorySlugWithoutProduct,
} from "lib";
import React from "react";
import { ProductsCarrousel } from "./ProductsCarrousel";
import { getFavoriteProducts } from "lib/actions/favorite";

type ProductsCarrouselProps = {
  id: string;
  Heading: JSX.Element;
  className?: string;
  productId?: string;
  categorySlug: string;
};

export const ProductsCarrouselServer = async ({
  id,
  Heading,
  className,
  productId,
  categorySlug,
}: ProductsCarrouselProps) => {
  const products = productId
    ? await getProductsToCarrouselByCategorySlugWithoutProduct({
        categorySlug,
        productId,
      })
    : await getProductsToCarrouselByCategorySlug({ categorySlug });

  const favorite = getFavoriteProducts()?.products;
  const updatedProducts = products.map((product) => ({
    ...product,
    favorite: Boolean(favorite?.find((fav) => fav.id === product.id)),
  }));
  if (!products) return <></>;

  return (
    <section id={id} className={className}>
      {Heading}
      <ProductsCarrousel products={updatedProducts} />
    </section>
  );
};
