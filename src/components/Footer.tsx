
import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-3 bg-black text-slate-200 border-t border-white/6">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-slate-300 flex items-center">
              © {currentYear} Haet Ranpariya. Made with <Heart className="h-3 w-3 mx-1 text-red-500 animate-pulse" /> in New York
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#home"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a 
              href="#work-experience"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              Work Experience
            </a>
            <a 
              href="#expertise"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#contact"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
