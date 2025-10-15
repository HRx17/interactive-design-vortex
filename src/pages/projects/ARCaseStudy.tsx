import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function ARCaseStudy() {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="section-container py-4">
          <Button variant="ghost" className="gap-2" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-73px)]">
        <div className="case-study-container">
          <div className="space-y-6">
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
          </div>
          
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
    </div>
  );
}
