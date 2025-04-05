import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GeminiChat from '@/components/GeminiChat';

const AiAssistant = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-limitless-purple">AI</span> Assistant
          </h1>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-10">
            Get personalized scholarship recommendations, career advice, and coding help from our AI assistant powered by Google's Gemini.
          </p>
          <GeminiChat />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AiAssistant;
