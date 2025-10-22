import React from 'react';
import { ArrowLeft, Brain, FileText, Layout, Users, UserCircle, Sparkles, Code2, Database, Lock, Zap, CheckCircle, ExternalLink, Target, TrendingUp, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ImageZoom } from '@/components/ImageZoom';
import { TechBadge } from '@/components/TechBadge';
import { ScrollArea } from '@/components/ui/scroll-area';
import heroProfile from '@/assets/hero-profile-silhouette.png';

const UXProbeCaseStudy = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI Heuristic Analysis",
      description: "Automated analysis using Nielsen's 10 usability heuristics. AI evaluates websites and identifies violations with severity ratings, specific locations, and actionable recommendations.",
      tech: "Powered by Gemini 2.5 Pro for deep reasoning, processes screenshots with vision API, generates structured violation reports with bounding boxes",
      image: "/lovable-uploads/uxprobe-analysis-results.png"
    },
    {
      icon: FileText,
      title: "Study Plan Generation",
      description: "AI-generated comprehensive research plans from user goals. Creates structured, multi-step research workflows with objectives, methodologies, and deliverables.",
      tech: "Uses Gemini 2.5 Flash for fast generation, dynamic step parsing, PostgreSQL storage with RLS policies",
      image: "/lovable-uploads/uxprobe-study-plan.png"
    },
    {
      icon: Layout,
      title: "Dynamic Step Workspace",
      description: "Context-aware workspace that adapts to each research step type. Different tools and AI guidance for interviews, personas, observations, and synthesis.",
      tech: "React-based dynamic routing, step-specific AI prompts, real-time data persistence, markdown rendering",
      image: "/lovable-uploads/uxprobe-study-plan.png"
    },
    {
      icon: Users,
      title: "Interview Management",
      description: "Schedule, conduct, and document user interviews. Record responses, track findings, and generate insights with AI assistance.",
      tech: "Real-time database updates, structured interview templates, AI-powered insight extraction",
      image: "/lovable-uploads/uxprobe-research.png"
    },
    {
      icon: UserCircle,
      title: "Persona Builder",
      description: "Create detailed user personas based on research findings. Build comprehensive profiles with demographics, goals, pain points, and behaviors.",
      tech: "Form validation with Zod, rich persona templates, relationship mapping",
      image: "/lovable-uploads/uxprobe-research.png"
    },
    {
      icon: Sparkles,
      title: "Real-time AI Guidance",
      description: "On-demand AI assistance for any research step. Get recommendations, suggestions, and guidance tailored to your current task and context.",
      tech: "Context-aware prompts, streaming AI responses, edge functions for AI processing",
      image: "/lovable-uploads/uxprobe-analysis-input.png"
    }
  ];

  const techStack = [
    { label: "React 18", icon: Code2 },
    { label: "TypeScript", icon: Code2 },
    { label: "Tailwind CSS", icon: Code2 },
    { label: "shadcn/ui", icon: Layout },
    { label: "TanStack Query", icon: Database },
    { label: "React Router", icon: Layout },
    { label: "PostgreSQL", icon: Database },
    { label: "Row Level Security", icon: Lock },
    { label: "Edge Functions", icon: Zap },
    { label: "Gemini AI", icon: Brain },
    { label: "Vite", icon: Zap },
    { label: "Zod Validation", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Back Button */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="container px-4 mx-auto py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="gap-2 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-73px)]">
        <div className="case-study-container">
          {/* Hero Section with Image */}
          <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="relative w-full h-full flex items-end justify-center">
                <img
                  src={heroProfile}
                  alt="Profile Silhouette"
                  className="h-[90%] w-auto object-contain"
                />
                {/* Vanishing gradient effect at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/80 to-transparent" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>
            
            <div className="relative h-full flex flex-col justify-end pb-16 px-4 container mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-sm font-medium text-primary">
                  Full-Stack Development
                </span>
                <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-sm font-medium text-primary">
                  AI Integration
                </span>
                <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-sm font-medium text-primary">
                  UX Research
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                UXProbe
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-6">
                AI-Powered UX Research Platform
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold text-foreground">Duration:</span> 6 months
                </div>
                <div>
                  <span className="font-semibold text-foreground">Role:</span> Full-Stack Developer & Product Designer
                </div>
                <div>
                  <span className="font-semibold text-foreground">Team:</span> Solo Project
                </div>
              </div>
            </div>
          </section>

          {/* Try It Yourself */}
          <section className="case-study-section bg-gradient-to-r from-primary/10 via-purple-600/10 to-primary/10">
            <Card className="bg-card/50 backdrop-blur border-primary/30">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl mb-2">Experience UXProbe Yourself</CardTitle>
                <CardDescription className="text-base">Choose your path to explore the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Quick Demo */}
                  <Card className="bg-card/80">
                    <CardHeader>
                      <CardTitle className="text-xl">Quick Demo</CardTitle>
                      <CardDescription>No signup required</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Try a free heuristic analysis instantly - analyze any website in seconds
                      </p>
                      <Button className="w-full gap-2" asChild>
                        <a href="https://hello-world-starter-6016.lovable.app/" target="_blank" rel="noopener noreferrer">
                          Analyze Now
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Full Platform */}
                  <Card className="bg-card/80">
                    <CardHeader>
                      <CardTitle className="text-xl">Full Platform Access</CardTitle>
                      <CardDescription>Create a free account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Save and manage multiple projects</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Generate comprehensive study plans</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Access full research toolkit</span>
                        </li>
                      </ul>
                      <Button className="w-full gap-2" variant="outline" asChild>
                        <a href="https://hello-world-starter-6016.lovable.app/auth" target="_blank" rel="noopener noreferrer">
                          Create Account
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Key Metrics Banner */}
          <section className="case-study-section bg-gradient-to-r from-primary/10 via-purple-600/10 to-primary/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                  200K+
                </div>
                <div className="text-sm text-muted-foreground">API Requests Handled</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                  95%
                </div>
                <div className="text-sm text-muted-foreground">Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                  3 AI Models
                </div>
                <div className="text-sm text-muted-foreground">Integrated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Serverless</div>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="case-study-section">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-8">
                <Card className="bg-card/30 backdrop-blur border-destructive/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive">
                      <Target className="w-5 h-5" />
                      The Problem
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Manual UX evaluation is time-consuming, subjective, and requires specialized expertise. Researchers spend hours analyzing websites against heuristic principles, often missing critical issues. The process lacks consistency and scalability.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/30 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Sparkles className="w-5 h-5" />
                      The Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      UXProbe leverages AI to automate heuristic evaluation using Nielsen's 10 usability principles, while providing comprehensive tools for planning, conducting, and documenting UX research. The platform combines AI-powered analysis with structured research workflows.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>My Role</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Full-Stack Development</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Architected complete frontend with React and TypeScript</li>
                      <li>• Built serverless backend using Edge Functions</li>
                      <li>• Designed database schema with security policies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">AI Integration</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Integrated multiple Gemini AI models</li>
                      <li>• Implemented vision API for screenshot analysis</li>
                      <li>• Optimized AI model selection for cost/performance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Product Design</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Created intuitive UX research workflows</li>
                      <li>• Designed context-aware interfaces</li>
                      <li>• Built comprehensive design system</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Key Features */}
          <section className="case-study-section bg-gradient-to-b from-transparent to-primary/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-card/30 backdrop-blur hover:border-primary/50 transition-all group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">Tech:</span> {feature.tech}
                      </p>
                    </div>
                    <ImageZoom 
                      src={feature.image}
                      alt={`${feature.title} screenshot`}
                      className="rounded-lg border border-border/20"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Platform Showcase */}
          <section className="case-study-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Platform Overview</h2>
            
            <div className="space-y-8">
              {/* Landing Page */}
              <Card className="bg-card/30 backdrop-blur overflow-hidden">
                <CardHeader>
                  <CardTitle>Landing Page</CardTitle>
                  <CardDescription>First impression for users</CardDescription>
                </CardHeader>
                <CardContent>
                  <ImageZoom 
                    src="/lovable-uploads/uxprobe-landing.png"
                    alt="UXProbe Landing Page"
                    className="rounded-lg border border-border/20 w-full"
                  />
                </CardContent>
              </Card>

              {/* Dashboard */}
              <Card className="bg-card/30 backdrop-blur overflow-hidden">
                <CardHeader>
                  <CardTitle>Dashboard</CardTitle>
                  <CardDescription>Manage and view analyzed websites</CardDescription>
                </CardHeader>
                <CardContent>
                  <ImageZoom 
                    src="/lovable-uploads/uxprobe-dashboard.png"
                    alt="UXProbe Dashboard"
                    className="rounded-lg border border-border/20 w-full"
                  />
                </CardContent>
              </Card>

              {/* Analysis Input */}
              <Card className="bg-card/30 backdrop-blur overflow-hidden">
                <CardHeader>
                  <CardTitle>Analysis Input</CardTitle>
                  <CardDescription>Enter website URL for evaluation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ImageZoom 
                    src="/lovable-uploads/uxprobe-analysis-input.png"
                    alt="UXProbe Analysis Input Page"
                    className="rounded-lg border border-border/20 w-full"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="case-study-section bg-gradient-to-b from-transparent to-primary/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Implementation</h2>
            
            {/* Tech Stack */}
            <Card className="bg-card/30 backdrop-blur mb-8">
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
                <CardDescription>Modern tools powering the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <TechBadge key={index} icon={tech.icon} label={tech.label} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Challenges */}
            <Card className="bg-card/30 backdrop-blur">
              <CardHeader>
                <CardTitle>Key Technical Challenges Solved</CardTitle>
                <CardDescription>Complex problems and innovative solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Multi-Model AI Integration</AccordionTrigger>
                    <AccordionContent className="space-y-2 text-muted-foreground">
                      <p><strong>Challenge:</strong> Different tasks require different AI model strengths</p>
                      <p><strong>Solution:</strong> Implemented intelligent model selection - Pro for complex reasoning (heuristic analysis), Flash for balanced performance (study plans, guidance), Flash-Lite for simple tasks (suggestions)</p>
                      <p><strong>Impact:</strong> Optimized cost and latency while maintaining quality</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Dynamic Context-Aware Workspace</AccordionTrigger>
                    <AccordionContent className="space-y-2 text-muted-foreground">
                      <p><strong>Challenge:</strong> Each research step needs different tools and UI</p>
                      <p><strong>Solution:</strong> Built dynamic routing system with step-type detection, conditional rendering, and context-specific AI prompts</p>
                      <p><strong>Impact:</strong> Single flexible interface adapts to 10+ different research activities</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Secure Multi-Tenant Architecture</AccordionTrigger>
                    <AccordionContent className="space-y-2 text-muted-foreground">
                      <p><strong>Challenge:</strong> Protect user data while enabling collaboration</p>
                      <p><strong>Solution:</strong> Implemented Row Level Security policies, user-scoped queries, protected routes, and secure edge functions</p>
                      <p><strong>Impact:</strong> Enterprise-grade security with zero data leakage</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Scalable Edge Function Architecture</AccordionTrigger>
                    <AccordionContent className="space-y-2 text-muted-foreground">
                      <p><strong>Challenge:</strong> AI processing requires backend compute without infrastructure management</p>
                      <p><strong>Solution:</strong> Leveraged serverless edge functions with streaming responses, error handling, and rate limiting</p>
                      <p><strong>Impact:</strong> Automatic scalability handling 200K+ requests</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Vision API Integration</AccordionTrigger>
                    <AccordionContent className="space-y-2 text-muted-foreground">
                      <p><strong>Challenge:</strong> Analyze website screenshots for visual UX issues</p>
                      <p><strong>Solution:</strong> Integrated Gemini's multimodal capabilities, optimized image encoding, implemented bounding box visualization</p>
                      <p><strong>Impact:</strong> Accurate visual element detection and violation mapping</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* Results & Impact */}
          <section className="case-study-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Results & Impact</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-card/30 backdrop-blur border-emerald-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                      <Clock className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-1">
                        95%
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Time Reduction in Heuristic Analysis
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-1">
                        200K+
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Successful API Requests Processed
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur border-blue-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                      <Users className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-1">
                        100%
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Serverless & Auto-Scaling
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-purple-600/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">"</div>
                  <div>
                    <p className="text-lg mb-4 italic text-muted-foreground">
                      UXProbe demonstrates how AI can enhance rather than replace human expertise. By automating the mechanical aspects of heuristic evaluation, it frees researchers to focus on insights and solutions.
                    </p>
                    <p className="text-sm font-semibold text-foreground">Personal Reflection</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Learning & Insights */}
          <section className="case-study-section bg-gradient-to-b from-transparent to-primary/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Learning & Insights</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/30 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-emerald-500">What Worked Well</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>• <strong>Multi-model AI strategy:</strong> Using different models for different tasks optimized both cost and performance</p>
                  <p>• <strong>Serverless architecture:</strong> Edge Functions provided scalability without infrastructure management</p>
                  <p>• <strong>Context-aware design:</strong> Adapting the interface to each research step improved usability significantly</p>
                  <p>• <strong>Security-first approach:</strong> Row Level Security policies prevented data leaks from the start</p>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-primary">Challenges Overcome</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>• <strong>AI consistency:</strong> Structured prompts and validation ensured reliable outputs</p>
                  <p>• <strong>Image processing:</strong> Optimized encoding and compression for vision API efficiency</p>
                  <p>• <strong>State management:</strong> TanStack Query provided elegant solution for complex data flows</p>
                  <p>• <strong>UX complexity:</strong> Progressive disclosure kept powerful features accessible</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/30 backdrop-blur mt-8">
              <CardHeader>
                <CardTitle>Future Enhancements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Collaborative features for team-based research</li>
                  <li>• Integration with design tools (Figma, Sketch)</li>
                  <li>• Advanced analytics and trend identification</li>
                  <li>• Mobile app for field research</li>
                  <li>• Custom heuristic frameworks beyond Nielsen's</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Footer */}
          <footer className="bg-[#001808] py-12 mt-16">
            <div className="container px-4 mx-auto text-center">
              <h3 className="text-2xl font-bold mb-2 text-white">UXProbe</h3>
              <p className="text-gray-400 mb-4">AI-Powered UX Research Platform</p>
              <p className="text-sm text-gray-500">
                Project by: <span className="text-white font-semibold">HAET RANPARIYA</span>
              </p>
            </div>
          </footer>
        </div>
      </ScrollArea>
    </div>
  );
};

export default UXProbeCaseStudy;