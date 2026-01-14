import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Map, Smartphone, FileText, Layers, CheckCircle, Shield, GitBranch, Target, Workflow, Clock, AlertTriangle, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Import images
import userJourneyMap from "@/assets/travel-mission/user-journey-map.png";
import stakeholderDiagram from "@/assets/travel-mission/stakeholder-diagram.png";
import hifiScreen1 from "@/assets/travel-mission/hifi-screen-1.jpg";
import hifiScreen2 from "@/assets/travel-mission/hifi-screen-2.jpg";
import hifiScreen3 from "@/assets/travel-mission/hifi-screen-3.jpg";
import hifiScreen4 from "@/assets/travel-mission/hifi-screen-4.jpg";

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

  // Accurate pain points from the catalyst summary
  const painPoints = [
    {
      icon: Clock,
      title: "Lack of Real-Time Logic",
      description: "Manual time logic and data synchronization across disconnected systems"
    },
    {
      icon: AlertTriangle,
      title: "Multiple Redundant Touchpoints",
      description: "Parents and builders faced duplicate data entry across multiple platforms"
    },
    {
      icon: GitBranch,
      title: "Disjointed Decision Making",
      description: "Information scattered across Zoho CRM, Google Sheets, and manual processes"
    },
    {
      icon: Target,
      title: "Limited Visibility",
      description: "Parents had restricted access to trip progress, checklists, and updates"
    },
  ];

  const keyOutcomes = [
    "Streamlined user experience with simplified sign-up process",
    "Boosted user trust and credibility through transparent communication",
    "Optimized operational performance for internal teams",
    "Enhanced system efficiency with real-time data synchronization",
    "Improved overall performance and speed of trip management",
  ];

  const iaProcess = [
    {
      icon: GitBranch,
      title: "Feature Mapping",
      description: "Analyzed existing portal features including trip browsing, registration, lottery system, checklist management, and payment processing to determine mobile-appropriate patterns."
    },
    {
      icon: Target,
      title: "User Type Analysis",
      description: "Created distinct feature sets for Builders (teens), Parents, Trip Leaders, and Office Staff — each with specific permissions and access levels for trip management."
    },
    {
      icon: Workflow,
      title: "Flow Optimization",
      description: "Streamlined the complex registration-to-trip journey: account creation → trip browsing → lottery placement → checklist completion → trip participation."
    },
  ];

  // Key features designed based on catalyst summary
  const keyFeatures = [
    "Trip Details with pricing, availability, and project information",
    "To-Do checklist with progress tracking (Flight Info, Builder Packet, Health Form, Payment)",
    "Trip Feed with posts and photos from the experience",
    "Notifications system for updates and reminders",
    "Cash expenditure tracking for trip leaders",
    "Damage report functionality for incident management",
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

      {/* Hero Section */}
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
                Client details have been redacted per NDA. This project was completed at Tech9 for a humanitarian travel organization. Logo and identifying information have been obscured.
              </p>
            </div>
          </div>

          <Badge variant="outline" className="mb-4">Product Design - Tech9</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            TravelMission: Humanitarian Travel App
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            End-to-end mobile app design for a humanitarian travel organization — creating 
            dual user experiences for travelers and trip leaders, transforming manual 
            processes into streamlined digital workflows.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Product Design", "Mobile App", "UX Research", "User Flows", "Design System", "Prototyping"].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section - Updated with accurate info from catalyst */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
          <div className="mb-8">
            <p className="text-muted-foreground text-lg mb-4">
              The client operates humanitarian trips for teens, managing a complex ecosystem of 
              builders (participants), parents, trip leaders, and office staff. Their existing 
              web portal relied on manual processes, disconnected tools (Zoho CRM, Google Sheets, 
              Qualtrics), and lacked a mobile experience for on-the-go trip management.
            </p>
            <p className="text-muted-foreground text-lg">
              The registration process involved a lottery system for trip assignments, with 
              registration week in late November and trips running throughout the year. Parents 
              needed visibility into their teen&apos;s trip preparation, while trip leaders needed 
              tools for expense tracking and incident reporting during trips.
            </p>
          </div>
          
          {/* Pain Points Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {painPoints.map((point, index) => (
              <Card key={index} className="bg-card/50">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-destructive/10">
                    <point.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{point.title}</h4>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              (Builder/Traveler app + Trip Leader app), complete design system with UI style guide, and client catalyst summary documenting the project scope and future roadmap.
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
            <h3 className="text-2xl font-semibold text-foreground mb-4">1. Understanding the User Journey</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              I mapped the complete user journey from discovery to post-trip engagement. The journey 
              includes key stages: Hear about the organization → Learn about trips → Register (lottery 
              system) → Get Assigned → Get Ready (checklists, payments) → Go on Trip → Continue the Legacy.
              The map shows three experience levels: minimum viable, enhanced, and ideal future state.
            </p>
            <div className="rounded-xl overflow-hidden border border-border shadow-lg bg-card p-4">
              <img
                src={userJourneyMap}
                alt="User Journey Map - From Discovery to Trip Completion"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Information Architecture */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">2. Information Architecture</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Translating the complex web portal into a mobile experience required careful 
              consideration of user types and their distinct needs. I developed a modular 
              architecture mapping features across Builders, Trip Leaders, Office Staff, and Parents.
            </p>
            
            {/* Process Cards */}
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
              The organization has a complex communication structure with 1-to-1 and 1-to-many 
              interactions between Trip Leaders, Builders, Office Staff, Parents, and Vendors. 
              This informed the notification system and permission structures in the app design.
            </p>
            <div className="rounded-xl overflow-hidden border border-border shadow-lg bg-card p-4">
              <img
                src={stakeholderDiagram}
                alt="Stakeholder Communication Ecosystem"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Visual Design */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">4. High-Fidelity Design</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              After validating wireframes with stakeholders, I developed high-fidelity prototypes
              covering the complete app experience. Key screens address the core user needs
              identified in research.
            </p>

            {/* Key Features List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border">
                  <Zap className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Hi-Fi Screens (header area redacted; no full-screen blur) */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[hifiScreen1, hifiScreen2, hifiScreen3, hifiScreen4].map((src, idx) => (
                <div
                  key={idx}
                  className="relative rounded-xl overflow-hidden border border-border shadow-lg bg-card"
                >
                  <img
                    src={src}
                    alt={`High-fidelity mobile screen ${idx + 1} (branding redacted)`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  {/* Remove the entire top header region to eliminate logos/text consistently */}
                  <div className="absolute top-0 left-0 right-0 h-[14%] bg-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Expected Outcomes</h2>
          
          <div className="max-w-3xl">
            <p className="text-muted-foreground mb-6">
              The mobile app design addresses the core pain points identified in research,
              providing a streamlined experience for all user types while maintaining the
              complex business logic required for trip management.
            </p>
            <ul className="space-y-4">
              {keyOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
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
