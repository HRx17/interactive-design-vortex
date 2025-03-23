
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Project } from '../types/project';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ProjectCaseStudyProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({
  isOpen,
  onClose,
  project
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary text-primary">
                {project.category}
              </span>
            </div>
            <a 
              href={project.behanceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-emerald-400 flex items-center gap-1 hover:text-emerald-300 transition-all"
            >
              View on Behance <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          {project.images.length > 0 && (
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg">
                        <img 
                          src={image} 
                          alt={`${project.title} - image ${index + 1}`} 
                          className="w-full object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-6">
                <CarouselPrevious className="relative static translate-y-0" />
                <CarouselNext className="relative static translate-y-0" />
              </div>
            </Carousel>
          )}
          
          <div className="mt-6 space-y-4">
            <h3 className="text-xl font-semibold">Overview</h3>
            <p className="text-muted-foreground">{project.description}</p>
            
            {project.overview && (
              <div className="mt-4">
                {project.overview.map((paragraph, index) => (
                  <p key={index} className="mb-3 text-muted-foreground">{paragraph}</p>
                ))}
              </div>
            )}
            
            <Collapsible className="w-full mt-6">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted rounded-md hover:bg-muted/80 transition-colors text-left">
                <h3 className="text-xl font-semibold">Project Details</h3>
                <span className="text-muted-foreground text-sm">Click to expand</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 px-4 space-y-6 animate-accordion-down">
                {project.challenges && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Challenges</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {project.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.outcomes && (
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Outcomes</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {project.outcomes.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCaseStudy;
