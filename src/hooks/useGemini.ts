
import { useState } from 'react';
import geminiService, { GeminiResponse } from '@/services/GeminiService';

export const useGemini = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<GeminiResponse | null>(null);

  const generateResponse = async (prompt: string) => {
    setLoading(true);
    try {
      const result = await geminiService.generateResponse(prompt);
      setResponse(result);
      return result;
    } catch (error) {
      console.error('Error in useGemini hook:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setResponse({ text: '', error: errorMessage });
      return { text: '', error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const setApiKey = (apiKey: string) => {
    geminiService.setApiKey(apiKey);
  };

  return {
    loading,
    response,
    generateResponse,
    setApiKey,
    hasApiKey: !!geminiService.getApiKey(),
  };
};

export default useGemini;
