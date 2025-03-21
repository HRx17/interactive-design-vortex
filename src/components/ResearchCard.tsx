
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Collapsible 
      open={isOpen} 
      onOpenChange={setIsOpen}
      className={cn(
        "rounded-lg border border-emerald-600/20 hover:border-emerald-600/40 transition-all duration-300",
        isOpen ? "bg-emerald-900/30" : "bg-secondary/50",
        "opacity-0 transform translate-y-4",
        isInView && "opacity-100 translate-y-0",
        isHovered && "shadow-lg shadow-emerald-500/20"
      )}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CollapsibleTrigger className="w-full text-left p-0">
        <div className="p-6 cursor-pointer">
          <div className="flex items-start gap-3">
            <div className={cn(
              "bg-emerald-900 p-2 rounded-md transition-all duration-300",
              isHovered && "rotate-3 bg-emerald-800"
            )}>
              <FileSearch className={cn(
                "w-5 h-5 text-emerald-400 transition-all duration-300", 
                isHovered && "scale-110"
              )} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-sm text-emerald-100/70 mt-1">{year}</p>
              <p className="mt-3 text-muted-foreground">{description}</p>
              <div className="pt-3 flex justify-between items-center">
                <div className="text-emerald-400 flex items-center gap-1">
                  {isOpen ? (
                    <>
                      <span>Show less</span>
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Read more</span>
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </div>
                <a 
                  href={downloadFile}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className={cn(
                    "text-sm font-medium text-emerald-400 flex items-center gap-1 hover:text-emerald-300 transition-all px-4 py-2 rounded-full border border-emerald-700/30 hover:bg-emerald-800/40",
                    isHovered && "scale-105"
                  )}
                >
                  <span>Download paper</span>
                  <BookOpen className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6 pt-0 animate-accordion-down">
        <div className="border-t border-emerald-700/30 pt-4 mt-2">
          <h4 className="text-md font-bold text-emerald-300 mb-3">Research Abstract</h4>
          <p className="text-muted-foreground mb-4">
            {description} This research provides valuable insights into user experience design principles that can be applied to create more accessible and inclusive digital products.
          </p>
          <h4 className="text-md font-bold text-emerald-300 mb-3">Methodology</h4>
          <p className="text-muted-foreground mb-4">
            The research employed a mixed-methods approach, combining qualitative user interviews with quantitative usability testing. Data was collected over a three-month period, involving over 30 participants from diverse backgrounds.
          </p>
          <h4 className="text-md font-bold text-emerald-300 mb-3">Key Findings</h4>
          <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
            <li>Identified critical patterns in user behavior across different platforms</li>
            <li>Established correlation between interface design and task completion rates</li>
            <li>Discovered new approaches to accessibility in digital product design</li>
          </ul>
          <div className="flex justify-end">
            <a 
              href={downloadFile}
              download
              className="text-sm font-medium bg-emerald-800 text-emerald-100 flex items-center gap-1 hover:bg-emerald-700 transition-colors px-4 py-2 rounded-md"
            >
              <span>Read full research paper</span>
              <BookOpen className="w-4 h-4" />
            </a>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
