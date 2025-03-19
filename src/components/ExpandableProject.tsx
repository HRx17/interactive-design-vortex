
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, X, ExternalLink } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

interface ExpandableProjectProps {
  embedSrc: string;
  index: number;
}

export function ExpandableProject({ embedSrc, index }: ExpandableProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const projectRef = useRef<HTMLDivElement>(null);
  const expandedRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }
    
    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
      
      // Scroll to expanded content
      if (expandedRef.current) {
        expandedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div 
        ref={projectRef}
        className={cn(
          "bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300",
          "opacity-0 transform translate-y-12",
          isVisible && "opacity-100 translate-y-0"
        )}
        style={{ 
          transitionDelay: `${index * 100}ms`, 
          transitionDuration: '600ms'
        }}
      >
        <div className="w-full aspect-video p-2">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <iframe 
              src={embedSrc}
              height="100%" 
              width="100%" 
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              frameBorder="0" 
              allow="clipboard-write"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
        
        <button 
          onClick={toggleExpand}
          className="w-full py-3 px-4 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-b-xl hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
        >
          <span>View Case Study</span>
          <ChevronDown className={cn(
            "h-5 w-5 transition-transform duration-300",
            isExpanded && "rotate-180"
          )} />
        </button>
      </div>

      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsExpanded(false);
            }
          }}
        >
          <div 
            ref={expandedRef}
            className="min-h-screen flex items-center justify-center p-4"
          >
            <div 
              className="bg-background rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto relative animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-secondary text-primary hover:bg-secondary/80 transition-colors z-10"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="p-6 md:p-8">
                <div className="aspect-video w-full rounded-lg overflow-hidden mb-8 shadow-xl">
                  <iframe 
                    src={embedSrc}
                    height="100%" 
                    width="100%" 
                    className="w-full h-full"
                    allowFullScreen
                    loading="lazy"
                    frameBorder="0" 
                    allow="clipboard-write"
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
                
                <div className="grid gap-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="overview">
                      <AccordionTrigger className="text-xl font-bold">Project Overview</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p>This project showcases my UI/UX design skills and approach to solving complex design problems. The case study demonstrates my process from research to final implementation.</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="process">
                      <AccordionTrigger className="text-xl font-bold">Design Process</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p>My design process followed these key steps:</p>
                        <ol className="list-decimal pl-5 mt-3 space-y-2">
                          <li>User Research and Interviews</li>
                          <li>Problem Definition</li>
                          <li>Competitive Analysis</li>
                          <li>Information Architecture</li>
                          <li>Wireframing and Prototyping</li>
                          <li>User Testing and Iteration</li>
                          <li>Visual Design and UI Development</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="tools">
                      <AccordionTrigger className="text-xl font-bold">Tools & Technologies</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {["Figma", "Adobe XD", "Sketch", "InVision", "Photoshop", "Illustrator"].map(tool => (
                            <span key={tool} className="px-3 py-1 bg-secondary/50 rounded-full text-sm font-medium">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <a 
                    href={embedSrc.replace("/embed/project/", "/project/")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium mt-4"
                  >
                    <span>View Full Case Study on Behance</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
