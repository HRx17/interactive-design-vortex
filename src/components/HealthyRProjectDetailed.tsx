import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, X, Heart, TrendingUp, Users, Brain } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProjectMetadata } from '@/components/ProjectMetadata';
import { MetricCard } from '@/components/MetricCard';

interface HealthyRProjectProps {
  index: number;
}

export function HealthyRProject({ index }: HealthyRProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

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
              alt="HealthyR Project" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-100 text-green-600">UX/UI Design</span>
          </div>
          <h3 className="text-xl font-bold">HealthyR</h3>
          <p className="text-sm text-muted-foreground mt-2">An App that helps you with mental, emotional and physical wellbeing.</p>
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
                  alt="HealthyR Header" 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end p-6">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-500/80 text-white inline-block w-fit mb-4">Mental Health & Wellness</span>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">HealthyR</h1>
                  <p className="text-white/80 mt-2 max-w-2xl">A comprehensive wellness app supporting mental, emotional, and physical health</p>
                </div>
              </div>
              
              {/* Project Overview */}
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                
                <ProjectMetadata
                  role="Lead UX/UI Designer"
                  duration="3 months"
                  team="Solo project"
                  tools={["Figma", "Adobe XD", "Miro", "Useberry"]}
                  tags={["User Research", "Wireframing", "Prototyping", "Usability Testing", "Visual Design", "Design Systems"]}
                />
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                    <p className="text-muted-foreground mb-4">
                      Mental health awareness is growing, but many people struggle to find a single platform that addresses their holistic wellbeing—mental, emotional, and physical health. 
                      Existing apps often focus on one aspect, leaving users juggling multiple tools.
                    </p>
                    <p className="text-muted-foreground">
                      The challenge was to design an intuitive, engaging app that helps users track and improve all aspects of their health while maintaining simplicity and reducing cognitive load.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                    <p className="text-muted-foreground mb-4">
                      HealthyR provides a unified platform with personalized wellness journeys, mood tracking, guided meditation, fitness integration, and professional support—all in one seamless experience.
                    </p>
                    <p className="text-muted-foreground">
                      Through extensive user research and iterative design, I created an experience that feels personal, non-judgmental, and empowering for users at any stage of their wellness journey.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Impact Metrics */}
              <div className="p-6 md:p-10 bg-gradient-to-r from-green-900/10 to-transparent">
                <h2 className="text-2xl font-bold mb-6">Projected Impact</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <MetricCard
                    icon={Users}
                    value="10K+"
                    label="Target Active Users"
                    color="text-green-500"
                  />
                  <MetricCard
                    icon={TrendingUp}
                    value="45%"
                    label="Expected Engagement Increase"
                    color="text-green-500"
                  />
                  <MetricCard
                    icon={Heart}
                    value="85%"
                    label="User Satisfaction Goal"
                    color="text-green-500"
                  />
                </div>
              </div>
              
              {/* Research & Discovery */}
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold mb-6">Research & Discovery</h2>
                <div className="space-y-6">
                  <div className="bg-card/30 p-6 rounded-xl">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-green-500" />
                      User Research Insights
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">•</span>
                        <span>72% of users felt overwhelmed by using multiple health apps and wanted a unified solution</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Users wanted non-judgmental, personalized guidance rather than generic advice</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Privacy and data security were primary concerns for mental health tracking</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Gamification helped some users stay motivated, but others found it stressful</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card/30 p-5 rounded-xl">
                      <h4 className="font-semibold mb-2">Pain Point 1</h4>
                      <p className="text-sm text-muted-foreground">App fatigue from managing separate tools for mental health, fitness, and nutrition</p>
                    </div>
                    <div className="bg-card/30 p-5 rounded-xl">
                      <h4 className="font-semibold mb-2">Pain Point 2</h4>
                      <p className="text-sm text-muted-foreground">Lack of context-aware features that adapt to user's current emotional state</p>
                    </div>
                    <div className="bg-card/30 p-5 rounded-xl">
                      <h4 className="font-semibold mb-2">Pain Point 3</h4>
                      <p className="text-sm text-muted-foreground">Difficulty finding professional help when self-help methods weren't enough</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Design Process */}
              <div className="p-6 md:p-10 bg-gradient-to-r from-green-900/10 to-transparent">
                <h2 className="text-2xl font-bold mb-6">Design Process</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-green-500 mb-2">01</div>
                    <h3 className="font-semibold mb-3">Research</h3>
                    <p className="text-sm text-muted-foreground">Conducted user interviews with 25+ participants, competitive analysis, and mental health expert consultations</p>
                  </div>
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-green-500 mb-2">02</div>
                    <h3 className="font-semibold mb-3">Ideation</h3>
                    <p className="text-sm text-muted-foreground">Mapped user journeys, created personas, and brainstormed features prioritizing emotional safety and privacy</p>
                  </div>
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-green-500 mb-2">03</div>
                    <h3 className="font-semibold mb-3">Prototyping</h3>
                    <p className="text-sm text-muted-foreground">Developed low-fi wireframes, high-fi prototypes, and conducted 3 rounds of usability testing</p>
                  </div>
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-green-500 mb-2">04</div>
                    <h3 className="font-semibold mb-3">Iteration</h3>
                    <p className="text-sm text-muted-foreground">Refined UI based on feedback, improved information architecture, and enhanced accessibility features</p>
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
                      alt={`HealthyR design showcase ${idx+1}`}
                      className="w-full rounded-xl shadow-lg"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
              
              {/* Key Features */}
              <div className="p-6 md:p-10 bg-gradient-to-r from-green-900/10 to-transparent">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card/30 p-6 rounded-xl">
                    <h3 className="font-semibold mb-3">Mood & Emotion Tracking</h3>
                    <p className="text-sm text-muted-foreground">Daily check-ins with context-aware prompts that help users understand their emotional patterns over time</p>
                  </div>
                  <div className="bg-card/30 p-6 rounded-xl">
                    <h3 className="font-semibold mb-3">Guided Meditation & Mindfulness</h3>
                    <p className="text-sm text-muted-foreground">Curated library of audio sessions tailored to user's current mood and available time</p>
                  </div>
                  <div className="bg-card/30 p-6 rounded-xl">
                    <h3 className="font-semibold mb-3">Fitness Integration</h3>
                    <p className="text-sm text-muted-foreground">Seamless connection with popular fitness apps to create a holistic view of physical and mental health</p>
                  </div>
                  <div className="bg-card/30 p-6 rounded-xl">
                    <h3 className="font-semibold mb-3">Professional Support</h3>
                    <p className="text-sm text-muted-foreground">Easy access to licensed therapists and wellness coaches when self-help isn't enough</p>
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
                      The HealthyR design received positive feedback during usability testing, with 88% of participants saying they would use the app regularly. 
                      The intuitive navigation and empathetic tone resonated particularly well with users who had previously felt overwhelmed by wellness apps.
                    </p>
                  </div>
                  
                  <div className="bg-card/30 p-6 rounded-xl">
                    <h3 className="font-semibold mb-3">Key Learnings</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">→</span>
                        <span>Emotional safety is paramount—users need to feel the app is a judgment-free zone</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">→</span>
                        <span>Customization beats one-size-fits-all—every user's wellness journey is unique</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">→</span>
                        <span>Privacy transparency builds trust—clear communication about data usage was crucial</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">→</span>
                        <span>Accessibility matters—designing for various mental states and abilities improved the experience for everyone</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="bg-[#001808] text-white py-10 px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Project by: HAET RANPARIYA</h2>
                <p className="max-w-xl mx-auto mb-6 text-white/80">Passionate about creating human-centered experiences that make a positive impact on people's lives.</p>
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
