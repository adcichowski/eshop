import React from "react";
import { ProductPage } from "./components/product/ProductPage";
import { notFound } from "next/navigation";
import { getProductBySlug } from "lib";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getProductBySlug(params.slug);
  if (!data) return notFound();
  return <ProductPage product={data} />;
}
