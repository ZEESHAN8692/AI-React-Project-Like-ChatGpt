const GEMINI_API_KEY = "AIzaSyA9HBS1RZAEGws_p4LfAMh94io3y8YkbNM";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function main(promt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: promt,
  });
  return response.text;
  //   console.log(response.text);
}
