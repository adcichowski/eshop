type FetcherConfig = {
  readonly method: "GET" | "POST" | "PUT" | "DELETE";
  readonly body?: Record<string, unknown>;
  readonly config?: RequestInit;
};
export async function fetcher<T>(
  path: string,
  { method, body, config }: FetcherConfig
): Promise<T> {
  try {
    const response = await fetch(path, {
      ...config,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method,
      ...(body && { body: JSON.stringify(body) }),
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  } catch (err) {
    throw new Error("Something went wrong during fetching!");
  }
}
