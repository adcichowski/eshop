import { ApolloClient, InMemoryCache } from "@apollo/client";
export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API,
  cache: new InMemoryCache(),
});

export const authorizedApolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});
