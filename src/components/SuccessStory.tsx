import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const SuccessStory = () => {
  return (
    <section className="section-padding bg-gray-900 text-white" id="success-stories">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Inspiring <span className="text-limitless-purple">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Meet the women who have broken barriers and are making a difference in the world of STEM.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Story Text */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              "I never thought I could become a software engineer, but the resources and community at LimitlessHer changed everything."
            </h3>
            <p className="text-gray-300 mb-6">
              Sarah started her journey with little programming experience. Through LimitlessHer's scholarship program, she gained access to coding bootcamps and mentorship from industry leaders. Today, she works as a senior developer at a major tech company, contributing to innovative projects and mentoring other women in tech.
            </p>
            <div className="flex items-center mb-6">
              <div className="text-left">
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-gray-400">Software Engineer at Google</p>
              </div>
            </div>
            <Button className="flex items-center gap-2 bg-limitless-teal hover:bg-limitless-teal/90 text-white">
              Read More Stories <ChevronRight size={16} />
            </Button>
          </div>

          {/* Image with decoration */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-tl-3xl bg-limitless-lavender/30"></div>
              <img 
                src="/lovable-uploads/8749383d-de51-4072-8389-ac611090235b.png" 
                alt="Woman in tech" 
                className="rounded-xl shadow-lg relative z-10 w-full object-cover" 
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-br-3xl bg-limitless-teal/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
