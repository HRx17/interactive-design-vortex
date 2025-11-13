
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

interface UpcomingProjectProps {
  index: number;
}

export function UpcomingProject({ index }: UpcomingProjectProps) {
  const projectRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }
    
    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  const coverImage = "/lovable-uploads/dailygram-hero.png";

  return (
    <Link to="/projects/dailygram">
      <Card 
        ref={projectRef}
        className={cn(
          "border border-border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-full",
          "opacity-0 transform translate-y-12",
          isVisible && "opacity-100 translate-y-0"
        )}
        style={{ 
          transitionDelay: `${index * 100}ms`, 
          transitionDuration: '600ms'
        }}
      >
        <div className="relative">
          <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full z-10">
            Upcoming
          </div>
          <AspectRatio ratio={16/9} className="p-2">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <img 
                src={coverImage} 
                alt="Dailygram News App"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: "left center" }}
                loading="lazy"
              />
            </div>
          </AspectRatio>
          <CardContent className="p-5">
            <h3 className="text-lg font-bold mb-1">Dailygram - News App</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              A personalized news experience app that reimagines how users consume and engage with news stories.
            </p>
            
            <div className="flex flex-wrap gap-1.5 text-xs mt-3 pt-3 border-t border-border/30">
              <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">Figma</span>
              <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">Design System</span>
              <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">Gamification</span>
              <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">Mobile UX</span>
            </div>
            <a 
              href="https://www.figma.com/proto/Fg21sfI8U8EZcRbaMH0dJ7/News-App-Project---in-progress?page-id=2011%3A14&node-id=2286-312&viewport=-452%2C-4040%2C0.25&t=nBDttPqdJyAEmHUI-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2380%3A1752"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors mt-2"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
              View Interactive Prototype
            </a>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}
