import cors from "cors";
import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import openaiRoutes from "./routes/openai.js";
import csvDataRoutes from './routes/csvData.js'
import ChatLog from "./models/ChatLog.js";
import authRoutes from './routes/authRoutes.js'

//configurations
const app = express();
const PORT = process.env.PORT || 8080;
const jsonParser = bodyParser.json();
dotenv.config();
app.use(cors());
app.use(express.json());

//Routes
app.use("/get", jsonParser, csvDataRoutes);
app.use("/openai", jsonParser, openaiRoutes);
app.use("/auth", jsonParser, authRoutes)


// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });

// Connection to DB & PORT
try {
  mongoose.connect(process.env.MONGO_URL).then(
    app.listen(PORT, () => {
        console.log("Mongoose connection successful")
      console.log(`Listening on port ${PORT}`);
    })
  );
} catch (error) {
  console.log(error);
}

