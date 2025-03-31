
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, X, MapPin, Car } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface ParkingAppProjectProps {
  index: number;
}

export function ParkingAppProject({ index }: ParkingAppProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  React.useEffect(() => {
    // Set visible after a short delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

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
              src="/lovable-uploads/2a9fc4ff-b9fa-4053-87ce-4de202e01975.png" 
              alt="Parking Finder App Project" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-600">Hackathon</span>
          </div>
          <h3 className="text-xl font-bold">Parking Finder</h3>
          <p className="text-sm text-muted-foreground mt-2">Car display app for finding and navigating to parking spots in real-time.</p>
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
              {/* Header Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/2a9fc4ff-b9fa-4053-87ce-4de202e01975.png" 
                  alt="Parking Finder App Header" 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end p-6">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/80 text-white inline-block w-fit mb-4">24-Hour Hackathon</span>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">Parking Finder App</h1>
                  <p className="text-white/80 mt-2 max-w-2xl">Simplifying parking experiences with real-time navigation and availability</p>
                </div>
              </div>
              
              {/* Video Embed Section */}
              <div className="p-6 md:p-10 bg-gradient-to-b from-blue-900/20 to-transparent">
                <h2 className="text-2xl font-bold mb-6">Project Demo</h2>
                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl">
                  <iframe 
                    src="https://player.vimeo.com/video/1025876016?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                    title="Prototype"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              
              {/* Project Overview */}
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-muted-foreground">
                      This app was conceived and developed during a 24-hour hackathon, aimed at solving one of the most common frustrations of urban driving: finding parking. 
                      The solution provides drivers with real-time information about parking availability, indoor parking navigation, and specialized filters for finding accessible or EV charging spots.
                    </p>
                    <p className="text-muted-foreground mt-4">
                      The app is designed to integrate directly with vehicle displays, providing a seamless driving-to-parking experience that eliminates the stress of finding a spot in busy urban environments.
                    </p>
                  </div>
                  <div className="bg-card/50 rounded-xl p-6 space-y-4">
                    <h3 className="font-semibold">Key Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Real-time parking availability with accurate indoor mapping</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Car className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Turn-by-turn navigation to specific parking spots</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-accessible">
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="7.5" r="1.5" />
                            <path d="M11.5 12h1" />
                            <path d="m10 9.5 2 2.5-2 2.5" />
                          </svg>
                        </div>
                        <span>Specialized filters for accessible parking options</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ev-charging">
                            <rect width="10" height="7" x="2" y="2" rx="2" />
                            <rect width="10" height="7" x="12" y="15" rx="2" />
                            <path d="m8 22-2-2" />
                            <path d="M6 22H2" />
                            <path d="M22 5h-4" />
                            <path d="m20 7-2-2" />
                            <path d="M8 9v5" />
                            <path d="M16 9v5" />
                            <path d="m5 6 2-1" />
                            <path d="m17 18 2-1" />
                          </svg>
                        </div>
                        <span>EV charging station locator built-in</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Design Process & Solution */}
              <div className="p-6 md:p-10 bg-gradient-to-r from-blue-900/10 to-transparent">
                <h2 className="text-2xl font-bold mb-6">Design Process</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card/30 p-5 rounded-xl">
                    <h3 className="font-semibold mb-3">Research</h3>
                    <p className="text-sm text-muted-foreground">Conducted rapid user interviews with drivers to identify key pain points in the parking experience.</p>
                  </div>
                  <div className="bg-card/30 p-5 rounded-xl">
                    <h3 className="font-semibold mb-3">Ideation</h3>
                    <p className="text-sm text-muted-foreground">Brainstormed solutions focusing on real-time data, integration with vehicle systems, and intuitive UI for driving.</p>
                  </div>
                  <div className="bg-card/30 p-5 rounded-xl">
                    <h3 className="font-semibold mb-3">Prototyping</h3>
                    <p className="text-sm text-muted-foreground">Developed interactive prototypes for testing with users while driving (in simulation environments).</p>
                  </div>
                </div>
              </div>
              
              {/* Conclusion & Contact */}
              <div className="bg-blue-600 text-white py-10 px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Hackathon Project by: HAET RANPARIYA</h2>
                <p className="max-w-xl mx-auto mb-6">This project demonstrates rapid ideation and execution, delivering a functional solution to a common problem within a tight 24-hour timeframe.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="https://www.behance.net/haetranpariya17" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-lg backdrop-blur-sm"
                  >
                    <span>View More Projects on Behance</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
