import { getProductsToCarrousel } from "lib";
import React from "react";
import { ProductsCarrousel } from "./ProductsCarrousel";
import { getFavoriteProducts } from "lib/actions/favorite";

type ProductsCarrouselProps = {
  id: string;
  Heading: JSX.Element;
  className?: string;
};

export const ProductsCarrouselServer = async ({
  id,
  Heading,
  className,
}: ProductsCarrouselProps) => {
  const products = await getProductsToCarrousel();
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
