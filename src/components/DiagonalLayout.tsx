import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Download, Calendar, MapPin } from 'lucide-react';

interface DiagonalCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  index: number;
  isInView: boolean;
}

const DiagonalCard = ({ title, company, period, location, description, skills, index, isInView }: DiagonalCardProps) => (
  <div
    className={cn(
      "group relative overflow-hidden rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 p-8 transition-all duration-700 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/30 cursor-pointer",
      "opacity-0 transform rotate-2 translate-y-8",
      isInView && "opacity-100 rotate-0 translate-y-0"
    )}
    style={{ 
      transitionDelay: `${index * 200}ms`,
      transform: isInView ? 'rotate(0deg) translateY(0)' : `rotate(${index % 2 === 0 ? '2deg' : '-2deg'}) translateY(32px)`
    }}
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full -translate-x-16 -translate-y-16" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-emerald-500 to-teal-500 rounded-full translate-x-12 translate-y-12" />
    </div>

    {/* Content */}
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold mb-1 group-hover:text-emerald-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-emerald-400 font-medium mb-2">{company}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{location}</span>
            </div>
          </div>
        </div>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
      </div>

      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <span
            key={skill}
            className={cn(
              "px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full border border-emerald-500/20 transition-all duration-300",
              "opacity-0 translate-y-2",
              isInView && "opacity-100 translate-y-0"
            )}
            style={{ transitionDelay: `${(index * 200) + (skillIndex * 50)}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Hover gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
);

export function DiagonalLayout() {
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

  const experiences = [
    {
      title: "UX Designer",
      company: "Tech Startup",
      period: "2024 - Present",
      location: "Remote",
      description: "Leading user experience design for a cutting-edge fintech platform, conducting user research, creating wireframes and prototypes, and collaborating with cross-functional teams to deliver intuitive digital solutions.",
      skills: ["User Research", "Prototyping", "Figma", "Design Systems", "A/B Testing"]
    },
    {
      title: "Product Design Intern",
      company: "Innovation Lab",
      period: "Summer 2024",
      location: "Rochester, NY",
      description: "Worked on multiple product initiatives, from concept to delivery. Designed mobile-first experiences and contributed to the company's design system while learning agile methodologies.",
      skills: ["Mobile Design", "Design Systems", "Agile", "Stakeholder Management", "User Testing"]
    },
    {
      title: "Freelance Designer",
      company: "Self-Employed",
      period: "2023 - 2024",
      location: "Global",
      description: "Provided UI/UX design services for various clients including startups and small businesses. Specialized in creating compelling digital experiences and brand identities.",
      skills: ["Client Management", "Brand Design", "Web Design", "Consultation", "Project Management"]
    }
  ];

  return (
    <section id="work-experience" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className={cn(
            "text-sm font-medium px-3 py-1 rounded-full bg-secondary text-primary inline-block mb-4",
            "opacity-0 transform translate-y-6 transition-all duration-700",
            isInView && "opacity-100 translate-y-0"
          )}>
            Professional Journey
          </span>
          
          <h2 className={cn(
            "heading bg-gradient-to-r from-emerald-700 to-teal-500 bg-clip-text text-transparent",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-100",
            isInView && "opacity-100 translate-y-0"
          )}>
            Work Experience
          </h2>
          
          <p className={cn(
            "text-muted-foreground mt-4 max-w-xl mx-auto",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-200",
            isInView && "opacity-100 translate-y-0"
          )}>
            My professional journey in design and technology, working with diverse teams and innovative projects.
          </p>
        </div>

        {/* Diagonal Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.title + exp.company}
              className={cn(
                index % 2 === 0 ? "lg:mt-0" : "lg:mt-12"
              )}
            >
              <DiagonalCard
                {...exp}
                index={index}
                isInView={isInView}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={cn(
          "mt-16 text-center",
          "opacity-0 transform translate-y-6 transition-all duration-700 delay-600",
          isInView && "opacity-100 translate-y-0"
        )}>
          <a 
            href="/resume.pdf"
            download
            className="btn-magnetic inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium gap-2 border border-emerald-500/30 shadow-lg hover:shadow-emerald-500/25 group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Download Full Resume
              <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
            </span>
          </a>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-gradient-to-r from-emerald-600/10 to-transparent rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-l from-teal-500/10 to-transparent rounded-full filter blur-3xl opacity-30" />
    </section>
  );
}