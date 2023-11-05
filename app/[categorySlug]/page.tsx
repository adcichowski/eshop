import React from "react";
import { CategoryPage } from "./components/CategoryPage";
import { Params } from "types/types";
export default function Page({
  params,
  searchParams,
}: {
  params: Params<"categorySlug">;
  searchParams: Params<"page">;
}) {
  return (
    <CategoryPage
      categorySlug={params.categorySlug}
      currentPage={searchParams.page}
    />
  );
}
