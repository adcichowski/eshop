import "../styles/globals.css";
import type { AppProps } from "next/app";
import "public/fonts/fonts.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "/public/carrousel/carrousel.css";
import { CartContextProvider } from "context/CartContext";
import Layout from "components/Layout/Layout";
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <Layout>
      <CartContextProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </CartContextProvider>
    </Layout>
  );
}

export default MyApp;
