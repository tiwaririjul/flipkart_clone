import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();
export const instance = new Razorpay({
    key_id: process.env.RAZOPAY_API_KEY,
    key_secret: process.env.RAZOPAY_API_SECRET,
  });