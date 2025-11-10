import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Users, TrendingUp, Target, Globe } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "50K+",
    label: "Users Reached",
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Increased User Engagement",
  },
  {
    icon: Target,
    value: "35%",
    label: "Improved Conversion Rate",
  },
  {
    icon: Globe,
    value: "10+",
    label: "Countries Covered",
  },
];

export function MetricsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    // 1. FULL-WIDTH WRAPPER
    // --- FIX 3: Added 'overflow-hidden' to prevent horizontal scroll issues ---
    <section ref={sectionRef} className="w-full bg-secondary overflow-hidden">
      {/* 2. CONSTRAINED CONTENT */}
      <div className="section-container">
        {" "}
        {/* This class is from your index.css */}
        {/* SECTION TITLE */}
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">Proven Impact</h2>
        {/* --- FIX 1: Reworded Subtitle --- */}
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I focus on translating complex user needs into intuitive designs that achieve measurable business outcomes.
        </p>
        {/* 4. METRICS CARD GRID:
            --- FIX 2: Changed from 'flex flex-wrap' to 'grid' ---
            This creates a 2-column grid on small screens and a 4-column
            grid on large screens, fixing the '10+' orphan card.
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              // 5. CARD STYLING (Removed 'flex-grow')
              <div
                key={metric.label}
                className={cn(
                  "group relative flex items-center gap-3 px-4 py-4 rounded-xl", // Adjusted padding/gap
                  "bg-card/40 backdrop-blur-sm border border-border/30",
                  "hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10",
                  "opacity-0 transform translate-y-8", // Animation classes
                  isInView && "opacity-100 translate-y-0 scale-100",
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Background glow effect (Subtler) */}
                <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">
                  <div
                    className={cn(
                      "p-3 rounded-lg bg-primary/10 border border-primary/20",
                      "group-hover:scale-110 transition-transform duration-300",
                    )}
                  >
                    <Icon className="w-5 h-5 text-primary" /> {/* Cleaned up size */}
                  </div>

                  <div className="text-left">
                    {/* THEME-ALIGNED METRIC */}
                    <div className="text-3xl font-bold text-primary">{metric.value}</div>
                    <div className="text-sm text-muted-foreground font-medium whitespace-nowrap">{metric.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
