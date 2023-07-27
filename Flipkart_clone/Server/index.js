// const DefaultData = require("./default.js");
// const express = require("express");
// import cors from "cors";

import express from "express";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";
const app = express();

//db connection
Connection();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);
app.listen(8000, () => {
  console.log("Server is Listening on port 8000");
});
DefaultData();

export let paytmMerchantkey = "bKMfNxPPf_QdZppa";
export let paytmParams = {};

(paytmParams["MID"] = "DIY12386817555501617"),
  (paytmParams["WEBSITE"] = "DIYtestingweb"),
  (paytmParams["CHANNEL_ID"] = "WEB"),
  (paytmParams["INDUSTRY_TYPE_ID"] = "Retail"),
  (paytmParams["ORDER_ID"] = uuid()),
  (paytmParams["CUST_ID"] = "jirnfirn"),
  (paytmParams["TXN_AMOUNT"] = "100"),
  (paytmParams["CALLBACK_URL"] = "http://localhost:8000/callback");
paytmParams["EMAIL"] = "tiwaririjul7@gmail.com";
paytmParams["MOBILE_NO"] = "1234567852";
