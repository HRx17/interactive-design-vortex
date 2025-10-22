import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Download, Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  companyLogo?: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  website?: string;
}

interface StackedCardProps {
  experience: Experience;
  index: number;
  totalCards: number;
}

const StackedCard = ({ experience, index, totalCards }: StackedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isStacked, setIsStacked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const cardTop = rect.top;

      // Calculate how much the card should be scaled and positioned
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - cardTop) / (windowHeight * 0.5)));
      
      // Scale from 0.95 to 1 as it comes into view
      const newScale = 0.85 + (scrollProgress * 0.15);
      setScale(newScale);

      // Determine if card is in stacked position (top of viewport)
      setIsStacked(cardTop <= 80 + (index * 30));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [index]);

  const handleClick = () => {
    if (experience.website) {
      window.open(experience.website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      ref={cardRef}
      className="sticky"
      style={{
        top: `${80 + index * 30}px`,
        zIndex: totalCards - index,
      }}
    >
      <div
        className={cn(
          "group relative overflow-hidden rounded-3xl bg-card backdrop-blur-xl border border-border/40 p-8 transition-all duration-500",
          experience.website ? "cursor-pointer" : "cursor-default",
          "hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20"
        )}
        style={{
          transform: `scale(${scale}) translateY(${isStacked ? index * -5 : 0}px)`,
          boxShadow: isStacked 
            ? `0 ${20 + index * 5}px ${40 + index * 10}px -10px rgba(16, 185, 129, 0.15)` 
            : '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
        }}
        onClick={handleClick}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full -translate-x-20 -translate-y-20 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-emerald-500 to-teal-500 rounded-full translate-x-16 translate-y-16 blur-2xl" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              {/* Company Logo Badge */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50 p-3 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  {experience.companyLogo ? (
                    <img 
                      src={experience.companyLogo} 
                      alt={`${experience.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-emerald-400">
                      {experience.company.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-emerald-300 transition-colors duration-300">
                    {experience.title}
                  </h3>
                  <p className="text-emerald-400 font-semibold text-lg">{experience.company}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-emerald-400 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 flex-shrink-0" />
          </div>

          <p className="text-foreground/80 leading-relaxed mb-8 text-base">
            {experience.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, skillIndex) => (
              <span
                key={skill}
                className="px-4 py-2 bg-emerald-500/10 text-emerald-300 text-sm rounded-full border border-emerald-500/20 transition-all duration-300 hover:bg-emerald-500/20 hover:scale-105 hover:border-emerald-500/40"
                style={{
                  animation: `fade-in 0.5s ease-out ${skillIndex * 0.05}s both`
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-purple-500/10 blur-xl" />
        </div>
      </div>
    </div>
  );
};

export function StackedExperience() {
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

  const experiences: Experience[] = [
    {
      title: "Product Designer",
      company: "Tech9",
      companyLogo: "/logos/tech9-logo.svg?v=2",
      period: "May 2025 - Aug 2025",
      location: "Utah, USA (Remote)",
      description: "Designed user-centered solutions that increased user engagement by 35% and improved conversion rates by 25%. Worked with chief product officer (CPO) to lead design initiatives to reach client goals.",
      skills: ["Product Design", "User Research", "Prototyping", "Design Systems", "Figma"],
      website: "https://www.tech9.com/"
    },
    {
      title: "Usability Specialist",
      company: "Excellus BCBS",
      companyLogo: "/logos/excellus-logo.png",
      period: "Aug 2024 - Dec 2024",
      location: "New York, NY (Remote)",
      description: "Planned and implemented a usability study using six task-based scenarios across mobile and desktop platforms, utilizing four key metrics to evaluate user interactions and identify usability gaps. Facilitated usability testing sessions with 10 users and gathered in-depth qualitative and quantitative insights to assess their needs.",
      skills: ["Usability Testing", "User Research", "Mobile & Desktop Testing", "Qualitative Analysis", "Task Scenarios"],
      website: "https://www.excellusbcbs.com/"
    },
    {
      title: "Frontend UI/UX Project Intern",
      company: "Zlato Technolabs",
      companyLogo: "/logos/zlato-logo.png",
      period: "Jan 2023 - May 2023",
      location: "Ahmedabad, India",
      description: "Created a social media management platform for web and mobile that helps with post scheduling across different platforms like LinkedIn, Instagram, and Facebook.",
      skills: ["UI/UX Design", "Frontend Development", "React", "Social Media Integration", "Mobile Design"],
      website: "https://zlatotech.com/"
    },
    {
      title: "Founding Designer & Developer",
      company: "WaahTV OTT App",
      companyLogo: "/logos/waahtv-logo.png",
      period: "Sept 2021 - Feb 2022",
      location: "NJ, USA (Remote)",
      description: "Designed and developed an OTT Platform app for Android TV, with currently 15+ daily signups, 10+ countries covered, 10K+ active users. Delivered a complete streaming solution from concept to production.",
      skills: ["Android TV Development", "UI/UX Design", "Streaming Platform", "Freelancing", "Product Strategy"],
      website: "https://waahtv.com"
    },
    {
      title: "UI/UX Designer & Frontend Developer",
      company: "Upwork (Freelancer)",
      companyLogo: "/logos/upwork-logo.png",
      period: "Sept 2020 - Dec 2022",
      location: "Global",
      description: "Delivered 12+ successful projects to clients across globe, with featured work resulting in 40% increased user engagement (France). Improved conversion rates by 25%. Led design initiatives that reached over 20K+ active users for the app.",
      skills: ["Freelancing", "UI/UX Design", "Frontend Development", "Client Management", "Project Management"]
    }
  ];

  return (
    <section 
      id="work-experience" 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden bg-gradient-to-br from-emerald-950/20 via-background to-teal-950/10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl morph-blob" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-teal-500/5 to-purple-500/5 rounded-full blur-3xl morph-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24 text-center">
          <span className={cn(
            "text-sm font-medium px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-300 inline-block mb-6 border border-emerald-500/20",
            "opacity-0 transform transition-all duration-700",
            isInView && "opacity-100 bounce-in"
          )}>
            Professional Journey
          </span>
          
          <h2 className={cn(
            "text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 bg-clip-text text-transparent mb-6",
            "opacity-0 transform transition-all duration-700 delay-100",
            isInView && "opacity-100 slide-in-right"
          )}>
            Work Experience
          </h2>
          
          <p className={cn(
            "text-muted-foreground text-lg max-w-2xl mx-auto",
            "opacity-0 transform transition-all duration-700 delay-200",
            isInView && "opacity-100 blur-in"
          )}>
            Scroll down to see how each role stacks up in my journey
          </p>
        </div>

        {/* Stacked Cards */}
        <div className="space-y-8 pb-96">
          {experiences.map((experience, index) => (
            <StackedCard
              key={experience.company + experience.title}
              experience={experience}
              index={index}
              totalCards={experiences.length}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className={cn(
          "mt-32 text-center",
          "opacity-0 transform transition-all duration-700 delay-500",
          isInView && "opacity-100 scale-up"
        )}>
          <a 
            href="/resume.pdf"
            download
            className="btn-magnetic inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold gap-3 border border-emerald-500/30 shadow-xl hover:shadow-emerald-500/30 group"
          >
            <span className="relative z-10 flex items-center gap-3">
              Download Full Resume
              <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </a>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/6 w-8 h-8 border-2 border-emerald-400/20 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/6 w-6 h-6 border border-teal-400/20 rotate-45 float-animation" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-emerald-400/10 rounded-full float-animation" style={{animationDelay: '0.5s'}}></div>
    </section>
  );
}