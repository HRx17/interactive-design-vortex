
import React, { useEffect, useRef, useState } from 'react';
import { Mouse, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import profilePhoto from '@/assets/profile-photo.png';


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
      
      {/* Small profile photo */}
      <div className="absolute top-8 right-8 w-16 h-16 rounded-full overflow-hidden border-2 border-border hidden md:block">
        <img 
          src={profilePhoto} 
          alt="Haet Ranpariya" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="section-container relative z-10">
        {/* Split Hero Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto mb-16">
          {/* Left Content */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            <h1 className="heading mb-6 text-foreground text-4xl md:text-6xl lg:text-7xl overflow-visible">
              <div className="reveal-text overflow-visible">
                <span className="inline-block">Creating</span>
              </div>
              <div className="reveal-text mt-2 overflow-visible">
                <span className="inline-block">intentional</span>
                <span className="inline-block ml-3">and</span>
              </div>
              <div className="reveal-text mt-2 overflow-visible">
                <span className="inline-block">impactful</span>
              </div>
              <div className="reveal-text mt-2 overflow-visible">
                <span className="inline-block">digital</span>
                <span className="inline-block ml-3">experiences</span>
              </div>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              I'm <span className="text-foreground font-semibold">Haet Ranpariya</span>, a UI/UX Designer and Product Designer passionate about creating human-centered digital experiences. I also specialize in GenUI, leveraging generative AI to enhance and accelerate the design process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
            
            {/* Certifications */}
            <div className="flex flex-wrap items-center gap-6">
              <img 
                src="/logos/google-cert.png" 
                alt="Google Certified"
                className="h-8 w-auto opacity-90 hover:opacity-100 transition-all duration-300"
                title="Google UX Design Professional Certification"
              />
              <img 
                src="/logos/umich-cert.png" 
                alt="University of Michigan"
                className="h-10 w-auto opacity-90 hover:opacity-100 transition-all duration-300"
                title="University of Michigan Certified"
              />
              <img 
                src="/logos/coursera-cert.png" 
                alt="Coursera"
                className="h-8 w-auto opacity-90 hover:opacity-100 transition-all duration-300"
                title="Coursera Certifications"
              />
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative border */}
              <div className="absolute -inset-4 bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Image container */}
              <div className="relative w-[280px] h-[350px] md:w-[340px] md:h-[420px] rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Haet Ranpariya - UX Designer" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating accent dot */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 border-4 border-accent/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Company logos */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm mb-8 uppercase tracking-wider">Trusted by</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companies.map((company) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                {company.logo ? (
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="h-8 md:h-10 object-contain"
                  />
                ) : (
                  <span className="text-muted-foreground font-semibold text-lg">{company.name}</span>
                )}
              </a>
            ))}
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
