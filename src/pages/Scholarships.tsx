
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Award, Calendar, Globe } from 'lucide-react';

const scholarshipData = [
  {
    id: 1,
    title: "Women in STEM Scholarship",
    organization: "TechFuture Foundation",
    deadline: "June 30, 2025",
    amount: "$10,000",
    description: "Empowering female students pursuing degrees in Science, Technology, Engineering, and Mathematics.",
    eligibility: [
      "Female undergraduate or graduate students",
      "Enrolled in STEM fields",
      "Minimum 3.5 GPA",
    ]
  },
  {
    id: 2,
    title: "Diversity in Tech Scholarship",
    organization: "CodeHers Initiative",
    deadline: "July 15, 2025",
    amount: "$5,000",
    description: "Supporting underrepresented women in computer science and software engineering.",
    eligibility: [
      "Female students in computer science",
      "First-generation college students preferred",
      "Strong academic record"
    ]
  },
  {
    id: 3,
    title: "Global Women in Engineering Grant",
    organization: "International Engineering Association",
    deadline: "August 1, 2025",
    amount: "$15,000",
    description: "Funding innovative research and academic pursuits for women in engineering disciplines.",
    eligibility: [
      "Graduate-level engineering students",
      "Demonstrated research potential",
      "Innovative project proposal"
    ]
  }
];

const Scholarships = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-limitless-purple">Scholarship</span> Opportunities
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlock your potential with exclusive scholarships designed to support and empower women in STEM.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarshipData.map((scholarship) => (
              <div 
                key={scholarship.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <Award className="text-limitless-purple" size={40} />
                    <span className="text-xl font-semibold text-limitless-teal">
                      {scholarship.amount}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{scholarship.title}</h2>
                  <p className="text-gray-600 mb-4">{scholarship.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-700">
                      <Globe size={16} className="mr-2 text-limitless-purple" />
                      <span>{scholarship.organization}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar size={16} className="mr-2 text-limitless-purple" />
                      <span>Deadline: {scholarship.deadline}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-2">Eligibility:</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {scholarship.eligibility.map((criteria, index) => (
                        <li key={index}>{criteria}</li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full mt-6 bg-limitless-purple hover:bg-limitless-purple/90 text-white"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Scholarships;

