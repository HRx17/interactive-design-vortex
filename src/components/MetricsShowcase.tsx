import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Mouse, Download, Mail, Linkedin } from "lucide-react";
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
const currentFocus = {
  name: "Rochester Institute of Technology",
  description: "M.S. in HCI (Grad. Dec 2025)",
  logo: "/logos/rit-logo.png",
};
const previousWork = [
  { name: "Tech9", logo: "/logos/tech9-logo.svg?v=2" },
  { name: "Excellus BCBS", logo: "/logos/excellus-logo.png" },
  { name: "Zlato Technolabs", logo: "/logos/zlato-logo.png" },
  { name: "WaahTV", logo: "/logos/waahtv-logo.png" },
  { name: "Upwork", logo: "/logos/upwork-logo.png" },
  { name: "Laurentian University", logo: "/logos/Laurentian_University.png" },
];
const certifications = [
  { name: "Google Certified", logo: "/logos/google-cert.png", title: "Google UX Design Professional Certification" },
  { name: "University of Michigan", logo: "/logos/umich-cert.png", title: "University of Michigan Certified" },
  { name: "Coursera", logo: "/logos/coursera-cert.png", title: "Coursera Certifications" },
];
const socialLinks = [
  {
    name: "Email",
    url: "mailto:haetranpariya17@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/haet-ranpariya-382324188",
    icon: <Linkedin className="h-5 w-5" />,
  },
];
export function MetricsShowcase() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    
    // ... (useEffect for IntersectionObserver remains unchanged) ...
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
        // FULL-WIDTH WRAPPER
        <section 
            ref={sectionRef} 
            // CHANGED: Use a consistent vertical padding for the whole gray section (pt-8, pb-20).
            // NOTE: 'bg-secondary' is your light gray background.
            className="w-full min-h-1 bg-secondary pt-8 pb-20 overflow-hidden" 
        >
            <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 1. LOGOS, CERTS, SOCIALS BLOCK */}
                {/* CHANGED: Removed pt-0/pb-0 and replaced with controlled py-8 (2rem)
                            Added a subtle border for separation and 'rounded-xl' 
                            and 'bg-white' to make the logos 'stand out' against the gray background. */}
                <div 
                    className="w-full py-8 bg-white rounded-xl shadow-sm border border-border/20" 
                > 
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 px-6">
                        
                        {/* Block 1: Current Focus */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <span className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                                Currently at
                            </span>
                            <div className="flex items-center gap-3">
                                <img src={currentFocus.logo} alt={currentFocus.name} className="h-10 w-10 object-contain" />
                                <div className="flex flex-col items-start">
                                    <span className="text-sm font-semibold text-foreground">{currentFocus.name}</span>
                                    <span className="text-sm text-muted-foreground">{currentFocus.description}</span>
                                </div>
                            </div>
                        </div>

                        {/* Block 2: Previously at */}
                        <div className="flex flex-col items-center md:items-start md:border-l md:border-border md:pl-6">
                            <span className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                                Previously at
                            </span>
                            <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-8 grayscale opacity-80">
                                {previousWork.map((company) => (
                                    <img key={company.name} src={company.logo} alt={company.name} title={company.name} className="h-8 object-contain" />
                                ))}
                            </div>
                        </div>

                        {/* Block 3: Certified By */}
                        <div className="flex flex-col items-center md:items-start md:border-l md:border-border md:pl-6">
                            <span className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                                Certified by
                            </span>
                            <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-6">
                                {certifications.map((cert) => (
                                    <img key={cert.name} src={cert.logo} alt={cert.name} title={cert.title} className="h-8 object-contain opacity-90" />
                                ))}
                            </div>
                        </div>

                        {/* Block 4: Social Links */}
                        <div className="flex flex-row items-center gap-3 md:border-l md:border-border md:pl-6">
                            {socialLinks.map((link) => (
                                <a key={link.name} href={link.url} aria-label={link.name} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-lg text-muted-foreground hover:text-foreground hover:bg-gray-200 transition-colors">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                {/* 💥 END OF LOGO BLOCK 💥 */}

                {/* --- SEPARATION --- */}
                {/* Use a clear vertical gap (margin-top) */}
                <div className="mt-16">
                    {/* SECTION TITLE */}
                    <h2 className="text-3xl font-bold text-foreground mb-4 text-left">
                        Proven Impact
                    </h2>
                    
                    <p className="text-lg text-muted-foreground text-left mb-12 max-w-2xl">
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
                                        "bg-card shadow-lg border border-border/10",
                                        "transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/30",
                                        "opacity-0 transform translate-y-8", // Animation classes
                                        isInView && "opacity-100 translate-y-0 scale-100"
                                    )}
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    {/* ... rest of metric card content ... */}
                                    <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative z-10 flex flex-col items-center text-center gap-3">
                                        
                                        <div className={cn(
                                            "p-3 rounded-lg bg-primary/10 border border-primary/20",
                                            "group-hover:scale-110 transition-transform duration-300"
                                        )}>
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        
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
                </div> {/* End of mt-16 div for Proven Impact content */}
            </div>
        </section>
    );
}