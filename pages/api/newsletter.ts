import type { NextApiHandler } from "next";
import { env } from "utils/env";

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST").status(405).json({});
  }

  const response = await fetch(
    "https://connect.mailerlite.com/api/subscribers",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: env.NEXT_PUBLIC_MAILERLITE,
      },
    }
  );
  const json = await response.json();
  res.status(200).json({ json });
};
export default handler;
