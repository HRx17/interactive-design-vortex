
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
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pb-20"
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
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div 
            className="mb-6 reveal-text"
            ref={sentenceRef}
          >
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-emerald-900/50 text-emerald-100 backdrop-blur-sm border border-emerald-700/30 animate-fade-in opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              UI/UX Designer • Product Designer • GenUI Specialist
            </span>
          </div>
          
          <h1 className="heading mb-4 text-white text-5xl md:text-7xl">
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
          
          <p className="text-lg md:text-xl text-emerald-100/80 max-w-3xl mt-8 animate-fade-in opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
            I'm Haet Ranpariya, a UI/UX Designer and Product Designer passionate about creating human-centered digital experiences. I also specialize in GenUI, leveraging generative AI to enhance and accelerate the design process.
          </p>
          
          <div className="mt-12 animate-fade-in opacity-0 flex flex-wrap gap-4 items-center justify-center" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
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
          
          {/* Certification Badges - Compact */}
          <div className="mt-16 animate-fade-in opacity-0" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
            <div className="flex flex-col items-center gap-4">
              <p className="text-xs font-medium text-emerald-200/60 uppercase tracking-wider">
                Certified By
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <img 
                  src="/logos/google-cert-logo.svg" 
                  alt="Google Certified"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  title="Google UX Design Professional Certification"
                />
                <img 
                  src="/logos/umich-cert-logo.svg" 
                  alt="University of Michigan"
                  className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  title="University of Michigan Certified"
                />
                <img 
                  src="/logos/coursera-cert-logo.svg" 
                  alt="Coursera"
                  className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  title="Coursera Certifications"
                />
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
        
        {/* Company Logos Section */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider">
              Previous Clients & Employers
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className={cn(
                  "opacity-0 transform translate-y-4 animate-fade-in"
                )}
                style={{ 
                  animationDelay: `${1000 + index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {company.logo? (
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className={cn(
                      "w-auto opacity-60 hover:opacity-100 transition-opacity duration-300",
                      (company.name === "Zlato Technolabs" || company.name === "Upwork") ? "h-16" : "h-12"
                    )}
                  />
                ) : (
                  <span className="text-lg font-semibold text-white/60">
                    {company.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Mouse icon indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a 
            href="#projects" 
            className="flex flex-col items-center text-white/50 hover:text-white/80 transition-all duration-300 group"
          >
            <div className="relative" style={{ animation: 'bounce 2s infinite' }}>
              <Mouse className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
