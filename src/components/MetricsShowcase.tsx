import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Users, TrendingUp, Target, Globe } from 'lucide-react';

export function MetricsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
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

  const metrics = [
    {
      icon: Users,
      value: "50K+",
      label: "Users Reached",
      color: "text-gray-700"
    },
    {
      icon: TrendingUp,
      value: "40%",
      label: "Increased User Engagement",
      color: "text-gray-700"
    },
    {
      icon: Target,
      value: "35%",
      label: "Improved Conversion Rate",
      color: "text-gray-800"
    },
    {
      icon: Globe,
      value: "10+",
      label: "Countries Covered",
      color: "text-gray-800"
    }
  ];
  
  return (
    <div ref={sectionRef} className="py-6 relative overflow-hidden bg-white">
      <div className="section-container">
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={metric.label}
                className={cn(
                  "group relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-gray-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-gray-500/10",
                  "opacity-0 transform translate-y-8 scale-95",
                  isInView && "opacity-100 translate-y-0 scale-100"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-gray-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">
                  <div className={cn(
                    "p-2 rounded-xl bg-gradient-to-br from-gray-500/10 to-gray-600/10 border border-gray-500/20",
                    "group-hover:scale-110 transition-transform duration-300"
                  )}>
                    <Icon className={cn("w-5 h-5", metric.color)} />
                  </div>
                  
                  <div className="text-center sm:text-left">
                    <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                      {metric.label}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-gray-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-gray-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-10 w-3 h-3 border border-gray-400/20 rounded-full float-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-16 w-2 h-2 bg-gray-400/20 rounded-full float-animation" style={{animationDelay: '4s'}}></div>
    </div>
  );
}