
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
    "User Research", "Wireframing", "Prototyping", 
    "Usability Testing", "UI/UX Design", "Interaction Design",
    "Information Architecture", "Design Systems", "Figma",
    "Adobe XD", "Human-Computer Interaction", "Sketch",
    "AI Prompting", "Lovable AI", "ChatGPT", "Coding"
  ];

  const researchProjects = [
    {
      title: "The Impact of Situationally Induced Impairments and Disabilities (SIIDs) on Task Performance: A Comparative Study of Sensory Modalities",
      description: "This study proposes a comparative experimental investigation of how visual, auditory, and tactile SIIDs affect task performance and user experience.",
      year: "2024",
      downloadFile: "/SIID_Research.pdf",
    },
    {
      title: "Experimental Research on MyCourses Platform",
      description: "The study investigates the challenges faced by international and American students at the Rochester Institute of Technology(RIT) while using the MyCourses learning platform. ",
      year: "2024",
      downloadFile: "/Experimental_Research.pdf",
    },
    {
      title: "What is the correlation between age groups and their preferred game genres on PlayStation, and how does this affect the average time spent playing per week?",
      description: "This study investigates the correlation relationship between PlayStation users, focusing on age groups, their preferred game genres on PlayStation, and the average time spent playing per week and developing the structured survey methodology on Google Forms as we gathered data from PlayStation users to collect data focusing on their game genre preferences and gaming habits.",
      year: "2024",
      downloadFile: "/Research_Gaming.pdf",
    }
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
              UI/UX Designer with a focus on human experience
            </h2>
            
            <div className={cn(
              "mt-8 space-y-6 text-muted-foreground",
              "opacity-0 transform translate-y-6 transition-all duration-700 delay-200",
              isInView && "opacity-100 translate-y-0"
            )}>
              <p>
                I'm a UI/UX designer currently studying Human-Computer Interaction at Rochester Institute of Technology. My passion lies in creating digital experiences that are not only aesthetically pleasing but also intuitive and accessible.
              </p>
              <p>
                With a background in design and technology, I approach each project with a user-centered mindset, ensuring that the final product meets both user needs and business objectives. I'm particularly interested in the intersection of design, psychology, and technology.
              </p>
              <p>
                When I'm not designing, you can find me Painting, Scuba Diving, or experimenting with new prototyping tools.
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
                // Add a special animation for AI-related skills
                const isAISkill = ["AI Prompting", "Lovable AI", "ChatGPT"].includes(skill);
                
                return (
                  <span 
                    key={skill} 
                    className={cn(
                      "px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-500 hover:shadow-md hover:scale-105 border border-emerald-600/30",
                      isAISkill 
                        ? "bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-600 hover:to-teal-600" 
                        : "bg-gradient-to-r from-emerald-900 to-teal-800",
                      "opacity-0 transform translate-y-4",
                      isInView && "opacity-100 translate-y-0"
                    )}
                    style={{ 
                      transitionDelay: `${300 + index * 50}ms`,
                      transform: isHovering && isAISkill 
                        ? `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px) scale(1.05)` 
                        : isInView 
                          ? "translateY(0)" 
                          : "translateY(4px)",
                      transition: isHovering 
                        ? "transform 0.2s ease-out, opacity 0.5s ease-out, background 0.3s ease" 
                        : "transform 0.5s ease-out, opacity 0.5s ease-out, background 0.3s ease"
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
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-r before:from-emerald-600 before:to-teal-500 hover:before:scale-150 before:transition-transform">
                  <h4 className="text-lg font-bold">MS in Human-Computer Interaction</h4>
                  <p className="text-sm text-muted-foreground">Rochester Institute of Technology</p>
                  <p className="text-sm text-muted-foreground">2024 - Present</p>
                  <p className="text-sm font-medium mt-1">GPA: 3.9</p>
                </div>
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-r before:from-emerald-600 before:to-teal-500 hover:before:scale-150 before:transition-transform">
                  <h4 className="text-lg font-bold">B.E. in Computer Engineering</h4>
                  <p className="text-sm text-muted-foreground">Gujarat Technological University</p>
                  <p className="text-sm text-muted-foreground">2019 - 2023</p>
                  <p className="text-sm font-medium mt-1">GPA: 3.8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Research Section */}
        <div className={cn(
          "mt-20",
          "opacity-0 transform translate-y-6 transition-all duration-700 delay-400",
          isInView && "opacity-100 translate-y-0"
        )}>
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="w-6 h-6 text-emerald-500" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Research Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchProjects.map((project, index) => (
              <ResearchCard
                key={project.title}
                title={project.title}
                description={project.description}
                year={project.year}
                downloadFile={project.downloadFile}
                delay={500 + index * 100}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated background decorative elements */}
      <div 
        className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-l from-emerald-500/20 to-transparent rounded-full filter blur-3xl opacity-30"
        style={{ 
          transform: isHovering ? `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)` : 'none',
          transition: isHovering ? "transform 0.2s ease-out" : "transform 0.5s ease-out"
        }}
      ></div>
      <div 
        className="absolute top-1/3 left-0 w-1/4 h-1/3 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full filter blur-3xl opacity-20"
        style={{ 
          transform: isHovering ? `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)` : 'none',
          transition: isHovering ? "transform 0.3s ease-out" : "transform 0.5s ease-out"
        }}
      ></div>
    </section>
  );
}
