import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  article: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  const { data } = await axios.get(
    `https://medium2.p.rapidapi.com/article/${id}`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.TOKEN,
        "X-RapidAPI-Host": "medium2.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    }
  );
  res.status(200).json({ article: data });
}
