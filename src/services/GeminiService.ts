
import { toast } from "sonner";

// Gemini API configuration
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

export interface GeminiResponse {
  text: string;
  error?: string;
}

export class GeminiService {
  private apiKey: string | null = null;
  
  constructor(apiKey?: string) {
    this.apiKey = apiKey || null;
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
    localStorage.setItem('gemini_api_key', apiKey);
  }

  getApiKey(): string | null {
    if (!this.apiKey) {
      this.apiKey = localStorage.getItem('gemini_api_key');
    }
    return this.apiKey;
  }

  async generateResponse(prompt: string): Promise<GeminiResponse> {
    const apiKey = this.getApiKey();
    
    if (!apiKey) {
      return {
        text: "",
        error: "API key not found. Please enter your Gemini API key in settings."
      };
    }

    try {
      const response = await fetch(`${API_URL}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to generate response');
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates.length > 0) {
        const text = data.candidates[0].content.parts
          .map((part: any) => part.text)
          .join('');
        
        return { text };
      } else {
        return { text: "", error: "No response generated" };
      }
    } catch (error) {
      console.error('Gemini API Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast.error(`Gemini API Error: ${errorMessage}`);
      return { text: "", error: errorMessage };
    }
  }
}

export const geminiService = new GeminiService();

export default geminiService;
