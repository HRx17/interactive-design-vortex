import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function WeatherAppCaseStudy() {
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
                alt={`Weather App case study slide ${idx+1}`}
                className="w-full"
                loading={idx > 2 ? "lazy" : "eager"}
              />
            ))}
          </div>
          
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
    </div>
  );
}
