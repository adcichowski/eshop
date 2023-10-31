import { useSearchParams } from "next/navigation";
import { ProductVariant } from "../ProductSelectVariant";

export function useSelectVariant({ variants }: { variants: ProductVariant[] }) {
  const pathname = useSearchParams();
  const width = pathname.get("width");
  const height = pathname.get("height");

  const selectedVariant =
    variants.find(
      (variant) =>
        variant.height === Number(height) && variant.width === Number(width),
    ) || variants[0];

  return { selectedVariant };
}
