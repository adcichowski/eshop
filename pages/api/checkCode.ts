import {
  GetDiscountCodesDocument,
  GetDiscountCodesQuery,
  GetDiscountCodesQueryVariables,
} from "generated/graphql";

import { authorizedApolloClient } from "graphql/apolloClient";
import type { NextApiHandler } from "next";
const defaultSchema = Yup.object({
  code: Yup.string().required("Code is required!"),
  email: Yup.string().required("Email is required!"),
});
import * as Yup from "yup";
import { convertYupError } from "utils/errors";
const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST").status(405).end();
  }
  if (process.env.HYGRAPH_TOKEN === undefined) {
    throw new Error("Problem to get hygraph token");
  }
  try {
    const { code, email } = await defaultSchema
      .typeError("You should provide code")
      .validate(req.body);

    const { data } = await authorizedApolloClient.query<
      GetDiscountCodesQuery,
      GetDiscountCodesQueryVariables
    >({
      query: GetDiscountCodesDocument,
      variables: { code, email },
    });
    if (!data.discountCodes) return res.json({ error: "Code is used" });
    return res.json({ discount: data.discountCodes[0].discount });
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      res.status(400).json(convertYupError(err));
    }
    res
      .status(404)
      .json({ error: "Unknown error in implemented discount code" });
  }
};

export default handler;
