import ChatLog from "../models/ChatLog.js";
import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
dotenv.config();


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export const getWords = async (req, res) => {
  const message = req.body.message;
  const content = req.body.content;
  console.log(content);
  console.log(message);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [...content, { role: "user", content: message }],
  });
  console.log(completion.data.choices[0].message);
  res.send({ reply: completion.data.choices[0].message }).status(200);
};
