import { FAVORITES_PRODUCTS_COOKIE } from "constants";
import { NextRequest, NextResponse } from "next/server";
import { jsonParse } from "utils/utils";

export type ProductFromCookieType = {
  id: string;
  image: string;
  name: string;
};

export async function GET(request: NextRequest) {
  const data = getProductsFromCookie(request);
  return NextResponse.json({
    status: 200,
    body: data?.products
      ? JSON.stringify({ products: data.products })
      : undefined,
  });
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as ProductFromCookieType | null;
  if (body) {
    return addProductsToCookie([body]);
  }
  return NextResponse.json({ status: 400 });
}

const getProductsFromCookie = (request: NextRequest) => {
  const products = request.cookies.get(FAVORITES_PRODUCTS_COOKIE)?.value;
  if (products) {
    return jsonParse(products) as {
      products: ProductFromCookieType[];
    };
  }
};

const addProductsToCookie = (products: ProductFromCookieType[]) => {
  const response = NextResponse.json({ status: 200, body: { products } });
  response.cookies.set({
    name: FAVORITES_PRODUCTS_COOKIE,
    value: JSON.stringify({ products }),
    httpOnly: true,
  });
  return response;
};
