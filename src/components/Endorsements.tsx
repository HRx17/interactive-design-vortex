import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

// --- Data (Added rotation) ---
const endorsements = [
  {
    name: "Matt Beynon",
    title: "Chief Product Officer, Tech9",
    quote: "Haet demonstrated exceptional qualities... approaching every project and task with enthusiasm and determination.",
    highlights: [
      "Exceptional at taking constructive feedback",
      "Proactive mindset and initiative",
      "User-centered design principles",
      "Tremendous asset to any team"
    ],
    fullText: "What particularly impressed me was Haet's ability to take constructive feedback exceptionally well... (full text)",
    rotation: "lg:-rotate-1" // Subtle rotation for desktop
  },
  {
    name: "WaahTV Founder",
    title: "Founder & CEO, WaahTV",
    quote: "Working with Haet was an absolute pleasure. His deep understanding of UX principles and ability to translate our vision into intuitive designs exceeded our expectations.",
    highlights: [
      "Exceptional UX research and user-centered approach",
      "Quick turnaround with high-quality deliverables",
      "Strong communication and collaboration skills",
      "Deep understanding of streaming platform needs"
    ],
    fullText: "Haet took our streaming platform from concept to launch with exceptional skill and professionalism... (full text)",
    rotation: "lg:rotate-1" // Opposite rotation
  },
  {
    name: "Stephanie Bird",
    title: "Sr. Product Designer",
    quote: "Haet is an incredibly humble Product Designer, his passion for put the user first was clear in the interactions he built at his time at Tech9.",
    highlights: [
      "Passion for putting the user first",
      "Eager to learn and grow",
      "Insightful contributor to feedback sessions",
      "Dedicated UI/UX or Product Designer"
    ],
    fullText: "Haet is an incredibly humble Product Designer, his passion for put the user first was clear in the interactions he built at his time at Tech9. Haet is eager to learn and grow from other senior designers and always brought good insights to our group feedback sessions. Haet would be a valuable asset to any company looking for a dedicated UI/UX or Product Designer, he can do it all.",
    rotation: "lg:-rotate-2" // Varied rotation
  }
];

// --- NEW Thumbtack Component ---
const Thumbtack = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
    <div className="w-5 h-5 rounded-full bg-red-500 shadow-lg border-2 border-red-700/50">
      <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white/40 to-transparent"></div>
    </div>
  </div>
);

// --- NEW "Pinned Note" Card Component ---
const EndorsementCard = ({ endorsement, isExpanded, onToggleExpand, rotation }: any) => {
  return (
    // --- FIX: New "Paper" Card Style ---
    <Card className={cn(
      "h-full group relative overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-500", // Reduced padding
      "bg-card border border-border/40 shadow-xl", // Solid card, strong shadow
      "hover:shadow-2xl hover:border-primary/30",
      rotation // Apply the rotation
    )}>
      {/* --- NEW: Thumbtack --- */}
      <Thumbtack />

      <CardContent className="p-0">
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote className="w-20 h-20 text-foreground" /> {/* Reduced icon size */}
        </div>

        <div className="relative z-10">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-foreground mb-1"> {/* Reduced text size */}
              {endorsement.name}
            </h3>
            <p className="text-muted-foreground font-medium text-sm"> {/* Reduced text size */}
              {endorsement.title}
            </p>
          </div>

          <div className="mb-6">
            <blockquote className="text-base leading-relaxed text-foreground/90 italic border-l-4 border-primary pl-4"> {/* Reduced text size and padding */}
              "{endorsement.quote}"
            </blockquote>
          </div>

          {/* Key Highlights (Unchanged) */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider"> {/* Reduced text size */}
              Key Highlights
            </h4>
            <div className="grid grid-cols-1 gap-2"> {/* Single column for tighter space */}
              {endorsement.highlights.map((highlight: string, i: number) => (
                <div
                  key={i}
                  className="flex items-start gap-2 group/item"
                >
                  <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5 group-hover/item:scale-150 transition-transform" />
                  <span className="text-xs text-foreground/80"> {/* Reduced text size */}
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Read More Toggle (Unchanged) */}
          <button
            onClick={onToggleExpand}
            className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {isExpanded ? 'Read Less' : 'Read Full Recommendation'} →
          </button>

          {/* Expandable Full Text (Unchanged) */}
          {isExpanded && (
            <div className="mt-4 animate-fade-in">
              <p className="text-muted-foreground leading-relaxed text-sm">
                {endorsement.fullText}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};


// --- Main Endorsements Component (Refactored to "Pinboard") ---
export function Endorsements({ className }: { className?: string }) {
  const { ref: sectionRef, inView: isInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    // --- FIX 1: 'bg-background' (white) and 'border-t' for the "stripe" ---
    <section
      ref={sectionRef}
      id="endorsements"
      className={cn("relative overflow-hidden bg-background border-t border-border", className)}
    >
      {/* --- FIX 2: This is your new "Pinboard" Dot Grid Background --- */}
      <div
        className="absolute inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)",
          backgroundSize: "30px 30px", // Smaller dots, closer together
          opacity: 0.4,
        }}
      />

      {/* Use the 'section-container' to constrain the content */}
      <div className="section-container">
        <div className="max-w-7xl mx-auto"> {/* Increased max-width */}
          {/* Section Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            <span className={cn(
              "text-sm font-medium px-3 py-1 rounded-full bg-secondary text-primary inline-block mb-4",
              "transition-all duration-700",
              isInView && "opacity-100"
            )}>
              Testimonials
            </span>

            <h2 className="heading mb-4">
              Endorsements
            </h2>
            <p className="subheading max-w-2xl mx-auto text-muted-foreground">
              What others say about working with me
            </p>
          </div>

          {/* --- FIX 3: 3-Column Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> {/* Updated grid columns and gap */}
            {endorsements.map((endorsement, index) => (
              <div
                key={index}
                className={`h-full transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <EndorsementCard
                  endorsement={endorsement}
                  isExpanded={expandedCard === index}
                  onToggleExpand={() => setExpandedCard(expandedCard === index ? null : index)}
                  rotation={endorsement.rotation} // Pass the rotation prop
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}