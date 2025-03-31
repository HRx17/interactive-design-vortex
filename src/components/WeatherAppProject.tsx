
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

interface WeatherAppProjectProps {
  index: number;
}

export function WeatherAppProject({ index }: WeatherAppProjectProps) {
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
    "/lovable-uploads/efc63ad4-1a76-470a-96f0-74a08ed01a6f.png",
    "/lovable-uploads/e4152d05-8a49-4c32-b9e9-014dcf1b39ec.png",
    "/lovable-uploads/3d862fdf-d921-4694-8cdc-d66cc1e10644.png",
    "/lovable-uploads/6a6ef6cf-5294-4523-b071-419842917556.png",
    "/lovable-uploads/a7439ce2-7f81-4a0b-8232-a5fc9e4c12af.png",
    "/lovable-uploads/cc5f0091-fd95-4b91-89db-f7de3e96a15c.png",
    "/lovable-uploads/663d3492-8371-4628-b10d-568b858e5004.png",
    "/lovable-uploads/f6bd9f18-7759-4a67-b4bc-99f4e740650f.png",
    "/lovable-uploads/f43468b2-7934-4c1d-a36e-75472388ff29.png",
    "/lovable-uploads/62d45b31-511d-490d-b9d9-4ac880ab5c6b.png",
    "/lovable-uploads/0d1d146b-6285-4b50-9a1c-955f82fe8841.png",
    "/lovable-uploads/c56e21f0-b78c-49b9-a2e4-e503b5d7a07a.png",
    "/lovable-uploads/38727636-d170-46e8-aab7-f123f179d688.png",
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
              alt="Weather App Project" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-600">UX/UI Design</span>
          </div>
          <h3 className="text-xl font-bold">Weather App</h3>
          <p className="text-sm text-muted-foreground mt-2">Weather app designs for different user archetypes with unique UI approaches.</p>
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
                  alt={`Weather App case study slide ${idx+1}`}
                  className="w-full"
                  loading={idx > 2 ? "lazy" : "eager"}
                />
              ))}
              
              <div className="bg-[#1e3a8a] text-white py-10 px-6 text-center">
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
