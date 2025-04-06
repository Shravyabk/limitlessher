// src/pages/Careers.tsx
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { sendPromptToGemini } from '@/components/Gemini'; // ✅ Import the helper function

const Careers = () => {
  const [userInput, setUserInput] = useState('');
  const [chatLog, setChatLog] = useState<{ type: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    setChatLog((prev) => [...prev, { type: 'user', text: userInput }]);
    setLoading(true);

    try {
      const botResponse = await sendPromptToGemini(userInput);
      setChatLog((prev) => [...prev, { type: 'bot', text: botResponse }]);
    } catch (error) {
      setChatLog((prev) => [...prev, { type: 'bot', text: 'Oops! Something went wrong.' }]);
    }

    setUserInput('');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Ask Our Career Bot 🤖</h1>

        {/* Chat Section */}
        <div className="bg-gray-800 rounded-xl p-4 h-[500px] overflow-y-auto space-y-3 shadow-md">
          {chatLog.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.type === 'user'
                  ? 'bg-limitless-purple text-white self-end ml-auto'
                  : 'bg-gray-700 text-white self-start'
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && <p className="text-gray-400">Bot is typing...</p>}
        </div>

        {/* Input + Send */}
        <div className="mt-4 flex gap-2">
          <Input
            placeholder="Ask about careers, roles, or advice..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-1 bg-gray-700 text-white"
          />
          <Button
            className="bg-limitless-pink hover:bg-limitless-pink/90"
            onClick={handleSend}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
