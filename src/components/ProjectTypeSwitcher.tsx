
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Code, Palette, FlaskConical } from 'lucide-react';

interface ProjectTypeSwitcherProps {
  activeType: 'design' | 'coding' | 'research';
  onTypeChange: (type: 'design' | 'coding' | 'research') => void;
  className?: string;
}

export function ProjectTypeSwitcher({ 
  activeType, 
  onTypeChange,
  className
}: ProjectTypeSwitcherProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn(
      "flex items-center justify-center gap-1 mb-8 p-1.5 rounded-full bg-muted border border-border shadow-lg w-fit mx-auto",
      className
    )}>
      <button
        onClick={() => onTypeChange('research')}
        className={cn(
          "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm",
          activeType === 'research' 
            ? "bg-purple-600 text-white shadow-md scale-105" 
            : "text-foreground hover:bg-background hover:shadow-sm"
        )}
      >
        <FlaskConical className="h-4 w-4" />
        <span className={cn(isMobile && "hidden")}>Research</span>
      </button>
      
      <button
        onClick={() => onTypeChange('design')}
        className={cn(
          "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm",
          activeType === 'design' 
            ? "bg-emerald-600 text-white shadow-md scale-105" 
            : "text-foreground hover:bg-background hover:shadow-sm"
        )}
      >
        <Palette className="h-4 w-4" />
        <span className={cn(isMobile && "hidden")}>Design</span>
      </button>
      
      <button
        onClick={() => onTypeChange('coding')}
        className={cn(
          "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm",
          activeType === 'coding' 
            ? "bg-blue-600 text-white shadow-md scale-105" 
            : "text-foreground hover:bg-background hover:shadow-sm"
        )}
      >
        <Code className="h-4 w-4" />
        <span className={cn(isMobile && "hidden")}>Coding</span>
      </button>
    </div>
  );
}
