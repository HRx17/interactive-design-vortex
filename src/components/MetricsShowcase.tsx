import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Users, TrendingUp, Target, Globe } from "lucide-react";

// Using your original data structure, but removing the 'color' property
// as we'll now use the theme's 'text-primary'
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
    // 1. FULL-WIDTH WRAPPER:
    // We're keeping the full-width 'bg-secondary' to create the "stripe" effect.
    <section
      ref={sectionRef}
      className="w-full bg-secondary" // Using your theme's secondary background
    >
      {/* 2. CONSTRAINED CONTENT:
          This div centers your content (using your .section-container CSS class)
      */}
      <div className="section-container">
        {" "}
        {/* This class is from your index.css */}
        {/* 3. SECTION TITLE:
            Adding the clear title for hierarchy.
        */}
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">Proven Impact</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          My designs are more than just pixels; they translate into measurable business outcomes that drive growth.
        </p>
        {/* 4. METRICS CARD GRID:
            We're back to your original flex-wrap layout.
            This will show the four cards in a row.
        */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              // 5. YOUR ORIGINAL CARD STYLING:
              // We're using your original card classes: bg-card/40, backdrop-blur-sm, border, etc.
              <div
                key={metric.label}
                className={cn(
                  "group relative flex-grow flex items-center gap-4 px-6 py-4 rounded-xl",
                  "bg-card/40 backdrop-blur-sm border border-border/30", // Your glassmorphism style
                  "hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10",
                  "opacity-0 transform translate-y-8", // Animation classes
                  isInView && "opacity-100 translate-y-0 scale-100",
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Background glow effect (Subtler) */}
                <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 flex items-center gap-4">
                  <div
                    className={cn(
                      "p-3 rounded-lg bg-primary/10 border border-primary/20",
                      "group-hover:scale-110 transition-transform duration-300",
                    )}
                  >
                    {/* Icon now uses text-primary for theme consistency */}
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="text-left">
                    {/* 6. THEME-ALIGNED METRIC:
                        The number now uses 'text-primary' to match your Hero headline.
                        This is the key visual hierarchy fix.
                    */}
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
