import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Code, Palette, Sparkles, Users, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// --- HELPER CARD 1: SkillCard (from BentoGrid.tsx) ---
interface SkillCardProps {
  className?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  iconContainerClassName?: string;
}

const SkillCard = ({ className, title, description, icon, children, onClick, iconContainerClassName }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 flex flex-col",
        onClick ? "cursor-pointer" : "cursor-default",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-muted/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className={cn("p-2 rounded-lg bg-muted border border-border", iconContainerClassName)}>
            {icon}
          </div>
          {onClick && (
            <ArrowUpRight className={cn("w-5 h-5 text-muted-foreground transition-all duration-300", isHovered && "translate-x-1 -translate-y-1 text-foreground")} />
          )}
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <div className="mt-auto pt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- HELPER DATA & COMPONENT 3: (from UXProcess.tsx) ---
const processSteps = [
  {
    title: "Discover & Research",
    subtitle: "Problem Finding",
    description: "Understanding user needs through research and gathering insights",
  },
  {
    title: "Define & Ideate",
    subtitle: "Problem Framing",
    description: "Synthesizing findings and defining the core problem",
  },
  {
    title: "Design & Prototype",
    subtitle: "Solution Shaping",
    description: "Creating and iterating on design solutions",
  },
  {
    title: "Test & Validate",
    subtitle: "Solution Validation",
    description: "Testing with users and refining based on feedback",
  },
  {
    title: "Implement & Launch",
    subtitle: "Solution Delivery",
    description: "Collaborating with developers to bring designs to life",
  },
  {
    title: "Monitor & Iterate",
    subtitle: "Continuous Improvement",
    description: "Measuring success and iterating for better outcomes",
  }
];

const StepGraphics = ({ index }: { index: number }) => {
  const graphics = [
    <svg viewBox="0 0 120 100" className="w-full h-full"><path d="M60,50 m-25,0 a25,25 0 1,0 50,0 a25,25 0 1,0 -50,0" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" /><path d="M60,50 m-18,0 a18,18 0 1,1 36,0 a18,18 0 1,1 -36,0" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" /><path d="M60,50 m-30,5 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" /><circle cx="60" cy="50" r="3" fill="currentColor" /></svg>,
    <svg viewBox="0 0 120 100" className="w-full h-full"><path d="M20,50 L60,20 L100,50 L60,80 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" /><path d="M30,50 L60,30 L90,50 L60,70 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" /><path d="M40,50 L60,40 L80,50 L60,60 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" /><circle cx="60" cy="50" r="4" fill="currentColor" /></svg>,
    <svg viewBox="0 0 120 100" className="w-full h-full"><path d="M10,50 Q30,20 50,50 T90,50 T110,50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" /><path d="M10,45 Q30,25 50,45 T90,45 T110,45" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" /><path d="M10,55 Q30,35 50,55 T90,55 T110,55" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" /><circle cx="60" cy="50" r="3" fill="currentColor" /></svg>,
    <svg viewBox="0 0 120 100" className="w-full h-full"><rect x="35" y="30" width="15" height="40" rx="2" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" /><rect x="55" y="25" width="15" height="45" rx="2" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" /><rect x="75" y="30" width="15" height="40" rx="2" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" /><line x1="35" y1="55" x2="50" y2="55" stroke="currentColor" strokeWidth="2" opacity="0.3" /><line x1="55" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.3" /><line x1="75" y1="55" x2="90" y2="55" stroke="currentColor" strokeWidth="2" opacity="0.3" /></svg>,
    <svg viewBox="0 0 120 100" className="w-full h-full"><path d="M60,20 L70,45 L80,70 L60,65 L40,70 L50,45 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" /><path d="M50,60 Q45,75 40,85" stroke="currentColor" strokeWidth="2" opacity="0.3" strokeLinecap="round" /><path d="M70,60 Q75,75 80,85" stroke="currentColor" strokeWidth="2" opacity="0.3" strokeLinecap="round" /><circle cx="60" cy="35" r="4" fill="currentColor" opacity="0.6" /></svg>,
    <svg viewBox="0 0 120 100" className="w-full h-full"><path d="M60,30 A20,20 0 1,1 59.9,30" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" /><path d="M60,35 A15,15 0 1,0 59.9,35" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" /><polygon points="75,30 80,28 78,33" fill="currentColor" opacity="0.5" /><polygon points="45,50 40,52 42,47" fill="currentColor" opacity="0.5" /><circle cx="60" cy="50" r="3" fill="currentColor" /></svg>
  ];
  return graphics[index] || graphics[0];
};


// --- EXPERTISE COMPONENT (LINEAR LAYOUT) ---
export function Expertise() {
  const { ref: sectionRef, inView: isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="py-12 relative overflow-hidden bg-background border-t border-border"
    >
      <div className="section-container">

        {/* 1. SECTION HEADER */}
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
            Skills & Process
          </h2>
        </div>

        {/* 2. SKILLS (BENTO GRID) */}
        <div className="mb-24">
          <h3 className={cn(
            "text-2xl font-bold mb-8 text-center md:text-left",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-200",
            isInView && "opacity-100 translate-y-0"
          )}>
            My Skills
          </h3>
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-300",
            isInView && "opacity-100 translate-y-0"
          )}>
            <SkillCard
              className="md:col-span-2"
              title="UI/UX Design"
              description="Creating human-centered digital experiences through research, prototyping, and iterative design."
              icon={<Palette className="w-5 h-5 text-blue-600" />}
              iconContainerClassName="bg-blue-100/50 border-blue-200"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex flex-wrap gap-2">
                {['Wireframing', 'User Journey', 'Empathy Mapping', 'Mockups', 'User Persona', 'UI Kit', 'Figma', 'Prototyping'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100/50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                    {skill}
                  </span>
                ))}
              </div>
            </SkillCard>
            <SkillCard
              title="GenUI Specialist"
              description="Leveraging AI tools like v0, Lovable, and GPT-4 to accelerate design workflows."
              icon={<Sparkles className="w-5 h-5 text-purple-600" />}
              iconContainerClassName="bg-purple-100/50 border-purple-200"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">AI-Enhanced Design</span>
              </div>
            </SkillCard>
            <SkillCard
              title="Frontend Development"
              description="Building responsive, accessible interfaces with modern web technologies."
              icon={<Code className="w-5 h-5 text-sky-600" />}
              iconContainerClassName="bg-sky-100/50 border-sky-200"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind', 'JavaScript'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-sky-100/50 text-sky-700 text-xs font-medium rounded-full border border-sky-200">
                    {tech}
                  </span>
                ))}
              </div>
            </SkillCard>
            <SkillCard
              title="User Research"
              description="Conducting usability testing, interviews, and data analysis to inform design decisions."
              icon={<Users className="w-5 h-5 text-emerald-600" />}
              iconContainerClassName="bg-emerald-100/50 border-emerald-200"
            />
            <SkillCard
              title="Product Design"
              description="End-to-end product strategy and design thinking for digital products."
              icon={<Zap className="w-5 h-5 text-indigo-600" />}
              iconContainerClassName="bg-indigo-100/50 border-indigo-200"
            />
          </div>
        </div>

        {/* 3. MY PROCESS (TIMELINE) */}
        <div>
          <h3 className={cn(
            "text-2xl font-bold mb-12 text-center md:text-left",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-400",
            isInView && "opacity-100 translate-y-0"
          )}>
            My Process
          </h3>
          <div className={cn(
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-500",
            isInView && "opacity-100 translate-y-0"
          )}>
            {/* Desktop Horizontal Timeline */}
            <div className="hidden lg:block">
              <div className="relative py-16">
                <div className="absolute left-0 right-0 top-32 h-1 bg-gradient-to-r from-primary via-primary/70 to-primary" />
                <div className="grid grid-cols-6 gap-4">
                  {processSteps.map((step, index) => (
                    <div key={step.title} className="relative">
                      <div className="absolute left-1/2 -translate-x-1/2 top-24 w-0.5 h-8 bg-border" />
                      <div className="absolute left-1/2 -translate-x-1/2 top-[124px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
                      <div className="relative mb-4">
                        <div className="w-full h-24 flex items-center justify-center text-primary">
                          <StepGraphics index={index} />
                        </div>
                      </div>
                      <div className="mt-12 text-center">
                        <h3 className="font-bold text-foreground mb-1 text-sm">
                          {step.subtitle}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Vertical Timeline */}
            <div className="lg:hidden relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/70 to-primary" />
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative pl-20 pb-12">
                  <div className="absolute left-6 top-12 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                  <div className="w-16 h-16 mb-3 text-primary">
                    <StepGraphics index={index} />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">
                    {step.subtitle}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}