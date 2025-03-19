
import React, { useState, useEffect, useRef } from 'react';
import { ProjectEmbed } from './ProjectEmbed';
import { cn } from '@/lib/utils';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";

// Project embed data
const projectEmbeds = [
  "https://www.behance.net/embed/project/212271631?ilo0=1",
  "https://www.behance.net/embed/project/205264815?ilo0=1",
  "https://www.behance.net/embed/project/204961433?ilo0=1",
  "https://www.behance.net/embed/project/179988285?ilo0=1",
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
            "heading",
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
              {projectEmbeds.map((embed, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <ProjectEmbed embedSrc={embed} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="static translate-y-0 relative" />
              <CarouselNext className="static translate-y-0 relative" />
            </div>
          </Carousel>
        </div>
        
        {/* Desktop grid view for projects */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectEmbeds.map((embed, index) => (
            <ProjectEmbed key={index} embedSrc={embed} index={index} />
          ))}
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
            className="btn-hover inline-flex items-center px-8 py-4 rounded-full border border-input bg-background hover:bg-accent text-foreground font-medium"
          >
            <span className="relative z-10">View full portfolio on Behance</span>
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-gradient-to-r from-secondary/50 to-transparent rounded-full filter blur-3xl opacity-30"></div>
    </section>
  );
}
