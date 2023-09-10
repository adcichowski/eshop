import React from "react";
import { ProductPage } from "./components/product/ProductPage";
import { getProductBySlug } from "lib/queries/product";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getProductBySlug(params.slug);
  if (!data) return notFound();
  return <ProductPage product={data} />;
}
