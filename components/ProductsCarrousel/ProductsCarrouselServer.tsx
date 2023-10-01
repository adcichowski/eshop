import { getProductsToCarrousel } from "lib";
import React from "react";
import { ProductsCarrousel } from "./ProductsCarrousel";

type ProductsCarrouselProps = {
  id: string;
  Heading: JSX.Element;
  className: string;
};

export const ProductsCarrouselServer = async ({
  id,
  Heading,
  className,
}: ProductsCarrouselProps) => {
  const products = await getProductsToCarrousel();
  if (!products) return <></>;

  return (
    <section id={id} className={className}>
      {Heading}
      <ProductsCarrousel products={products} />
    </section>
  );
};
