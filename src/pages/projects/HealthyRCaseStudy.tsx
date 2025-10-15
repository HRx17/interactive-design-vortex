import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Users, TrendingUp, Target, Lightbulb, Palette } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function HealthyRCaseStudy() {
  const caseStudyImages = [
    "/lovable-uploads/Health1.png",
    "/lovable-uploads/Health2.png",
    "/lovable-uploads/Health3.png",
    "/lovable-uploads/Health4.png",
    "/lovable-uploads/Health5.png",
    "/lovable-uploads/Health6.png",
    "/lovable-uploads/Health7.png",
    "/lovable-uploads/Health8.png",
    "/lovable-uploads/Health9.png",
    "/lovable-uploads/Health10.png",
    "/lovable-uploads/Health11.png",
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
              alt="HealthyR Hero" 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end p-6 md:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-500/80 text-white">Personal Project</span>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/80 text-white">Mobile App Design</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white">HealthyR</h1>
              <p className="text-white/80 mt-2 max-w-2xl">A holistic wellness application supporting mental, emotional, and physical health</p>
              <div className="flex flex-wrap gap-6 mt-4 text-sm text-white/70">
                <div>
                  <span className="font-semibold">Role:</span> Lead UX/UI Designer
                </div>
                <div>
                  <span className="font-semibold">Timeline:</span> 6 weeks
                </div>
                <div>
                  <span className="font-semibold">Platform:</span> iOS & Android
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Banner */}
          <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 py-8">
            <div className="max-w-5xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">85%</div>
                  <div className="text-sm text-muted-foreground mt-1">User Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">40%</div>
                  <div className="text-sm text-muted-foreground mt-1">Improved Task Success</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">3.5x</div>
                  <div className="text-sm text-muted-foreground mt-1">User Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">92%</div>
                  <div className="text-sm text-muted-foreground mt-1">Would Recommend</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Overview Section */}
          <div className="case-study-section">
            <h2 className="text-2xl font-bold mb-6">Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-500" />
                    The Problem
                  </h3>
                  <p className="text-muted-foreground">
                    Young adults struggle to maintain consistent wellness habits due to fragmented health tracking tools and lack of personalized guidance. Mental health support remains stigmatized and difficult to access, while physical health apps ignore the emotional component of wellbeing.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-green-500" />
                    The Solution
                  </h3>
                  <p className="text-muted-foreground">
                    HealthyR integrates mental, emotional, and physical wellness into a single, intuitive platform. The app provides personalized daily check-ins, guided meditation, mood tracking, fitness plans, and community support—all designed to make holistic health accessible and stigma-free.
                  </p>
                </div>
              </div>
              <div className="bg-card/50 rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  My Role
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    Led end-to-end UX research and design strategy
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    Conducted user interviews with 25+ young adults
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    Created wireframes, prototypes, and design system
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    Validated designs through usability testing sessions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    Collaborated with mental health professionals for feature validation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Research & Discovery */}
          <div className="case-study-section bg-gradient-to-r from-green-900/10 to-transparent">
            <h2 className="text-2xl font-bold mb-6">Research & Discovery</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">User Research Insights</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-green-500 mb-2">78%</div>
                    <p className="text-sm text-muted-foreground">Feel overwhelmed by separate health tracking apps</p>
                  </div>
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-green-500 mb-2">65%</div>
                    <p className="text-sm text-muted-foreground">Want mental health support but don't know where to start</p>
                  </div>
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-green-500 mb-2">82%</div>
                    <p className="text-sm text-muted-foreground">Prefer personalized recommendations over generic advice</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Key Pain Points Identified</h3>
                <div className="space-y-3">
                  <div className="bg-card/30 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Fragmentation Fatigue</h4>
                    <p className="text-sm text-muted-foreground">Users reported feeling exhausted managing 3-5 different wellness apps with inconsistent data</p>
                  </div>
                  <div className="bg-card/30 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Mental Health Stigma</h4>
                    <p className="text-sm text-muted-foreground">Many hesitated to use mental health apps due to privacy concerns and social stigma</p>
                  </div>
                  <div className="bg-card/30 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Lack of Holistic Approach</h4>
                    <p className="text-sm text-muted-foreground">Existing apps treat physical and mental health separately, missing the interconnected nature of wellness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design System & Visual Screens */}
          <div className="case-study-section">
            <h2 className="text-2xl font-bold mb-8">Design Showcase</h2>
            <div className="space-y-8">
              {caseStudyImages.slice(1).map((img, idx) => (
                <div key={idx} className="w-full">
                  <img 
                    src={img}
                    alt={`HealthyR screen ${idx + 1}`}
                    className="w-full rounded-xl shadow-lg"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Impact & Outcomes */}
          <div className="case-study-section bg-gradient-to-r from-green-900/10 to-transparent">
            <h2 className="text-2xl font-bold mb-6">Impact & Outcomes</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-4">User Feedback</h3>
                <div className="space-y-3">
                  <div className="bg-card/30 p-4 rounded-xl">
                    <p className="text-sm italic text-muted-foreground">"Finally, an app that understands wellness is more than just exercise. The mental health integration feels natural and not forced."</p>
                    <p className="text-xs text-muted-foreground mt-2">— Sarah, 24, Beta Tester</p>
                  </div>
                  <div className="bg-card/30 p-4 rounded-xl">
                    <p className="text-sm italic text-muted-foreground">"The daily check-ins have become a ritual. I love how it correlates my mood with my activities—it's eye-opening!"</p>
                    <p className="text-xs text-muted-foreground mt-2">— Marcus, 29, Beta Tester</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Lessons Learned</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">1.</span>
                    <p className="text-muted-foreground"><span className="font-semibold">Privacy is paramount:</span> Mental health data requires extra security measures and transparent communication about data usage.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">2.</span>
                    <p className="text-muted-foreground"><span className="font-semibold">Simplicity over features:</span> Users preferred a focused experience over feature bloat—less is more in wellness apps.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">3.</span>
                    <p className="text-muted-foreground"><span className="font-semibold">Community matters:</span> The social support feature became the most valued aspect, highlighting the importance of human connection in wellness journeys.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-[#001808] text-white py-10 px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Project by: HAET RANPARIYA</h2>
            <p className="max-w-xl mx-auto mb-6">A comprehensive wellness solution that bridges mental, emotional, and physical health into a unified, stigma-free experience.</p>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}