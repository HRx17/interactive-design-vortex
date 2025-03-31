
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, X } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface WaahTvProjectProps {
  index: number;
}

export function WaahTvProject({ index }: WaahTvProjectProps) {
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
          <div className="w-full h-full rounded-lg overflow-hidden bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="inline-block bg-white/10 backdrop-blur-md p-3 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                  <polyline points="17 2 12 7 7 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">WaahTv.com</h3>
              <p className="text-white/80 mt-2 text-sm">React • Redux • AWS</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-red-100 text-red-600">Web Platform</span>
          </div>
          <h3 className="text-xl font-bold">WaahTv.com</h3>
          <p className="text-sm text-muted-foreground mt-2">Streaming platform featuring curated content for global audiences.</p>
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
                <h1 className="text-3xl md:text-4xl font-bold mb-6">WaahTv.com</h1>
                
                <div className="aspect-video bg-gradient-to-r from-red-500 to-orange-500 rounded-xl mb-8 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="inline-block bg-white/10 backdrop-blur-md p-6 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                        <polyline points="17 2 12 7 7 2" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">WaahTv.com</h2>
                    <p className="text-white/80 text-lg">Content Streaming Platform</p>
                  </div>
                </div>
                
                <div className="space-y-8 mb-8">
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                    <p className="text-muted-foreground">
                      WaahTv.com is a cutting-edge streaming platform designed to deliver curated content to global audiences. The platform features a diverse range of entertainment options, from original series to licensed content, all accessible through an intuitive and responsive interface.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Personalized content recommendations</li>
                      <li>Multi-device streaming capabilities</li>
                      <li>Advanced content search and filtering</li>
                      <li>User profiles and watchlists</li>
                      <li>Content categories and curated collections</li>
                      <li>High-definition streaming with adaptive bitrate</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">Redux</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">AWS</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">CloudFront</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">Express</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">MongoDB</span>
                    </div>
                  </section>
                </div>
                
                <div className="text-center py-8 border-t border-border">
                  <h2 className="text-2xl font-bold mb-4">Visit the Platform</h2>
                  <a 
                    href="https://waahtv.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-lg transition-colors"
                  >
                    <span>Visit WaahTv.com</span>
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
