import React, { useEffect, useRef, useState } from "react";
import { Mouse, Download, Mail, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Data (Unchanged) ---
const currentFocus = {
  name: "RIT",
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
    url: "mailto:haetranpaeia17@gmail.com", 
    icon: <Mail className="h-5 w-5" /> 
  },
  { 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/haet-ranpariya-382324188", 
    icon: <Linkedin className="h-5 w-5" /> 
  },
];
// --- End of Data ---


export function Hero() {
  const sentenceRef = useRef<HTMLDivElement>(null);
  // ... (all your existing useEffect hooks for animation remain unchanged) ...
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


  return (
    // 1. FULL-WIDTH WRAPPER
    <section
      id="home"
      // Removed py-16/py-24, we will add padding inside
      className="min-h-0 md:min-h-screen flex flex-col justify-center relative overflow-hidden bg-background"
    >
      {/* Background pattern (full-width) - Unchanged */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* This 'div' is just a wrapper, it has NO width constraints */}
      {/* Added top padding here */}
      <div className="relative z-10 pt-16 md:pt-24">
        
        {/* 2. CONSTRAINED CONTENT Block 1 (Hero Grid) */}
        {/* Added bottom padding here (pb-16) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          
          {/* --- LEFT COLUMN (Text Content) --- */}
          <div className="md:col-span-3 flex flex-col items-center text-center md:items-start md:text-left">
            <h1 ref={sentenceRef} className="heading mb-4 text-foreground text-5xl md:text-7xl overflow-visible">
              {/* ... h1 content ... */}
              <div className="reveal-text overflow-visible">
                <span className="inline-block">Creating</span>
                <span className="inline-block ml-3">intentional</span>
              </div>
              <div className="reveal-text mt-2 overflow-visible">
                <span className="inline-block">and</span>
                <span className="inline-block ml-3">impactful</span>
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

          {/* --- RIGHT COLUMN (Buttons) --- */}
          <div className="md:col-span-2 flex flex-col items-center justify-center md:items-start md:justify-start md:pt-4">
            <div className="flex flex-col sm:flex-row md:flex-col gap-4">
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
          </div>

        </div> {/* End of first constrained block */}
        
        {/* --- NEW FULL-WIDTH DIVIDER (LINE 1) --- */}
        <div className="w-full border-t border-gray-200"></div>

        {/* 3. CONSTRAINED CONTENT Block 2 (Footer Logos) */}
        {/* Removed border-t and mt-16/mt-24. Added py-8 for spacing. */}
        <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4">
            
            {/* Block 1: Current Focus */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Current Focus
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
            <div className="flex flex-col items-center md:items-start">
              <span className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Previously at
              </span>
              <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-4 grayscale opacity-80">
                {previousWork.map((company) => (
                  <img
                    key={company.name}
                    src={company.logo}
                    alt={company.name}
                    title={company.name}
                    className="h-8 object-contain"
                  />
                ))}
              </div>
            </div>

            {/* Block 3: Certified By */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Certified by
              </span>
              <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-4">
                {certifications.map((cert) => (
                  <img
                    key={cert.name}
                    src={cert.logo}
                    alt={cert.name}
                    title={cert.title}
                    className="h-8 object-contain opacity-90"
                  />
                ))}
              </div>
            </div>

            {/* Block 4: Social Links */}
            <div className="flex flex-row items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url