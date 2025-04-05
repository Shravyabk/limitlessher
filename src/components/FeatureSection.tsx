import React from 'react';
import { Sparkles, Briefcase, Award, Calendar, Layers } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeatureSection = () => {
  const features = [
    {
      id: 'scholarships',
      title: 'Scholarship & Hackathon Hub',
      description: [
        'Exclusive scholarships & coding competitions for girls in STEM.',
        'Easy access to application details and deadlines.'
      ],
      icon: Sparkles,
      color: 'bg-limitless-purple'
    },
    {
      id: 'careers',
      title: 'Placement & Career Growth',
      description: [
        'Curated job listings & internships for women in tech.',
        'Resume-building tips & interview preparation resources.'
      ],
      icon: Briefcase,
      color: 'bg-limitless-teal'
    },
    {
      id: 'stories',
      title: 'Inspiring Success Stories',
      description: [
        'Real-life journeys of women breaking barriers in STEM.',
        'Insights on career paths, struggles, and triumphs.'
      ],
      icon: Award,
      color: 'bg-limitless-pink'
    },
    {
      id: 'events',
      title: 'Virtual Events & Workshops',
      description: [
        'Live coding bootcamps & expert-led career sessions.',
        'Networking with industry leaders & peers.'
      ],
      icon: Calendar,
      color: 'bg-limitless-purple'
    },
    {
      id: 'platform',
      title: 'Interactive & Engaging Platform',
      description: [
        'User-friendly, visually appealing design.',
        'Personalized recommendations for scholarships & jobs.'
      ],
      icon: Layers,
      color: 'bg-limitless-teal'
    }
  ];

  return (
    <section className="section-padding bg-zinc-950 text-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Features of <span className="text-teal-400">LimitlessHer</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Our platform offers comprehensive resources and tools designed to support girls and women at every stage of their STEM journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.id} id={feature.id === 'scholarships' ? 'scholarships' : undefined}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
