import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = await axios.get("https://api.medium.com/v1/me", {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  console.log(data);
  res.status(200).json({ id: data.data.id });
}
