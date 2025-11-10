import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Users, TrendingUp, Target, Globe } from "lucide-react";

// This is the data for your metrics.
// I removed the 'color' property as we'll now use your theme's primary color.
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
        // We only want it to trigger once
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
    // This section is now full-width and has a 'bg-secondary' to
    // create the "stripe" effect and separate it from the hero.
    <section
      ref={sectionRef}
      className="w-full bg-secondary" // Using your theme's secondary background
    >
      {/* 2. CONSTRAINED CONTENT:
          This div centers your content and uses the same padding
          as your global 'section-container' class.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Optional: A clear title for the section */}
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">Proven Impact</h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          My designs translate into measurable business outcomes.
        </p>

        {/* 3. SIMPLIFIED GRID:
            A clean 2x2 grid on mobile, and a 1x4 on desktop.
            This is much more structured than 'flex-wrap'.
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              // 4. SIMPLIFIED CARDS:
              // No borders, no glows. Just the data.
              // We kept your cool fade-in animation.
              <div
                key={metric.label}
                className={cn(
                  "flex flex-col items-center text-center",
                  "opacity-0 transform translate-y-8", // Animation classes
                  isInView && "opacity-100 translate-y-0",
                )}
                style={{ transitionDelay: `${index * 150}ms` }} // Staggered animation
              >
                <Icon className="w-10 h-10 text-muted-foreground mb-3" />

                {/* 5. THEME-ALIGNED COLOR:
                    The number now uses 'text-primary' (your new blue)
                    to create a strong, consistent visual hierarchy.
                */}
                <div className="text-4xl lg:text-5xl font-bold text-primary">{metric.value}</div>
                <div className="text-base text-muted-foreground font-medium">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
