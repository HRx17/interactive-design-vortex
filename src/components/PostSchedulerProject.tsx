
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, X } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PostSchedulerProjectProps {
  index: number;
}

export function PostSchedulerProject({ index }: PostSchedulerProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  React.useEffect(() => {
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
          <div className="w-full h-full rounded-lg overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="inline-block bg-white/10 backdrop-blur-md p-3 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Post Scheduler</h3>
              <p className="text-white/80 mt-2 text-sm">React • TypeScript • Firebase</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-600">Web Development</span>
          </div>
          <h3 className="text-xl font-bold">Post Scheduler App</h3>
          <p className="text-sm text-muted-foreground mt-2">A content management and scheduling application for social media posts.</p>
        </div>
      </div>

      {/* Full Case Study Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] p-0 bg-background">
          <DialogClose className="absolute right-4 top-4 p-2 z-50 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40 transition-colors">
            <X className="h-5 w-5" />
          </DialogClose>
          
          <ScrollArea className="max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-10">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Post Scheduler App</h1>
                
                <div className="aspect-video bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl mb-8 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="inline-block bg-white/10 backdrop-blur-md p-6 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                        <path d="M8 14h.01" />
                        <path d="M12 14h.01" />
                        <path d="M16 14h.01" />
                        <path d="M8 18h.01" />
                        <path d="M12 18h.01" />
                        <path d="M16 18h.01" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Post Scheduler</h2>
                    <p className="text-white/80 text-lg">Full-stack web application</p>
                  </div>
                </div>
                
                <div className="space-y-8 mb-8">
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                    <p className="text-muted-foreground">
                      The Post Scheduler is a comprehensive content management system designed to streamline the process of creating, scheduling, and publishing social media content across multiple platforms. Built with React, TypeScript, and Firebase, this application offers a robust solution for content creators and marketing teams.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Intuitive drag-and-drop content calendar</li>
                      <li>Multi-platform posting capabilities</li>
                      <li>Content approval workflows</li>
                      <li>Analytics dashboard</li>
                      <li>Team collaboration tools</li>
                      <li>Media library management</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">TypeScript</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">Firebase</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">Redux</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">Material UI</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">Express</span>
                    </div>
                  </section>
                </div>
                
                <div className="text-center py-8 border-t border-border">
                  <h2 className="text-2xl font-bold mb-4">Want to learn more?</h2>
                  <a 
                    href="https://github.com/haetranpariya" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                  >
                    <span>View Code on GitHub</span>
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
