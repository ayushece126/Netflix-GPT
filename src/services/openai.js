// src/services/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.REACT_APP_GEMINI_KEY;
if (!apiKey) console.warn("Missing REACT_APP_GEMINI_KEY");
const genAI = new GoogleGenerativeAI(apiKey);

export const getModel = (modelName = "gemini-1.5-flash") =>
  genAI.getGenerativeModel({ model: modelName });

export async function generateText(prompt, modelName = "gemini-1.5-flash") {
  const model = getModel(modelName);
  const result = await model.generateContent(prompt);
  return result.response.text();
}

export default genAI;
