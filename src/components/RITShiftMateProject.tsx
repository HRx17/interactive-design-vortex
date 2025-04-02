
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, X, CheckCircle, Users, Clock, Calendar, Award } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

interface RITShiftMateProjectProps {
  index: number;
}

export function RITShiftMateProject({ index }: RITShiftMateProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Set visible after a short delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // Observer function to check if sections are visible
    const handleScroll = () => {
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // If the section is visible in the viewport
        if (rect.top < viewportHeight * 0.7 && rect.bottom > 0) {
          setActiveSection(index);
          section.classList.add('section-visible');
        }
      });
    };

    // Add scroll event listener
    const scrollArea = document.querySelector('.case-study-scroll-area');
    if (scrollArea) {
      scrollArea.addEventListener('scroll', handleScroll);
      
      // Trigger initial check
      setTimeout(() => {
        handleScroll();
      }, 300);
    }
    
    return () => {
      if (scrollArea) {
        scrollArea.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isOpen]);

  const caseStudyThumbnail = "/lovable-uploads/RIT1.png";

  return (
    <>
      {/* Thumbnail Card */}
      <div 
        onClick={() => setIsOpen(true)}
        className={cn(
          "bg-card/80 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-full",
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
            <img 
              src={caseStudyThumbnail} 
              alt="RIT ShiftMate Project" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-orange-100 text-orange-600">UX/UI Design</span>
          </div>
          <h3 className="text-xl font-bold">RIT ShiftMate</h3>
          <p className="text-sm text-muted-foreground mt-2">An on-campus shift coordinator and work-hour manager for students.</p>
        </div>
      </div>

      {/* Full Case Study Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] p-0 bg-background">
          <DialogTitle className="sr-only">RIT ShiftMate Case Study</DialogTitle>
          <DialogDescription className="sr-only">
            A comprehensive case study on the RIT ShiftMate app design project
          </DialogDescription>
          <DialogClose className="absolute right-4 top-4 p-2 z-50 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40 transition-colors">
            <X className="h-5 w-5" />
          </DialogClose>
          
          <ScrollArea className="max-h-[90vh] overflow-y-auto case-study-scroll-area">
            <div className="case-study-container">
              {/* Section 1: Hero */}
              <div 
                ref={el => sectionsRef.current[0] = el}
                className="section fade-section bg-gradient-to-b from-[#BF5A24] to-[#E6793E] text-white py-12 md:py-20"
              >
                <div className="container mx-auto px-4 md:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                    <div className="md:w-1/2 fade-right">
                      <h1 className="text-3xl md:text-5xl font-bold mb-4">RIT ShiftMate</h1>
                      <p className="text-lg md:text-xl opacity-90 mb-6">
                        A comprehensive shift management solution for RIT students,
                        designed to streamline scheduling and time tracking.
                      </p>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <span className="text-sm px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">UX Research</span>
                        <span className="text-sm px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">UI Design</span>
                        <span className="text-sm px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">Prototyping</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 overflow-hidden rounded-xl shadow-2xl fade-left">
                      <img 
                        src="/lovable-uploads/RIT1.png" 
                        alt="RIT ShiftMate Hero" 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Problem Statement */}
              

              {/* Footer */}
              <div className="bg-[#BF5A24] text-white py-10 px-6 text-center">
                <h2 className="text-3xl font-bold mb-2">Project by: HAET RANPARIYA</h2>
                <a 
                  href="https://www.behance.net/haetranpariya17" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-lg backdrop-blur-sm"
                >
                  <span>View More Projects on Behance</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <style>
        {`
        .section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .section-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          transition-delay: 100ms;
        }
        
        .fade-right {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          transition-delay: 200ms;
        }
        
        .fade-left {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          transition-delay: 200ms;
        }
        
        .section-visible .fade-up,
        .section-visible .fade-right,
        .section-visible .fade-left {
          opacity: 1;
          transform: translate(0);
        }
        
        .phone-mockup {
          width: ${isMobile ? '140px' : '180px'};
          padding: 8px;
          transition: transform 0.3s ease;
        }
        
        .phone-mockup:hover {
          transform: translateY(-10px);
        }
        
        .phone-screen {
          border: 4px solid #333;
          border-radius: 32px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        `}
      </style>
    </>
  );
}
