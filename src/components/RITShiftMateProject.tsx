
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, X, CheckCircle, Users, Clock, Calendar, Award } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

interface RITShiftMateProjectProps {
  index: number;
}

export function RITShiftMateProject({ index }: RITShiftMateProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Set visible after a short delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // Observer function to check if sections are visible
    const handleScroll = () => {
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // If the section is visible in the viewport
        if (rect.top < viewportHeight * 0.7 && rect.bottom > 0) {
          setActiveSection(index);
          section.classList.add('section-visible');
        }
      });
    };

    // Add scroll event listener
    const scrollArea = document.querySelector('.case-study-scroll-area');
    if (scrollArea) {
      scrollArea.addEventListener('scroll', handleScroll);
      
      // Trigger initial check
      setTimeout(() => {
        handleScroll();
      }, 300);
    }
    
    return () => {
      if (scrollArea) {
        scrollArea.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isOpen]);

  const caseStudyThumbnail = "/lovable-uploads/RIT1.png";

  return (
    <section>
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
              src={caseStudyThumbnail} 
              alt="RIT ShiftMate Project" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-orange-100 text-orange-600">UX/UI Design</span>
          </div>
          <h3 className="text-xl font-bold">RIT ShiftMate</h3>
          <p className="text-sm text-muted-foreground mt-2">An on-campus shift coordinator and work-hour manager for students.</p>
        </div>
      </div>

      {/* Full Case Study Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] p-0 bg-background">
          <DialogTitle className="sr-only">RIT ShiftMate Case Study</DialogTitle>
          <DialogDescription className="sr-only">
            A comprehensive case study on the RIT ShiftMate app design project
          </DialogDescription>
          <DialogClose className="absolute right-4 top-4 p-2 z-50 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40 transition-colors">
            <X className="h-5 w-5" />
          </DialogClose>
          
          <ScrollArea className="max-h-[90vh] overflow-y-auto case-study-scroll-area">
            <div className="case-study-container">
              {/* Section 1: Hero */}
              <div 
                ref={el => sectionsRef.current[0] = el}
                className="section fade-section bg-gradient-to-b from-[#BF5A24] to-[#E6793E] text-white py-12 md:py-20"
              >
                <div className="container mx-auto px-4 md:px-8">
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                    <div className="md:w-1/2 fade-right">
                      <h1 className="text-3xl md:text-5xl font-bold mb-4">RIT ShiftMate</h1>
                      <p className="text-lg md:text-xl opacity-90 mb-6">
                        A comprehensive shift management solution for RIT students,
                        designed to streamline scheduling and time tracking.
                      </p>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <span className="text-sm px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">UX Research</span>
                        <span className="text-sm px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">UI Design</span>
                        <span className="text-sm px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">Prototyping</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 overflow-hidden rounded-xl shadow-2xl fade-left">
                      <img 
                        src="/lovable-uploads/RIT1.png" 
                        alt="RIT ShiftMate Hero" 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Problem Statement */}
              <div 
                ref={el => sectionsRef.current[1] = el}
                className="section fade-section bg-white py-12 md:py-20"
              >
                <div className="container mx-auto px-4 md:px-8">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 fade-up">Problem Statement</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl fade-up" style={{ transitionDelay: '200ms' }}>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Current Challenges</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1"><Clock size={18} /></span>
                          <span className="text-gray-700">Students struggle with tracking work hours accurately</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1"><Calendar size={18} /></span>
                          <span className="text-gray-700">Coordination between different campus departments is difficult</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1"><Users size={18} /></span>
                          <span className="text-gray-700">Managers lack tools to efficiently schedule student workers</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl fade-up" style={{ transitionDelay: '400ms' }}>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Goals</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1"><CheckCircle size={18} /></span>
                          <span className="text-gray-700">Create an intuitive platform for shift management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1"><CheckCircle size={18} /></span>
                          <span className="text-gray-700">Streamline time tracking and reporting for students</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1"><CheckCircle size={18} /></span>
                          <span className="text-gray-700">Provide clear analytics for supervisors and administrators</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: User Research */}
              <div 
                ref={el => sectionsRef.current[2] = el}
                className="section fade-section bg-gray-50 py-12 md:py-20"
              >
                <div className="container mx-auto px-4 md:px-8">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 fade-up">User Research</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <Card className="fade-up p-6" style={{ transitionDelay: '200ms' }}>
                      <div className="text-orange-500 mb-4 flex justify-center">
                        <Users size={32} />
                      </div>
                      <h3 className="text-xl font-semibold text-center mb-2">25+ Interviews</h3>
                      <p className="text-gray-600 text-center">With students, supervisors, and administrators</p>
                    </Card>
                    <Card className="fade-up p-6" style={{ transitionDelay: '300ms' }}>
                      <div className="text-orange-500 mb-4 flex justify-center">
                        <Clock size={32} />
                      </div>
                      <h3 className="text-xl font-semibold text-center mb-2">4 Weeks</h3>
                      <p className="text-gray-600 text-center">Of intensive research and analysis</p>
                    </Card>
                    <Card className="fade-up p-6" style={{ transitionDelay: '400ms' }}>
                      <div className="text-orange-500 mb-4 flex justify-center">
                        <Award size={32} />
                      </div>
                      <h3 className="text-xl font-semibold text-center mb-2">3 Personas</h3>
                      <p className="text-gray-600 text-center">Developed to guide the design process</p>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="fade-right">
                      <img 
                        src="/lovable-uploads/RIT3.png" 
                        alt="User Research" 
                        className="w-full h-auto rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="self-center fade-left">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Key Insights</h3>
                      <ul className="space-y-4">
                        <li className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-gray-700">Students needed a simple way to clock in/out and view upcoming shifts</p>
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-gray-700">Supervisors wanted better visibility into attendance patterns</p>
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-gray-700">All users needed notifications for schedule changes and reminders</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Design Process */}
              <div 
                ref={el => sectionsRef.current[3] = el}
                className="section fade-section bg-white py-12 md:py-20"
              >
                <div className="container mx-auto px-4 md:px-8">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 fade-up">Design Process</h2>
                  
                  <div className="fade-up mb-12">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-0">
                      <div className="flex flex-col items-center w-full md:w-1/4 p-4">
                        <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mb-3">1</div>
                        <h3 className="text-lg font-semibold mb-2">Research</h3>
                        <p className="text-gray-600 text-center text-sm">Gathering insights from stakeholders</p>
                      </div>
                      <div className="flex flex-col items-center w-full md:w-1/4 p-4">
                        <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mb-3">2</div>
                        <h3 className="text-lg font-semibold mb-2">Ideation</h3>
                        <p className="text-gray-600 text-center text-sm">Sketching concepts and user flows</p>
                      </div>
                      <div className="flex flex-col items-center w-full md:w-1/4 p-4">
                        <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mb-3">3</div>
                        <h3 className="text-lg font-semibold mb-2">Prototyping</h3>
                        <p className="text-gray-600 text-center text-sm">Creating interactive wireframes</p>
                      </div>
                      <div className="flex flex-col items-center w-full md:w-1/4 p-4">
                        <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mb-3">4</div>
                        <h3 className="text-lg font-semibold mb-2">Testing</h3>
                        <p className="text-gray-600 text-center text-sm">Validating with users & iterating</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="flex flex-col gap-6 fade-right">
                      <img 
                        src="/lovable-uploads/RIT5.png" 
                        alt="Wireframing Process" 
                        className="w-full h-auto rounded-xl shadow-lg"
                      />
                      <img 
                        src="/lovable-uploads/RIT6.png" 
                        alt="User Flow Diagram" 
                        className="w-full h-auto rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="fade-left">
                      <div className="sticky top-20">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Design Evolution</h3>
                        <p className="text-gray-700 mb-6">
                          The design process started with sketches and wireframes to define the core user 
                          journeys and information architecture. Through multiple iterations and user 
                          feedback sessions, the interface evolved to better meet the needs of all 
                          stakeholders.
                        </p>
                        <div className="bg-orange-50 border border-orange-100 rounded-lg p-5">
                          <h4 className="text-lg font-medium text-orange-700 mb-3">Key Design Decisions</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span className="text-gray-700">Simplified dashboard with priority information</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span className="text-gray-700">One-tap clock in/out functionality</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span className="text-gray-700">Integrated notifications system</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span className="text-gray-700">Consistent color coding for shift status</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: UI Design */}
              <div 
                ref={el => sectionsRef.current[4] = el}
                className="section fade-section bg-gray-50 py-12 md:py-20"
              >
                <div className="container mx-auto px-4 md:px-8">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 fade-up">UI Design</h2>
                  
                  <div className="mb-12 fade-up">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-[#F37B3C] mb-2"></div>
                        <p className="text-sm font-medium">Primary</p>
                        <p className="text-xs text-gray-500">#F37B3C</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-[#23394D] mb-2"></div>
                        <p className="text-sm font-medium">Secondary</p>
                        <p className="text-xs text-gray-500">#23394D</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-[#4CAF50] mb-2"></div>
                        <p className="text-sm font-medium">Success</p>
                        <p className="text-xs text-gray-500">#4CAF50</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-[#F44336] mb-2"></div>
                        <p className="text-sm font-medium">Error</p>
                        <p className="text-xs text-gray-500">#F44336</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="col-span-1 md:col-span-2 fade-right">
                      <div className="bg-[#23394D] p-6 md:p-10 rounded-xl">
                        <div className="flex flex-wrap gap-8 justify-center">
                          <div className="phone-mockup">
                            <div className="phone-screen rounded-[32px] overflow-hidden shadow-2xl">
                              <img 
                                src="/lovable-uploads/RIT7.png" 
                                alt="App Dashboard" 
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                          <div className="phone-mockup">
                            <div className="phone-screen rounded-[32px] overflow-hidden shadow-2xl">
                              <img 
                                src="/lovable-uploads/RIT8.png" 
                                alt="Shift Details" 
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                          <div className="phone-mockup">
                            <div className="phone-screen rounded-[32px] overflow-hidden shadow-2xl">
                              <img 
                                src="/lovable-uploads/RIT9.png" 
                                alt="Schedule View" 
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 fade-left">
                      <div className="sticky top-20">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                          <h3 className="text-xl font-semibold text-gray-800 mb-4">Design System</h3>
                          <p className="text-gray-700 mb-6">
                            A comprehensive design system was created to ensure consistency across 
                            all screens and to streamline the development process.
                          </p>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-500 mb-2">TYPOGRAPHY</h4>
                              <p className="text-2xl font-bold">Display</p>
                              <p className="text-xl">Heading</p>
                              <p className="text-base">Body Text</p>
                              <p className="text-sm">Caption</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-500 mb-2">COMPONENTS</h4>
                              <div className="flex gap-2 flex-wrap">
                                <button className="px-4 py-2 bg-[#F37B3C] text-white rounded-lg text-sm">Primary Button</button>
                                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm">Secondary</button>
                                <span className="px-3 py-1 bg-[#F37B3C]/10 text-[#F37B3C] rounded-full text-xs">Badge</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6: Final Prototype */}
              <div 
                ref={el => sectionsRef.current[5] = el}
                className="section fade-section bg-white py-12 md:py-20"
              >
                <div className="container mx-auto px-4 md:px-8">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 fade-up">Final Prototype</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                    <div className="fade-right">
                      <div className="relative">
                        <img 
                          src="/lovable-uploads/RIT11.png" 
                          alt="Interactive Prototype" 
                          className="w-full h-auto rounded-xl shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center">
                          <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                            View Prototype
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="fade-left">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">User Testing Results</h3>
                      <div className="space-y-6">
                        <div className="bg-gray-50 p-5 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">Task Success Rate</span>
                            <span className="text-green-600 font-medium">94%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '94%' }}></div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">User Satisfaction</span>
                            <span className="text-green-600 font-medium">4.8/5</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '96%' }}></div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">Time on Task</span>
                            <span className="text-orange-500 font-medium">-35%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">Compared to current system</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7: Outcome and Impact */}
              <div 
                ref={el => sectionsRef.current[6] = el}
                className="section fade-section bg-gray-50 py-12 md:py-20"
              >
                <div className="container mx-auto px-4 md:px-8">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 fade-up">Outcome & Impact</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <Card className="p-6 border-t-4 border-t-green-500 fade-up" style={{ transitionDelay: '200ms' }}>
                      <h3 className="text-xl font-semibold mb-3">30%</h3>
                      <p className="text-gray-700">Reduction in scheduling conflicts</p>
                    </Card>
                    <Card className="p-6 border-t-4 border-t-green-500 fade-up" style={{ transitionDelay: '300ms' }}>
                      <h3 className="text-xl font-semibold mb-3">45%</h3>
                      <p className="text-gray-700">Less administrative time spent on scheduling</p>
                    </Card>
                    <Card className="p-6 border-t-4 border-t-green-500 fade-up" style={{ transitionDelay: '400ms' }}>
                      <h3 className="text-xl font-semibold mb-3">90%</h3>
                      <p className="text-gray-700">Positive feedback from student workers</p>
                    </Card>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="fade-right">
                      <img 
                        src="/lovable-uploads/RIT13.png" 
                        alt="Project Outcome" 
                        className="w-full h-auto rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="fade-left">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Key Takeaways</h3>
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          The ShiftMate project demonstrates how thoughtful design can solve complex 
                          organizational challenges and improve daily experiences for multiple user groups.
                        </p>
                        <div className="bg-orange-50 border border-orange-100 rounded-lg p-5">
                          <h4 className="text-lg font-medium text-orange-700 mb-3">What I Learned</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span className="text-gray-700">Balancing the needs of different stakeholders</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span className="text-gray-700">Designing for complex workflows while maintaining simplicity</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span className="text-gray-700">The importance of continuous user testing and iteration</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-[#BF5A24] text-white py-10 px-6 text-center">
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
        </DialogContent>
      </Dialog>

      <style>
        {`
        .section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .section-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          transition-delay: 100ms;
        }
        
        .fade-right {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          transition-delay: 200ms;
        }
        
        .fade-left {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          transition-delay: 200ms;
        }
        
        .section-visible .fade-up,
        .section-visible .fade-right,
        .section-visible .fade-left {
          opacity: 1;
          transform: translate(0);
        }
        
        .phone-mockup {
          width: ${isMobile ? '140px' : '180px'};
          padding: 8px;
          transition: transform 0.3s ease;
        }
        
        .phone-mockup:hover {
          transform: translateY(-10px);
        }
        
        .phone-screen {
          border: 4px solid #333;
          border-radius: 32px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        `}
      </style>
    </section>
  );
}
