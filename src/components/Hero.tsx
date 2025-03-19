
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownIcon, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  const sentenceRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
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
  
  // Mouse parallax effect for the decorative elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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
            I'm Haet Ranpariya, a UI/UX Designer passionate about creating human-centered digital experiences that balance form and function.
          </p>
          
          <div className="mt-10 animate-fade-in opacity-0 flex flex-wrap gap-4" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
            <a 
              href="#projects"
              className="btn-hover inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transform transition-transform duration-300 hover:scale-105"
            >
              <span className="relative z-10">View my work</span>
            </a>
            <a 
              href="https://www.behance.net/haetranpariya17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-secondary text-primary font-medium transition-colors hover:bg-secondary/80 gap-2"
            >
              <span>Behance profile</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
        
        {/* Animated shapes that respond to mouse movement */}
        <div 
          className="absolute right-10 top-32 h-32 w-32 rounded-full bg-primary/20 filter blur-xl"
          style={{ 
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            opacity: 0.7
          }}
        ></div>
        <div 
          className="absolute left-20 bottom-32 h-24 w-24 rounded-full bg-secondary/20 filter blur-xl"
          style={{ 
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            opacity: 0.7
          }}
        ></div>
        <div 
          className="absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-primary/10 filter blur-xl"
          style={{ 
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
            transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            opacity: 0.5
          }}
        ></div>
        
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
