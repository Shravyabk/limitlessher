
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-limitless-light">
      <div 
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238A4FFF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Girls in 
              <span className="gradient-text block"> STEM Fields</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Despite their talent and passion, countless girls face barriers in accessing scholarships, 
              coding opportunities, and career support. LimitlessHer bridges this gap by providing resources, 
              opportunities, and a supportive community.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-limitless-purple hover:bg-limitless-purple/90 text-white py-6 px-8 text-lg">
                Explore Opportunities
              </Button>
              <Button variant="outline" className="border-limitless-purple text-limitless-purple hover:bg-limitless-lavender py-6 px-8 text-lg">
                Join Our Community
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-limitless-pink/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-limitless-teal/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
              <img 
                src="/lovable-uploads/557fd5ec-1868-4b23-811e-803cbc422a94.png" 
                alt="Girls in STEM" 
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
