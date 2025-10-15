import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface PostSchedulerProjectProps {
  index: number;
}

export function PostSchedulerProject({ index }: PostSchedulerProjectProps) {
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
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
        <div className="text-center p-8 text-white">
          <div className="text-6xl mb-4">📅</div>
          <h4 className="text-2xl font-bold">Post Scheduler</h4>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <ArrowUpRight className="h-5 w-5 text-foreground" />
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-600">
            Web Development
          </span>
          <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-purple-100 text-purple-600">
            Mobile App
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-700 transition-colors">
          Post Scheduler App
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          A content management and scheduling application for social media posts.
        </p>
      </div>
    </a>
  );
}
