
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Key } from 'lucide-react';
import useGemini from '@/hooks/useGemini';

interface GeminiApiKeyFormProps {
  onSuccess?: () => void;
}

const GeminiApiKeyForm: React.FC<GeminiApiKeyFormProps> = ({ onSuccess }) => {
  const { setApiKey, hasApiKey } = useGemini();
  const [apiKey, setApiKeyValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!apiKey.trim()) {
      toast.error('Please enter a valid API key');
      return;
    }

    setApiKey(apiKey);
    toast.success('API key saved successfully');
    setApiKeyValue('');
    
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border">
      <div className="flex items-center gap-2 mb-4">
        <Key className="h-5 w-5 text-limitless-purple" />
        <h3 className="text-lg font-medium">Gemini API Key</h3>
      </div>
      
      {hasApiKey && (
        <div className="mb-4 p-2 bg-green-50 text-green-700 rounded-md text-sm">
          API key is set. You can update it below if needed.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <Input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKeyValue(e.target.value)}
            placeholder="Enter your Gemini API key"
            className="flex-1"
          />
          <Button 
            type="submit"
            className="bg-limitless-purple hover:bg-limitless-purple/90"
          >
            Save
          </Button>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Get your API key from <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer" className="text-limitless-purple hover:underline">Google AI Studio</a>
        </p>
      </form>
    </div>
  );
};

export default GeminiApiKeyForm;
