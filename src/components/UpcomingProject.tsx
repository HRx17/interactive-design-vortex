
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X, ExternalLink } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

interface UpcomingProjectProps {
  index: number;
}

export function UpcomingProject({ index }: UpcomingProjectProps) {
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

  // Cover image for the project card (using the last image from the array)
  const coverImage = "/lovable-uploads/b9c4ca15-5989-4244-90d9-de2cb6f747eb.png";

  // Array of images for the detailed case study in reverse order (last to first)
  const caseStudyImages = [
    "/lovable-uploads/b9c4ca15-5989-4244-90d9-de2cb6f747eb.png",
    "/lovable-uploads/1a4e83d1-a197-4880-886c-748f9af505d7.png",
    "/lovable-uploads/a3bc2b03-24b2-452c-bc4f-943879f35f0c.png",
    "/lovable-uploads/40c6b33e-12ba-475b-80dd-1e7e61d34d79.png",
    "/lovable-uploads/88af03d0-7217-433e-9838-870ddbec6d92.png",
    "/lovable-uploads/47e30545-06d0-4588-af03-fb8c707abab7.png",
    "/lovable-uploads/7af53f86-2561-4cf1-8d26-82d478ec7b59.png",
    "/lovable-uploads/53a9e943-f2d7-4061-90ff-4588dff4a699.png",
    "/lovable-uploads/68bde57b-779c-497e-be33-dea6ba8834a8.png",
    "/lovable-uploads/e6c733a0-15f5-4f5b-80b5-d968f89c3f5b.png",
    "/lovable-uploads/37bc024c-9988-4145-9288-d950af6b72c5.png",
    "/lovable-uploads/1497f8ac-58ba-4b12-9413-b540e5ac41d4.png",
    "/lovable-uploads/d1206f5c-189d-427b-93b8-b82ff662ed6b.png",
    "/lovable-uploads/f867e9fc-cd97-40f0-b227-696b092580e0.png",
    "/lovable-uploads/f6dbc0ba-a340-475f-98a5-b4611953f905.png",
    "/lovable-uploads/544935c7-7062-4776-bbe3-9b4354f88150.png",
  ];

  return (
    <>
      <Card 
        ref={projectRef}
        onClick={toggleExpand}
        className={cn(
          "border border-border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-full",
          "opacity-0 transform translate-y-12",
          isVisible && "opacity-100 translate-y-0"
        )}
        style={{ 
          transitionDelay: `${index * 100}ms`, 
          transitionDuration: '600ms'
        }}
      >
        <div className="relative">
          <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full z-10">
            Upcoming
          </div>
          <AspectRatio ratio={16/9} className="p-2">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <img 
                src={coverImage} 
                alt="Upcoming Project" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: "left center" }}
                loading="lazy"
              />
            </div>
          </AspectRatio>
          <CardContent className="p-5">
            <h3 className="text-lg font-bold mb-1">Upcoming Project</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              A modern user interface design focused on personalized experiences with innovative visual elements.
            </p>
          </CardContent>
        </div>
      </Card>

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
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Upcoming Project</h2>
                <p className="text-muted-foreground mb-6">
                  A next-generation UI/UX design concept focused on modern visual elements and user engagement
                </p>
                
                <div className="grid gap-6 mb-8">
                  {/* Main showcase image - shifted to the left */}
                  <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={caseStudyImages[0]} 
                      alt="Project Cover" 
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "left center" }}
                    />
                  </div>
                  
                  {/* Case study images gallery - one image per row */}
                  <div className="grid grid-cols-1 gap-6">
                    {caseStudyImages.slice(1).map((img, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={img} 
                          alt={`Case Study ${idx + 1}`} 
                          className="w-full h-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid gap-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="overview">
                      <AccordionTrigger className="text-xl font-bold">Project Overview</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p>This upcoming project focuses on creating an innovative interface design with emphasis on visual hierarchy, user flow, and engaging interactions. The concept explores new approaches to digital experiences through thoughtful design elements.</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="process">
                      <AccordionTrigger className="text-xl font-bold">Design Process</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p>The design process for this project involves:</p>
                        <ol className="list-decimal pl-5 mt-3 space-y-2">
                          <li>User research and persona development</li>
                          <li>Problem definition through "How Might We" questions</li>
                          <li>Flow diagram creation and user journey mapping</li>
                          <li>Wireframing and visual design exploration</li>
                          <li>Interactive prototype development</li>
                          <li>Usability testing and iteration</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="features">
                      <AccordionTrigger className="text-xl font-bold">Key Features</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Modern visual design system with consistent components</li>
                          <li>Thoughtful micro-interactions for enhanced user experience</li>
                          <li>Accessible interface elements that work for all users</li>
                          <li>Responsive layouts optimized for multiple devices</li>
                          <li>Dark and light mode with seamless transitions</li>
                          <li>Data visualization components for complex information</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="tools">
                      <AccordionTrigger className="text-xl font-bold">Tools & Technologies</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {["Figma", "Adobe XD", "Sketch", "InVision", "Photoshop", "After Effects"].map(tool => (
                            <span key={tool} className="px-3 py-1 bg-secondary/50 rounded-full text-sm font-medium">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
