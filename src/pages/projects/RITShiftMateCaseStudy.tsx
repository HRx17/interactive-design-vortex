import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Calendar, TrendingUp, Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function RITShiftMateCaseStudy() {
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
        <div className="case-study-container">
          {/* Hero Section */}
          <div className="relative">
            <img 
              src={caseStudyImages[0]} 
              alt="RIT ShiftMate Hero" 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end p-6 md:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-orange-500/80 text-white">Academic Project</span>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/80 text-white">Mobile App Design</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white">RIT ShiftMate</h1>
              <p className="text-white/80 mt-2 max-w-2xl">Streamlining on-campus student employment and work-hour management at Rochester Institute of Technology</p>
              <div className="flex flex-wrap gap-6 mt-4 text-sm text-white/70">
                <div>
                  <span className="font-semibold">Role:</span> Lead UX/UI Designer
                </div>
                <div>
                  <span className="font-semibold">Timeline:</span> 8 weeks
                </div>
                <div>
                  <span className="font-semibold">Platform:</span> iOS & Android
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Banner */}
          <div className="bg-gradient-to-r from-orange-900/20 to-amber-900/20 py-8">
            <div className="max-w-5xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">67%</div>
                  <div className="text-sm text-muted-foreground mt-1">Faster Shift Swaps</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">89%</div>
                  <div className="text-sm text-muted-foreground mt-1">User Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">45%</div>
                  <div className="text-sm text-muted-foreground mt-1">Reduced No-Shows</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">2.5K+</div>
                  <div className="text-sm text-muted-foreground mt-1">Potential Users</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Overview Section */}
          <div className="p-6 md:p-10">
            <h2 className="text-2xl font-bold mb-6">Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-orange-500" />
                    The Problem
                  </h3>
                  <p className="text-muted-foreground">
                    Student workers at RIT struggled with fragmented shift management across multiple campus departments. Coordinating shift swaps involved endless group chats, lost messages, and manual paperwork. With no centralized system, students faced scheduling conflicts with classes, missed opportunities for extra shifts, and supervisors dealt with frequent no-shows and coverage gaps.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-orange-500" />
                    The Solution
                  </h3>
                  <p className="text-muted-foreground">
                    RIT ShiftMate is a unified mobile platform that integrates with existing campus systems to streamline shift scheduling, enable instant shift swaps, track work hours, and send smart notifications. The app connects student workers across departments while providing supervisors with real-time workforce visibility and automated reporting.
                  </p>
                </div>
              </div>
              <div className="bg-card/50 rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-500" />
                  My Role
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Conducted contextual inquiry with 20+ student workers and 5 supervisors
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Led user research, persona development, and journey mapping
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Created wireframes, interactive prototypes, and design system
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Facilitated usability testing with campus departments
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Coordinated with RIT IT to ensure system integration feasibility
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Research & Discovery */}
          <div className="p-6 md:p-10 bg-gradient-to-r from-orange-900/10 to-transparent">
            <h2 className="text-2xl font-bold mb-6">Research & Discovery</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Student Interviews & Insights</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-orange-500 mb-2">73%</div>
                    <p className="text-sm text-muted-foreground">Have missed shifts due to poor communication</p>
                  </div>
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-orange-500 mb-2">85%</div>
                    <p className="text-sm text-muted-foreground">Struggle to find shift coverage when needed</p>
                  </div>
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-orange-500 mb-2">91%</div>
                    <p className="text-sm text-muted-foreground">Want mobile-first scheduling solution</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card/30 p-6 rounded-xl">
                    <Calendar className="h-8 w-8 text-orange-500 mb-3" />
                    <h4 className="font-semibold mb-2">Smart Scheduling Dashboard</h4>
                    <p className="text-sm text-muted-foreground">Unified view of all shifts across departments with academic calendar integration to prevent conflicts.</p>
                  </div>
                  <div className="bg-card/30 p-6 rounded-xl">
                    <Users className="h-8 w-8 text-orange-500 mb-3" />
                    <h4 className="font-semibold mb-2">Instant Shift Swaps</h4>
                    <p className="text-sm text-muted-foreground">Request coverage with one tap—matching algorithm finds available students based on qualifications and availability.</p>
                  </div>
                  <div className="bg-card/30 p-6 rounded-xl">
                    <Clock className="h-8 w-8 text-orange-500 mb-3" />
                    <h4 className="font-semibold mb-2">Automated Time Tracking</h4>
                    <p className="text-sm text-muted-foreground">GPS-based clock-in/out with automatic timesheet generation and payroll system integration.</p>
                  </div>
                  <div className="bg-card/30 p-6 rounded-xl">
                    <CheckCircle2 className="h-8 w-8 text-orange-500 mb-3" />
                    <h4 className="font-semibold mb-2">Supervisor Dashboard</h4>
                    <p className="text-sm text-muted-foreground">Real-time workforce visibility, one-click approvals, and automated reporting for department heads.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Showcase */}
          <div className="p-6 md:p-10">
            <h2 className="text-2xl font-bold mb-6">Design Showcase</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudyImages.slice(1).map((img, idx) => (
                <img 
                  key={idx}
                  src={img}
                  alt={`RIT ShiftMate screen ${idx + 1}`}
                  className="w-full rounded-xl shadow-lg"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Impact & Outcomes */}
          <div className="p-6 md:p-10 bg-gradient-to-r from-orange-900/10 to-transparent">
            <h2 className="text-2xl font-bold mb-6">Impact & Outcomes</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-4">User Feedback</h3>
                <div className="space-y-3">
                  <div className="bg-card/30 p-4 rounded-xl">
                    <p className="text-sm italic text-muted-foreground">"This would have saved me so many headaches last semester. Finding shift coverage used to take forever—now it's instant!"</p>
                    <p className="text-xs text-muted-foreground mt-2">— Jordan, Computing Security Major, Library Worker</p>
                  </div>
                  <div className="bg-card/30 p-4 rounded-xl">
                    <p className="text-sm italic text-muted-foreground">"As a supervisor, being able to see coverage gaps in real-time and approve swaps from my phone is a game-changer."</p>
                    <p className="text-xs text-muted-foreground mt-2">— Dr. Chen, Campus Dining Manager</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Lessons Learned</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">1.</span>
                    <p className="text-muted-foreground"><span className="font-semibold">System integration is critical:</span> Early conversations with IT prevented design decisions that would have been impossible to implement within existing campus infrastructure.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">2.</span>
                    <p className="text-muted-foreground"><span className="font-semibold">Balance automation with control:</span> Students wanted efficiency but also control—fully automated scheduling was rejected in favor of intelligent suggestions with manual approval.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-[#BF5A24] text-white py-10 px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Project by: HAET RANPARIYA</h2>
            <p className="max-w-xl mx-auto mb-6">A comprehensive solution addressing real challenges faced by student workers at RIT, designed through extensive research and user-centered design principles.</p>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}