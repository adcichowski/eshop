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
import { convertYupError } from "utils/errors";
const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST").status(405).json({});
  }
  if (process.env.HYGRAPH_TOKEN === undefined) {
    throw new Error("Problem to get hygraph token");
  }
  try {
    const { email, password } = await Yup.object(defaultSchema)
      .typeError("You should provide email and password")
      .validate(req.body);
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
      id: data?.createAccount?.id,
    });
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      res.status(400).json(convertYupError(err));
    }
    res.status(404).json({ error: "Unknown error in signup!" });
  }
};

export default handler;
