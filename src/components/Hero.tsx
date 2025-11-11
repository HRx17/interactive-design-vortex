import React, { useEffect, useRef, useState } from "react";
import { Mouse, Download, Mail, Linkedin, Users, TrendingUp, Target, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Data (Combined and Restored) ---
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
const metrics = [
  { icon: Users, value: "50K+", label: "Users Reached" },
  { icon: TrendingUp, value: "40%", label: "Increased User Engagement" },
  { icon: Target, value: "35%", label: "Improved Conversion Rate" },
  { icon: Globe, value: "10+", label: "Countries Covered" }
];
// --- End of Data ---

// Function to calculate animation duration based on the number of items
const metricsCount = metrics.length;
const animationDuration = `${metricsCount * 3}s`; // e.g., 4 metrics * 3s = 12 seconds

export function Hero() {
  const sentenceRef = useRef<HTMLDivElement>(null);
  
  // 💥 NOTE: Removed state-based rotation logic 💥

  // ... (existing useEffect hooks for animation remain unchanged) ...
  useEffect(() => {
    const sentence = sentenceRef.current;
    if (!sentence) return;
    const spans = sentence.querySelectorAll("span");
    spans.forEach((span, index) => {
      span.style.setProperty("--index", index.toString());
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth - 0.5;
      const y = clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  // Create the list that is duplicated for the seamless loop
  const seamlessMetrics = metrics.concat(metrics);

  return (
    // 1. FULL-WIDTH WRAPPER
    <section
      id="home"
      // FINAL PADDING: pt-40 (high above H1), pb-12 (gap above the logo bar)
      className="min-h-1 flex flex-col relative overflow-hidden pt-48 pb-0 bg-background"
    >
      {/* --- Background Blobs --- */}
      <div aria-hidden="true" className="absolute inset-0 w-full h-full -z-10">
        <div className="absolute -top-48 left-1/4 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full filter blur-[150px]" />
        <div className="absolute top-48 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full filter blur-[150px]" />
      </div>
      {/* Background pattern - Unchanged */}
      <div className="absolute inset-0 opacity-[0.03] -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* 2. CONSTRAINED CONTENT Block 1 (Hero Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-1 md:pb-12">
          
          {/* 💖 --- LEFT COLUMN (Text Content - RESTORED) --- 💖 */}
          <div className="md:col-span-3 flex flex-col items-center text-center md:items-start md:text-left">
            <h1 ref={sentenceRef} className="heading mb-4 text-foreground text-5xl md:text-7xl overflow-visible">
              <div className="reveal-text overflow-visible">
                <span className="inline-block">Creating</span>
                <span className="inline-block ml-3">intentional</span>
              </div>
              <div className="reveal-text mt-2 overflow-visible">
                <span className="inline-block">and</span>
                <span className="inline-block ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  impactful
                </span>
                <span className="inline-block ml-3">digital</span>
              </div>
              <div className="reveal-text mt-2 overflow-visible">
                <span className="inline-block">experiences</span>
              </div>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              I'm Haet Ranpariya, a UI/UX Designer and Product Designer passionate about creating human-centered digital
              experiences. I also specialize in GenUI, leveraging generative AI to enhance and accelerate the design
              process.
            </p>
          </div>

          {/* --- RIGHT COLUMN (Buttons & Metrics) --- */}
          <div className="md:col-span-2 flex flex-col items-center justify-center md:items-start md:justify-start md:pt-4">
            
            {/* Buttons (RESTORED) */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-4 mb-8">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-semibold rounded-lg transition-all duration-300 hover:bg-foreground/90 shadow-sm hover:shadow-md gap-2"
              >
                Download Resume
                <Download className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground text-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-foreground hover:text-background"
              >
                View Projects
              </a>
            </div>

            {/* --- Seamless Scrolling Metrics Tags Container --- */}
            {/* Height is fixed to show two items clearly */}
            <div className="relative h-[80px] w-full max-w-[280px] overflow-hidden">
                
                {/* Metrics list container: Uses animation for continuous motion */}
                <div 
                    className="flex flex-col gap-3"
                    style={{
                        // Animation style is applied here, requiring the keyframe to be in global CSS.
                        animation: `scroll-up-loop ${animationDuration} linear infinite`,
                    }}
                >
                    {seamlessMetrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            // The key uses index for simplicity since the list is static
                            <div key={index} className="flex items-center gap-3 p-3 bg-secondary/70 rounded-lg backdrop-blur-sm border border-border/10">
                                <Icon className="h-5 w-5 text-primary" />
                                <div>
                                    <span className="text-lg font-bold text-foreground">{metric.value}</span>
                                    <span className="text-sm text-muted-foreground ml-2">{metric.label}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* Fading gradient cue at the top and bottom */}
                <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-background to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
        {/* End of first constrained block */}

        {/* --- FULL-WIDTH DIVIDER (LINE 1) --- */}
        <div className="w-full border-t border-gray-200"></div>

       {/* 3. CONSTRAINED CONTENT Block 2 (Logo Bar - REINSTATED & ALIGNED) */}
        <div className="w-full max-w-7xl mx-auto pt-6 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
            {/* Block 1: Current Focus */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Currently at
              </span>
              <div className="flex items-center gap-3">
                <img
                  src={currentFocus.logo}
                  alt={currentFocus.name}
                  className="h-10 w-10 object-contain"
                />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold text-foreground">
                    {currentFocus.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {currentFocus.description}
                  </span>
                </div>
              </div>
            </div>

            {/* Block 2: Previously at (Logos Aligned) */}
            <div className="flex flex-col items-center md:items-start md:border-l md:border-border md:pl-6">
              <span className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Previously at
              </span>
              <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-8 grayscale opacity-80 mb-2">
                {previousWork.map((company) => (
                  <img
                    key={company.name}
                    src={company.logo}
                    alt={company.name}
                    title={company.name}
                    className="h-8 object-contain my-auto max-h-8"
                  />
                ))}
              </div>
            </div>

            {/* Block 3: Certified By (Logos Aligned) */}
            <div className="flex flex-col items-center md:items-start md:border-l md:border-border md:pl-6">
              <span className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Certified by
              </span>
              <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-6 mb-2">
                {certifications.map((cert) => (
                  <img
                    key={cert.name}
                    src={cert.logo}
                    alt={cert.name}
                    title={cert.title}
                    className="h-8 object-contain opacity-90 my-auto max-h-8"
                  />
                ))}
              </div>
            </div>

            {/* Block 4: Social Links (Aligned) */}
            <div className="flex flex-row items-center gap-3 md:border-l md:border-border md:pl-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-muted-foreground hover:text-foreground hover:bg-gray-200 transition-colors my-auto"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* End of logo bar block */}
      </div>
    </section>
  );
}