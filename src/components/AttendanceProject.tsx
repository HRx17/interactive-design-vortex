import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface AttendanceProjectProps {
  index: number;
}

export function AttendanceProject({ index }: AttendanceProjectProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <a 
      href="https://github.com/HRx17"
      target="_blank"
      rel="noopener noreferrer"
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
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
        <div className="text-center p-8 text-white">
          <div className="text-6xl mb-4">✓</div>
          <h4 className="text-2xl font-bold">Attendance System</h4>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <ArrowUpRight className="h-5 w-5 text-foreground" />
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-blue-100 text-blue-600">
            Full Stack
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
          Attendance App
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Automated attendance tracking system with facial recognition.
        </p>
      </div>
    </a>
  );
}
