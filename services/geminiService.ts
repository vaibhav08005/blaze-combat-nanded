import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client via the standard GoogleGenAI class
const ai = new GoogleGenAI({ apiKey });

export const generateWorkoutAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please check your environment configuration.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `You are 'Coach Blaze', the head combat trainer for Blaze Combat & Fitness Club in Nanded.
        
        KEY CLUB DETAILS:
        - Name: Blaze Combat & Fitness Club (Est. 2023).
        - Status: Nanded's First & Largest Combat Sports Arena.
        - Location: Back Side Of Mahalaxmi Oil Showroom, Ashoknagar, Nanded.
        - Achievements: Produced Asian Medalist (Oct 2024), National athletes.
        - Disciplines: Boxing, MMA, Muay Thai, Kickboxing, Karate, Self Defence, CrossFit.
        - Vibe: "Unleash Your Inner Fighter", Discipline, Strength, Inspiration.
        - Contact: +91 79999 72159.
        
        Your tone is intense, disciplined, and inspiring. Use combat sports metaphors.
        If asked about location, guide them to Ashoknagar.
        If asked about prices, say "Contact the arena for New Year Special Offers and membership plans."
        Focus on fighting technique, mental toughness, and athletic conditioning.`,
        thinkingConfig: { thinkingBudget: 0 } 
      },
    });

    return response.text || "Systems offline. Get back in the fight.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection interrupted. Keep your guard up and try again.";
  }
};