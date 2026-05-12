import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Download, Calendar, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// --- DATA: Unchanged ---
const experiences = [
  {
    title: "UX Designer",
    company: "Lore",
    companyLogo: "/logos/lore-logo.svg",
    period: "April 2026 - Present",
    location: "Remote",
    description: "Designing and shipping production-ready features for a health platform that uses AI and human conversation to help users manage psychological and physical stressors. Bridging design and engineering by leveraging vibe coding to translate high-fidelity Figma prototypes directly into functional, production-ready front-end code. Collaborating cross-functionally in a fully remote, async-first environment to rapidly iterate on user-facing features aligned with product and business goals.",
    skills: ["Product Design", "Vibe Coding", "Figma", "Frontend Development", "AI-Assisted Development"],
    website: "https://lore.co/"
  },
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
];

// --- ExperienceCard Component (UPDATED with Glassmorphism) ---
const ExperienceCard = ({ title, company, companyLogo, period, location, description, skills, website, isInView, index }: any) => {
  const handleClick = () => {
    if (website) {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={cn(
        // --- THIS IS THE FIX ---
        "group relative overflow-hidden rounded-2xl p-8 transition-all duration-700",
        "bg-card/60 backdrop-blur-lg border border-border/30 shadow-xl", // Increased opacity, blur, and shadow
        "hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:scale-[1.02]",
        website ? "cursor-pointer" : "cursor-default",
        "opacity-0 transform translate-y-8",
        isInView && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${index * 650}ms` }}
      onClick={handleClick}
    >
      {/* ... Card content (unchanged) ... */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-card/80 backdrop-blur-sm flex items-center justify-center border border-border/30 p-2 shadow-lg">
                {companyLogo ? (
                  <img src={companyLogo} alt={`${company} logo`} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-xl font-bold text-primary">{company.charAt(0)}</span>
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-primary font-medium">{company}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
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
          {website && (
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
          )}
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill: string, skillIndex: number) => (
            <span
              key={skill}
              className={cn(
                "px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20",
                "opacity-0 translate-y-2",
                isInView && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


// --- Main WorkExperience Component (or DiagonalLayout) ---
export function DiagonalLayout({ className }: { className?: string }) { // Or WorkExperience, matching your file name
  const [activeCompany, setActiveCompany] = useState(experiences[0].company);
  const { ref: sectionRef, inView: sectionInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const activeIndex = experiences.findIndex(exp => exp.company === activeCompany);
  // Use a percentage-based progress so the bar never overflows the container.
  const progressPercent = experiences.length > 1 ? (activeIndex / (experiences.length - 1)) * 100 : 0;

  return (
    // This section is now 'bg-background' (white)
    <section
      id="work-experience"
      ref={sectionRef}
      className={cn("relative bg-background", className)}
    >
      <div className="section-container">

        {/* Header - Unchanged */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className={cn(
            "text-sm font-medium px-3 py-1 rounded-full bg-secondary text-primary inline-block mb-4",
            "opacity-0 transform transition-all duration-700",
            sectionInView && "opacity-100 bounce-in"
          )}>
            Professional Journey
          </span>
          <h2 className={cn(
            "heading text-foreground",
            "opacity-0 transform transition-all duration-700 delay-100",
            sectionInView && "opacity-100 slide-in-right"
          )}>
            Work Experience
          </h2>
          <p className={cn(
            "text-muted-foreground mt-4 max-w-xl mx-auto",
            "opacity-0 transform transition-all duration-700 delay-200",
            sectionInView && "opacity-100 blur-in"
          )}>
            My professional journey in design and technology, working with diverse teams and innovative projects.
          </p>
        </div>

        {/* --- 2-Column Sticky Layout (Unchanged) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">

          {/* 1. LEFT COLUMN (Sticky List) */}
          <div className="lg:col-span-1 lg:sticky top-24 h-fit hidden lg:block">
            <div className="relative">
              <div className="absolute left-[7px] top-[0.875rem] bottom-[0.875rem] w-0.5 bg-border -z-10" />
              <div
                className="absolute left-[7px] top-[0.875rem] bottom-[0.875rem] w-0.5 bg-primary transition-transform duration-300 ease-out origin-top"
                style={{ transform: `scaleY(${progressPercent / 100})` }}
              />
              <ul className="relative flex flex-col gap-0">
                {experiences.map((exp) => (
                  <li key={exp.company} className="relative flex items-center gap-4">
                    <div className={cn(
                      "w-4 h-4 rounded-full border-4 z-10 transition-all duration-300",
                      activeCompany === exp.company
                        ? "bg-primary border-background"
                        : "bg-border border-background"
                    )} />
                    <a
                      href={`#exp-${exp.company.replace(/\s+/g, '-')}`}
                      onClick={() => setActiveCompany(exp.company)}
                      className={cn(
                        "flex-1 p-2 my-0.5 rounded-md transition-all duration-300 flex items-center gap-3",
                        activeCompany === exp.company
                          ? "bg-secondary text-primary font-bold shadow-lg shadow-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      )}
                    >
                      <img
                        src={exp.companyLogo}
                        alt={exp.company}
                        className="w-6 h-6 object-contain"
                      />
                      <span>{exp.company}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. RIGHT COLUMN (Scrolling Cards) */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <InViewTrigger
                key={exp.company}
                company={exp.company}
                setActiveCompany={setActiveCompany}
              >
                <ExperienceCard
                  {...exp}
                  index={index}
                  isInView={sectionInView}
                />
              </InViewTrigger>
            ))}
          </div>
        </div>

        {/* Call to Action - Unchanged */}
        <div className={cn(
          "mt-16 text-center",
          "opacity-0 transform transition-all duration-700 delay-600",
          sectionInView && "opacity-100 scale-up"
        )}>
          <a
            href="/resume.pdf"
            download
            className="btn-magnetic inline-flex items-center px-8 py-4 rounded-lg bg-foreground text-background font-semibold gap-2 shadow-lg hover:bg-foreground/90 transition-all group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Download Full Resume
              <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

// --- Helper Component (Unchanged) ---
function InViewTrigger({ children, company, setActiveCompany }: any) {
  const { ref, inView } = useInView({
    // Use a central root margin so the element that crosses the center of the viewport
    // becomes "in view". This helps focus the company that's near the screen center.
    threshold: 0,
    rootMargin: '-50% 0px -50% 0px',
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setActiveCompany(company);
    }
  }, [inView, company, setActiveCompany]);

  return (
    <div ref={ref} id={`exp-${company.replace(/\s+/g, '-')}`}>
      {children}
    </div>
  );
}