export const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const FAVORITES_PRODUCTS_COOKIE = "fav";

export const CART_COOKIE = "cart";

export const RECENTLY_VIEWED_PRODUCTS_COOKIE = "recentlyView";
