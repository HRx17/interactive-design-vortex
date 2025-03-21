
import React, { useState } from 'react';
import { BookOpen, FileSearch, ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={cn(
        "rounded-lg border border-emerald-600/20 hover:border-emerald-600/40 transition-all duration-300",
        isOpen ? "bg-emerald-900/30" : "bg-secondary/50",
        "opacity-0 transform translate-y-4",
        isInView && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
        <div className="p-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className="flex items-start gap-3">
            <div className="bg-emerald-900 p-2 rounded-md">
              <FileSearch className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-sm text-emerald-100/70 mt-1">{year}</p>
              <p className="mt-3 text-muted-foreground">{description}</p>
              <div className="pt-3 flex justify-end">
                  <a 
                    href={downloadFile}
                    download
                    className="text-sm font-medium text-emerald-400 flex items-center gap-1 hover:text-emerald-300 transition-colors px-4 py-2 rounded-full border border-emerald-700/30 hover:bg-emerald-800/40"
                  >
                    <span>Read full paper</span>
                    <BookOpen className="w-4 h-4" />
                  </a>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}
