
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Code, Palette } from 'lucide-react';

interface ProjectTypeSwitcherProps {
  isCodingProjects: boolean;
  onToggle: () => void;
  className?: string;
}

export function ProjectTypeSwitcher({ 
  isCodingProjects, 
  onToggle,
  className
}: ProjectTypeSwitcherProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn(
      "flex items-center justify-center gap-3 mb-8 p-3 rounded-full bg-secondary/50 backdrop-blur-sm w-fit mx-auto",
      className
    )}>
      <div className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
        !isCodingProjects ? "bg-emerald-600 text-white" : "text-muted-foreground"
      )}>
        <Palette className="h-4 w-4" />
        <span className={cn("font-medium text-sm", isMobile && "hidden")}>Design Projects</span>
      </div>
      
      <Switch 
        checked={isCodingProjects}
        onCheckedChange={onToggle}
        className="data-[state=checked]:bg-blue-600"
      />
      
      <div className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
        isCodingProjects ? "bg-blue-600 text-white" : "text-muted-foreground"
      )}>
        <Code className="h-4 w-4" />
        <span className={cn("font-medium text-sm", isMobile && "hidden")}>Coding Projects</span>
      </div>
    </div>
  );
}
