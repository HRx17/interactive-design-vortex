import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";
import { WorkExperience } from "./WorkExperience";

export function WorkExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
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
    <section id="work-experience" ref={sectionRef} className="w-full py-24 relative overflow-hidden">
      <div className="section-container">
        <span
          className={cn(
            "text-sm font-medium px-3 py-1 rounded-full bg-black-200 text-primary inline-block mb-4",
            "opacity-0 transform translate-y-6 transition-all duration-700",
            isInView && "opacity-100 translate-y-0",
          )}
        >
          Experience
        </span>

        <h2
          className={cn(
            "heading bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-12",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-100",
            isInView && "opacity-100 translate-y-0",
          )}
        >
          Work Experience
        </h2>

        <div
          className={cn(
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-200",
            isInView && "opacity-100 translate-y-0",
          )}
        >
          <WorkExperience />
        </div>
      </div>

      {/* Animated background decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-l from-emerald-500/10 to-transparent rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute top-1/3 left-0 w-1/4 h-1/3 bg-gradient-to-r from-teal-500/5 to-emerald-500/5 rounded-full filter blur-3xl opacity-10"></div>
    </section>
  );
}
