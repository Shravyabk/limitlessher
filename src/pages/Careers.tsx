import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Careers = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-teal-400">Career</span> Opportunities
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover exciting career paths and opportunities for women in tech.
            </p>
          </div>

          {/* Placeholder Section */}
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">
              Career resources and job listings coming soon!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
