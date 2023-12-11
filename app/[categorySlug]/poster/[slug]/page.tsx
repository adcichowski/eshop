import React from "react";
import { ProductPage } from "./components/product/ProductPage";
import { notFound } from "next/navigation";
import { getProductBySlug } from "lib";
import { getFavoriteProducts } from "lib/actions/favorite";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getProductBySlug(params.slug);
  return {
    title: `Poster ${data.name}`,
    description: data.description,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `Poster ${data.name}`,
      description: data.description,
      images: [
        {
          url: data.image,
          width: 430,
          height: 630,
          alt: "PosterWall Shop",
        },
      ],
    },
  } satisfies Metadata;
}

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
