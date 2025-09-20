import React, { useState, useEffect, useRef } from 'react';
import { FlaskConical } from 'lucide-react';
import { ResearchCard } from '@/components/ResearchCard';
import { cn } from '@/lib/utils';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { ExpandableProject } from './ExpandableProject';
import { RITShiftMateProject } from './RITShiftMateProject';
import { HealthyRProject } from './HealthyRProject';
import { FoodZapProject } from './FoodZapProject';
import { WeatherAppProject } from './WeatherAppProject';
import { ARProject } from './ARProject';
import { ParkingAppProject } from './ParkingAppProject';
import { PostSchedulerProject } from './PostSchedulerProject';
import { AttendanceProject } from './AttendanceProject';
import { WaahTvProject } from './WaahTvProject';
import { ProjectTypeSwitcher } from './ProjectTypeSwitcher';
import { useIsMobile } from '@/hooks/use-mobile';
import { UpcomingProject } from './UpcomingProject';

// Project embed data for design projects
const designProjectEmbeds = [
  "",
  "",
  "",
  "", 
  "",
  "",
  //"https://www.behance.net/embed/project/176648697?ilo0=1",
  //"https://www.behance.net/embed/project/176642493?ilo0=1"
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isCodingProjects, setIsCodingProjects] = useState(false);
  const isMobile = useIsMobile();
  
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

  // Helper function to render design projects
  const renderDesignProjects = () => {
    return [
      <UpcomingProject key="upcoming" index={0} />, // Add the Upcoming project at the beginning
      <ParkingAppProject key="parkingApp" index={1} />,
      <ARProject key="AR" index={2} />,
      <RITShiftMateProject key="ritshiftmate" index={3} />,
      <HealthyRProject key="healthyR" index={4} />,
      <WeatherAppProject key="weatherApp" index={5} />,
      <FoodZapProject key="foodzap" index={6} />,
      // For any remaining embed projects
      ...designProjectEmbeds.slice(6).map((embed, index) => {
        const adjustedIndex = index + 7;
        return embed ? <ExpandableProject key={adjustedIndex} embedSrc={embed} index={adjustedIndex} /> : null;
      }).filter(Boolean)
    ];
  };

  // Helper function to render coding projects
  const renderCodingProjects = () => {
    return [
      <PostSchedulerProject key="postScheduler" index={0} />,
      <AttendanceProject key="attendance" index={1} />,
      <WaahTvProject key="waahTv" index={2} />
    ];
  };

  // Helper function to render carousel items with design projects
  const renderDesignCarouselItems = () => {
    return [
      <CarouselItem key="upcoming" className="md:basis-1/2 lg:basis-1/3">
        <UpcomingProject index={0} />
      </CarouselItem>,
      <CarouselItem key="parkingApp" className="md:basis-1/2 lg:basis-1/3">
        <ParkingAppProject index={1} />
      </CarouselItem>,
      <CarouselItem key="AR" className="md:basis-1/2 lg:basis-1/3">
        <ARProject index={2} />
      </CarouselItem>,
      <CarouselItem key="ritshiftmate" className="md:basis-1/2 lg:basis-1/3">
        <RITShiftMateProject index={3} />
      </CarouselItem>,
      <CarouselItem key="healthyR" className="md:basis-1/2 lg:basis-1/3">
        <HealthyRProject index={4} />
      </CarouselItem>,
      <CarouselItem key="weatherApp" className="md:basis-1/2 lg:basis-1/3">
        <WeatherAppProject index={5} />
      </CarouselItem>,
      <CarouselItem key="foodzap" className="md:basis-1/2 lg:basis-1/3">
        <FoodZapProject index={6} />
      </CarouselItem>,
      // For any remaining embed projects
      ...designProjectEmbeds.slice(6).map((embed, index) => {
        const adjustedIndex = index + 7;
        return embed ? (
          <CarouselItem key={adjustedIndex} className="md:basis-1/2 lg:basis-1/3">
            <ExpandableProject embedSrc={embed} index={adjustedIndex} />
          </CarouselItem>
        ) : null;
      }).filter(Boolean)
    ];
  };

  const researchProjects = [
    {
      title: "The Impact of Situationally Induced Impairments and Disabilities (SIIDs) on Task Performance: A Comparative Study of Sensory Modalities",
      description: "This study proposes a comparative experimental investigation of how visual, auditory, and tactile SIIDs affect task performance and user experience.",
      year: "2024",
      downloadFile: "/SIID_Research.pdf",
    },
    {
      title: "Experimental Research on MyCourses Platform",
      description: "The study investigates the challenges faced by international and American students at the Rochester Institute of Technology(RIT) while using the MyCourses learning platform. ",
      year: "2024",
      downloadFile: "/Experimental_Research.pdf",
    },
    {
      title: "What is the correlation between age groups and their preferred game genres on PlayStation, and how does this affect the average time spent playing per week?",
      description: "This study investigates the correlation relationship between PlayStation users, focusing on age groups, their preferred game genres on PlayStation, and the average time spent playing per week and developing the structured survey methodology on Google Forms as we gathered data from PlayStation users to collect data focusing on their game genre preferences and gaming habits.",
      year: "2024",
      downloadFile: "/Research_Gaming.pdf",
    }
  ];
  // Helper function to render carousel items with coding projects
  const renderCodingCarouselItems = () => {
    return [
      <CarouselItem key="postScheduler" className="md:basis-1/2 lg:basis-1/3">
        <PostSchedulerProject index={0} />
      </CarouselItem>,
      <CarouselItem key="attendance" className="md:basis-1/2 lg:basis-1/3">
        <AttendanceProject index={1} />
      </CarouselItem>,
      <CarouselItem key="waahTv" className="md:basis-1/2 lg:basis-1/3">
        <WaahTvProject index={2} />
      </CarouselItem>
    ];
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="section-container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className={cn(
            "text-sm font-medium px-3 py-1 rounded-full bg-secondary text-primary inline-block mb-4",
            "opacity-0 transform translate-y-6 transition-all duration-700",
            isInView && "opacity-100 translate-y-0"
          )}>
            Featured Work
          </span>
          
          <h2 className={cn(
            "heading bg-gradient-to-r from-emerald-700 to-teal-500 bg-clip-text text-transparent",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-100",
            isInView && "opacity-100 translate-y-0"
          )}>
            Recent Projects
          </h2>
          
          <p className={cn(
            "text-muted-foreground mt-4 max-w-xl mx-auto",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-200",
            isInView && "opacity-100 translate-y-0"
          )}>
            Explore my portfolio of UX design work and coding projects focused on creating human-centered digital experiences.
          </p>
        </div>
        
        {/* Project Type Switcher */}
        <div className={cn(
          "opacity-0 transform translate-y-6 transition-all duration-700 delay-300",
          isInView && "opacity-100 translate-y-0"
        )}>
          <ProjectTypeSwitcher 
            isCodingProjects={isCodingProjects} 
            onToggle={() => setIsCodingProjects(!isCodingProjects)}
          />
        </div>
        
        {/* Mobile carousel view for projects */}
        <div className={cn(
          "md:hidden block",
          "transform transition-opacity duration-500",
          "opacity-0 animate-in",
          isInView && "opacity-100"
        )}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {isCodingProjects 
                ? renderCodingCarouselItems() 
                : renderDesignCarouselItems()
              }
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="static translate-y-0 relative" />
              <CarouselNext className="static translate-y-0 relative" />
            </div>
          </Carousel>
        </div>
        
        {/* Desktop grid view for projects */}
        <div className={cn(
          "hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
          "transform transition-all duration-500",
          "fade-in",
        )}>
          {isCodingProjects 
            ? renderCodingProjects() 
            : renderDesignProjects()
          }
        </div>
        
        <div className={cn(
          "mt-16 text-center",
          "opacity-0 transform translate-y-6 transition-all duration-700 delay-400",
          isInView && "opacity-100 translate-y-0"
        )}>
          <a 
            href={isCodingProjects ? "https://github.com/HRx17" : "https://www.behance.net/haetranpariya17"}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "btn-hover inline-flex items-center px-8 py-4 rounded-full text-white font-medium hover:shadow-lg transition-all",
              isCodingProjects 
                ? "bg-gradient-to-r from-blue-600 to-indigo-600" 
                : "bg-gradient-to-r from-emerald-600 to-teal-500"
            )}
          >
            <span className="relative z-10">
              {isCodingProjects 
                ? "View more projects on GitHub" 
                : "View full portfolio on Behance"
              }
            </span>
          </a>
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
                downloadFile={project.downloadFile}
                delay={500 + index * 100}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-gradient-to-r from-emerald-600/20 to-transparent rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-l from-teal-500/20 to-transparent rounded-full filter blur-3xl opacity-30"></div>
    </section>
  );
}
