import "../styles/globals.css";
import type { AppProps } from "next/app";
import "public/fonts/fonts.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "/public/carrousel/carrousel.css";
import { CartContextProvider } from "context/CartContext";
import { Layout } from "components/Layout/Layout";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "graphql/apolloClient";
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <CartContextProvider>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </CartContextProvider>
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
