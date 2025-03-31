
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, X } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from '@/hooks/use-mobile';

interface ARProjectProps {
  index: number;
}

export function ARProject({ index }: ARProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    // Set visible after a short delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const caseStudyContent = [
    { type: "image", src: "/lovable-uploads/h1.png" },
    { type: "image", src: "/lovable-uploads/h2.png" },
    { type: "video", src: "https://www.youtube.com/embed/77vlfTa8X10?si=G5aZDIPwJUqbL05z" },
    { type: "image", src: "/lovable-uploads/hh.png" },
    { type: "image", src: "/lovable-uploads/h3.png" },
    { type: "image", src: "/lovable-uploads/h4.png" },
    { type: "image", src: "/lovable-uploads/h5.png" },
    { type: "video", src: "https://www.youtube.com/embed/NAD_Kot-t84?si=pCx8-3kDUoySOwaG" },
    { type: "image", src: "/lovable-uploads/h6.png" },
    { type: "video", src: "https://www.youtube.com/embed/BL654YYW5m0?si=asOgNqLg205b_kjg" },
    { type: "image", src: "/lovable-uploads/h7.png" },
    { type: "video", src: "https://www.youtube.com/embed/MniPfpXs74w?si=H99swviNUKRwZuzl" },
    { type: "image", src: "/lovable-uploads/h8.png" },
    { type: "video", src: "https://www.youtube.com/embed/xPe2nukLMaE?si=zaBGCzwieXt_KpDn" },
    { type: "image", src: "/lovable-uploads/h9.png" },
    { type: "video", src: "https://www.youtube.com/embed/0PoPD6UaLx8?si=6IjHag0h2zggX1-O" },
    { type: "image", src: "/lovable-uploads/h10.png" },
    { type: "video", src: "https://www.youtube.com/embed/p5qNTiH_8JI?si=ZKkHsHmjuCyCRIaP" },
    { type: "image", src: "/lovable-uploads/h11.png" },
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
              src={caseStudyContent[0].src}  
              alt="AR/VR Project Thumbnail"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-grey-100 text-black-600">AR/VR Design, Interaction Design</span>
          </div>
          <h3 className="text-xl font-bold">Mixed Reality Concept</h3>
          <p className="text-sm text-muted-foreground mt-2">Mixed Reality Futuristic Holographic Interaction Tech - Help Visualize Better.</p>
        </div>
      </div>

      {/* Full Case Study Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] p-0 bg-background">
          <DialogClose className="absolute right-4 top-4 p-2 z-50 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40 transition-colors">
            <X className="h-5 w-5" />
          </DialogClose>
          
          <ScrollArea className="max-h-[90vh] overflow-y-auto">
            <div className="case-study-container flex flex-col w-full">
              {caseStudyContent.map((item, idx) => (
                <div key={idx} className="w-full">
                  {item.type === "image" ? (
                    <img 
                      src={item.src}
                      alt={`AR/VR Project slide ${idx + 1}`}
                      className="w-full"
                      loading={idx > 2 ? "lazy" : "eager"}
                    />
                  ) : (
                    <div className="w-full aspect-video">
                      <iframe 
                        src={item.src}
                        className="w-full h-full"
                        title={`AR/VR Project video ${idx + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading={idx > 2 ? "lazy" : "eager"}
                      />
                    </div>
                  )}
                </div>
              ))}
              
              <div className="bg-[#ECECEC] text-black py-10 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Project by: HAET RANPARIYA</h2>
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
