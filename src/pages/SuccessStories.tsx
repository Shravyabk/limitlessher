import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SuccessStories = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-limitless-purple">Success</span> Stories
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Inspiring journeys of women who have broken barriers in technology.
            </p>
          </div>

          {/* 👩‍💻 Inspiring Success Story with Image */}
          <div className="flex flex-col md:flex-row items-center gap-10 bg-white shadow-lg rounded-xl p-8">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Inspiring Woman in Tech"
                className="rounded-lg shadow-md w-full object-cover h-80"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4 text-limitless-purple">
                A Journey from Learner to Leader
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Meet Aisha, a self-taught programmer who started learning code through online resources.
                Today, she's a senior software engineer leading a team at a Fortune 500 company. Her story proves that
                determination, passion, and a supportive community can turn dreams into reality.
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStories;
