import type {
  CreateAccountMutation,
  CreateAccountMutationVariables,
} from "generated/graphql";
import { CreateAccountDocument } from "generated/graphql";
import * as Bcrypt from "bcrypt";
import { authorizedApolloClient } from "graphql/apolloClient";
import type { NextApiHandler } from "next";
import { defaultSchema } from "components/Forms/schemas/defaultSchema";
import * as Yup from "yup";
const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST").status(405).json({});
  }
  if (process.env.HYGRAPH_TOKEN === undefined) {
    throw new Error("Problem to get hygraph token");
  }
  try {
    const { email, password } = Yup.object(defaultSchema).validateSync(
      req.body
    );
    const hashedPassword = await Bcrypt.hash(password, 12);
    const { data } = await authorizedApolloClient.mutate<
      CreateAccountMutation,
      CreateAccountMutationVariables
    >({
      mutation: CreateAccountDocument,
      variables: {
        email,
        password: hashedPassword,
      },
    });
    res.status(200).json({
      email: data?.createAccount?.email,
      password: data?.createAccount?.id,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

export default handler;
