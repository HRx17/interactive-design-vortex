import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, X, Clock, Users, TrendingUp, CalendarDays } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProjectMetadata } from '@/components/ProjectMetadata';
import { MetricCard } from '@/components/MetricCard';

interface RITShiftMateProjectProps {
  index: number;
}

export function RITShiftMateProject({ index }: RITShiftMateProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const caseStudyImages = [
    "/lovable-uploads/RIT1.png",
    "/lovable-uploads/RIT2.png",
    "/lovable-uploads/RIT3.png",
    "/lovable-uploads/RIT4.png",
    "/lovable-uploads/RIT5.png",
    "/lovable-uploads/RIT6.png",
    "/lovable-uploads/RIT7.png",
    "/lovable-uploads/RIT8.png",
    "/lovable-uploads/RIT9.png",
    "/lovable-uploads/RIT10.png",
    "/lovable-uploads/RIT11.png",
    "/lovable-uploads/RIT12.png",
    "/lovable-uploads/RIT13.png",
    "/lovable-uploads/RIT14.png"
  ];

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
              src={caseStudyImages[0]} 
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
          <DialogClose className="absolute right-4 top-4 p-2 z-50 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40 transition-colors">
            <X className="h-5 w-5" />
          </DialogClose>

          <ScrollArea className="max-h-[90vh] overflow-y-auto">
            <div className="case-study-container">
              {/* Header */}
              <div className="relative">
                <img 
                  src={caseStudyImages[0]} 
                  alt="RIT ShiftMate Header" 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end p-6">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-orange-500/80 text-white inline-block w-fit mb-4">Campus Workforce Management</span>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">RIT ShiftMate</h1>
                  <p className="text-white/80 mt-2 max-w-2xl">Simplifying shift scheduling and work-hour tracking for student employees</p>
                </div>
              </div>
              
              {/* Project Overview */}
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                
                <ProjectMetadata
                  role="UX/UI Designer & Researcher"
                  duration="4 months"
                  team="4 members (2 designers, 2 developers)"
                  tools={["Figma", "Miro", "Maze", "Google Forms"]}
                  tags={["User Research", "Information Architecture", "Prototyping", "Usability Testing", "Mobile-First Design"]}
                />
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                    <p className="text-muted-foreground mb-4">
                      Student employees at RIT were struggling with managing their on-campus work shifts alongside their academic schedules. 
                      The existing system involved manual spreadsheets, email chains, and disconnected communication channels, leading to missed shifts, scheduling conflicts, and payroll confusion.
                    </p>
                    <p className="text-muted-foreground">
                      Managers also faced difficulties tracking student availability, coordinating shift swaps, and ensuring adequate staffing across multiple campus locations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                    <p className="text-muted-foreground mb-4">
                      RIT ShiftMate is a mobile-first platform that streamlines the entire shift management process. Students can view their schedules, request shift swaps, track their hours, and receive notifications—all in one place.
                    </p>
                    <p className="text-muted-foreground">
                      Managers get a centralized dashboard for scheduling, approving requests, and monitoring staffing levels, significantly reducing administrative overhead.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Impact Metrics */}
              <div className="p-6 md:p-10 bg-gradient-to-r from-orange-900/10 to-transparent">
                <h2 className="text-2xl font-bold mb-6">Expected Impact</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <MetricCard
                    icon={Clock}
                    value="60%"
                    label="Reduction in Scheduling Time"
                    color="text-orange-500"
                  />
                  <MetricCard
                    icon={Users}
                    value="500+"
                    label="Student Employees Served"
                    color="text-orange-500"
                  />
                  <MetricCard
                    icon={TrendingUp}
                    value="40%"
                    label="Fewer Missed Shifts"
                    color="text-orange-500"
                  />
                </div>
              </div>
              
              {/* Research & Discovery */}
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold mb-6">Research & Discovery</h2>
                <div className="space-y-6">
                  <div className="bg-card/30 p-6 rounded-xl">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <CalendarDays className="w-5 h-5 text-orange-500" />
                      User Research Insights
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>78% of student employees missed at least one shift due to poor communication or forgotten schedules</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Shift swap requests took an average of 2-3 days to process through email chains</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Students wanted mobile-first solutions to check schedules between classes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Managers spent 5+ hours per week on manual scheduling and availability coordination</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card/30 p-5 rounded-xl">
                      <h4 className="font-semibold mb-2">Pain Point 1</h4>
                      <p className="text-sm text-muted-foreground">Fragmented communication across email, text, and in-person conversations</p>
                    </div>
                    <div className="bg-card/30 p-5 rounded-xl">
                      <h4 className="font-semibold mb-2">Pain Point 2</h4>
                      <p className="text-sm text-muted-foreground">No easy way to request time off or swap shifts without manager intervention</p>
                    </div>
                    <div className="bg-card/30 p-5 rounded-xl">
                      <h4 className="font-semibold mb-2">Pain Point 3</h4>
                      <p className="text-sm text-muted-foreground">Difficulty tracking total work hours for payroll and academic balance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Design Process */}
              <div className="p-6 md:p-10 bg-gradient-to-r from-orange-900/10 to-transparent">
                <h2 className="text-2xl font-bold mb-6">Design Process</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-orange-500 mb-2">01</div>
                    <h3 className="font-semibold mb-3">Research</h3>
                    <p className="text-sm text-muted-foreground">Surveyed 50+ student employees and interviewed 8 campus managers to understand pain points</p>
                  </div>
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-orange-500 mb-2">02</div>
                    <h3 className="font-semibold mb-3">Ideation</h3>
                    <p className="text-sm text-muted-foreground">Mapped user flows, created personas for students and managers, prioritized features</p>
                  </div>
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-orange-500 mb-2">03</div>
                    <h3 className="font-semibold mb-3">Prototyping</h3>
                    <p className="text-sm text-muted-foreground">Developed wireframes, high-fidelity mockups, and interactive prototypes for testing</p>
                  </div>
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-orange-500 mb-2">04</div>
                    <h3 className="font-semibold mb-3">Testing</h3>
                    <p className="text-sm text-muted-foreground">Conducted usability tests with 15 students, iterated based on feedback</p>
                  </div>
                </div>
              </div>
              
              {/* Design Showcase */}
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold mb-6">Design Showcase</h2>
                <div className="space-y-4">
                  {caseStudyImages.slice(1).map((img, idx) => (
                    <img 
                      key={idx}
                      src={img}
                      alt={`RIT ShiftMate design showcase ${idx+1}`}
                      className="w-full rounded-xl shadow-lg"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
              
              {/* Key Features */}
              <div className="p-6 md:p-10 bg-gradient-to-r from-orange-900/10 to-transparent">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card/30 p-6 rounded-xl">
                    <h3 className="font-semibold mb-3">Smart Shift Scheduling</h3>
                    <p className="text-sm text-muted-foreground">Calendar-based interface with conflict detection and automatic notifications for upcoming shifts</p>
                  </div>
                  <div className="bg-card/30 p-6 rounded-xl">
                    <h3 className="font-semibold mb-3">Peer-to-Peer Shift Swaps</h3>
                    <p className="text-sm text-muted-foreground">Students can directly request shift swaps with colleagues, streamlining the approval process</p>
                  </div>
                  <div className="bg-card/30 p-6 rounded-xl">
                    <h3 className="font-semibold mb-3">Automatic Hour Tracking</h3>
                    <p className="text-sm text-muted-foreground">Real-time tracking of work hours with payroll integration and academic work-limit warnings</p>
                  </div>
                  <div className="bg-card/30 p-6 rounded-xl">
                    <h3 className="font-semibold mb-3">Manager Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Centralized view of all shifts, staffing levels, and pending requests across locations</p>
                  </div>
                </div>
              </div>
              
              {/* Results & Learnings */}
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold mb-6">Results & Learnings</h2>
                <div className="space-y-6">
                  <div className="bg-card/30 p-6 rounded-xl">
                    <h3 className="font-semibold mb-3">Project Outcomes</h3>
                    <p className="text-muted-foreground mb-4">
                      Usability testing showed a 92% task completion rate for core features like shift viewing and swap requests. 
                      Students appreciated the mobile-first approach and found the interface intuitive, with an average SUS score of 85/100.
                    </p>
                    <p className="text-muted-foreground">
                      Managers highlighted the time savings and improved visibility into staffing needs, expressing interest in piloting the app.
                    </p>
                  </div>
                  
                  <div className="bg-card/30 p-6 rounded-xl">
                    <h3 className="font-semibold mb-3">Key Learnings</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-1">→</span>
                        <span>Mobile-first is essential—students check schedules on-the-go between classes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-1">→</span>
                        <span>Notification strategy is critical—too many can be ignored, too few can lead to missed shifts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-1">→</span>
                        <span>Integration with existing systems (payroll, campus ID) was a top priority for managers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-1">→</span>
                        <span>Students valued peer-to-peer features that empowered them without constant manager oversight</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-[#BF5A24] text-white py-10 px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Project by: HAET RANPARIYA</h2>
                <p className="max-w-xl mx-auto mb-6 text-white/90">Designing solutions that solve real problems for real people.</p>
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
    </>
  );
}
