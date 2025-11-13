import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ImageZoom } from "@/components/ImageZoom";
import { ScrollArea } from "@/components/ui/scroll-area";

const DailygramCaseStudy = () => {
  const navigate = useNavigate();

  const caseStudyImages = [
    "/lovable-uploads/dailygram-hero.png",
    "/lovable-uploads/dailygram-all-screens.png",
    "/lovable-uploads/b9c4ca15-5989-4244-90d9-de2cb6f747eb.png",
    "/lovable-uploads/1a4e83d1-a197-4880-886c-748f9af505d7.png",
    "/lovable-uploads/a3bc2b03-24b2-452c-bc4f-943879f35f0c.png",
    "/lovable-uploads/40c6b33e-12ba-475b-80dd-1e7e61d34d79.png",
    "/lovable-uploads/88af03d0-7217-433e-9838-870ddbec6d92.png",
    "/lovable-uploads/47e30545-06d0-4588-af03-fb8c707abab7.png",
    "/lovable-uploads/7af53f86-2561-4cf1-8d26-82d478ec7b59.png",
    "/lovable-uploads/53a9e943-f2d7-4061-90ff-4588dff4a699.png",
    "/lovable-uploads/68bde57b-779c-497e-be33-dea6ba8834a8.png",
    "/lovable-uploads/e6c733a0-15f5-4f5b-80b5-d968f89c3f5b.png",
    "/lovable-uploads/37bc024c-9988-4145-9288-d950af6b72c5.png",
    "/lovable-uploads/1497f8ac-58ba-4b12-9413-b540e5ac41d4.png",
    "/lovable-uploads/d1206f5c-189d-427b-93b8-b82ff662ed6b.png",
    "/lovable-uploads/f867e9fc-cd97-40f0-b227-696b092580e0.png",
    "/lovable-uploads/f6dbc0ba-a340-475f-98a5-b4611953f905.png",
    "/lovable-uploads/544935c7-7062-4776-bbe3-9b4354f88150.png",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Back Button */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="container px-4 mx-auto py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-73px)]">
        <div className="case-study-container">
          {/* Hero Section */}
          <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="/lovable-uploads/dailygram-hero.png"
                alt="Dailygram Hero"
                className="w-full h-full object-cover"
                style={{ objectPosition: "left center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </div>

            <div className="relative h-full flex flex-col justify-end pb-16 px-4 container mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-emerald-600/20 border border-emerald-600/30 rounded-full text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  UI/UX Design
                </span>
                <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-sm font-medium text-primary">
                  Mobile App
                </span>
                <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-sm font-medium text-primary">
                  Product Design
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Dailygram
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-6">
                Personalized News Experience App
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold text-foreground">Duration:</span> 4 weeks
                </div>
                <div>
                  <span className="font-semibold text-foreground">Role:</span> UI/UX Designer
                </div>
                <div>
                  <span className="font-semibold text-foreground">Team:</span> Solo Project
                </div>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="case-study-section">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dailygram is a next-generation news app that reimagines how users discover and consume news content. 
                With personalized interest selection, gamification elements, and an intuitive interface, users can stay 
                informed while earning badges and tracking their reading progress. The app features curated news channels, 
                trending articles, and a profile system that encourages daily engagement with quality journalism.
              </p>
            </div>

            {/* Design System */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8">Design System</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Typography System</h4>
                  <div className="flex justify-center">
                    <img 
                      src="/lovable-uploads/dailygram-typography-guide.png" 
                      alt="Typography Style Guide" 
                      className="w-3/5 rounded-lg border border-border"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Color Palette</h4>
                  <img 
                    src="/lovable-uploads/dailygram-colors-guide.png" 
                    alt="Color Style Guide" 
                    className="w-full rounded-lg border border-border"
                    loading="lazy"
                  />
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3 text-lg">Layout & Spacing</h4>
                  <img 
                    src="/lovable-uploads/dailygram-layout-guide.png" 
                    alt="Layout Style Guide" 
                    className="w-full rounded-lg border border-border"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Design Screens */}
          <section className="case-study-section">
            <h2 className="text-3xl font-bold mb-8">Design Screens</h2>
            <Accordion type="single" collapsible defaultValue="screens" className="w-full">
              <AccordionItem value="screens">
                <AccordionTrigger className="text-xl font-bold">All Screens</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 gap-6">
                    {caseStudyImages.map((img, idx) => (
                      <ImageZoom key={idx} src={img} alt={`Dailygram screen ${idx + 1}`} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="problem">
                <AccordionTrigger className="text-xl font-bold">Problem & Solution</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-6">
                    The news consumption landscape is fragmented and overwhelming. Users struggle with information overload, 
                    lack of personalization, and no motivation to stay informed. Dailygram addresses these challenges through 
                    a gamified, personalized news experience.
                  </p>
                  <div className="grid grid-cols-1 gap-6">
                    {caseStudyImages.slice(2, 5).map((img, idx) => (
                      <ImageZoom key={idx} src={img} alt={`Problem solution ${idx + 1}`} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="features">
                <AccordionTrigger className="text-xl font-bold">Key Features</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-3">
                    <li>• Personalized news feed based on user interests</li>
                    <li>• Gamification with badges and reading streaks</li>
                    <li>• Curated news channels by category</li>
                    <li>• Trending articles and popular stories</li>
                    <li>• User profile with reading statistics</li>
                    <li>• Bookmarks and reading history</li>
                    <li>• Clean, distraction-free reading experience</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
};

export default DailygramCaseStudy;
