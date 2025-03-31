import React, { useState, useEffect, useRef } from 'react';
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
    return designProjectEmbeds.map((embed, index) => {
      // If this is the position where we want to insert special projects
      if (index === 0) {
        return <ParkingAppProject key="parkingApp" index={index} />;
      }
      if (index === 1) {
        return <ARProject key="AR" index={index} />;
      }
      if (index === 2) {
        return <RITShiftMateProject key="ritshiftmate" index={index} />;
      }
      if (index === 3) {
        return <HealthyRProject key="healthyR" index={index} />;
      }
      if (index === 4) {
        return <WeatherAppProject key="weatherApp" index={index} />;
      }
      if (index === 5) {
        return <FoodZapProject key="foodzap" index={index} />;
      }
     
      // For other projects, render the regular ExpandableProject
      const adjustedIndex = index > 5 ? index - 4 : index; 
      return <ExpandableProject key={adjustedIndex} embedSrc={embed} index={index} />;
    });
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
    return designProjectEmbeds.map((embed, index) => {
      if (index === 0) {
        return (
          <CarouselItem key="parkingApp" className="md:basis-1/2 lg:basis-1/3">
            <ParkingAppProject index={index} />
          </CarouselItem>
        );
      }
      if (index === 1) {
        return (
          <CarouselItem key="AR" className="md:basis-1/2 lg:basis-1/3">
            <ARProject index={index} />
          </CarouselItem>
        );
      }
      if (index === 2) {
        return (
          <CarouselItem key="ritshiftmate" className="md:basis-1/2 lg:basis-1/3">
            <RITShiftMateProject index={index} />
          </CarouselItem>
        );
      }
      if (index === 3) {
        return (
          <CarouselItem key="healthyR" className="md:basis-1/2 lg:basis-1/3">
            <HealthyRProject index={index} />
          </CarouselItem>
        );
      }
      if (index === 4) {
        return (
          <CarouselItem key="weatherApp" className="md:basis-1/2 lg:basis-1/3">
            <WeatherAppProject index={index} />
          </CarouselItem>
        );
      }
      if (index === 5) {
        return (
          <CarouselItem key="foodzap" className="md:basis-1/2 lg:basis-1/3">
            <FoodZapProject index={index} />
          </CarouselItem>
        );
      }
      
      // For other projects, render the regular ExpandableProject in a carousel item
      const adjustedIndex = index > 5 ? index - 4 : index;
      return (
        <CarouselItem key={adjustedIndex} className="md:basis-1/2 lg:basis-1/3">
          <ExpandableProject embedSrc={embed} index={index} />
        </CarouselItem>
      );
    });
  };

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
            href={isCodingProjects ? "https://github.com/haetranpariya" : "https://www.behance.net/haetranpariya17"}
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
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-gradient-to-r from-emerald-600/20 to-transparent rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-l from-teal-500/20 to-transparent rounded-full filter blur-3xl opacity-30"></div>
    </section>
  );
}
