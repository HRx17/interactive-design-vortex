
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
                UI/UX Designer • Product Designer • GenUI Specialist
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
              I'm Haet Ranpariya, a UI/UX Designer and Product Designer passionate about creating human-centered digital experiences. I also specialize in GenUI, leveraging generative AI to enhance and accelerate the design process.
            </p>
            
            <div className="mt-10 animate-fade-in opacity-0 flex flex-wrap gap-4" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
              <a 
                href="/resume.pdf"
                download
                className="btn-magnetic inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 backdrop-blur-sm text-white font-medium gap-2 border border-emerald-500/30 shadow-lg hover:shadow-emerald-500/25 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download Resume
                  <Download className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
              
              <a 
                href="#projects"
                className="btn-magnetic inline-flex items-center px-8 py-4 rounded-full border border-emerald-500/30 backdrop-blur-sm text-emerald-100 font-medium hover:bg-emerald-500/10 transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:animate-pulse"></div>
                </span>
              </a>
            </div>
          </div>
          
          {/* Profile picture section with floating elements */}
          <div className="hidden md:flex justify-center relative">
            <div className="relative">
              {/* Animated floating elements around profile */}
              <div className="absolute -top-8 -left-8 w-4 h-4 bg-emerald-400/60 rounded-full float-animation" style={{animationDelay: '0s'}}></div>
              <div className="absolute -top-4 -right-12 w-3 h-3 bg-teal-400/60 rounded-full float-animation" style={{animationDelay: '2s'}}></div>
              <div className="absolute -bottom-8 -right-8 w-5 h-5 bg-emerald-300/40 rounded-full float-animation" style={{animationDelay: '4s'}}></div>
              <div className="absolute -bottom-4 -left-12 w-2 h-2 bg-teal-300/60 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
              
              {/* Main glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl glow-effect"></div>
              
              {/* Profile container */}
              <div className="h-80 w-80 relative rounded-full overflow-hidden border-4 border-emerald-400/30 p-1 cursor-magnetic hover:border-emerald-400/50 transition-all duration-500 group">
                <img 
                  src="/lovable-uploads/c11612aa-2535-469b-8a3c-fd8e73bf68ca.png" 
                  alt="Haet Ranpariya"
                  className="object-cover w-full h-full rounded-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 to-transparent mix-blend-overlay group-hover:from-emerald-950/50 transition-all duration-500"></div>
                
                {/* Interactive overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* UX badge */}
              <div className="absolute bottom-4 right-4 h-20 w-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full border-4 border-emerald-900 flex items-center justify-center text-white font-bold text-sm cursor-magnetic hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-emerald-500/30 group">
                <span className="group-hover:rotate-12 transition-transform duration-300">UI/UX</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced animated shapes that respond to mouse movement */}
        <div 
          className="absolute right-10 top-32 h-32 w-32 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 filter blur-xl float-animation"
          style={{ 
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            opacity: 0.7,
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute left-20 bottom-32 h-24 w-24 rounded-full bg-gradient-to-r from-teal-400/20 to-emerald-400/20 filter blur-xl float-animation"
          style={{ 
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            opacity: 0.7,
            animationDelay: '3s'
          }}
        ></div>
        <div 
          className="absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-gradient-to-r from-emerald-600/10 to-teal-600/10 filter blur-xl float-animation"
          style={{ 
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
            transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            opacity: 0.5,
            animationDelay: '2s'
          }}
        ></div>
        
        {/* Additional interactive elements */}
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 border border-teal-400/30 rotate-45 float-animation" style={{animationDelay: '2.5s'}}></div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-80 cursor-magnetic group">
          <a 
            href="#projects" 
            className="flex flex-col items-center text-white/50 hover:text-white/80 transition-all duration-300 group-hover:scale-110"
          >
            <span className="text-xs font-medium mb-2 group-hover:text-emerald-300 transition-colors duration-300">Explore Work</span>
            <div className="relative">
              <ArrowDownIcon className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
