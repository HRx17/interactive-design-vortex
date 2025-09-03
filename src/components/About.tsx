import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, Download, FileSearch, FlaskConical, Zap, Sparkles } from 'lucide-react';
import { ResearchCard } from '@/components/ResearchCard';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
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
      if (!skillsRef.current) return;
      
      const rect = skillsRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
    "GenUI Design", "Product Design", "User Research", "Wireframing", "Prototyping", 
    "Usability Testing", "UI/UX Design", "Interaction Design",
    "Information Architecture", "Design Systems", "Figma",
    "Adobe XD", "Human-Computer Interaction", "Sketch",
    "AI Prompting", "Lovable AI", "ChatGPT", "Generative Design", "Coding"
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
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
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Skills & Expertise</h3>
            <div 
              ref={skillsRef}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => {
                // Add a special visual indicator for AI-related skills without movement
                const isAISkill = ["GenUI Design", "AI Prompting", "Lovable AI", "ChatGPT", "Generative Design"].includes(skill);
                
                return (
                  <span 
                    key={skill} 
                    className={cn(
                      "px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 border cursor-pointer",
                      isAISkill 
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 border-emerald-400/30 hover:border-emerald-400/50" 
                        : "bg-gradient-to-r from-emerald-800 to-teal-700 border-emerald-600/20 hover:border-emerald-600/40",
                      "opacity-0 transform translate-y-4",
                      isInView && "opacity-100 translate-y-0"
                    )}
                    style={{ 
                      transitionDelay: `${300 + index * 50}ms`
                    }}
                  >
                    {isAISkill && (
                      <Sparkles className="w-3 h-3 inline-block mr-1 text-yellow-300" />
                    )}
                    {skill}
                  </span>
                );
              })}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Education</h3>
              <div className="space-y-6">
                <div className="interactive-card p-6 relative pl-8 before:absolute before:left-0 before:top-8 before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-r before:from-emerald-600 before:to-teal-500 hover:before:scale-150 before:transition-transform cursor-magnetic">
                  <h4 className="text-lg font-bold">MS in Human-Computer Interaction</h4>
                  <p className="text-sm text-muted-foreground">Rochester Institute of Technology</p>
                  <p className="text-sm text-muted-foreground">2024 - Present</p>
                  <p className="text-sm font-medium mt-1 text-emerald-400">GPA: 3.9</p>
                </div>
                <div className="interactive-card p-6 relative pl-8 before:absolute before:left-0 before:top-8 before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-r before:from-emerald-600 before:to-teal-500 hover:before:scale-150 before:transition-transform cursor-magnetic">
                  <h4 className="text-lg font-bold">B.E. in Computer Engineering</h4>
                  <p className="text-sm text-muted-foreground">Gujarat Technological University</p>
                  <p className="text-sm text-muted-foreground">2019 - 2023</p>
                  <p className="text-sm font-medium mt-1 text-emerald-400">GPA: 3.8</p>
                </div>
              </div>
            </div>
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
