import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string[];
  icon: LucideIcon;
  color: string; // Tailwind color class like bg-indigo-500
  className?: string;
}

const FeatureCard = ({ title, description, icon: Icon, color, className }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "bg-zinc-900 text-white rounded-xl p-6 shadow-md feature-card-hover",
        className
      )}
    >
      <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${color}`}>
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="space-y-2">
        {description.map((item, index) => (
          <p key={index} className="text-zinc-400">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
