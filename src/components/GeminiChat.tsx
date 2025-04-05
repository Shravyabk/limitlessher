import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader, Send } from 'lucide-react';
import useGemini from '@/hooks/useGemini';
import GeminiApiKeyForm from './GeminiApiKeyForm';

const GeminiChat: React.FC = () => {
  const { generateResponse, loading, hasApiKey } = useGemini();
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');

    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    const result = await generateResponse(userMessage);

    if (result.error) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${result.error}` }]);
    } else {
      setMessages(prev => [...prev, { role: 'assistant', content: result.text }]);
    }
  };

  if (!hasApiKey) {
    return (
      <div className="p-4 max-w-3xl mx-auto bg-zinc-900 min-h-screen text-white">
        <h2 className="text-2xl font-bold mb-4 text-teal-400">AI Assistant</h2>
        <p className="mb-4 text-zinc-400">To use the AI assistant, please add your Gemini API key below:</p>
        <GeminiApiKeyForm />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[600px] max-w-3xl mx-auto border border-zinc-700 rounded-lg shadow-sm overflow-hidden bg-zinc-900 text-white">
      <div className="bg-teal-600 p-3 text-white font-medium">
        AI Assistant powered by Gemini
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-800">
        {messages.length === 0 ? (
          <div className="text-center text-zinc-400 my-8">
            Send a message to start chatting with the AI assistant
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.role === 'user'
                    ? 'bg-teal-600 text-white rounded-tr-none'
                    : 'bg-zinc-700 text-zinc-300 border border-zinc-600 rounded-tl-none'
                }`}
              >
                {message.content.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < message.content.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-3 border-t border-zinc-700 bg-zinc-900">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={loading}
            className="flex-1 bg-zinc-800 text-white placeholder:text-zinc-400 border-zinc-700"
          />
          <Button
            type="submit"
            disabled={loading}
            className="bg-teal-500 hover:bg-teal-400 text-white"
          >
            {loading ? <Loader className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GeminiChat;
