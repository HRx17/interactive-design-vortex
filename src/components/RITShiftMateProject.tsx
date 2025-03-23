
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

interface RITShiftMateProjectProps {
  index: number;
}

export function RITShiftMateProject({ index }: RITShiftMateProjectProps) {
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
    "/lovable-uploads/4759a7f6-6f7c-4441-b12d-98d51c19b2e1.png",
    "/lovable-uploads/915eab9b-6e55-453e-9b81-3e7de11015fd.png",
    "/lovable-uploads/b68ea382-3338-4c9e-8272-7c520c85eb25.png",
    "/lovable-uploads/a65bdb0d-f2cc-4e61-b901-e0db0b190336.png",
    "/lovable-uploads/72abd1af-4ac3-40df-ba3f-efffe7591421.png",
    "/lovable-uploads/9f75e93c-1a5f-4cde-964c-dbd4673d7a8b.png",
    "/lovable-uploads/33d386c0-68be-47e8-ae52-6798affe8b64.png",
    "/lovable-uploads/f01a77e5-acc2-42a9-b22e-291974668019.png",
    "/lovable-uploads/f703921c-399e-4ef7-98eb-3bf61fe9f4c4.png",
    "/lovable-uploads/b5dd574f-8dcd-474f-97f3-735ea518c899.png",
    "/lovable-uploads/2b498a0a-e855-4238-b576-066dac5652c2.png",
    "/lovable-uploads/38892388-8ddb-4676-a19f-d1a3c300bc2d.png",
    "/lovable-uploads/b7cc8537-b6c4-4d27-a1d4-8bd3a67bb9f4.png",
    "/lovable-uploads/0e0a2e03-c609-432e-bf18-91931602e7ee.png"
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
          <DialogClose className="absolute right-4 top-4 p-2 z-50 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40 transition-colors">
            <X className="h-5 w-5" />
          </DialogClose>
          
          <ScrollArea className="max-h-[90vh] overflow-y-auto">
            <div className="case-study-container">
              {caseStudyImages.map((img, idx) => (
                <img 
                  key={idx}
                  src={img}
                  alt={`RIT ShiftMate case study slide ${idx+1}`}
                  className="w-full"
                  loading={idx > 2 ? "lazy" : "eager"}
                />
              ))}
              
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
    </>
  );
}
