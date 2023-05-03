import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = await axios.get(
    "https://medium2.p.rapidapi.com/user/id_for/Creath",
    {
      headers: {
        "X-RapidAPI-Key": process.env.TOKEN,
        "X-RapidAPI-Host": "medium2.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    }
  );
  res.status(200).json({ id: data.id });
}
