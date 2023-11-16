// import type {
//   CreateAccountMutation,
//   CreateAccountMutationVariables,
// } from "generated/graphql";
// import { CreateAccountDocument } from "generated/graphql";
// import * as Bcrypt from "bcrypt";

// import { defaultSchema } from "components/Forms/schemas/defaultSchema";
import * as Yup from "yup";
import { convertYupError } from "utils/errors";
import { NextRequest, NextResponse } from "next/server";
const handler = async (_req: NextRequest) => {
  if (process.env.HYGRAPH_TOKEN === undefined) {
    throw new Error("Problem to get hygraph token");
  }
  try {
    // const { email, password } = await Yup.object(defaultSchema)
    //   .typeError("You should provide email and password")
    //   .validate(req.body);
    // const hashedPassword = await Bcrypt.hash(password, 12);
    // const { data } = await authorizedApolloClient.mutate<
    //   CreateAccountMutation,
    //   CreateAccountMutationVariables
    // >({
    //   mutation: CreateAccountDocument,
    //   variables: {
    //     email,
    //     password: hashedPassword,
    //   },
    // });
    return NextResponse.json(
      {
        // email: data?.createAccount?.email,
        // id: data?.createAccount?.id,
      },
      { status: 200 },
    );
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return NextResponse.json(convertYupError(err), { status: 400 });
    }
    return NextResponse.json(
      { error: "Unknown error in signup!" },
      { status: 404 },
    );
  }
};

export { handler as POST };
