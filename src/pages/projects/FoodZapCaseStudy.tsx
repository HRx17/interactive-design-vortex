import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function FoodZapCaseStudy() {
  const caseStudyImages = [
    "/lovable-uploads/Group89.png",
    "/lovable-uploads/Group90.png",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="section-container py-4">
          <Link to="/#projects">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-73px)]">
        <div className="w-full">
          <div className="space-y-6">
            {caseStudyImages.map((img, idx) => (
              <img 
                key={idx}
                src={img}
                alt={`FoodZap case study slide ${idx+1}`}
                className="w-full"
                loading={idx > 2 ? "lazy" : "eager"}
              />
            ))}
          </div>
          
          <div className="bg-[#8E9A92] text-white py-10 px-6 text-center">
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
    </div>
  );
}
