import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { RecentlyViewProductType } from "app/api/recently-view/route";
import { fetcher } from "lib";

export const queryClient = new QueryClient();

export async function fetcherTanstack<Result, Body = undefined>({
  url,
  method,
  headers,
  ...restOptions
}:
  | {
      url: string;
      method: "PUT" | "PATCH" | "POST";
      body: Body;
      headers?: HeadersInit;
    }
  | { url: string; method: "GET"; headers?: HeadersInit }): Promise<Result> {
  try {
    const result = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: "body" in restOptions ? JSON.stringify(restOptions.body) : null,
      cache: "no-cache",
    });

    if (result.ok) {
      console.log(result);
      const { body } = await result.json();
      return body as Result;
    }
    throw new Error(
      `Status:${result.status}, StatusText: ${result.statusText}`,
    );
  } catch (error) {
    throw new Error("Error during fetch!");
  }
}

export const useQueryRecentlyView = () => {
  return useQuery({
    queryKey: ["recently-viewed"],
    queryFn: async () => {
      const data = await fetcherTanstack<{
        products: RecentlyViewProductType[] | undefined;
      }>({
        method: "GET",
        url: "/api/recently-view",
      });
      return data;
    },
  });
};

export const useMutationRecentlyView = () => {
  return useMutation({
    mutationKey: ["recently-viewed"],
    mutationFn: async (product: RecentlyViewProductType) => {
      const data = await fetcherTanstack<
        {
          products: RecentlyViewProductType[] | undefined;
        },
        { product: RecentlyViewProductType }
      >({
        method: "POST",
        url: "/api/recently-view",
        body: { product },
      });
      return data;
    },
  });
};
