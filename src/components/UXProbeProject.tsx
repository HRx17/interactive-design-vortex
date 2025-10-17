import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Brain, Sparkles } from 'lucide-react';
import uxprobeThumbnail from '@/assets/uxprobe-thumbnail.jpg';

interface UXProbeProjectProps {
  index: number;
}

export function UXProbeProject({ index }: UXProbeProjectProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Link 
      to="/projects/uxprobe"
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
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-purple-900/20 via-primary/10 to-teal-900/20">
        <img 
          src={uxprobeThumbnail} 
          alt="UXProbe - AI-Powered UX Research Platform" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* AI Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-600/90 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-white" />
          <span className="text-xs font-medium text-white">AI-Powered</span>
        </div>
        
        <div className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <ArrowUpRight className="h-5 w-5 text-foreground" />
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
            Full-Stack App
          </span>
          <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
            <Brain className="h-4 w-4" />
            <span className="text-xs font-medium">Live</span>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">
          UXProbe
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          AI-powered platform automating UX heuristic evaluation and streamlining research workflows with Nielsen's 10 usability principles.
        </p>
        
        <div className="mt-auto pt-4 border-t border-border/30">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">React</span>
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">TypeScript</span>
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">Gemini AI</span>
            <span className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">Lovable Cloud</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
