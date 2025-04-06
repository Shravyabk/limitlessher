import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { sendPromptToGemini } from './GeminiAPI';

export const GeminiChat: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [chatLog, setChatLog] = useState<{ type: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;
    setChatLog((prev) => [...prev, { type: 'user', text: userInput }]);
    setLoading(true);
    const botReply = await sendPromptToGemini(userInput);
    setChatLog((prev) => [...prev, { type: 'bot', text: botReply }]);
    setUserInput('');
    setLoading(false);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-4 h-[500px] overflow-y-auto space-y-3 shadow-md">
      <div className="flex flex-col space-y-2 overflow-y-auto mb-4">
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
      <div className="mt-4 flex gap-2">
        <Input
          placeholder="Ask something..."
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
  );
};
export { sendPromptToGemini };

