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

  const productVariants = product?.variants.map(({ size, id, price }) => ({
    price,
    id,
    width: size?.width,
    height: size?.height,
  }));

  useEffect(() => {
    setSelectedVariant(
      productVariants?.length ? productVariants[0] : undefined
    );
  }, [router.asPath]);

  return { selectedVariant, setSelectedVariant, productVariants };
}
