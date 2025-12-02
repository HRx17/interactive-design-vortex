import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Expertise } from '@/components/Expertise';
import { Toolbox } from '@/components/Toolbox';
import { Contact } from '@/components/Contact';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import aboutCollageHero from '@/assets/about-collage-hero.png';
import haetPhoto from '@/assets/haet-photo.png';

// Education Card Component
const EducationCard = ({ title, description, year, gpa, location, previous }: any) => (
  <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 transition-all duration-500 hover:shadow-xl">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
        🎓
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
          <span className="bg-secondary px-2 py-1 rounded">{year}</span>
          <span className="bg-secondary px-2 py-1 rounded">{location}</span>
          {gpa && <span className="font-semibold text-primary">{gpa}</span>}
        </div>

        {previous && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <h5 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Previous Education</h5>
            <div className="text-xs text-muted-foreground">
              <p className="font-medium">{previous.degree}</p>
              <p>{previous.school} • {previous.year} • {previous.gpa}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const AboutPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: bioRef, inView: bioInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="relative min-h-screen bg-background">
      <ScrollProgress />
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 z-0">
          <img
            src={aboutCollageHero}
            alt="About Me"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className={cn(
            "inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 backdrop-blur-md border border-primary/20",
            "opacity-0 translate-y-4 transition-all duration-700",
            heroInView && "opacity-100 translate-y-0"
          )}>
            About Me
          </span>
          <h1 className={cn(
            "text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight",
            "opacity-0 translate-y-4 transition-all duration-700 delay-100",
            heroInView && "opacity-100 translate-y-0"
          )}>
            Designer & Developer
          </h1>
          <p className={cn(
            "text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed",
            "opacity-0 translate-y-4 transition-all duration-700 delay-200",
            heroInView && "opacity-100 translate-y-0"
          )}>
            Crafting digital experiences that blend aesthetic beauty with functional precision.
          </p>
        </div>
      </div>

      <main className="pb-0">
        {/* Bio Section */}
        <section className="py-20 px-4" ref={bioRef}>
          <div className="section-container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

              {/* Left Column: Bio Text */}
              <div className={cn(
                "space-y-6 text-lg text-muted-foreground leading-relaxed",
                "opacity-0 translate-x-[-20px] transition-all duration-700",
                bioInView && "opacity-100 translate-x-0"
              )}>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Hello! I'm Haet.
                </h2>
                <p>
                  I'm a passionate Product Designer and Frontend Developer currently studying Human-Computer Interaction at Rochester Institute of Technology. My passion lies in creating digital experiences that balance aesthetic appeal with intuitive functionality, focusing on end-to-end product strategy and user-centered design principles.
                </p>
                <p>
                  I also specialize in GenUI, leveraging AI tools like Lovable, ChatGPT, and custom prompting techniques to enhance my design workflow. This parallel expertise allows me to rapidly prototype and iterate while maintaining focus on strategic product decisions and user needs.
                </p>
                <p>
                  When I'm not designing products or experimenting with new design methodologies, you can find me <strong>Painting</strong>, <strong>Scuba Diving</strong>, or researching the latest developments in human-computer interaction.
                </p>

                {/* Education Card Integrated Here */}
                <div className="pt-8">
                  <EducationCard
                    title="MS in Human-Computer Interaction"
                    description="Rochester Institute of Technology"
                    year="2024 - 2025"
                    location="Rochester, NY"
                    gpa="3.9 GPA"
                    previous={{
                      degree: "B.E. in Computer Engineering",
                      school: "Gujarat Technological University",
                      year: "2019 - 2023",
                      gpa: "GPA: 3.8"
                    }}
                  />
                </div>
              </div>

              {/* Right Column: Photo */}
              <div className={cn(
                "relative sticky top-24 flex justify-center md:justify-end",
                "opacity-0 translate-x-[20px] transition-all duration-700 delay-200",
                bioInView && "opacity-100 translate-x-0"
              )}>
                <div className="max-w-xs w-full aspect-[4/5] rounded-2xl overflow-hidden bg-secondary/50 border border-border/50 relative group shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={haetPhoto}
                    alt="Haet"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        <Expertise />
        <Toolbox />


        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
