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
      title: "Product Designer",
      company: "Tech9",
      period: "May 2025 - Aug 2025",
      description: "Designed user-centered solutions that increased user engagement by 35% and improved conversion rates by 25%. Worked with chief product officer (CPO) to lead design initiatives to reach client goals.",
      website: "https://www.tech9.com/",
      isPrimary: true
    },
    {
      title: "Frontend UI/UX Project Intern",
      company: "Zlato Technolabs",
      period: "Jan 2023 - May 2023",
      description: "Built a comprehensive social media management platform that automated post scheduling for 500+ businesses, reducing their content management time by 60% and increasing social media reach by 40%.",
      website: "https://zlatotech.com/"
    },
    {
      title: "Founding Designer & Developer",
      company: "WaahTV OTT App",
      period: "Sept 2021 - Feb 2022",
      description: "Architected and launched an Android TV OTT platform that achieved 10K+ downloads within 3 months and maintained a 4.2-star rating. Delivered a complete streaming solution from concept to production."
    },
    {
      title: "UI/UX Designer & Frontend Developer",
      company: "Upwork (Freelancer)",
      period: "Sept 2020 - Dec 2022",
      description: "Delivered 12+ successful projects to clients across globe, with featured work resulting in 40% increased user engagement (France). Improved conversion rates by 25%. Led design initiatives that reached over 20K+ active users for the app."
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
