import type { NextApiHandler } from "next";

type ResponseFromMailerLite = {
  readonly id: string;
  readonly email: string;
  readonly status: string;
};
import { serialize } from "cookie";

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST").status(405).json({});
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
  const json: ResponseFromMailerLite = await response.json();

  return res
    .setHeader(
      "Set-Cookie",
      serialize("ML", "1", {
        path: "/",
      })
    )
    .status(200)
    .json(json);
};
export default handler;
