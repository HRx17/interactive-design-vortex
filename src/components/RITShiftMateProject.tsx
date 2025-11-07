import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface RITShiftMateProjectProps {
  index: number;
}

export function RITShiftMateProject({ index }: RITShiftMateProjectProps) {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Link 
      to="/projects/rit-shiftmate"
      className={cn(
        "group bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col",
        "opacity-0 transform translate-y-12 hover:scale-[1.02]",
        isVisible && "opacity-100 translate-y-0"
      )}
      style={{ 
        transitionDelay: `${index * 100}ms`, 
        transitionDuration: '600ms'
      }}
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <img 
          src="/lovable-uploads/RIT1.png" 
          alt="RIT ShiftMate Project" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <ArrowUpRight className="h-5 w-5 text-foreground" />
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
            Academic Project
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">
          RIT ShiftMate
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          An on-campus shift coordinator and work-hour manager for students.
        </p>
        
        <div className="mt-auto pt-4 border-t border-border/30">
          <div className="flex flex-wrap gap-2 text-xs mb-3">
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">Figma</span>
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">UX Research</span>
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">User Testing</span>
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">Design System</span>
          </div>
          <a 
            href="https://www.figma.com/proto/MhsMW3UV2T1ukHbvmA8S7W/Presentation---Final-Project-ShiftMate?page-id=0%3A1&node-id=133-637&viewport=1012%2C566%2C0.06&t=0iDmAFgme4i2rAGn-1&scaling=contain&content-scaling=fixed&starting-point-node-id=133%3A637&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
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
