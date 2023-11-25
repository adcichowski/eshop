import * as Bcrypt from "bcrypt";
import { defaultSchema } from "components/Forms/schemas/defaultSchema";
import * as Yup from "yup";
import { convertYupError } from "utils/errors";
import { NextRequest, NextResponse } from "next/server";
import { createAccount } from "lib";
const handler = async (_req: NextRequest) => {
  const req = await _req.json();
  try {
    const { email, password } = await Yup.object(defaultSchema)
      .typeError("You should provide email and password")
      .validate(req);
    const hashedPassword = await Bcrypt.hash(password, 12);
    const account = await createAccount({ email, password: hashedPassword });
    return NextResponse.json(account, { status: 200 });
  } catch (err) {
    console.log(err);
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
