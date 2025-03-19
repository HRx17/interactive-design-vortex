
import React, { useState } from 'react';
import { BookOpen, FileSearch, ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from '@/lib/utils';

interface ResearchProjectProps {
  title: string;
  description: string;
  year: string;
  fullContent?: {
    challenge: string;
    methods: string[];
    findings: string;
    impact: string;
    conclusion: string;
  };
  delay?: number;
  isInView?: boolean;
}

export function ResearchCard({ 
  title, 
  description, 
  year, 
  fullContent,
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
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="p-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className="flex items-start gap-3">
            <div className="bg-emerald-900 p-2 rounded-md">
              <FileSearch className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-sm text-emerald-100/70 mt-1">{year}</p>
              <p className="mt-3 text-muted-foreground">{description}</p>
            </div>
            <CollapsibleTrigger asChild onClick={(e) => e.stopPropagation()}>
              <button className="p-2 rounded-full hover:bg-emerald-800/30">
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-emerald-300" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-emerald-300" />
                )}
              </button>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent>
          {fullContent ? (
            <div className="px-6 pb-6 pt-2 border-t border-emerald-700/30 mt-2">
              <div className="space-y-5">
                <div>
                  <h4 className="text-md font-semibold text-emerald-300 mb-2">Research Challenge</h4>
                  <p className="text-emerald-100/80">{fullContent.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-md font-semibold text-emerald-300 mb-2">Research Methods</h4>
                  <ul className="list-disc list-inside space-y-1 text-emerald-100/80">
                    {fullContent.methods.map((method, index) => (
                      <li key={index}>{method}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-md font-semibold text-emerald-300 mb-2">Key Findings</h4>
                  <p className="text-emerald-100/80">{fullContent.findings}</p>
                </div>
                
                <div>
                  <h4 className="text-md font-semibold text-emerald-300 mb-2">Impact & Applications</h4>
                  <p className="text-emerald-100/80">{fullContent.impact}</p>
                </div>
                
                <div>
                  <h4 className="text-md font-semibold text-emerald-300 mb-2">Conclusion</h4>
                  <p className="text-emerald-100/80">{fullContent.conclusion}</p>
                </div>
                
                <div className="pt-3 flex justify-end">
                  <a 
                    href="/SIID_Research.pdf" 
                    download
                    className="text-sm font-medium text-emerald-400 flex items-center gap-1 hover:text-emerald-300 transition-colors px-4 py-2 rounded-full border border-emerald-700/30 hover:bg-emerald-800/40"
                  >
                    <span>Read full paper</span>
                    <BookOpen className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="px-6 pb-6">
              <p className="text-emerald-100/80">Full research details coming soon...</p>
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
