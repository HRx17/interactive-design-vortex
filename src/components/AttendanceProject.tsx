
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, X } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AttendanceProjectProps {
  index: number;
}

export function AttendanceProject({ index }: AttendanceProjectProps) {
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
          <div className="w-full h-full rounded-lg overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="inline-block bg-white/10 backdrop-blur-md p-3 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Attendance System</h3>
              <p className="text-white/80 mt-2 text-sm">React • Node.js • MongoDB</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-600">Full Stack</span>
          </div>
          <h3 className="text-xl font-bold">Attendance App</h3>
          <p className="text-sm text-muted-foreground mt-2">Automated attendance tracking system with facial recognition.</p>
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
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Attendance Tracking System</h1>
                
                <div className="aspect-video bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-8 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="inline-block bg-white/10 backdrop-blur-md p-6 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Attendance System</h2>
                    <p className="text-white/80 text-lg">Full-stack web application</p>
                  </div>
                </div>
                
                <div className="space-y-8 mb-8">
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                    <p className="text-muted-foreground">
                      The Attendance Tracking System is an innovative solution designed to automate the process of tracking attendance in educational and corporate environments. Using facial recognition technology, the system eliminates the need for manual attendance checks and provides real-time insights into attendance patterns.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Facial recognition-based attendance marking</li>
                      <li>Real-time attendance dashboard</li>
                      <li>Automated reporting and analytics</li>
                      <li>Integration with existing student/employee databases</li>
                      <li>Mobile companion app for remote attendance</li>
                      <li>Customizable attendance policies</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">MongoDB</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">TensorFlow.js</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">WebRTC</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">Express</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm">JWT</span>
                    </div>
                  </section>
                </div>
                
                <div className="text-center py-8 border-t border-border">
                  <h2 className="text-2xl font-bold mb-4">Want to learn more?</h2>
                  <a 
                    href="https://github.com/haetranpariya" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
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
