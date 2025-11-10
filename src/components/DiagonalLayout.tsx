import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Download, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';

interface DiagonalCardProps {
  title: string;
  company: string;
  companyLogo?: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  website?: string;
  index: number;
  isInView: boolean;
}

const DiagonalCard = ({ title, company, companyLogo, period, location, description, skills, website, index, isInView }: DiagonalCardProps) => {
  const handleClick = () => {
    if (website) {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 p-8 transition-all duration-700 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/30 hover:scale-[1.02]",
        website ? "cursor-pointer" : "cursor-default",
        "opacity-0 transform rotate-2 translate-y-8",
        isInView && "opacity-100 rotate-0 translate-y-0"
      )}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        transform: isInView ? 'rotate(0deg) translateY(0)' : `rotate(${index % 2 === 0 ? '2deg' : '-2deg'}) translateY(32px)`
      }}
      onClick={handleClick}
    >
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-0 w-32 h-32 bg-muted rounded-full -translate-x-16 -translate-y-16" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-muted rounded-full translate-x-12 translate-y-12" />
    </div>

    {/* Content */}
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          {/* Company Logo Badge */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-card/80 backdrop-blur-sm flex items-center justify-center border border-border/30 p-2 shadow-lg">
              {companyLogo ? (
                <img 
                  src={companyLogo} 
                  alt={`${company} logo`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-xl font-bold text-accent">
                  {company.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                {title}
              </h3>
              <p className="text-accent font-medium">{company}</p>
            </div>
          </div>
          
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
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
      </div>

      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <span
            key={skill}
            className={cn(
              "px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20 transition-all duration-300",
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
};

export function DiagonalLayout() {
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const parallaxOffset = useParallax(0.5);

  const experiences = [
    {
      title: "Product Designer",
      company: "Tech9",
      companyLogo: "/logos/tech9-logo.svg?v=2",
      period: "May 2025 - Aug 2025",
      location: "Utah, USA (Remote)",
      description: "Designed user-centered solutions that increased user engagement (measured by Daily Active Users) by 35% and improved conversion rates (from free to paid) by 25%. Partnered directly with the CPO to own and lead design initiatives, translating client business goals into a clear product roadmap. Collaborated with cross-functional teams to design user-centric product interfaces.",
      skills: ["Product Design", "User Research", "Prototyping", "Design Systems", "Figma"],
      website: "https://www.tech9.com/"
    },
    {
      title: "Usability Specialist",
      company: "Excellus BCBS",
      companyLogo: "/logos/excellus-logo.png",
      period: "Aug 2024 - Dec 2024",
      location: "New York, NY (Remote)",
      description: "Planned and implemented a usability study using six task-based scenarios across mobile and desktop platforms, utilizing four key metrics to evaluate user interactions and identify usability gaps. Conducted mixed-methods research, including user interviews, surveys, and task-based usability testing with 10 users to gather in-depth qualitative and quantitative insights.",
      skills: ["Usability Testing", "User Research", "Mobile & Desktop Testing", "Qualitative Analysis", "Task Scenarios"],
      website: "https://www.excellusbcbs.com/"
    },
    {
      title: "Project Lead Intern - UI/UX",
      company: "Zlato Technolabs",
      companyLogo: "/logos/zlato-logo.png",
      period: "Jan 2023 - May 2023",
      location: "Ahmedabad, India",
      description: "Led UI/UX design for a social app, improving user interaction with Figma and Android Studio. Delivered high-fidelity functional prototype within three months, demonstrating innovative design solutions. Increased daily active users through focused design enhancements and user experience improvements.",
      skills: ["UI/UX Design", "Frontend Development", "Figma", "Android Studio", "Prototyping"],
      website: "https://zlatotech.com/"
    },
    {
      title: "Design Intern",
      company: "Laurentian University",
      companyLogo: "/logos/Laurentian_University.png",
      period: "June 2022 - Aug 2022",
      location: "Greater Sudbury, Canada",
      description: "Worked on Transportation Goods Invoice App project at Laurentian University.",
      skills: ["UI/UX Design", "Mobile Development", "Invoice Systems", "Transportation"],
      website: "https://laurentian.ca/"
    },
    {
      title: "Founding Designer & Developer",
      company: "WaahTV OTT App",
      companyLogo: "/logos/waahtv-logo.png",
      period: "Oct 2021 - Feb 2022",
      location: "NJ, USA (Remote)",
      description: "Led the end-to-end product lifecycle from concept to production, owning all design, development, and strategy for an OTT platform now serving 10K+ active users. Delivered a complete streaming solution from concept to production. Utilized Figma and Android Studio to develop user-friendly features for live streaming channels.",
      skills: ["Android TV Development", "UI/UX Design", "Streaming Platform", "Product Strategy", "Figma"],
      website: "https://waahtv.com"
    },
    {
      title: "UI/UX Designer & Frontend Developer",
      company: "Upwork (Freelancer)",
      companyLogo: "/logos/upwork-logo.png",
      period: "Sept 2020 - Dec 2022",
      location: "Global",
      description: "Delivered 12+ successful projects to clients across globe, with featured work resulting in 40% increased user engagement (measured by session duration). Improved conversion rates by 25%. Led design initiatives that reached over 20K+ active users for the app.",
      skills: ["Freelancing", "UI/UX Design", "Frontend Development", "Client Management", "Project Management"]
    }
  ];

  return (
    <section id="work-experience" ref={sectionRef} className="py-12 relative overflow-hidden bg-gradient-to-br from-emerald-950/20 to-teal-950/10">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className={cn(
            "text-sm font-medium px-3 py-1 rounded-full bg-secondary text-primary inline-block mb-4",
            "opacity-0 transform transition-all duration-700",
            isInView && "opacity-100 bounce-in"
          )}>
            Professional Journey
          </span>
          
          <h2 className={cn(
            "heading bg-gradient-to-r from-emerald-700 to-teal-500 bg-clip-text text-transparent",
            "opacity-0 transform transition-all duration-700 delay-100",
            isInView && "opacity-100 slide-in-right"
          )}>
            Work Experience
          </h2>
          
          <p className={cn(
            "text-muted-foreground mt-4 max-w-xl mx-auto",
            "opacity-0 transform transition-all duration-700 delay-200",
            isInView && "opacity-100 blur-in"
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
          "opacity-0 transform transition-all duration-700 delay-600",
          isInView && "opacity-100 scale-up"
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

      {/* Background Elements with parallax and morphing */}
      <div 
        className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-gradient-to-r from-emerald-600/10 to-transparent rounded-full filter blur-3xl opacity-30 morph-blob"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div 
        className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-l from-teal-500/10 to-transparent rounded-full filter blur-3xl opacity-30 morph-blob" 
        style={{ 
          animationDelay: '4s',
          transform: `translateY(${-parallaxOffset * 0.7}px)` 
        }}
      />
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/3 right-1/4 w-6 h-6 border-2 border-emerald-400/30 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/5 w-8 h-8 border border-teal-400/30 rotate-45 float-animation" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-emerald-400/20 rounded-full float-animation" style={{animationDelay: '0.5s'}}></div>
    </section>
  );
}