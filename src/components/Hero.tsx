import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownIcon, ExternalLink, Download } from 'lucide-react';
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
      {/* Hero cover image with creative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 to-background z-0 pointer-events-none">
        <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-[url('https://www.behance.net/gallery/212271631/Product-Designer-Portfolio-Overcoming-Remote-UX-Challeng/modules/1201095617')] bg-cover bg-center"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/10 to-background"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-4xl">
            <div 
              className="mb-6 reveal-text"
              ref={sentenceRef}
            >
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-emerald-900/50 text-emerald-100 backdrop-blur-sm border border-emerald-700/30 animate-fade-in opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                UI/UX Designer & HCI Student
              </span>
            </div>
            
            <h1 className="heading mb-4 text-white">
              <div className="reveal-text">
                <span className="inline-block bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">Creating</span>
                <span className="inline-block ml-3">intentional</span>
              </div>
              <div className="reveal-text mt-2">
                <span className="inline-block">and</span>
                <span className="inline-block ml-3 bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">impactful</span>
                <span className="inline-block ml-3">digital</span>
              </div>
              <div className="reveal-text mt-2">
                <span className="inline-block bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">experiences</span>
              </div>
            </h1>
            
            <p className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mt-6 animate-fade-in opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
              I'm Haet Ranpariya, a UI/UX Designer passionate about creating human-centered digital experiences that balance form and function.
            </p>
            
            <div className="mt-10 animate-fade-in opacity-0 flex flex-wrap gap-4" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
              <a 
                href="/Haet-Ranpariya-UIUX Designer.pdf"
                download
                className="inline-flex items-center px-8 py-4 rounded-full bg-emerald-800/40 backdrop-blur-sm text-white font-medium transition-colors hover:bg-emerald-800/60 gap-2 border border-emerald-700/30"
              >
                <span>Download Resume</span>
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Profile picture section - updated with Ghibli-style image */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-xl"></div>
              <div className="h-80 w-80 relative rounded-full overflow-hidden border-4 border-emerald-400/20 p-1">
                <img 
                  src="/lovable-uploads/hero1.png" 
                  alt="Haet Ranpariya - Ghibli Style"
                  className="object-cover w-fit h-fit rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 to-transparent mix-blend-overlay"></div>
              </div>
              <div className="absolute bottom-0 right-0 h-20 w-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full border-4 border-emerald-900 flex items-center justify-center text-white font-bold text-lg">UX</div>
            </div>
          </div>
        </div>
        
        {/* Animated shapes that respond to mouse movement */}
        <div 
          className="absolute right-10 top-32 h-32 w-32 rounded-full bg-emerald-500/20 filter blur-xl"
          style={{ 
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            opacity: 0.7
          }}
        ></div>
        <div 
          className="absolute left-20 bottom-32 h-24 w-24 rounded-full bg-teal-400/20 filter blur-xl"
          style={{ 
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            opacity: 0.7
          }}
        ></div>
        <div 
          className="absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-emerald-600/10 filter blur-xl"
          style={{ 
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
            transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            opacity: 0.5
          }}
        ></div>
        
        {/* Scroll indicator - moved down and made less prominent */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-80">
          <a 
            href="#projects" 
            className="flex flex-col items-center text-white/40 hover:text-white/60 transition-colors duration-200"
          >
            <span className="text-xs font-medium mb-1">Scroll</span>
            <ArrowDownIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
