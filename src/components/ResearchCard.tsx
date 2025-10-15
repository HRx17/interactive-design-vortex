
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
        "rounded-lg border border-gray-600/20 hover:border-gray-600/40 transition-all duration-300",
        "bg-secondary/50 hover:bg-gray-900/30",
        "opacity-0 transform translate-y-4",
        isInView && "opacity-100 translate-y-0",
        isHovered && "shadow-lg shadow-gray-500/20"
      )}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex items-start gap-3">
          <div className={cn(
            "bg-gray-900 p-2 rounded-md transition-all duration-300",
            isHovered && "rotate-3 bg-gray-800"
          )}>
            <FileSearch className={cn(
              "w-5 h-5 text-gray-400 transition-all duration-300", 
              isHovered && "scale-110"
            )} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-100/70 mt-1">{year}</p>
            <p className="mt-3 text-muted-foreground">{description}</p>
            <div className="pt-3 flex justify-end">
              <a 
                href={downloadFile}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  "text-sm font-medium text-gray-400 flex items-center gap-1 hover:text-gray-300 transition-all px-4 py-2 rounded-full border border-gray-700/30 hover:bg-gray-800/40",
                  isHovered && "scale-105"
                )}
              >
                <span>Read full paper</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
