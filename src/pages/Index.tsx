import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import SuccessStory from '@/components/SuccessStory';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Users, ArrowRight } from 'lucide-react';

const Index = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Women in Tech Hackathon",
      date: "April 15, 2025",
      description: "Join our 48-hour virtual hackathon and build innovative solutions to real-world problems.",
      image: "/lovable-uploads/d67cdf49-6777-46b9-83d4-1885a340a7e8.png"
    },
    {
      id: 2,
      title: "Career Prep Workshop",
      date: "April 22, 2025",
      description: "Learn how to craft a standout resume and ace technical interviews with industry experts.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        
        {/* Mission Statement Section */}
        <section className="section-padding bg-limitless-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              "We believe that every girl deserves equal opportunities to pursue her dreams in STEM. 
              Our mission is to bridge the gender gap by providing resources, support, and a community 
              that empowers girls to overcome barriers and achieve their full potential."
            </p>
          </div>
        </section>
        
        <SuccessStory />
        
        {/* Events Section */}
        <section className="section-padding bg-gray-900" id="events">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Upcoming <span className="text-limitless-purple">Events</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Join our virtual workshops, hackathons, and networking events to enhance your skills and connect with the community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-md feature-card-hover">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-limitless-purple mb-2">
                      <Calendar size={18} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
                    <p className="text-gray-400 mb-4">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users size={16} className="mr-1" />
                        <span>Limited spots</span>
                      </div>
                      <Button className="bg-limitless-teal hover:bg-limitless-teal/90">
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button variant="outline" className="border-limitless-purple text-limitless-purple hover:bg-limitless-lavender">
                View All Events <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-limitless-purple to-limitless-pink text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Join our community of ambitious women in STEM and access exclusive opportunities to grow your career.
            </p>
            <Button className="bg-white text-limitless-purple hover:bg-gray-100 px-8 py-6 text-lg">
              Join LimitlessHer Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
