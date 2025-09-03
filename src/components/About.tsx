import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, Download, FileSearch, FlaskConical, Zap } from 'lucide-react';
import { ResearchCard } from '@/components/ResearchCard';

interface BentoCardProps {
  className?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  gradient?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const BentoCard = ({ className, title, description, icon, gradient, children, onClick }: BentoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 transition-all duration-500 hover:shadow-2xl cursor-pointer",
        gradient,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Background gradient overlay */}
      <div className={cn(
        "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
        gradient || "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
      )} />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            {icon}
          </div>
        </div>
        
        <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        {children}
      </div>
    </div>
  );
};

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Mouse parallax effect for the decorative elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-12 relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className={cn(
              "text-sm font-medium px-3 py-1 rounded-full bg-secondary text-primary inline-block mb-4",
              "opacity-0 transform translate-y-6 transition-all duration-700",
              isInView && "opacity-100 translate-y-0"
            )}>
              About Me
            </span>
            
            <h2 className={cn(
              "heading bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent",
              "opacity-0 transform translate-y-6 transition-all duration-700 delay-100",
              isInView && "opacity-100 translate-y-0"
            )}>
              UI/UX Designer & Product Designer with GenUI specialization
            </h2>
            
            <div className={cn(
              "mt-8 space-y-6 text-muted-foreground",
              "opacity-0 transform translate-y-6 transition-all duration-700 delay-200",
              isInView && "opacity-100 translate-y-0"
            )}>
              <p>
                I'm a UI/UX Designer and Product Designer currently studying Human-Computer Interaction at Rochester Institute of Technology. My passion lies in creating digital experiences that balance aesthetic appeal with intuitive functionality, focusing on end-to-end product strategy and user-centered design principles.
              </p>
              <p>
                I also specialize in GenUI, leveraging AI tools like Lovable, ChatGPT, and custom prompting techniques to enhance my design workflow. This parallel expertise allows me to rapidly prototype and iterate while maintaining focus on strategic product decisions and user needs.
              </p>
              <p>
                When I'm not designing products or experimenting with new design methodologies, you can find me Painting, Scuba Diving, or researching the latest developments in human-computer interaction.
              </p>
            </div>
          </div>
          
          <div className={cn(
            "lg:pt-16",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-300",
            isInView && "opacity-100 translate-y-0"
          )}>
            {/* Education Section */}
            <BentoCard
              className="w-full"
              title="MS in Human-Computer Interaction • Rochester Institute of Technology"
              description="Currently pursuing advanced studies in HCI with a focus on emerging technologies, accessibility, and user-centered design methodologies. GPA: 3.9/4.0"
              icon={<div className="w-5 h-5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded" />}
              gradient="hover:bg-gradient-to-r hover:from-emerald-500/5 hover:to-teal-500/5"
            >
              <div className="mt-4 flex justify-between items-center">
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>2024 - Present</span>
                  <span>•</span>
                  <span>Rochester, NY</span>
                </div>
                <div className="text-emerald-400 text-sm font-medium">3.9 GPA</div>
              </div>
              
              <div className="mt-4 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/10">
                <h5 className="text-sm font-semibold text-emerald-300 mb-2">Previous Education</h5>
                <div className="text-xs text-muted-foreground">
                  <p className="font-medium">B.E. in Computer Engineering</p>
                  <p>Gujarat Technological University • 2019 - 2023 • GPA: 3.8</p>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
      
      {/* Enhanced animated background decorative elements */}
      <div 
        className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-l from-emerald-500/20 to-transparent rounded-full filter blur-3xl opacity-30 float-animation"
        style={{ 
          transform: isHovering ? `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)` : 'none',
          transition: isHovering ? "transform 0.2s ease-out" : "transform 0.5s ease-out",
          animationDelay: '1s'
        }}
      ></div>
      <div 
        className="absolute top-1/3 left-0 w-1/4 h-1/3 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full filter blur-3xl opacity-20 float-animation"
        style={{ 
          transform: isHovering ? `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)` : 'none',
          transition: isHovering ? "transform 0.3s ease-out" : "transform 0.5s ease-out",
          animationDelay: '2s'
        }}
      ></div>
      
      {/* Additional floating decorative elements */}
      <div className="absolute top-1/4 right-1/3 w-6 h-6 border-2 border-emerald-400/30 rotate-45 float-animation" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/4 left-1/5 w-4 h-4 bg-teal-400/20 rounded-full float-animation" style={{animationDelay: '3s'}}></div>
    </section>
  );
}