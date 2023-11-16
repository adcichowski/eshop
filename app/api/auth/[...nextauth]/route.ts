import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import { getAccountByEmail } from "lib";
const handler = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "E-mail", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          if (!credentials) {
            return null;
          }
          const userByEmail = await getAccountByEmail(credentials.email);
          await bcrypt.compare(credentials.password, userByEmail.password);

          return userByEmail;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: { signIn: "/account" },
});

export { handler as GET, handler as POST };
