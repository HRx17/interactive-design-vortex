import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface WeatherAppProjectProps {
  index: number;
}

export function WeatherAppProject({ index }: WeatherAppProjectProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Link 
      to="/projects/weather-app"
      className={cn(
        "group bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:scale-[1.02]",
        "opacity-0 transform translate-y-12",
        isVisible && "opacity-100 translate-y-0"
      )}
      style={{ 
        transitionDelay: `${index * 100}ms`, 
        transitionDuration: '600ms'
      }}
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <img 
          src="/lovable-uploads/efc63ad4-1a76-470a-96f0-74a08ed01a6f.png" 
          alt="Weather App Project" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <ArrowUpRight className="h-5 w-5 text-foreground" />
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
            UX/UI Design
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">
          Weather App
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Weather app designs for different user archetypes with unique UI approaches.
        </p>
        
        <div className="mt-auto pt-4 border-t border-border/30">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">Figma</span>
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">Personas</span>
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">UI Design</span>
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">Visual Design</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
