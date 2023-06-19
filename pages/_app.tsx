import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import "public/fonts/fonts.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "/public/carrousel/carrousel.css";
import { CartContextProvider } from "context/CartContext/CartContext";
import { Layout } from "components/Layout/Layout";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "graphql/apolloClient";
import { ToastProvider } from "context/ToastContext/ToastContext";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <ToastProvider>
          <CartContextProvider>
            <QueryClientProvider client={queryClient}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </QueryClientProvider>
          </CartContextProvider>
        </ToastProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
