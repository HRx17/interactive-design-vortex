import React, { useState, useEffect, useRef } from 'react';
import { ResearchCard } from '@/components/ResearchCard';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Github, Layout, PlusCircle, Quote } from 'lucide-react'; // Added Quote
import { ProjectTypeSwitcher } from './ProjectTypeSwitcher';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

// --- Re-importing your project components for the "More Work" grid ---
import { HealthyRProject } from './HealthyRProject';
import { FoodZapProject } from './FoodZapProject';
import { WeatherAppProject } from './WeatherAppProject';
import { ParkingAppProject } from './ParkingAppProject';
import { AttendanceProject } from './AttendanceProject';
import { UpcomingProject } from './UpcomingProject';

// --- We must import the local image, just like your old file did ---
import uxprobeThumbnail from '@/assets/uxprobe-thumbnail.jpg';
import corkboardImage from '@/assets/corkboard.jpg';

// --- 1. FEATURED PROJECTS DATA (Unchanged) ---
const featuredProjects = [
  {
    type: 'design',
    id: 'uxprobe',
    title: 'UXProbe',
    description: 'AI-powered platform automating UX heuristic evaluation with comprehensive research tools...',
    imageUrl: uxprobeThumbnail,
    placeholder: null,
    tags: ["Full-Stack App", "AI-Powered", "Next.js", "Figma", "UX Design"],
    links: [
      { label: 'View Case Study', url: '/projects/uxprobe', isInternal: true },
    ],
  },
  {
    type: 'design',
    id: 'rit-shiftmate',
    title: 'RIT ShiftMate',
    description: 'An on-campus shift coordinator and work-hour manager designed to streamline scheduling...',
    imageUrl: "/lovable-uploads/RIT1.png",
    placeholder: null,
    tags: ["UX/UI Design", "Figma", "Management", "Mobile App"],
    links: [
      { label: 'View Case Study', url: '/projects/rit-shiftmate', isInternal: true },
      { label: 'View Prototype', url: 'https://www.figma.com/proto/MhsMW3UV2T1ukHbvmA8S7W/Presentation---Final-Project-ShiftMate?page-id=0%3A1&node-id=133-637&viewport=1012%2C566%2C0.06&t=0iDmAFgme4i2rAGn-1&scaling=contain&content-scaling=fixed&starting-point-node-id=133%3A637&show-proto-sidebar=1', isInternal: false },
    ],
  },
  {
    type: 'design',
    id: 'ar-concept',
    title: 'Mixed Reality Concept',
    description: 'A futuristic holographic interaction design for mixed reality, exploring how users can visualize...',
    imageUrl: "/lovable-uploads/h1.png",
    placeholder: null,
    tags: ["AR/VR Design", "3D Design", "Figma", "Blender"],
    links: [
      { label: 'View Case Study', url: '/projects/ar-vr', isInternal: true },
    ],
  },
  {
    type: 'coding',
    id: 'waahtv',
    title: 'WaahTV OTT App',
    description: 'Led the end-to-end product lifecycle from concept to production, owning all design and development...',
    imageUrl: null,
    placeholder: (
      <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center aspect-[16/10]">
        <div className="text-center p-8 text-white">
          <div className="text-6xl mb-4">📺</div>
          <h4 className="text-2xl font-bold">WaahTv</h4>
        </div>
      </div>
    ),
    tags: ["Android TV", "Java", "UI/UX Design", "Product Strategy", "Figma"],
    links: [
      { label: 'View Website', url: 'https://waahtv.com', isInternal: false },
    ],
  },
  {
    type: 'coding',
    id: 'post-scheduler',
    title: 'Social Media Post Scheduler',
    description: 'A content management and scheduling application for social media posts...',
    imageUrl: null,
    placeholder: (
      <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center aspect-[16/10]">
        <div className="text-center p-8 text-white">
          <div className="text-6xl mb-4">📅</div>
          <h4 className="text-2xl font-bold">Post Scheduler</h4>
        </div>
      </div>
    ),
    tags: ["Full-Stack", "React", "Node.js", "MongoDB", "MERN"],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/HRx17/Post-Scheduler', isInternal: false },
    ],
  },
];

// --- 2. SECONDARY PROJECTS DATA (Unchanged) ---
const secondaryDesignProjects = [
  { id: 'healthyr', component: <HealthyRProject key="healthyR" index={0} /> },
  { id: 'parkease', component: <ParkingAppProject key="parkingApp" index={1} /> },
  { id: 'foodzap', component: <FoodZapProject key="foodzap" index={2} /> },
  { id: 'weather', component: <WeatherAppProject key="weatherApp" index={3} /> },
  { id: 'upcoming', component: <UpcomingProject key="upcoming" index={4} /> },
];
const secondaryCodingProjects = [
  { id: 'attendance', component: <AttendanceProject key="attendance" index={0} /> },
];

// --- 3. RESEARCH PROJECTS DATA (Unchanged) ---
const researchProjects = [
  {
    title: "The Impact of Situationally Induced Impairments and Disabilities (SIIDs) on Task Performance",
    description: "A comparative experimental investigation...",
    year: "2024",
    downloadFile: "/SIID_Research.pdf",
  },
  {
    title: "Experimental Research on MyCourses Platform",
    description: "An investigation into the challenges faced by international and American students at RIT...",
    year: "2024",
    downloadFile: "/Experimental_Research.pdf",
  },
  {
    title: "PlayStation Gaming Behaviors: Age Groups and Genre Preferences",
    description: "An empirical study investigating the correlation between PlayStation users' age groups...",
    year: "2024",
    downloadFile: "/Research_Gaming.pdf",
  }
];

// --- 4. ENDORSEMENTS DATA (Moved from Endorsements.tsx) ---
const endorsements = [
  {
    name: "Matt Beynon",
    title: "Chief Product Officer, Tech9",
    quote: "Haet demonstrated exceptional qualities... approaching every project and task with enthusiasm and determination.",
    rotation: "lg:-rotate-1" // Subtle rotation
  },
  {
    name: "WaahTV Founder",
    title: "Founder & CEO, WaahTV",
    quote: "Working with Haet was an absolute pleasure. His deep understanding of UX principles and ability to translate our vision into intuitive designs exceeded our expectations.",
    rotation: "lg:rotate-1" // Opposite rotation
  }
];

// --- 5. Alternating Project Card Component (Unchanged) ---
interface ProjectCardProps {
  project: (typeof featuredProjects)[0];
  index: number;
  isInView: boolean;
}
const ProjectCard = ({ project, index, isInView }: ProjectCardProps) => {
  const isEven = index % 2 === 0;
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center", "opacity-0 transform translate-y-12", isInView && "opacity-100 translate-y-0")} style={{ transitionDelay: `${index * 150}ms` }}>
      <div className={cn("rounded-xl overflow-hidden shadow-lg bg-card/40 border border-border/10", "transition-all duration-300 hover:shadow-primary/20 hover:scale-[1.02]", isEven ? "md:order-1" : "md:order-2")}>
        {project.imageUrl ? (
          <img src={project.imageUrl as string} alt={project.title} className="w-full h-full object-cover aspect-[16/10]" />
        ) : (
          <div className="w-full h-full object-cover aspect-[16/10]">{project.placeholder}</div>
        )}
      </div>
      <div className={cn("flex flex-col", isEven ? "md:order-2" : "md:order-1")}>
        <span className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">{project.type === 'design' ? 'UI/UX Design' : 'Full-Stack Development'}</span>
        <h3 className="text-3xl font-bold text-foreground mb-4">{project.title}</h3>
        <p className="text-muted-foreground text-lg mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-background text-muted-foreground text-xs font-medium rounded-full border border-border">{tag}</span>
          ))}
        </div>
        <div className="flex flex-row gap-4">
          {project.links.map(link => (
            link.isInternal ? (
              <Link key={link.label} to={link.url} className="inline-flex items-center px-6 py-3 bg-foreground text-background font-semibold rounded-lg transition-all duration-300 hover:bg-foreground/90 shadow-sm hover:shadow-md gap-2">
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-foreground text-background font-semibold rounded-lg transition-all duration-300 hover:bg-foreground/90 shadow-sm hover:shadow-md gap-2">
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 6. NEW "PINBOARD" CARD COMPONENTS ---
const Thumbtack = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20" >
    <div className="w-5 h-5 rounded-full bg-red-500 shadow-lg border-2 border-red-700/50">
      <div className="absolute inset-0.5 rounded-full"></div>
    </div>
  </div>
);

const MinimalEndorsementCard = ({ endorsement }: { endorsement: (typeof endorsements)[0] }) => {
  return (
    <div className={cn(
      "relative flex flex-col items-start gap-4 p-6 rounded-xl h-full",
      // --- This is the "Pinned Note" style ---
      "bg-card border border-border/40 shadow-xl", // "Paper" style
      "transition-all duration-300 hover:shadow-2xl",
      endorsement.rotation // Applies the -rotate-1 or rotate-1
    )}>
      <Thumbtack />
      <Quote className="w-10 h-10 text-primary/40" />
      <blockquote className="text-md leading-relaxed text-foreground/90 italic">
        "{endorsement.quote}"
      </blockquote>
      <div className="mt-auto">
        <p className="font-bold text-foreground">{endorsement.name}</p>
        <p className="text-sm text-muted-foreground">{endorsement.title}</p>
      </div>
    </div>
  );
};


// --- 7. MAIN PROJECTS COMPONENT (Updated) ---
export function Projects() {
  const { ref: sectionRef, inView: isInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeProjectType, setActiveProjectType] = useState<'design' | 'coding' | 'research'>('design');

  const activeProjects = featuredProjects.filter(p => p.type === activeProjectType);

  return (
    // --- FIX: Section is now 'bg-secondary' (light gray), no image ---
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-16 md:py-24 relative bg-secondary border-t border-border"
    >
      <div className="section-container">
        
        {/* Header Title (Unchanged) */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          {/* ... (title, subtitle... unchanged) ... */}
          <span className={cn("text-sm font-medium px-3 py-1 rounded-full bg-background text-primary inline-block mb-4", "opacity-0 transform translate-y-6 transition-all duration-700", isInView && "opacity-100 translate-y-0")}>
            Featured Work
          </span>
          <h2 className={cn("heading text-foreground", "opacity-0 transform translate-y-6 transition-all duration-700 delay-100", isInView && "opacity-100 translate-y-0")}>
            Recent Projects
          </h2>
          <p className={cn("text-muted-foreground mt-4 max-w-xl mx-auto", "opacity-0 transform translate-y-6 transition-all duration-700 delay-200", isInView && "opacity-100 translate-y-0")}>
            {activeProjectType === 'research' 
              ? "Academic research projects exploring UX principles, user behavior, and experimental studies."
              : activeProjectType === 'design'
              ? "UI/UX design projects focusing on user-centered solutions and innovative digital experiences."
              : "Full-stack applications showcasing technical implementation and coding skills."
            }
          </p>
        </div>
        
        {/* Project Type Switcher (Unchanged) */}
        <div className={cn("opacity-0 transform translate-y-6 transition-all duration-700 delay-300", isInView && "opacity-100 translate-y-0")}>
          <ProjectTypeSwitcher 
            activeType={activeProjectType} 
            onTypeChange={setActiveProjectType}
          />
        </div>
        
        {/* --- RENDER LOGIC (Unchanged) --- */}
        <div className="mt-16">
          {/* ... (All your project rendering logic is unchanged) ... */}
          {activeProjectType === 'research' && (
            <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", "opacity-0 transform transition-all duration-500", isInView && "opacity-100")}>
              {researchProjects.map((project, index) => (
                <ResearchCard key={project.title} {...project} delay={100 + index * 100} isInView={isInView} />
              ))}
            </div>
          )}
          {activeProjectType === 'design' && (
            <div className="flex flex-col gap-16 md:gap-24">
              {activeProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
              ))}
              <h3 className={cn("text-2xl font-bold text-center text-foreground pt-12 border-t border-border", "opacity-0 transform transition-all duration-700 delay-400", isInView && "opacity-100")}>
                More Design Work
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {secondaryDesignProjects.map((project, index) => (
                  <div key={project.id} className="opacity-0 transform translate-y-8" style={{ animation: `fade-slide 0.5s ease-out ${index * 100}ms forwards` }}>
                    {project.component}
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeProjectType === 'coding' && (
            <div className="flex flex-col gap-16 md:gap-24">
              {activeProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
              ))}
              <h3 className={cn("text-2xl font-bold text-center text-foreground pt-12 border-t border-border", "opacity-0 transform transition-all duration-700 delay-400", isInView && "opacity-100")}>
                More Coding Work
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {secondaryCodingProjects.map((project, index) => (
                  <div key={project.id} className="opacity-0 transform translate-y-8" style={{ animation: `fade-slide 0.5s ease-out ${index * 100}ms forwards` }}>
                    {project.component}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* "View More" Button (Github/Behance) - (Unchanged) */}
        <div className={cn("mt-16 text-center", "opacity-0 transform translate-y-6 transition-all duration-700 delay-400", isInView && "opacity-100 translate-y-0")}>
          {activeProjectType !== 'research' && (
            <a href={activeProjectType === 'coding' ? "https://github.com/HRx17" : "https://www.behance.net/haetranpariya17"} target="_blank" rel="noopener noreferrer" className="btn-hover inline-flex items-center px-8 py-4 rounded-lg bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all shadow-sm hover:shadow-md">
              <span className="relative z-10">
                {activeProjectType === 'coding' ? "View more projects on GitHub" : "View full portfolio on Behance"}
              </span>
            </a>
          )}
        </div>

        {/* --- 8. "PINBOARD" ENDORSEMENT SECTION --- */}
        {/* This div is the container for the pinboard. */}
        <div
          className={cn(
            "relative pt-16 md:pt-24 mt-16 md:mt-24 border-t border-border",
            "opacity-0 transform transition-all duration-700 delay-600",
            isInView && "opacity-100",
          )}
          style={{
            backgroundImage: corkboardImage,
          }}
        >
          {/* --- FIX: This is your new "Pinboard" Dot Grid Background --- */}
          <div 
            className="absolute inset-0 w-full h-full -z-10"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--border) / 0.3) 1px, transparent 0)",
              backgroundSize: "30px 30px", // Smaller dots, closer together
            }}
          />

          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            What My Colleagues Say
          </h3>
          {/* 2-Column Grid for the "Pinned Notes" */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {endorsements.map((endorsement, index) => (
              <MinimalEndorsementCard 
                key={index} 
                endorsement={endorsement} 
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}