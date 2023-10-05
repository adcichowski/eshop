import React from "react";
import { CategoryPage } from "./components/CategoryPage";
import { Params } from "types/types";
export default function Page({ params }: { params: Params<"categorySlug"> }) {
  return <CategoryPage categorySlug={params.categorySlug} />;
}
