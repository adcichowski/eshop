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
  const data = await getProductsToCarrousel();
  if (!data) return <></>;

  return (
    <section id={id} className={className}>
      {Heading}
      <ProductsCarrousel products={data.products} />
    </section>
  );
};
