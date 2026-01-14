import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Map, Smartphone, FileText, Layers, CheckCircle, Shield, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Import images
import catalystSummary from "@/assets/travel-mission/catalyst-summary.jpg";
import userJourneyMap from "@/assets/travel-mission/user-journey-map.png";
import processFlow from "@/assets/travel-mission/process-flow.png";
import moduleMatrix from "@/assets/travel-mission/module-matrix.png";
import stakeholderDiagram from "@/assets/travel-mission/stakeholder-diagram.png";
import outcomes from "@/assets/travel-mission/outcomes.png";
import hifiScreensOverview from "@/assets/travel-mission/hifi-screens-overview.jpg";
import hifiScreen1 from "@/assets/travel-mission/hifi-screen-1.jpg";
import hifiScreen2 from "@/assets/travel-mission/hifi-screen-2.jpg";
import hifiScreen3 from "@/assets/travel-mission/hifi-screen-3.jpg";
import hifiScreen4 from "@/assets/travel-mission/hifi-screen-4.jpg";
import hifiScreen5 from "@/assets/travel-mission/hifi-screen-5.jpg";
import hifiScreen6 from "@/assets/travel-mission/hifi-screen-6.jpg";

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

          {/* Hero Image - Catalyst Summary Overview */}
          <div className="relative rounded-xl overflow-hidden border border-border shadow-lg">
            <img
              src={catalystSummary}
              alt="TravelMission App - Catalyst Summary Overview"
              className="w-full h-auto"
            />
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
              Created comprehensive user journey maps identifying minimum, in-between, and ideal 
              experiences for the core user types — from initial discovery through trip completion.
            </p>
            <div className="rounded-xl overflow-hidden border border-border shadow-lg bg-card p-4">
              <img
                src={userJourneyMap}
                alt="User Journey Map - Minimum to Ideal Experience"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Current State Analysis */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">2. Current State Analysis</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Mapped the existing process flow to identify bottlenecks, manual intervention points, 
              and opportunities for automation and improved user experience.
            </p>
            <div className="rounded-xl overflow-hidden border border-border shadow-lg bg-card p-4">
              <img
                src={processFlow}
                alt="Current Process Flow Analysis"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Information Architecture */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">3. Information Architecture</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Developed a module matrix mapping features and functionality across different user 
              types (Builders, Trip Leaders, Office Staff) to ensure comprehensive coverage.
            </p>
            <div className="rounded-xl overflow-hidden border border-border shadow-lg bg-card p-4">
              <img
                src={moduleMatrix}
                alt="Module Matrix - Feature Mapping by User Type"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Stakeholder Ecosystem */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">4. Stakeholder Ecosystem</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Visualized the complex communication patterns between stakeholders including 
              1-to-1 and 1-to-many interactions across trip leaders, builders, office staff, and parents.
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
            <h3 className="text-2xl font-semibold text-foreground mb-4">5. Visual Design</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Created high-fidelity prototypes for the complete mobile app experience, 
              including trip management, expense tracking, and communication features.
            </p>
            
            {/* Overview */}
            <div className="rounded-xl overflow-hidden border border-border shadow-lg mb-8">
              <img
                src={hifiScreensOverview}
                alt="High-Fidelity Screens Overview"
                className="w-full h-auto"
              />
            </div>

            {/* Individual Screens Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[hifiScreen1, hifiScreen2, hifiScreen3, hifiScreen4, hifiScreen5, hifiScreen6].map((screen, index) => (
                <div 
                  key={index} 
                  className="rounded-xl overflow-hidden border border-border shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={screen}
                    alt={`Mobile App Screen ${index + 1}`}
                    className="w-full h-auto"
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

          {/* External Link */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground mb-1">View the Original Website</h3>
                <p className="text-sm text-muted-foreground">
                  See the web platform for which we designed the mobile app companion.
                </p>
              </div>
              <a
                href="https://hxp.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors"
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
