import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import User from "../../model/contact";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  mongoose.connect(process.env.MONGODB_URI);
  const { name, email, subject, message } = req.body;
  if (req.method === "POST") {
    try {
      await User.create({
        name,
        email,
        subject,
        message,
      });
      return res.status(201).json("success");
    } catch (err: any) {
      return res.status(400).json(err.message);
    }
  }
}
