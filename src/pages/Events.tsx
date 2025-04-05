import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Events = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-sky-400">Upcoming</span> Events
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Connect, learn, and grow with our community events and workshops.
            </p>
          </div>

          {/* TODO: Add event listings */}
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">
              Event calendar and details coming soon!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
