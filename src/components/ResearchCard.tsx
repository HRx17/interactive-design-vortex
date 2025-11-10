
import React, { useState } from 'react';
import { BookOpen, FileSearch, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResearchProjectProps {
  title: string;
  description: string;
  year: string;
  downloadFile: string;
  delay?: number;
  isInView?: boolean;
}

export function ResearchCard({ 
  title, 
  description, 
  year,
  downloadFile, 
  delay = 0,
  isInView = true
}: ResearchProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "rounded-lg border border-border/40 hover:border-accent/40 transition-all duration-300",
        "bg-card/50 hover:bg-muted/30",
        "opacity-0 transform translate-y-4",
        isInView && "opacity-100 translate-y-0",
        isHovered && "shadow-lg shadow-accent/10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex items-start gap-3">
          <div className={cn(
            "bg-muted p-2 rounded-md transition-all duration-300 border border-border",
            isHovered && "rotate-3 bg-accent/10"
          )}>
            <FileSearch className={cn(
              "w-5 h-5 text-foreground transition-all duration-300", 
              isHovered && "scale-110"
            )} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{year}</p>
            <p className="mt-3 text-muted-foreground">{description}</p>
            <div className="pt-3 flex justify-end">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(downloadFile, '_blank', 'noopener,noreferrer');
                }}
                className={cn(
                  "text-sm font-medium text-foreground flex items-center gap-1 hover:text-foreground/80 transition-all px-4 py-2 rounded-full border border-border hover:bg-muted cursor-pointer",
                  isHovered && "scale-105"
                )}
              >
                <span>Read full paper</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
