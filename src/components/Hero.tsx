
import React, { useEffect, useRef, useState } from 'react';
import { Mouse, Download } from 'lucide-react';
import { cn } from '@/lib/utils';


interface Company {
  name: string;
  logo?: string;
  url: string;
}

const companies: Company[] = [
  {
    name: "Tech9",
    url: "https://www.tech9.com/",
    logo: "/logos/tech9-logo.svg?v=2"
  },
  {
    name: "Excellus BCBS",
    url: "https://www.excellusbcbs.com/",
    logo: "/logos/excellus-logo.png"
  },
  {
    name: "Zlato Technolabs",
    url: "https://zlatotech.com/",
    logo: "/logos/zlato-logo.png"
  },
  {
    name: "WaahTV",
    url: "https://waahtv.com",
    logo: "/logos/waahtv-logo.png"
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/",
    logo: "/logos/upwork-logo.png"
  },
  {
    name: "RIT",
    url: "https://www.rit.edu/",
    logo: "/logos/rit-logo.png"
  },
  {
    name: "Laurentian University",
    url: "https://laurentian.ca/",
    logo: "/logos/Laurentian_University.png"
  }
];

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
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pb-20 bg-background"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="inline-block px-6 py-3 rounded-full text-sm font-bold bg-foreground text-background tracking-wide">
              Hi, I'm Haet Ranpariya ^_^
            </span>
          </div>
          
          <h1 className="heading mb-4 text-foreground text-5xl md:text-7xl lg:text-8xl font-bold overflow-visible leading-tight">
            <div className="reveal-text overflow-visible mb-2">
              <span className="inline-block">A</span>
              <span className="inline-block ml-3 font-bold">Product Designer,</span>
            </div>
            <div className="reveal-text overflow-visible mb-2">
              <span className="inline-block font-bold">Tech Geek,</span>
              <span className="inline-block ml-3">and</span>
              <span className="inline-block ml-3 font-bold">Storyteller,</span>
            </div>
            <div className="reveal-text overflow-visible">
              <span className="inline-block">always creating.</span>
            </div>
          </h1>
          
          {/* Colorful accent shapes */}
          <div className="flex items-center justify-center gap-3 my-12">
            <div className="w-12 h-12 bg-red-500 rounded-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300" />
            <div className="w-12 h-12 bg-emerald-500 rounded-lg transform rotate-6 hover:rotate-0 transition-transform duration-300" />
            <div className="w-12 h-12 bg-blue-500 rounded-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300" />
            <div className="w-12 h-12 bg-yellow-400 rounded-lg transform rotate-12 hover:rotate-0 transition-transform duration-300" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="/resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-foreground text-background font-semibold rounded-lg transition-all duration-300 hover:bg-foreground/90 shadow-sm hover:shadow-md gap-2"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
            <a 
              href="#projects"
              className="inline-flex items-center px-8 py-4 border-2 border-foreground text-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              View Projects
            </a>
          </div>
          
          {/* Company logos section */}
          <div className="space-y-12">
            <div>
              <p className="text-muted-foreground text-sm mb-6 font-medium uppercase tracking-wide">Currently at</p>
              <div className="flex items-center justify-center">
                <a
                  href="https://www.tech9.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  <img 
                    src="/logos/tech9-logo.svg?v=2" 
                    alt="Tech9"
                    className="h-10 object-contain"
                  />
                </a>
              </div>
            </div>
            
            <div>
              <p className="text-muted-foreground text-sm mb-6 font-medium uppercase tracking-wide">Previously at</p>
              <div className="flex flex-wrap items-center justify-center gap-10">
                {companies.filter(c => c.name !== 'Tech9').map((company) => (
                  <a
                    key={company.name}
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-70"
                  >
                    {company.logo ? (
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="h-8 object-contain"
                      />
                    ) : (
                      <span className="text-foreground font-semibold text-base">{company.name}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-muted-foreground text-xs uppercase tracking-wider font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-muted-foreground rounded-full animate-pulse" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
