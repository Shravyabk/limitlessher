
import React from 'react';
import { Github, Twitter, Linkedin, Facebook, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-limitless-purple">Limitless</span>
              <span className="text-limitless-pink">Her</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Empowering girls and women to break barriers in STEM fields through scholarships, resources, and community support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-limitless-purple transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-limitless-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-limitless-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-limitless-purple transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-limitless-purple transition-colors">About Us</a></li>
              <li><a href="#scholarships" className="text-gray-600 hover:text-limitless-purple transition-colors">Scholarships</a></li>
              <li><a href="#careers" className="text-gray-600 hover:text-limitless-purple transition-colors">Careers</a></li>
              <li><a href="#events" className="text-gray-600 hover:text-limitless-purple transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-600 hover:text-limitless-purple transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-limitless-purple transition-colors">Coding Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-limitless-purple transition-colors">Resume Templates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-limitless-purple transition-colors">Interview Prep</a></li>
              <li><a href="#" className="text-gray-600 hover:text-limitless-purple transition-colors">Mentorship</a></li>
              <li><a href="#" className="text-gray-600 hover:text-limitless-purple transition-colors">Community Forum</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-600 mb-4">Stay updated with the latest opportunities and events</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-white" />
              <Button type="submit" className="bg-limitless-purple hover:bg-limitless-purple/90">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} LimitlessHer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
