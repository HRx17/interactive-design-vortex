import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Users, TrendingUp, Target, Globe } from 'lucide-react';

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
  }
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
      { threshold: 0.1 }
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
    // FULL-WIDTH WRAPPER (dark gray 'bg-accent')
    <section 
      ref={sectionRef} 
      className="w-full bg-accent overflow-hidden" 
    >
      {/* CONSTRAINED CONTENT */}
      <div className="section-container"> {/* This class is from your index.css */}
        
        {/* SECTION TITLE (light text) */}
        <h2 className="text-3xl font-bold text-center text-accent-foreground mb-4">
          Proven Impact
        </h2>
        <p className="text-lg text-accent-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          I focus on translating complex user needs into intuitive designs that achieve measurable business outcomes.
        </p>

        {/* METRICS CARD GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              // --- THIS IS THE CARD ---
              <div 
                key={metric.label}
                className={cn(
                  "group relative rounded-xl p-6",
                  // --- FIX: Changed to SOLID bg-card ---
                  // Removed 'bg-card/40 backdrop-blur-sm'
                  // Added 'bg-card shadow-lg' for a clean, solid, high-contrast look
                  "bg-card shadow-lg border border-border/10",
                  "transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/30",
                  "opacity-0 transform translate-y-8", // Animation classes
                  isInView && "opacity-100 translate-y-0 scale-100"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Background glow (Unchanged) */}
                <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* --- FIX: Centered Content ---
                    This is the centered (flex-col) layout
                */}
                <div className="relative z-10 flex flex-col items-center text-center gap-3">
                  
                  {/* Icon */}
                  <div className={cn(
                    "p-3 rounded-lg bg-primary/10 border border-primary/20",
                    "group-hover:scale-110 transition-transform duration-300"
                  )}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Text Block */}
                  <div>
                    <div className="text-4xl font-bold text-primary">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium mt-1">
                      {metric.label}
                    </div>
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