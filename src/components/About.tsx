
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function About() {
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

  const skills = [
    "User Research", "Wireframing", "Prototyping", 
    "Usability Testing", "UI Design", "Interaction Design",
    "Information Architecture", "Design Systems", "Figma",
    "Adobe XD", "Human-Computer Interaction", "Sketch"
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
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
                When I'm not designing, you can find me exploring new design trends, attending UX workshops, or experimenting with new prototyping tools.
              </p>
            </div>
          </div>
          
          <div className={cn(
            "lg:pt-16",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-300",
            isInView && "opacity-100 translate-y-0"
          )}>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={skill} 
                  className={cn(
                    "px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-primary text-sm font-medium transition-all duration-500 hover:shadow-md hover:scale-105",
                    "opacity-0 transform translate-y-4",
                    isInView && "opacity-100 translate-y-0"
                  )}
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Education</h3>
              <div className="space-y-6">
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-r before:from-emerald-600 before:to-teal-500">
                  <h4 className="text-lg font-bold">MSc in Human-Computer Interaction</h4>
                  <p className="text-sm text-muted-foreground">Rochester Institute of Technology</p>
                  <p className="text-sm text-muted-foreground">2022 - Present</p>
                  <p className="text-sm font-medium mt-1">GPA: 3.9</p>
                </div>
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-r before:from-emerald-600 before:to-teal-500">
                  <h4 className="text-lg font-bold">B.E. in Computer Engineering</h4>
                  <p className="text-sm text-muted-foreground">Gujarat Technological University</p>
                  <p className="text-sm text-muted-foreground">2018 - 2022</p>
                  <p className="text-sm font-medium mt-1">GPA: 3.8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-l from-emerald-500/20 to-transparent rounded-full filter blur-3xl opacity-30"></div>
    </section>
  );
}
