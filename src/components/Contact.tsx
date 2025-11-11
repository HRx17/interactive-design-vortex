import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Linkedin, Github } from 'lucide-react';
// Button not needed here; keep imports minimal
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';

export function Contact() {
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
      className="py-4 relative overflow-hidden bg-black text-white"
    >
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-3">
  <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className={cn(
            "text-sm font-medium px-2 py-0.5 rounded-full bg-indigo-700 text-white inline-block",
            "opacity-0 transform transition-all duration-700",
            isInView && "opacity-100 bounce-in"
          )}>
            Get in Touch
          </span>
          
          <h2 className={cn(
            "heading text-white text-xl",
            "opacity-0 transform transition-all duration-700 delay-100",
            isInView && "opacity-100 slide-in-right"
          )}>
            Looking for a Designer?
          </h2>
          
          <p className={cn(
            "text-slate-300 max-w-2xl mx-auto text-sm",
            "opacity-0 transform transition-all duration-700 delay-200",
            isInView && "opacity-100 blur-in"
          )}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the platforms below.
          </p>
          
          <div className={cn(
            "flex flex-wrap justify-center gap-2 relative z-50",
            "opacity-0 transform transition-all duration-700 delay-300",
            isInView && "opacity-100 scale-up"
          )}>
            <a 
              href="mailto:haetranpariya1789@gmail.com"
              className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white text-sm transition-all duration-200 hover:scale-105 cursor-pointer shadow-sm"
            >
              <Mail className="h-4 w-4" />
              <span className="font-medium">Email</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/haet-ranpariya-382324188/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white text-sm transition-all duration-200 hover:scale-105 cursor-pointer shadow-sm"
            >
              <Linkedin className="h-4 w-4" />
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/HRx17"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white text-sm transition-all duration-200 hover:scale-105 cursor-pointer shadow-sm"
            >
              <Github className="h-4 w-4" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
          
          {/* Callout removed per request; heading now reads 'Looking for a Designer?' */}
        </div>
      </div>
      
      {/* Background decorative elements with parallax and black colors */}
      <div 
        className="absolute top-1/4 left-0 w-full h-12 bg-white/10 rounded-full filter blur-3xl opacity-10 float-animation"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>
      
      {/* Floating decorative shapes */}
  <div className="absolute top-1/3 right-1/3 w-3 h-3 border border-white/10 rotate-45 float-animation" style={{animationDelay: '0.8s'}}></div>
  <div className="absolute bottom-1/4 left-1/6 w-1.5 h-1.5 bg-white/10 rounded-full float-animation" style={{animationDelay: '2.5s'}}></div>
  <div className="absolute top-2/3 right-1/5 w-4 h-4 border-2 border-white/10 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
    </section>
  );
}
