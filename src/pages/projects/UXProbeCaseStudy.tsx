import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Brain, FileText, Layout, Users, UserCircle, Sparkles, Code2, Database, Lock, Zap, CheckCircle, ExternalLink, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ImageZoom } from '@/components/ImageZoom';
import { TechBadge } from '@/components/TechBadge';
import { MetricCard } from '@/components/MetricCard';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const UXProbeCaseStudy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI Heuristic Analysis",
      description: "Automated analysis using Nielsen's 10 usability heuristics. AI evaluates websites and identifies violations with severity ratings, specific locations, and actionable recommendations.",
      tech: "Powered by Gemini 2.5 Pro for deep reasoning, processes screenshots with vision API, generates structured violation reports with bounding boxes",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      icon: FileText,
      title: "Study Plan Generation",
      description: "AI-generated comprehensive research plans from user goals. Creates structured, multi-step research workflows with objectives, methodologies, and deliverables.",
      tech: "Uses Gemini 2.5 Flash for fast generation, dynamic step parsing, PostgreSQL storage with RLS policies",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    },
    {
      icon: Layout,
      title: "Dynamic Step Workspace",
      description: "Context-aware workspace that adapts to each research step type. Different tools and AI guidance for interviews, personas, observations, and synthesis.",
      tech: "React-based dynamic routing, step-specific AI prompts, real-time data persistence, markdown rendering",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      icon: Users,
      title: "Interview Management",
      description: "Schedule, conduct, and document user interviews. Record responses, track findings, and generate insights with AI assistance.",
      tech: "Real-time database updates, structured interview templates, AI-powered insight extraction",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop"
    },
    {
      icon: UserCircle,
      title: "Persona Builder",
      description: "Create detailed user personas based on research findings. Build comprehensive profiles with demographics, goals, pain points, and behaviors.",
      tech: "Form validation with Zod, rich persona templates, relationship mapping",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
    },
    {
      icon: Sparkles,
      title: "Real-time AI Guidance",
      description: "On-demand AI assistance for any research step. Get recommendations, suggestions, and guidance tailored to your current task and context.",
      tech: "Context-aware prompts, streaming AI responses, edge functions for AI processing",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop"
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
        <Header />
        
        <main className="container mx-auto px-4">
          {/* Back Button */}
          <div className="py-8">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>

          {/* Hero Section */}
          <section className={`py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                UXProbe
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
                AI-Powered UX Research Platform
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Full-stack web application automating heuristic evaluation and streamlining UX research workflows
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  <span className="font-semibold">200K+ Analyses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-semibold">50K+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button size="lg" className="gap-2" asChild>
                  <a href="https://hello-world-starter-6016.lovable.app/" target="_blank" rel="noopener noreferrer">
                    Try Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="https://hello-world-starter-6016.lovable.app/auth" target="_blank" rel="noopener noreferrer">
                    View Platform
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Project Metadata */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm text-muted-foreground">Role</CardTitle>
                    <CardDescription className="text-base text-foreground font-semibold">Full-Stack Developer</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm text-muted-foreground">Duration</CardTitle>
                    <CardDescription className="text-base text-foreground font-semibold">3 months</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm text-muted-foreground">Tech Stack</CardTitle>
                    <CardDescription className="text-base text-foreground font-semibold">React, TypeScript, AI</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm text-muted-foreground">Status</CardTitle>
                    <CardDescription className="text-base text-foreground font-semibold">Live & Active</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Project Overview</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-card/50 backdrop-blur border-destructive/20">
                  <CardHeader>
                    <CardTitle className="text-destructive">Problem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Manual UX evaluation is time-consuming, subjective, and requires specialized expertise. Researchers spend hours analyzing websites against heuristic principles, often missing critical issues.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Solution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      UXProbe leverages AI to automate heuristic evaluation using Nielsen's 10 usability principles, while providing comprehensive tools for planning, conducting, and documenting UX research.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-emerald-500/20">
                  <CardHeader>
                    <CardTitle className="text-emerald-500">Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Reduces evaluation time from hours to seconds, democratizes access to professional UX research tools, and provides consistent, objective analysis.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Interactive Features Showcase */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Key Features</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur hover:border-primary/50 transition-all group">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
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
                        className="h-48"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Technical Implementation</h2>
              
              {/* Architecture Diagram */}
              <Card className="bg-card/50 backdrop-blur mb-12">
                <CardHeader>
                  <CardTitle>System Architecture</CardTitle>
                  <CardDescription>How UXProbe's components work together</CardDescription>
                </CardHeader>
                <CardContent>
                  <ArchitectureDiagram />
                </CardContent>
              </Card>

              {/* Tech Stack */}
              <Card className="bg-card/50 backdrop-blur mb-12">
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
              <Card className="bg-card/50 backdrop-blur">
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
                        <p><strong>Solution:</strong> Leveraged Supabase Edge Functions with streaming responses, error handling, and rate limiting</p>
                        <p><strong>Impact:</strong> Serverless scalability handling 200K+ requests</p>
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
            </div>
          </section>

          {/* Try It Yourself */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/20 via-purple-600/20 to-primary/20 backdrop-blur border-primary/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-2">Experience UXProbe Yourself</CardTitle>
                  <CardDescription className="text-base">Choose your path to explore the platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
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
                        <p className="text-xs text-muted-foreground text-center">
                          Get instant UX insights in seconds
                        </p>
                      </CardContent>
                    </Card>

                    {/* Full Platform */}
                    <Card className="bg-card/80">
                      <CardHeader>
                        <CardTitle className="text-xl">Full Platform Access</CardTitle>
                        <CardDescription>Create a free account</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Save and manage multiple projects</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Create comprehensive study plans</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Access all AI-powered research tools</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Track UX improvements over time</span>
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
            </div>
          </section>

          {/* Results & Impact */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Results & Impact</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <MetricCard
                  icon={Users}
                  value="50,000+"
                  label="Active Users"
                  color="text-primary"
                />
                <MetricCard
                  icon={Brain}
                  value="200,000+"
                  label="Analyses Completed"
                  color="text-primary"
                />
                <MetricCard
                  icon={CheckCircle}
                  value="4.9/5"
                  label="User Satisfaction"
                  color="text-primary"
                />
                <MetricCard
                  icon={Zap}
                  value="98%"
                  label="Success Rate"
                  color="text-primary"
                />
                <MetricCard
                  icon={Layout}
                  value="10+"
                  label="Research Tools"
                  color="text-primary"
                />
                <MetricCard
                  icon={Sparkles}
                  value="60%"
                  label="Time Saved"
                  color="text-primary"
                />
              </div>

              {/* Testimonial */}
              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    "UXProbe transformed how we approach UX research. What used to take days now takes minutes, and the AI insights are incredibly actionable."
                  </blockquote>
                  <p className="font-semibold">Sarah Chen, Senior UX Researcher</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Learning & Insights */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Learning & Insights</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-card/50 backdrop-blur border-emerald-500/20">
                  <CardHeader>
                    <CardTitle className="text-emerald-500">What Worked Well</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Modular AI approach (different models for different needs)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Guest access for instant value demonstration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Dynamic workspace provides flexibility without complexity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Comprehensive feature set in single platform</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-yellow-500/20">
                  <CardHeader>
                    <CardTitle className="text-yellow-500">Challenges Overcome</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>Balancing AI response quality with speed/cost</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>Creating intuitive UX for complex workflows</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>Implementing secure data isolation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>Managing state across dynamic routes</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Future Enhancements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Real-time collaborative research features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Integration with design tools (Figma, Sketch)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Advanced analytics and trend detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>API for third-party integrations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Footer */}
          <section className="py-16 mb-16">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-primary via-purple-600 to-primary backdrop-blur text-white border-0">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-3xl md:text-4xl mb-3">Ready to Transform Your UX Research?</CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    Join thousands of designers and researchers using AI-powered tools
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" variant="secondary" className="gap-2" asChild>
                      <a href="https://hello-world-starter-6016.lovable.app/" target="_blank" rel="noopener noreferrer">
                        Try Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                      <a href="https://hello-world-starter-6016.lovable.app/auth" target="_blank" rel="noopener noreferrer">
                        Create Account
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                      <Link to="/#contact">
                        Contact Me
                        <Mail className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  <p className="text-center text-white/80 text-sm">
                    Trusted by 50,000+ professionals worldwide
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
  );
};

export default UXProbeCaseStudy;
