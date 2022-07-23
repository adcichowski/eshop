import "../styles/globals.css";
import type { AppProps } from "next/app";
import "public/fonts/fonts.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "/public/carrousel/carrousel.css";
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
