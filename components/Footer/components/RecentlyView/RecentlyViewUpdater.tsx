"use client";

import { RecentlyViewProductType } from "app/api/recently-view/route";
import { useMutationRecentlyView } from "lib/tanstack";

export function RecentlyViewUpdater({
  product: { name, image, category, whiteFrame, orientation, slug },
}: {
  product: RecentlyViewProductType;
}) {
  const { isIdle, mutate } = useMutationRecentlyView();

  if (isIdle) mutate({ name, image, category, whiteFrame, orientation, slug });

  return <></>;
}
