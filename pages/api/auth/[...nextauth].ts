import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import * as Bcrypt from "bcrypt";
import { authorizedApolloClient } from "graphql/apolloClient";
import type {
  GetAccountByEmailQuery,
  GetAccountByEmailQueryVariables,
} from "generated/graphql";
import { GetAccountByEmailDocument } from "generated/graphql";

export default NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "E-mail", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const userByEmail = await authorizedApolloClient.query<
          GetAccountByEmailQuery,
          GetAccountByEmailQueryVariables
        >({
          query: GetAccountByEmailDocument,
          variables: {
            ...credentials,
          },
        });
        const accountFromGraph = userByEmail.data.account;
        if (!accountFromGraph) {
          return null;
        }
        const arePasswordEqual = await Bcrypt.compare(
          credentials.password,
          accountFromGraph.password
        );
        if (!arePasswordEqual) return null;

        return accountFromGraph;
      },
    }),
  ],
  pages: { signIn: "/account" },
});
