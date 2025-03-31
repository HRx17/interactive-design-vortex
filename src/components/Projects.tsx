
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
import { WeatherAppProject } from './WeatherAppProject';

// Project embed data - removing appropriate projects as they will be replaced with custom components
const projectEmbeds = [
  "",
  "https://www.behance.net/embed/project/205264815?ilo0=1",
  "",
  "",
  "", // Weather App project will be inserted here
  "https://www.behance.net/embed/project/178309711?ilo0=1",
  "https://www.behance.net/embed/project/176648697?ilo0=1",
  "https://www.behance.net/embed/project/176642493?ilo0=1"
];

export function Projects() {
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

  // Helper function to render projects with custom components at specific positions
  const renderProjects = () => {
    return projectEmbeds.map((embed, index) => {
      // If this is the position where we want to insert RIT ShiftMate (position 2)
      if (index === 2) {
        return <RITShiftMateProject key="ritshiftmate" index={index} />;
      }
      // If this is the position where we want to insert HealthyR (position 3)
      if (index === 3) {
        return <HealthyRProject key="healthyR" index={index} />;
      }
      // If this is the position where we want to insert Weather App (position 4)
      if (index === 4) {
        return <WeatherAppProject key="weatherApp" index={index} />;
      }
      // For other projects, render the regular ExpandableProject
      const adjustedIndex = index > 4 ? index - 3 : index; // Adjust embed index after our custom projects
      return <ExpandableProject key={adjustedIndex} embedSrc={embed} index={index} />;
    });
  };

  // Helper function to render carousel items with custom components at specific positions
  const renderCarouselItems = () => {
    return projectEmbeds.map((embed, index) => {
      // If this is the position where we want to insert RIT ShiftMate (position 2)
      if (index === 2) {
        return (
          <CarouselItem key="ritshiftmate" className="md:basis-1/2 lg:basis-1/3">
            <RITShiftMateProject index={index} />
          </CarouselItem>
        );
      }
      // If this is the position where we want to insert HealthyR (position 3)
      if (index === 3) {
        return (
          <CarouselItem key="healthyR" className="md:basis-1/2 lg:basis-1/3">
            <HealthyRProject index={index} />
          </CarouselItem>
        );
      }
      // If this is the position where we want to insert Weather App (position 4)
      if (index === 4) {
        return (
          <CarouselItem key="weatherApp" className="md:basis-1/2 lg:basis-1/3">
            <WeatherAppProject index={index} />
          </CarouselItem>
        );
      }
      // For other projects, render the regular ExpandableProject in a carousel item
      const adjustedIndex = index > 4 ? index - 3 : index; // Adjust embed index after our custom projects
      return (
        <CarouselItem key={adjustedIndex} className="md:basis-1/2 lg:basis-1/3">
          <ExpandableProject embedSrc={embed} index={index} />
        </CarouselItem>
      );
    });
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="section-container">
        <div className="max-w-2xl mb-16">
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
            "text-muted-foreground mt-4 max-w-xl",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-200",
            isInView && "opacity-100 translate-y-0"
          )}>
            Explore my portfolio of UX design work focused on creating human-centered digital experiences.
          </p>
        </div>
        
        {/* Mobile carousel view for projects */}
        <div className="md:hidden block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className={cn(
              "w-full",
              "opacity-0 transform translate-y-6 transition-all duration-700 delay-300",
              isInView && "opacity-100 translate-y-0"
            )}
          >
            <CarouselContent>
              {renderCarouselItems()}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="static translate-y-0 relative" />
              <CarouselNext className="static translate-y-0 relative" />
            </div>
          </Carousel>
        </div>
        
        {/* Desktop grid view for projects */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {renderProjects()}
        </div>
        
        <div className={cn(
          "mt-16 text-center",
          "opacity-0 transform translate-y-6 transition-all duration-700 delay-400",
          isInView && "opacity-100 translate-y-0"
        )}>
          <a 
            href="https://www.behance.net/haetranpariya17"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-medium hover:shadow-lg transition-all"
          >
            <span className="relative z-10">View full portfolio on Behance</span>
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-gradient-to-r from-emerald-600/20 to-transparent rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-l from-teal-500/20 to-transparent rounded-full filter blur-3xl opacity-30"></div>
    </section>
  );
}
