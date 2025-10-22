import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const endorsements = [
  {
    name: "Matt Beynon",
    title: "Chief Product Officer",
    company: "Tech9",
    companyLogo: "/logos/tech9-logo.svg",
    quote: "Haet demonstrated exceptional qualities throughout his internship that made him a valuable addition to our design team. He consistently showed himself to be a real go-getter, approaching every project and task with enthusiasm and determination.",
    highlights: [
      "Exceptional at taking constructive feedback",
      "Proactive mindset and initiative",
      "User-centered design principles",
      "Tremendous asset to any team"
    ],
    fullText: "What particularly impressed me was Haet's ability to take constructive feedback exceptionally well. He listened carefully, asked thoughtful questions, and implemented suggestions with a positive attitude that made collaboration both productive and enjoyable. One of Haet's standout qualities is his proactive mindset. Rather than waiting for direction, he actively sought out opportunities to contribute and consistently looked for ways to add value to our projects."
  },
  {
    name: "WaahTV Founder",
    title: "Founder & CEO",
    company: "WaahTV",
    companyLogo: "/logos/waahtv-logo.png",
    quote: "Working with Haet was an absolute pleasure. His deep understanding of UX principles and ability to translate our vision into intuitive designs exceeded our expectations. He delivered high-quality work ahead of schedule while maintaining excellent communication throughout the project.",
    highlights: [
      "Exceptional UX research and user-centered approach",
      "Quick turnaround with high-quality deliverables",
      "Strong communication and collaboration skills",
      "Deep understanding of streaming platform needs"
    ],
    fullText: "Haet took our streaming platform from concept to launch with exceptional skill and professionalism. He conducted thorough user research, created detailed user personas, and delivered wireframes and prototypes that truly resonated with our target audience. What impressed me most was his ability to balance aesthetic appeal with functionality, ensuring our users could navigate complex features effortlessly from day one. His iterative approach and willingness to incorporate feedback made the entire process smooth and collaborative."
  }
];

export function Endorsements() {
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section ref={sectionRef} id="endorsements" className="section-container relative overflow-hidden bg-muted/30">
      {/* Background decorative elements with morphing */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl morph-blob" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl morph-blob" style={{animationDelay: '4s'}} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="heading mb-4">
            <span className="text-gradient">Endorsements</span>
          </h2>
          <p className="subheading max-w-2xl mx-auto">
            What others say about working with me
          </p>
        </div>

        {/* Endorsement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {endorsements.map((endorsement, index) => (
            <div
              key={index}
              className={`h-full transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="h-full group relative overflow-hidden border-border/40 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 bg-card/80 backdrop-blur-sm hover:scale-[1.02]">
                <CardContent className="p-8 md:p-10">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-24 h-24 text-emerald-500" />
                  </div>

                  <div className="relative z-10">
                    {/* Header with Info */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {endorsement.name}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {endorsement.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {endorsement.company}
                      </p>
                    </div>

                    {/* Main Quote */}
                    <div className="mb-6">
                      <blockquote className="text-lg leading-relaxed text-foreground/90 italic border-l-4 border-emerald-500 pl-6">
                        "{endorsement.quote}"
                      </blockquote>
                    </div>

                    {/* Expandable Full Text */}
                    {expandedCard === index && (
                      <div className="mb-6 animate-fade-in">
                        <p className="text-muted-foreground leading-relaxed">
                          {endorsement.fullText}
                        </p>
                      </div>
                    )}

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                        Key Highlights
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {endorsement.highlights.map((highlight, i) => (
                          <div 
                            key={i}
                            className="flex items-start gap-2 group/item"
                          >
                            <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 group-hover/item:scale-150 transition-transform" />
                            <span className="text-sm text-foreground/80">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Read More Toggle */}
                    <button
                      onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                      className="text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors"
                    >
                      {expandedCard === index ? 'Read Less' : 'Read Full Recommendation'} →
                    </button>
                  </div>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
