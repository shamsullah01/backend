import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { app } from "./app.js"; // ✅ Only here
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `✅ Server running at http://localhost:${process.env.PORT || 8000}`
      );
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection failed !!!", err);
  });
