// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from "fs";

type Data = {
  name: string;
  route:any;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const files = fs.readdirSync(__dirname);
  // fs.readFileSync(__dirname)
  res.status(200).json({ name: 'John Doe',route:__dirname })
}
