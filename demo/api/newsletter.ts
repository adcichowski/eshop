import type { NextApiHandler } from "next";
import * as yup from "yup";
export const schemaResponseMailerLite = yup.object({
  data: yup.object({
    id: yup.string().required("Response without id"),
    email: yup.string().email().required("Response without email"),
    status: yup.string().required("Response without status"),
  }),
});

import { serialize } from "cookie";

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST").status(405).end;
  }
  if (process.env.NEXT_PUBLIC_MAILERLITE === undefined) {
    throw new Error("Problem to get env mailer lite");
  }

  const response = await fetch(
    "https://connect.mailerlite.com/api/subscribers",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE}`,
      },
      body: JSON.stringify(req.body),
    }
  );
  try {
    const { data } = schemaResponseMailerLite.validateSync(
      await response.json()
    );
    const { email, id, status } = data;
    return res
      .setHeader(
        "Set-Cookie",
        serialize("ML", "1", {
          path: "/",
        })
      )
      .status(200)
      .json({ email, id, status });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return res.status(400).json({ message: error.message });
    }
    return res
      .status(404)
      .json({ message: "Problem with during fetch Mailerlite" });
  }
};
export default handler;
