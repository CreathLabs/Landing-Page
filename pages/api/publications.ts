import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  publications: {
    id: string;
    name: string;
    description: string;
    url: string;
    imageUrl: string;
  }[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { userId } = req.body;

  const { data } = await axios.get(
    `https://api.medium.com/v1/users/${userId}/publications`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  console.log(data);
  res.status(200).json({ publications: data.data });
}
