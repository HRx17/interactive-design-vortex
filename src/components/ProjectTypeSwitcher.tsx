
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
      "flex items-center justify-center gap-2 mb-8 p-2 rounded-full bg-secondary/50 backdrop-blur-sm w-fit mx-auto",
      className
    )}>
      <button
        onClick={() => onTypeChange('research')}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
          activeType === 'research' ? "bg-purple-600 text-white" : "text-muted-foreground hover:bg-secondary"
        )}
      >
        <FlaskConical className="h-4 w-4" />
        <span className={cn("font-medium text-sm", isMobile && "hidden")}>Research</span>
      </button>
      
      <button
        onClick={() => onTypeChange('design')}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
          activeType === 'design' ? "bg-emerald-600 text-white" : "text-muted-foreground hover:bg-secondary"
        )}
      >
        <Palette className="h-4 w-4" />
        <span className={cn("font-medium text-sm", isMobile && "hidden")}>Design</span>
      </button>
      
      <button
        onClick={() => onTypeChange('coding')}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
          activeType === 'coding' ? "bg-blue-600 text-white" : "text-muted-foreground hover:bg-secondary"
        )}
      >
        <Code className="h-4 w-4" />
        <span className={cn("font-medium text-sm", isMobile && "hidden")}>Coding</span>
      </button>
    </div>
  );
}
