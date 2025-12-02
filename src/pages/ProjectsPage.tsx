import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ResearchCard } from '@/components/ResearchCard';
import { ProjectTypeSwitcher } from '@/components/ProjectTypeSwitcher';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// Project components
import { HealthyRProject } from '@/components/HealthyRProject';
import { FoodZapProject } from '@/components/FoodZapProject';
import { WeatherAppProject } from '@/components/WeatherAppProject';
import { ParkingAppProject } from '@/components/ParkingAppProject';
import { AttendanceProject } from '@/components/AttendanceProject';
import { UpcomingProject } from '@/components/UpcomingProject';

// Images
import uxprobeThumbnail from '@/assets/uxprobe-thumbnail.jpg';
import infiniteMindsThumbnail from '@/assets/infinite-minds/hero-banner.png';
import projectsHero from '@/assets/projects-hero-light.png';

// Featured Projects Data
const featuredProjects = [
  {
    type: 'design',
    id: 'uxprobe',
    title: 'UXProbe',
    description: 'AI-powered platform automating UX heuristic evaluation with comprehensive research tools...',
    imageUrl: uxprobeThumbnail,
    tags: ["Full-Stack App", "AI-Powered", "Next.js", "Figma", "UX Design"],
    links: [{ label: 'View Case Study', url: '/projects/uxprobe', isInternal: true }],
  },
  {
    type: 'design',
    id: 'infinite-minds',
    title: 'Infinite Minds: Gamified Learning',
    role: "Product Design - Tech9",
    description: 'Redesigned core engagement systems (badges, streaks, leaderboards) for a live app and led the design exploration for a new web/tablet interface.',
    imageUrl: infiniteMindsThumbnail,
    tags: ["Gamification", "Retention Design", "UX/UI", "Mobile to Web"],
    links: [{ label: 'View Case Study', url: '/projects/infinite-minds', isInternal: true }],
  },
  {
    type: 'design',
    id: 'rit-shiftmate',
    title: 'RIT ShiftMate',
    description: 'An on-campus shift coordinator and work-hour manager designed to streamline scheduling...',
    imageUrl: "/lovable-uploads/RIT1.png",
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
    tags: ["AR/VR Design", "3D Design", "Figma", "Blender"],
    links: [{ label: 'View Case Study', url: '/projects/ar-vr', isInternal: true }],
  },
  {
    type: 'coding',
    id: 'waahtv',
    title: 'WaahTV OTT App',
    description: 'Led the end-to-end product lifecycle from concept to production, owning all design and development...',
    imageUrl: null,
    placeholder: (
      <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
        <div className="text-center p-8 text-white">
          <div className="text-6xl mb-4">📺</div>
          <h4 className="text-2xl font-bold">WaahTv</h4>
        </div>
      </div>
    ),
    tags: ["Android TV", "Java", "UI/UX Design", "Product Strategy", "Figma"],
    links: [{ label: 'View Website', url: 'https://waahtv.com', isInternal: false }],
  },
  {
    type: 'coding',
    id: 'post-scheduler',
    title: 'Social Media Post Scheduler',
    description: 'A content management and scheduling application for social media posts...',
    imageUrl: null,
    placeholder: (
      <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
        <div className="text-center p-8 text-white">
          <div className="text-6xl mb-4">📅</div>
          <h4 className="text-2xl font-bold">Post Scheduler</h4>
        </div>
      </div>
    ),
    tags: ["Full-Stack", "React", "Node.js", "MongoDB", "MERN"],
    links: [{ label: 'View on GitHub', url: 'https://github.com/HRx17/Post-Scheduler', isInternal: false }],
  },
];

// Secondary Projects
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

// Research Projects
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

// Project Card Component
interface ProjectCardProps {
  project: (typeof featuredProjects)[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div className="group relative bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:border-primary/30">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.imageUrl ? (
          <img
            src={project.imageUrl as string}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          project.placeholder
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {project.role || (project.type === 'design' ? 'UI/UX Design' : 'Full-Stack Development')}
        </span>
        <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.links.map(link => (
            link.isInternal ? (
              <Link
                key={link.label}
                to={link.url}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
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

const ProjectsPage = () => {
  const { ref: sectionRef, inView: isInView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [activeProjectType, setActiveProjectType] = useState<'design' | 'coding' | 'research'>('design');

  const activeProjects = featuredProjects.filter(p => p.type === activeProjectType);
  const secondaryProjects = activeProjectType === 'design' ? secondaryDesignProjects : secondaryCodingProjects;

  return (
    <div className="relative min-h-screen bg-background">
      <ScrollProgress />
      <Header />

      {/* Hero Section with Full Width Background */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={projectsHero}
            alt="UI/UX Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 backdrop-blur-md border border-primary/20 animate-fade-in">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight animate-fade-in animation-delay-100">
            All Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            {activeProjectType === 'research'
              ? "Academic research projects exploring UX principles, user behavior, and experimental studies."
              : activeProjectType === 'design'
                ? "UI/UX design projects focusing on user-centered solutions and innovative digital experiences."
                : "Full-stack applications showcasing technical implementation and coding skills."
            }
          </p>
        </div>
      </div>

      <main className="pb-16" ref={sectionRef}>
        <div className="section-container">
          {/* Project Type Switcher */}
          <div className={cn(
            "mb-12 -mt-8 relative z-20",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-300",
            isInView && "opacity-100 translate-y-0"
          )}>
            <ProjectTypeSwitcher
              activeType={activeProjectType}
              onTypeChange={setActiveProjectType}
            />
          </div>

          {/* Projects Grid */}
          <div className="mt-8">
            {activeProjectType === 'research' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {researchProjects.map((project, index) => (
                  <ResearchCard key={project.title} {...project} delay={100 + index * 100} isInView={isInView} />
                ))}
              </div>
            ) : (
              <>
                {/* Featured Projects - Full Width Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {activeProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>

                {/* Secondary Projects */}
                {secondaryProjects.length > 0 && (
                  <>
                    <div className="border-t border-border pt-12 mb-8">
                      <h2 className="text-2xl font-bold text-center text-foreground mb-8">
                        More {activeProjectType === 'design' ? 'Design' : 'Development'} Work
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {secondaryProjects.map((project, index) => (
                        <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                          {project.component}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {/* External Links */}
          {activeProjectType !== 'research' && (
            <div className="mt-16 text-center">
              <a
                href={activeProjectType === 'coding' ? "https://github.com/HRx17" : "https://www.behance.net/haetranpariya17"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all shadow-sm hover:shadow-md"
              >
                {activeProjectType === 'coding' ? "View more on GitHub" : "View full portfolio on Behance"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
