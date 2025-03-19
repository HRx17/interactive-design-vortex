
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, FileSearch, FlaskConical } from 'lucide-react';
import { ResearchCard } from '@/components/ResearchCard';

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
    "Usability Testing", "UI/UX Design", "Interaction Design",
    "Information Architecture", "Design Systems", "Figma",
    "Adobe XD", "Human-Computer Interaction", "Sketch"
  ];

  const researchProjects = [
    {
      title: "The Impact of Situationally Induced Impairments and Disabilities (SIIDs) on Task Performance: A Comparative Study of Sensory Modalities",
      description: "This study proposes a comparative experimental investigation of how visual, auditory, and tactile SIIDs affect task performance and user experience.",
      year: "2024",
      fullContent: {
        challenge: "The transition to remote work has highlighted limitations in current collaboration tools. This research explored how AR/VR interfaces could enhance remote teamwork by creating more immersive and engaging collaboration experiences.",
        methods: [
          "Comparative usability testing between traditional video conferencing and VR meeting spaces",
          "Semi-structured interviews with 24 remote workers across different industries",
          "Prototype development and iterative testing of AR annotation tools",
          "Heuristic evaluation of existing VR collaboration platforms"
        ],
        findings: "Participants reported a 37% increase in engagement and 28% improvement in spatial understanding when using VR collaboration tools compared to traditional video conferencing. AR annotation capabilities reduced miscommunication in design feedback by 42%.",
        impact: "The findings informed the development of new guidelines for remote collaboration tools that integrate spatial awareness and interactive capabilities. Several companies have adopted these design principles in their next-generation remote work platforms.",
        conclusion: "AR/VR interfaces show significant promise for improving remote collaboration, particularly for tasks requiring spatial understanding or visual communication. However, hardware limitations and accessibility concerns remain important considerations for widespread adoption."
      }
    },
    {
      title: "Experimental Research on MyCourses Platform",
      description: "The study investigates the challenges faced by international and American students at the Rochester Institute of Technology(RIT) while using the MyCourses learning platform. ",
      year: "2024",
      fullContent: {
        challenge: "Despite advances in design systems, many mobile applications remain challenging for users with visual impairments. This research identified and tested design patterns to improve mobile accessibility without compromising visual aesthetics.",
        methods: [
          "Experimental Research",
          "User testing with 21 participants with varying degrees",
          "Development and testing of an accessible design pattern library",
          "Longitudinal study tracking usability metrics before and after accessibility improvements"
        ],
        findings: "Implementation of the identified patterns improved task completion rates by 64% for users with visual impairments while maintaining or enhancing the user experience for sighted users. Semantic grouping of interface elements and consistent navigation patterns showed the most significant impact.",
        impact: "The research resulted in an open-source accessibility pattern library now used by over 200 development teams. Three major apps implemented the recommended changes, reaching over 2 million users with visual impairments.",
        conclusion: "Effective accessibility design requires both technical compliance and thoughtful UX considerations. When properly implemented, accessibility improvements benefit all users through more intuitive and flexible interfaces."
      }
    },
    {
      title: "What is the correlation between age groups and their preferred game genres on PlayStation, and how does this affect the average time spent playing per week?",
      description: "This study investigates the correlation relationship between PlayStation users, focusing on age groups, their preferred game genres on PlayStation, and the average time spent playing per week and developing the structured survey methodology on Google Forms as we gathered data from PlayStation users to collect data focusing on their game genre preferences and gaming habits.",
      year: "2024",
      fullContent: {
        challenge: "As digital interfaces become more feature-rich, users often experience cognitive overload. This study measured cognitive load across different interface designs to identify patterns that minimize mental effort while maintaining functionality.",
        methods: [
          "Eye-tracking studies comparing different navigation paradigms",
          "NASA Task Load Index assessments for various task flows",
          "A/B testing of progressive disclosure techniques",
          "Biometric measurements (GSR, heart rate) during interface interaction"
        ],
        findings: "Progressive disclosure techniques reduced perceived cognitive load by 31% while maintaining task completion rates. Information architecture based on user mental models showed a 27% reduction in eye movement patterns associated with confusion.",
        impact: "The research informed a redesign of several enterprise applications, resulting in a 24% reduction in training time and a 17% decrease in user errors. The findings have been incorporated into design education programs at three universities.",
        conclusion: "Effective management of cognitive load is crucial for complex interfaces. Design strategies that align with users' mental models and carefully implement progressive disclosure can significantly improve usability without sacrificing functionality."
      }
    }
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
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={skill} 
                  className={cn(
                    "px-4 py-2 rounded-full bg-gradient-to-r from-emerald-900 to-teal-800 text-white text-sm font-medium transition-all duration-500 hover:shadow-md hover:scale-105 border border-emerald-600/30",
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
                  <h4 className="text-lg font-bold">MS in Human-Computer Interaction</h4>
                  <p className="text-sm text-muted-foreground">Rochester Institute of Technology</p>
                  <p className="text-sm text-muted-foreground">2024 - Present</p>
                  <p className="text-sm font-medium mt-1">GPA: 3.9</p>
                </div>
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-r before:from-emerald-600 before:to-teal-500">
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
                fullContent={project.fullContent}
                delay={500 + index * 100}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-l from-emerald-500/20 to-transparent rounded-full filter blur-3xl opacity-30"></div>
    </section>
  );
}
