// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { NextApiResponse, NextApiRequest } from "next";

interface USER {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<USER[]>
) {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    res.status(200).json(data);
  } catch (error) {
    throw error;
  }
}
