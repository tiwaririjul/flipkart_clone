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

dotenv.config();
//db connection
Connection();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);

app.listen(8000, () => {
  console.log("Server is Listening on port 8000");
});
// DefaultData();
