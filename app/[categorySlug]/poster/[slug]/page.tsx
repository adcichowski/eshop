import React from "react";
import { ProductPage } from "./components/product/ProductPage";
import { notFound } from "next/navigation";
import { getProductBySlug } from "lib";
import { getFavoriteProducts } from "app/actions";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getProductBySlug(params.slug);
  if (!data) return notFound();
  const favorites = getFavoriteProducts();
  const updatedFavoriteData = {
    ...data,
    favorite: Boolean(
      favorites?.products.find((favorite) => favorite.id === data.id),
    ),
  };
  return <ProductPage product={updatedFavoriteData} />;
}
