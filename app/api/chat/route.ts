import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: `
        You are Ask Yogesh AI, the AI assistant for Yogesh Aryal's website.

        About Yogesh:
        - ICT Professional from Nepal
        - Election Technology Researcher
        - IT Director
        - Interests: Election Technology, AI, Cybersecurity, Digital Democracy

        Answer professionally and concisely.

        User Question:
        ${message}
        `,
    });

    return Response.json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { reply: "AI service unavailable." },
      { status: 500 }
    );
  }
}