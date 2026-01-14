import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Map, Smartphone, FileText, Layers, CheckCircle, Shield, ExternalLink, GitBranch, Target, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Import images
import userJourneyMap from "@/assets/travel-mission/user-journey-map.png";
import stakeholderDiagram from "@/assets/travel-mission/stakeholder-diagram.png";
import outcomes from "@/assets/travel-mission/outcomes.png";
import hifiScreen1 from "@/assets/travel-mission/hifi-screen-1.jpg";
import hifiScreen2 from "@/assets/travel-mission/hifi-screen-2.jpg";
import hifiScreen3 from "@/assets/travel-mission/hifi-screen-3.jpg";
import hifiScreen4 from "@/assets/travel-mission/hifi-screen-4.jpg";
import hifiScreen5 from "@/assets/travel-mission/hifi-screen-5.jpg";
import hifiScreen6 from "@/assets/travel-mission/hifi-screen-6.jpg";

// Reusable component for images with blur overlay on logo areas
const CensoredImage = ({ 
  src, 
  alt, 
  className = "",
  blurTop = false 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  blurTop?: boolean;
}) => (
  <div className="relative overflow-hidden rounded-lg">
    <img src={src} alt={alt} className={`w-full h-auto ${className}`} />
    {blurTop && (
      <div 
        className="absolute top-0 left-0 right-0 h-16 backdrop-blur-xl bg-gradient-to-b from-background/80 to-transparent"
        style={{ backdropFilter: 'blur(12px)' }}
      />
    )}
  </div>
);

const TravelMissionCaseStudy = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/#projects");
  };

  const responsibilities = [
    { icon: Users, label: "User Research & Journey Mapping" },
    { icon: Map, label: "UX Flow Design (Web + Mobile)" },
    { icon: FileText, label: "Paper Mockups & Wireframes" },
    { icon: Smartphone, label: "High-Fidelity Prototypes" },
    { icon: Layers, label: "Design System & UI Style Guide" },
    { icon: CheckCircle, label: "Client Catalyst Summary" },
  ];

  const keyOutcomes = [
    "Designed 2 complete mobile app experiences (Traveler + Trip Leader)",
    "Created comprehensive design system and UI style guide",
    "Mapped complex user ecosystems with multiple stakeholder types",
    "Documented current state bottlenecks and proposed solutions",
    "Delivered client-ready catalyst summary for stakeholder alignment",
  ];

  const iaProcess = [
    {
      icon: GitBranch,
      title: "Feature Mapping",
      description: "Analyzed existing web platform features and mapped them to mobile-appropriate patterns, identifying which features needed redesign vs. direct adaptation."
    },
    {
      icon: Target,
      title: "User Type Analysis",
      description: "Created distinct feature sets for each user type — travelers needing trip info and checklists, trip leaders managing expenses and groups, and parents monitoring progress."
    },
    {
      icon: Workflow,
      title: "Flow Optimization",
      description: "Streamlined complex multi-step processes (registration, lottery, payments) into intuitive mobile flows with clear progress indicators and reduced cognitive load."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </button>
        </div>
      </nav>

      {/* Hero Section - Text-based, no blurred PDF */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Confidentiality Banner */}
          <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start gap-3">
            <Shield className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-amber-700 dark:text-amber-400 font-medium">
                Confidentiality Notice
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Client details have been redacted per NDA. This project was completed at Tech9 for a humanitarian travel organization.
              </p>
            </div>
          </div>

          <Badge variant="outline" className="mb-4">Product Design - Tech9</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            TravelMission: Humanitarian Travel App
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            End-to-end mobile app design for dual user experiences — travelers and trip leaders — 
            transforming manual processes into streamlined digital workflows.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {["Product Design", "Mobile App", "UX Research", "User Flows", "Design System", "Prototyping"].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Hero Visual - Mobile Mockups Preview with blur on logos */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 p-6 bg-gradient-to-br from-primary/5 to-secondary/30 rounded-2xl border border-border">
            {[hifiScreen1, hifiScreen2, hifiScreen3, hifiScreen4, hifiScreen5, hifiScreen6].map((screen, index) => (
              <div 
                key={index} 
                className="rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <CensoredImage 
                  src={screen} 
                  alt={`Mobile App Screen ${index + 1}`}
                  blurTop={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground text-lg mb-4">
                The client needed a mobile app companion to their existing web platform to serve 
                their complex user ecosystem: teens/travelers, parents, trip leaders, and internal staff.
              </p>
              <p className="text-muted-foreground text-lg">
                The current system relied heavily on manual processes, disconnected tools, and 
                multiple redundant touchpoints — creating friction for both users and administrators.
              </p>
            </div>
            <Card className="bg-card/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Key Pain Points</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Manual time logic and lack of real-time data synchronization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Disjointed decision-making across multiple platforms
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Limited visibility for parents and trip participants
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Complex registration and lottery system for trip assignments
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Role & Scope Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">My Role & Scope</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {responsibilities.map((item, index) => (
              <Card key={index} className="bg-card hover:bg-card/80 transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Role:</span> Product Designer at Tech9
              <br />
              <span className="font-semibold text-foreground">Deliverables:</span> Created 2 complete mobile app experiences 
              (Traveler app + Trip Leader app), complete design system, and client catalyst summary.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">Process & Deliverables</h2>

          {/* User Journey Mapping */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">1. Understanding Users</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              I started by mapping the complete user journey from discovery to post-trip engagement. 
              This involved interviewing stakeholders, analyzing the existing web platform, and 
              identifying pain points at each stage. The journey map below shows three experience 
              levels: minimum (basic functionality), in-between (enhanced experience), and ideal 
              (optimized flow with automation).
            </p>
            <div className="rounded-xl overflow-hidden border border-border shadow-lg bg-card p-4">
              <img
                src={userJourneyMap}
                alt="User Journey Map - Minimum to Ideal Experience"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Information Architecture - Enhanced with description */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">2. Information Architecture</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Translating a complex web platform into a mobile experience required careful 
              consideration of screen real estate, touch interactions, and offline capabilities. 
              I developed a modular architecture that prioritized the most frequent user tasks 
              while maintaining access to less common features.
            </p>
            
            {/* Process Cards instead of blurred image */}
            <div className="grid md:grid-cols-3 gap-6">
              {iaProcess.map((item, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stakeholder Ecosystem */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">3. Stakeholder Ecosystem</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              One of the most complex aspects was designing for multiple interconnected user types. 
              I visualized the communication patterns to understand how information flows between 
              trip leaders, travelers, parents, and office staff — informing notification systems 
              and permission structures.
            </p>
            <div className="rounded-xl overflow-hidden border border-border shadow-lg bg-card p-4">
              <img
                src={stakeholderDiagram}
                alt="Stakeholder Communication Diagram"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Visual Design */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">4. Visual Design</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              After validating the wireframes, I developed high-fidelity prototypes covering 
              the complete app experience. Key screens include trip details, expense tracking, 
              to-do checklists, and notification management — all designed with accessibility 
              and ease of use in mind.
            </p>
            
            {/* Individual Screens Grid with blur on logos */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[hifiScreen1, hifiScreen2, hifiScreen3, hifiScreen4, hifiScreen5, hifiScreen6].map((screen, index) => (
                <div 
                  key={index} 
                  className="rounded-xl overflow-hidden border border-border shadow-md hover:shadow-lg transition-shadow bg-card"
                >
                  <CensoredImage 
                    src={screen} 
                    alt={`Mobile App Screen ${index + 1}`}
                    blurTop={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Key Outcomes</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <ul className="space-y-4">
                {keyOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden border border-border shadow-lg bg-card p-4">
              <img
                src={outcomes}
                alt="Expected Outcomes"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* External Link - Anonymized */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">View the Client Website</h3>
                <p className="text-sm text-muted-foreground">
                  See the web platform for which we designed the mobile app companion.
                </p>
              </div>
              <a
                href="https://hxp.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors whitespace-nowrap"
              >
                Visit Website
                <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto text-center">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Projects
          </button>
        </div>
      </section>
    </div>
  );
};

export default TravelMissionCaseStudy;
