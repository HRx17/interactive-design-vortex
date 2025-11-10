import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Download, Calendar, MapPin } from "lucide-react";
// We'll need to useIntersectionObserver for the sticky logic
// If you don't have this hook, you can install: npm install react-intersection-observer
// Or I can provide the hook code. Let's assume you can add it.
import { useInView } from "react-intersection-observer";

// --- DATA: Copied directly from your file ---
const experiences = [
  {
    title: "Product Designer",
    company: "Tech9",
    companyLogo: "/logos/tech9-logo.svg?v=2",
    period: "May 2025 - Aug 2025",
    location: "Utah, USA (Remote)",
    description:
      "Designed user-centered solutions that increased user engagement (measured by Daily Active Users) by 35% and improved conversion rates (from free to paid) by 25%. Partnered directly with the CPO to own and lead design initiatives, translating client business goals into a clear product roadmap. Collaborated with cross-functional teams to design user-centric product interfaces.",
    skills: ["Product Design", "User Research", "Prototyping", "Design Systems", "Figma"],
    website: "https://www.tech9.com/",
  },
  {
    title: "Usability Specialist",
    company: "Excellus BCBS",
    companyLogo: "/logos/excellus-logo.png",
    period: "Aug 2024 - Dec 2024",
    location: "New York, NY (Remote)",
    description:
      "Planned and implemented a usability study using six task-based scenarios across mobile and desktop platforms, utilizing four key metrics to evaluate user interactions and identify usability gaps. Conducted mixed-methods research, including user interviews, surveys, and task-based usability testing with 10 users to gather in-depth qualitative and quantitative insights.",
    skills: [
      "Usability Testing",
      "User Research",
      "Mobile & Desktop Testing",
      "Qualitative Analysis",
      "Task Scenarios",
    ],
    website: "https://www.excellusbcbs.com/",
  },
  {
    title: "Founding Designer & Developer",
    company: "WaahTV OTT App",
    companyLogo: "/logos/waahtv-logo.png",
    period: "Oct 2021 - Feb 2022",
    location: "NJ, USA (Remote)",
    description:
      "Led the end-to-end product lifecycle from concept to production, owning all design, development, and strategy for an OTT platform now serving 10K+ active users. Delivered a complete streaming solution from concept to production. Utilized Figma and Android Studio to develop user-friendly features for live streaming channels.",
    skills: ["Android TV Development", "UI/UX Design", "Streaming Platform", "Product Strategy", "Figma"],
    website: "https://waahtv.com",
  },
  {
    title: "UI/UX Designer & Frontend Developer",
    company: "Upwork (Freelancer)",
    companyLogo: "/logos/upwork-logo.png",
    period: "Sept 2020 - Dec 2022",
    location: "Global",
    description:
      "Delivered 12+ successful projects to clients across globe, with featured work resulting in 40% increased user engagement (measured by session duration). Improved conversion rates by 25%. Led design initiatives that reached over 20K+ active users for the app.",
    skills: ["Freelancing", "UI/UX Design", "Frontend Development", "Client Management", "Project Management"],
  },
  {
    title: "Project Lead Intern - UI/UX",
    company: "Zlato Technolabs",
    companyLogo: "/logos/zlato-logo.png",
    period: "Jan 2023 - May 2023",
    location: "Ahmedabad, India",
    description:
      "Led UI/UX design for a social app, improving user interaction with Figma and Android Studio. Delivered high-fidelity functional prototype within three months, demonstrating innovative design solutions. Increased daily active users through focused design enhancements and user experience improvements.",
    skills: ["UI/UX Design", "Frontend Development", "Figma", "Android Studio", "Prototyping"],
    website: "https://zlatotech.com/",
  },
  {
    title: "Design Intern",
    company: "Laurentian University",
    companyLogo: "/logos/Laurentian_University.png",
    period: "June 2022 - Aug 2022",
    location: "Greater Sudbury, Canada",
    description: "Worked on Transportation Goods Invoice App project at Laurentian University.",
    skills: ["UI/UX Design", "Mobile Development", "Invoice Systems", "Transportation"],
    website: "https://laurentian.ca/",
  },
];

// --- NEW ExperienceCard Component ---
// This is your old 'DiagonalCard', but adapted for the new layout.
// I kept all your great styling.
const ExperienceCard = ({
  title,
  company,
  companyLogo,
  period,
  location,
  description,
  skills,
  website,
  isInView,
  index,
}: any) => {
  const handleClick = () => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 p-8 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:scale-[1.02]",
        website ? "cursor-pointer" : "cursor-default",
        // Kept your fade-in animation
        "opacity-0 transform translate-y-8",
        isInView && "opacity-100 translate-y-0",
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
      onClick={handleClick}
    >
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
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{title}</h3>
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

        <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill: string, skillIndex: number) => (
            <span
              key={skill}
              className={cn(
                "px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20",
                "opacity-0 translate-y-2",
                isInView && "opacity-100 translate-y-0",
              )}
              style={{ transitionDelay: `${index * 150 + skillIndex * 50}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- NEW WorkExperience Component ---
export function WorkExperience() {
  // State to track which company is currently visible
  const [activeCompany, setActiveCompany] = useState(experiences[0].company);

  // This ref is for the whole section's "fade-in"
  const { ref: sectionRef, inView: sectionInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    // This is the full-width wrapper. We use 'bg-background' to contrast the 'bg-secondary' of the Metrics.
    <section id="work-experience" ref={sectionRef} className="relative overflow-hidden bg-background">
      <div className="section-container">
        {/* Header - Reusing your existing animated header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span
            className={cn(
              "text-sm font-medium px-3 py-1 rounded-full bg-secondary text-primary inline-block mb-4",
              "opacity-0 transform transition-all duration-700",
              sectionInView && "opacity-100 bounce-in",
            )}
          >
            Professional Journey
          </span>
          <h2
            className={cn(
              "heading text-foreground",
              "opacity-0 transform transition-all duration-700 delay-100",
              sectionInView && "opacity-100 slide-in-right",
            )}
          >
            Work Experience
          </h2>
          <p
            className={cn(
              "text-muted-foreground mt-4 max-w-xl mx-auto",
              "opacity-0 transform transition-all duration-700 delay-200",
              sectionInView && "opacity-100 blur-in",
            )}
          >
            My professional journey in design and technology, working with diverse teams and innovative projects.
          </p>
        </div>

        {/* --- NEW 2-Column Sticky Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* 1. LEFT COLUMN (Sticky List) */}
          <div className="lg:col-span-1 lg:sticky top-24 h-fit hidden lg:block">
            <ul className="flex flex-col gap-2">
              {experiences.map((exp) => (
                <li key={exp.company}>
                  <a
                    href={`#exp-${exp.company.replace(/\s+/g, "-")}`} // Create a link to the card
                    onClick={() => setActiveCompany(exp.company)} // Also set active on click
                    className={cn(
                      "flex items-center gap-3 p-4 rounded-lg transition-all duration-300",
                      activeCompany === exp.company
                        ? "bg-primary/10 text-primary font-bold shadow-lg shadow-primary/10" // Active state
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50", // Inactive state
                    )}
                  >
                    <img src={exp.companyLogo} alt={exp.company} className="w-6 h-6 object-contain" />
                    <span>{exp.company}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. RIGHT COLUMN (Scrolling Cards) */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            {experiences.map((exp, index) => (
              // This 'useInView' hook is what powers the sticky highlighting
              <InViewTrigger key={exp.company} company={exp.company} setActiveCompany={setActiveCompany}>
                <ExperienceCard {...exp} index={index} isInView={sectionInView} />
              </InViewTrigger>
            ))}
          </div>
        </div>

        {/* Call to Action - Reusing your existing CTA */}
        <div
          className={cn(
            "mt-16 text-center",
            "opacity-0 transform transition-all duration-700 delay-600",
            sectionInView && "opacity-100 scale-up",
          )}
        >
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

// --- NEW Helper Component for Intersection Observer ---
// This component wraps each card and tells the parent when it's in view.
function InViewTrigger({ children, company, setActiveCompany }: any) {
  const { ref, inView } = useInView({
    threshold: 0.5, // Triggers when 50% of the card is visible
    triggerOnce: false, // We want this to update continuously
  });

  useEffect(() => {
    if (inView) {
      setActiveCompany(company);
    }
  }, [inView, company, setActiveCompany]);

  return (
    <div ref={ref} id={`exp-${company.replace(/\s+/g, "-")}`}>
      {children}
    </div>
  );
}
