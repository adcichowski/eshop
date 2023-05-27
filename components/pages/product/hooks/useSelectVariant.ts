import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductPageProps } from "../ProductPage";
import { ProductVariant } from "../types";
export function useSelectVariant({
  product,
}: {
  product: ProductPageProps["product"];
}) {
  const router = useRouter();
  const [selectedVariant, setSelectedVariant] = useState<
    ProductVariant | undefined
  >(undefined);

  useEffect(() => {
    setSelectedVariant(product?.variants[0] ? product?.variants[0] : undefined);
  }, [router.asPath]);

  return { selectedVariant, setSelectedVariant };
}
