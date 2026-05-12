import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Briefcase, Building, Calendar, Globe, ExternalLink } from 'lucide-react';

interface WorkExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  website?: string;
  isPrimary?: boolean;
}

export function WorkExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
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

  const experiences: WorkExperienceItem[] = [
    {
      title: "UX Designer",
      company: "Lore",
      period: "April 2026 - Present",
      description: "Designing and shipping production-ready features for a health platform that uses AI and human conversation to help users manage psychological and physical stressors. Bridging design and engineering by leveraging vibe coding to translate high-fidelity Figma prototypes directly into functional, production-ready front-end code. Collaborating cross-functionally in a fully remote, async-first environment to rapidly iterate on user-facing features aligned with product and business goals.",
      website: "https://lore.co/",
      isPrimary: true
    },
    {
      title: "Product Designer",
      company: "Tech9",
      period: "May 2025 - Aug 2025",
      description: "Designed user-centered solutions that increased user engagement (measured by Daily Active Users) by 35% and improved conversion rates (from free to paid) by 25%. Partnered directly with the CPO to own and lead design initiatives, translating client business goals into a clear product roadmap. Collaborated with cross-functional teams to design user-centric product interfaces.",
      website: "https://www.tech9.com/",
      isPrimary: true
    },
    {
      title: "Usability Specialist",
      company: "Excellus BCBS",
      period: "Aug 2024 - Dec 2024",
      description: "Planned and implemented a usability study using six task-based scenarios across mobile and desktop platforms, utilizing four key metrics to evaluate user interactions and identify usability gaps. Conducted mixed-methods research, including user interviews, surveys, and task-based usability testing with 10 users to gather in-depth qualitative and quantitative insights.",
      website: "https://www.excellusbcbs.com/"
    },
    {
      title: "Project Lead Intern - UI/UX",
      company: "Zlato Technolabs",
      period: "Jan 2023 - May 2023",
      description: "Led UI/UX design for a social app, improving user interaction with Figma and Android Studio. Delivered high-fidelity functional prototype within three months, demonstrating innovative design solutions. Increased daily active users through focused design enhancements and user experience improvements.",
      website: "https://zlatotech.com/"
    },
    {
      title: "UI/UX Designer & Frontend Developer",
      company: "Upwork (Freelancer)",
      period: "Sept 2020 - Dec 2022",
      description: "Delivered 12+ successful projects to clients across globe, with featured work resulting in 40% increased user engagement (measured by session duration). Improved conversion rates by 25%. Led design initiatives that reached over 20K+ active users for the app."
    },
    {
      title: "Design Intern",
      company: "Laurentian University",
      period: "June 2022 - Aug 2022",
      description: "Worked on Transportation Goods Invoice App project at Laurentian University.",
      website: "https://laurentian.ca/"
    },
    {
      title: "Founding Designer & Developer",
      company: "WaahTV OTT App",
      period: "Oct 2021 - Feb 2022",
      description: "Led the end-to-end product lifecycle from concept to production, owning all design, development, and strategy for an OTT platform now serving 10K+ active users. Delivered a complete streaming solution from concept to production. Utilized Figma and Android Studio to develop user-friendly features for live streaming channels."
    }
  ];
  
  return (
    <div ref={sectionRef} className="mt-16">
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="w-6 h-6 text-emerald-500" />
        <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          Work Experience
        </h3>
      </div>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={cn(
              "relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:transition-transform hover:before:scale-150",
              exp.isPrimary 
                ? "before:bg-gradient-to-r before:from-emerald-500 before:to-teal-400" 
                : "before:bg-gradient-to-r before:from-emerald-600 before:to-teal-500",
              "opacity-0 transform translate-y-8",
              isInView && "opacity-100 translate-y-0 transition-all duration-700"
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <h4 className="text-lg font-bold">{exp.title}</h4>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-3.5 h-3.5 mr-1 text-emerald-500" />
                {exp.period}
              </div>
            </div>
            
            <div className="flex items-center mt-1 text-sm">
              <Building className="w-3.5 h-3.5 mr-1 text-emerald-500" />
              <span className="font-medium">{exp.company}</span>
              
              {exp.website && (
                <a 
                  href={exp.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center text-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 mr-1" />
                  <span className="underline text-xs">Website</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              )}
            </div>
            
            <p className="mt-2 text-muted-foreground text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
