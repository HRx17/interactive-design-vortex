import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Linkedin, Github } from 'lucide-react';
// Assuming useScrollAnimation and useParallax are custom hooks
// import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';

// Placeholder definitions for the hooks if they are external
const useScrollAnimation = ({ threshold, triggerOnce }) => ({ ref: useRef(null), isInView: true }); // Mocked to always be in view for testing
const useParallax = (offset) => 0; // Mocked to 0

export function Contact() {
  // Assuming these custom hooks return the ref and animation status
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const parallaxOffset = useParallax(0.4);

  const socialLinks = [
    { 
      name: "Email", 
      url: "mailto:haetranpariya1789@gmail.com", 
      icon: <Mail className="h-5 w-5" />
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/haet-ranpariya-382324188/", 
      icon: <Linkedin className="h-5 w-5" /> 
    },
    { 
      name: "GitHub", 
      url: "https://github.com/HRx17", 
      icon: <Github className="h-5 w-5" /> 
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      // Increased vertical padding for better spacing around the CTA
      className="py-24 relative overflow-hidden bg-gray-950 text-slate-300" 
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          
          {/* 💥 REMOVED: 'Get in Touch' span 💥 */}
          
          {/* 💥 UPDATED: Heading for size and weight 💥 */}
          <h2 className={cn(
            "heading text-gray-200 text-5xl md:text-6xl font-extrabold mb-6",
            // Removed animation delays as it's the first element
            "opacity-0 transform transition-all duration-700",
            isInView && "opacity-100 slide-in-right" 
          )}>
            Looking for a Designer?
          </h2>
          
          {/* 💥 UPDATED: Paragraph for readability and width 💥 */}
          <p className={cn(
            "text-gray-200 max-w-3xl mx-auto text-xl leading-relaxed", // Higher contrast text-gray-200 and larger text-xl
            "opacity-0 transform transition-all duration-700 delay-100",
            isInView && "opacity-100 blur-in"
          )}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out through any of the platforms below.
          </p>
          
          {/* 💥 UPDATED: Larger, clearer action buttons 💥 */}
          <div className={cn(
            "flex flex-wrap justify-center gap-4 relative z-50 pt-8", // Larger gap-4 and pt-8 for separation
            "opacity-0 transform transition-all duration-700 delay-200",
            isInView && "opacity-100 scale-up"
          )}>
            {/* Primary CTA: Email (Highlight with white background) */}
            <a 
              href="mailto:haetranpariya1789@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gray-300 text-black text-lg font-semibold transition-all duration-200 hover:scale-105 hover:bg-gray-200 shadow-lg"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>
            
            {/* Secondary CTA: LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/haet-ranpariya-382324188/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/50 text-gray-200 text-lg font-semibold transition-all duration-200 hover:scale-105 hover:bg-white/10 shadow-sm"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            
            {/* Secondary CTA: GitHub */}
            <a 
              href="https://github.com/HRx17"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/50 text-grau-200 text-lg font-semibold transition-all duration-200 hover:scale-105 hover:bg-white/10 shadow-sm"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
          
        </div>
      </div>
      
      {/* Background decorative elements (unchanged) */}
      <div 
        className="absolute top-1/4 left-0 w-full h-12 bg-white/10 rounded-full filter blur-3xl opacity-10 float-animation"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 border border-white/10 rotate-45 float-animation" style={{animationDelay: '0.8s'}}></div>
      <div className="absolute bottom-1/4 left-1/6 w-1.5 h-1.5 bg-white/10 rounded-full float-animation" style={{animationDelay: '2.5s'}}></div>
      <div className="absolute top-2/3 right-1/5 w-4 h-4 border-2 border-white/10 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
    </section>
  );
}