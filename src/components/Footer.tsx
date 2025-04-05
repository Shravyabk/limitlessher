import React from 'react';
import { Github, Twitter, Linkedin, Facebook, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-teal-400">Limitless</span>
              <span className="text-pink-400">Her</span>
            </h3>
            <p className="text-zinc-400 mb-4">
              Empowering girls and women to break barriers in STEM fields through scholarships, resources, and community support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#scholarships" className="text-zinc-400 hover:text-teal-400 transition-colors">Scholarships</a></li>
              <li><a href="#careers" className="text-zinc-400 hover:text-teal-400 transition-colors">Careers</a></li>
              <li><a href="#events" className="text-zinc-400 hover:text-teal-400 transition-colors">Events</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">Coding Tutorials</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">Resume Templates</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">Interview Prep</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">Mentorship</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">Community Forum</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-zinc-400 mb-4">Stay updated with the latest opportunities and events</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-zinc-800 text-white placeholder:text-zinc-500 border-none focus:ring-2 focus:ring-teal-400"
              />
              <Button 
                type="submit" 
                className="bg-teal-500 hover:bg-teal-400 text-white"
              >
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} LimitlessHer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
