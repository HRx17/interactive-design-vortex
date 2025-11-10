import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Code, Palette, Sparkles, Users, Zap } from 'lucide-react';

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
        gradient || "bg-muted/30"
      )} />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 rounded-lg bg-muted border border-border">
            {icon}
          </div>
          <ArrowUpRight className={cn(
            "w-5 h-5 text-muted-foreground transition-all duration-300",
            isHovered && "translate-x-1 -translate-y-1 text-foreground"
          )} />
        </div>
        
        <h3 className="text-lg font-bold mb-2 group-hover:text-foreground transition-colors duration-300">
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

export function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  
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

  return (
    <section ref={sectionRef} className="py-12 relative overflow-hidden">
      <div className="section-container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className={cn(
            "text-sm font-medium px-3 py-1 rounded-full bg-secondary text-primary inline-block mb-4",
            "opacity-0 transform translate-y-6 transition-all duration-700",
            isInView && "opacity-100 translate-y-0"
          )}>
            My Expertise
          </span>
          
          <h2 className={cn(
            "heading text-foreground",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-100",
            isInView && "opacity-100 translate-y-0"
          )}>
            Design & Development Skills
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[minmax(200px,auto)]",
          "opacity-0 transform translate-y-6 transition-all duration-700 delay-200",
          isInView && "opacity-100 translate-y-0"
        )}>
          {/* UI/UX Design */}
          <BentoCard
            className="md:col-span-2 lg:col-span-3"
            title="UI/UX Design"
            description="Creating human-centered digital experiences through research, prototyping, and iterative design. I focus on solving real user problems with elegant, accessible solutions."
            icon={<Palette className="w-5 h-5 text-foreground" />}
            gradient="hover:bg-muted/30"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="mt-4 grid grid-cols-3 gap-2">
              {['Wireframing', 'Storyboarding', 'User Journey', 'Empathy Mapping', 'Mockups', 'Sketches', 'User Persona', 'UI Kit', 'Style Guide', 'Figma', 'Adobe XD', 'Prototyping'].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md border border-border text-center">
                  {skill}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* GenUI Specialist */}
          <BentoCard
            className="md:col-span-2 lg:col-span-2"
            title="GenUI Specialist"
            description="Leveraging AI tools like Lovable, ChatGPT, and custom prompting to accelerate design workflows."
            icon={<Sparkles className="w-5 h-5 text-foreground" />}
            gradient="hover:bg-muted/30"
          >
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground">AI-Enhanced Design</span>
            </div>
          </BentoCard>

          {/* Product Design */}
          <BentoCard
            className="md:col-span-2 lg:col-span-1"
            title="Product Design"
            description="End-to-end product strategy and design thinking for digital products."
            icon={<Zap className="w-5 h-5 text-foreground" />}
            gradient="hover:bg-muted/30"
          />

          {/* Development Skills */}
          <BentoCard
            className="md:col-span-2 lg:col-span-2"
            title="Frontend Development"
            description="Building responsive, accessible interfaces with modern web technologies and frameworks."
            icon={<Code className="w-5 h-5 text-foreground" />}
            gradient="hover:bg-muted/30"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="mt-4 grid grid-cols-2 gap-2">
              {['React', 'TypeScript', 'Tailwind', 'JavaScript'].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md border border-border text-center">
                  {tech}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* User Research */}
          <BentoCard
            className="md:col-span-2 lg:col-span-2"
            title="User Research"
            description="Conducting usability testing, interviews, and data analysis to inform design decisions."
            icon={<Users className="w-5 h-5 text-foreground" />}
            gradient="hover:bg-muted/30"
          />
        </div>
      </div>
      
      {/* Background decorative elements - subtle */}
      <div className="absolute top-1/5 right-1/4 w-28 h-28 rounded-full bg-muted/20 filter blur-2xl opacity-30 float-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 left-1/5 w-36 h-36 rounded-full bg-muted/15 filter blur-3xl opacity-20 float-animation" style={{animationDelay: '0s'}}></div>
    </section>
  );
}