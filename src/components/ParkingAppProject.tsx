import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ParkingAppProjectProps {
  index: number;
}

export function ParkingAppProject({ index }: ParkingAppProjectProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Link 
      to="/projects/parkease"
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
          src="/lovable-uploads/2a9fc4ff-b9fa-4053-87ce-4de202e01975.png" 
          alt="ParkEase Project" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <ArrowUpRight className="h-5 w-5 text-foreground" />
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            Hackathon
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          ParkEase
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Car display app for finding and navigating to parking spots in real-time.
        </p>
        
        <div className="mt-auto pt-4 border-t border-border/30">
          <div className="flex flex-wrap gap-2 text-xs mb-3">
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">Figma</span>
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">User Flows</span>
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">Wireframing</span>
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">UI Design</span>
          </div>
          <a 
            href="https://www.figma.com/proto/MoSrBV5sSu5Ma0IsL0cpxK/Combine-Work-Space?page-id=13%3A2&node-id=60-46570&viewport=555%2C517%2C0.04&t=ngys50pDKIBLsMKP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=60%3A46570&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-foreground/80 transition-colors"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="10 8 16 12 10 16 10 8"/>
            </svg>
            View Interactive Prototype
          </a>
        </div>
      </div>
    </Link>
  );
}
