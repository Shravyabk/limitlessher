import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔐 Replace with your Gemini API Key
const genAI = new GoogleGenerativeAI("AIzaSyAiQQGLAlS-EhUliE18RuNKI83AvTw__qQ");

export const sendPromptToGemini = async (prompt: string): Promise<string> => {
  try {
    // Use `gemini-pro` for text-only prompts
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Error talking to Gemini:", error);
    return "Sorry, I couldn't get a reply from Gemini. Please try again later.";
  }
};
