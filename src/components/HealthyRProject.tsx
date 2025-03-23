
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, X } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface HealthyRProjectProps {
  index: number;
}

export function HealthyRProject({ index }: HealthyRProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  React.useEffect(() => {
    // Set visible after a short delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const caseStudyImages = [
    "/lovable-uploads/Health1.png",
    "/lovable-uploads/Health2.png",
    "/lovable-uploads/Health3.png",
    "/lovable-uploads/Health4.png",
    "/lovable-uploads/Health5.png",
    "/lovable-uploads/Health6.png",
    "/lovable-uploads/Health7.png",
    "/lovable-uploads/Health8.png",
    "/lovable-uploads/Health9.png",
    "/lovable-uploads/Health10.png",
    "/lovable-uploads/Health11.png",
  ];

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
              src={caseStudyImages[0]} 
              alt="HealthyR Project" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-100 text-green-600">UX/UI Design</span>
          </div>
          <h3 className="text-xl font-bold">HealthyR</h3>
          <p className="text-sm text-muted-foreground mt-2">An App that helps you with mental, emotional and physical wellbeing.</p>
        </div>
      </div>

      {/* Full Case Study Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] p-0 bg-background">
          <DialogClose className="absolute right-4 top-4 p-2 z-50 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40 transition-colors">
            <X className="h-5 w-5" />
          </DialogClose>
          
          <ScrollArea className="max-h-[90vh] overflow-y-auto">
            <div className="case-study-container">
              {caseStudyImages.map((img, idx) => (
                <img 
                  key={idx}
                  src={img}
                  alt={`HealthyR case study slide ${idx+1}`}
                  className="w-full"
                  loading={idx > 2 ? "lazy" : "eager"}
                />
              ))}
              
              <div className="bg-[#001808] text-white py-10 px-6 text-center">
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
    </>
  );
}
