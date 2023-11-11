import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { RECENTLY_VIEWED_PRODUCTS_COOKIE } from "../../../constants";
import { jsonParse } from "utils/utils";

const MAX_NUMBER_RECENTLY_VIEWED_PRODUCTS = 10;

export async function GET() {
  const recentlyView = getRecentlyViewedProducts();
  return NextResponse.json({
    status: 200,
    body: { products: recentlyView?.products || undefined },
  });
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    product: RecentlyViewProductType;
  } | null;
  if (body) {
    const products = setRecentlyViewedProduct(body.product);
    return NextResponse.json({
      status: 200,
      body: { products },
    });
  }
  return NextResponse.json({ status: 400 });
}

export type RecentlyViewProductType = {
  name: string;
  image: string;
  slug: string;
  category: string;
};

const setRecentlyViewedProduct = (product: RecentlyViewProductType) => {
  const recentlyView = getRecentlyViewedProducts();
  const products =
    recentlyView?.products.filter(
      (recentlyView, i) =>
        recentlyView.name !== product.name &&
        i + 1 < MAX_NUMBER_RECENTLY_VIEWED_PRODUCTS,
    ) || [];

  const updatedProducts = [product, ...products];

  cookies().set(
    RECENTLY_VIEWED_PRODUCTS_COOKIE,
    JSON.stringify({ products: updatedProducts }),
    {
      httpOnly: true,
    },
  );
  return updatedProducts;
};

const getRecentlyViewedProducts = () =>
  jsonParse<{ products: RecentlyViewProductType[] }>(
    cookies().get(RECENTLY_VIEWED_PRODUCTS_COOKIE)?.value,
  );
