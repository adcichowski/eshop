import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import "public/fonts/fonts.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "/public/carrousel/carrousel.css";
import "styles/toastify.css";
import { CartContextProvider } from "context/CartContext/CartContext";
import { Layout } from "components/Layout/Layout";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "graphql/apolloClient";
import { Toast } from "components/Toast/Toast";
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <CartContextProvider>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </QueryClientProvider>
        </CartContextProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
