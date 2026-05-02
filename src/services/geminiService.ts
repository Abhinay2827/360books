import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const generatePitchDeckOutline = async (businessData: any) => {
  const prompt = `Generate a professional 5-slide pitch deck outline for a business named "${businessData.name}".
  Business Description: ${businessData.description}
  Industry: ${businessData.industry}
  
  Provide the result in JSON format with slide titles and content bullet points.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json"
    }
  });

  return JSON.parse(response.text || '{}');
};

export const getTaxAdvice = async (financialSummary: string) => {
  const prompt = `As an expert Indian CA, provide 3 actionable tax saving tips for a startup with the following financial status: ${financialSummary}. Keep it concise.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt
  });

  return response.text;
};
