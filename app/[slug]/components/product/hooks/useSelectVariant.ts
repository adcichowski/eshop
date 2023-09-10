import { useState } from "react";
import { ProductPageProps } from "../ProductPage";
import { ProductVariant } from "../types";
export function useSelectVariant({ product }: { product: ProductPageProps }) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0],
  );

  return { selectedVariant, setSelectedVariant };
}
