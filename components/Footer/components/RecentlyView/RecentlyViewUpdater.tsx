"use client";

import { RecentlyViewProductType } from "app/api/recently-view/route";
import { useMutationRecentlyView } from "lib/tanstack";

export function RecentlyViewUpdater({
  product,
}: {
  product: RecentlyViewProductType;
}) {
  const { isIdle, mutate } = useMutationRecentlyView();

  if (isIdle) mutate(product);

  return <></>;
}
