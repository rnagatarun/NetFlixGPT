import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
if (!apiKey) {
    console.error('Warning: VITE_OPENAI_API_KEY is not defined in your environment variables.');
}

const client = new GoogleGenAI({ apiKey: apiKey });

export default client;