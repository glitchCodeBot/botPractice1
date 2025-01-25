// require("dotenv").config({ path: "./config.env" });

import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB();
// import express from "express";

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`);
//     application.on("error", () => {
//       console.log("ERR:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Failed to connect to MongoDB:", error.message);
//     throw err;
//   }
// })();
