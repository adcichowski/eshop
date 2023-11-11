"use client";

import { RecentlyViewProductType } from "app/api/recently-view/route";
import { useMutationRecentlyView } from "lib/tanstack";

export function RecentlyViewUpdater({
  product: { slug, name, category, image },
}: {
  product: RecentlyViewProductType;
}) {
  const { isIdle, mutate } = useMutationRecentlyView();

  if (isIdle) mutate({ slug, name, category, image });

  return <></>;
}
