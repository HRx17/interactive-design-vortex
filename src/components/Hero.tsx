
import React, { useEffect, useRef } from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  const sentenceRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const sentence = sentenceRef.current;
    if (!sentence) return;
    
    // Get all spans
    const spans = sentence.querySelectorAll('span');
    
    // Set the --index custom property for each span
    spans.forEach((span, index) => {
      span.style.setProperty('--index', index.toString());
    });
  }, []);

  return (
    <section 
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <div 
            className="mb-6 reveal-text"
            ref={sentenceRef}
          >
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-secondary text-primary animate-fade-in opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              UI/UX Designer & HCI Student
            </span>
          </div>
          
          <h1 className="heading mb-4">
            <div className="reveal-text">
              <span className="block">Creating intentional</span>
            </div>
            <div className="reveal-text mt-2">
              <span className="block">and impactful digital</span>
            </div>
            <div className="reveal-text mt-2">
              <span className="block">experiences</span>
            </div>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-6 animate-fade-in opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
            I'm a UI/UX Designer passionate about creating human-centered digital experiences that balance form and function.
          </p>
          
          <div className="mt-10 animate-fade-in opacity-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
            <a 
              href="#projects"
              className="btn-hover inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm"
            >
              <span className="relative z-10">View my work</span>
            </a>
            <a 
              href="https://www.behance.net/haetranpariya17"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center px-6 py-3 rounded-full bg-secondary text-primary font-medium text-sm transition-colors hover:bg-secondary/80"
            >
              Behance profile
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-200">
            <span className="text-sm font-medium mb-2">Scroll down</span>
            <ArrowDownIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-l from-secondary/50 to-transparent rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-secondary/50 to-transparent rounded-full filter blur-3xl opacity-30"></div>
    </section>
  );
}
