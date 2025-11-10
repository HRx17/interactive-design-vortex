import React, { useEffect, useRef, useState } from "react";
import { Mouse, Download, Mail, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Data (This is all the same as before) ---
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
  { Src: "Email", url: "mailto:haetranpariya17@gmail.com", icon: <Mail className="h-5 w-5" /> },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/haet-ranpariya-382324188",
    icon: <Linkedin className="h-5 w-5" />,
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
    <section
      id="home"
      // NEW: Added min-h-0 to allow section to shrink, and md:min-h-screen to ensure it's tall on desktop
      className="min-h-0 md:min-h-screen flex flex-col justify-center relative overflow-hidden py-20 bg-background"
    >
      {/* ... (Your background pattern div remains unchanged) ... */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* NEW: Removed max-w-5xl mx-auto from this container */}
      <div className="section-container relative z-10 mt-16 md:mt-24">
        {/* NEW: This is the main 2-column grid */}
        {/* It's 1 column on mobile, and 5 columns on desktop (3 for text, 2 for image) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* --- LEFT COLUMN (Text Content) --- */}
          {/* NEW: Takes up 3 of 5 columns on desktop */}
          {/* NEW: Switched from centered text/items to left-aligned on desktop */}
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

            {/* NEW: Removed max-w-2xl mx-auto so it fills its column */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              I'm Haet Ranpariya, a UI/UX Designer and Product Designer passionate about creating human-centered digital
              experiences. I also specialize in GenUI, leveraging generative AI to enhance and accelerate the design
              process.
            </p>

            {/* NEW: On desktop, the buttons will now align left */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-16">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-foreground text-background font-semibold rounded-lg transition-all duration-300 hover:bg-foreground/90 shadow-sm hover:shadow-md gap-2"
              >
                Download Resume
                <Download className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 border-2 border-foreground text-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-foreground hover:text-background"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* --- RIGHT COLUMN (Visual) --- */}
          {/* NEW: This is the new 2-column block for your image/visual */}
          <div className="md:col-span-2 flex items-center justify-center px-4">
            {/* --- THIS IS YOUR VISUAL PLACEHOLDER --- */}
            {/* Replace this div with an <img /> tag pointing to a photo of you */}
            <div
              className="w-64 h-64 md:w-full md:h-[400px] bg-gray-100 rounded-lg flex items-center justify-center text-muted-foreground"
              style={
                {
                  // Optional: Add a subtle background image if you want
                  // backgroundImage: "url('/path-to-your-image.jpg')",
                  // backgroundSize: "cover",
                  // backgroundPosition: "center"
                }
              }
            >
              {/* <img src="/path-to-your-image.png" alt="Haet Ranpariya" className="w-full h-full object-cover rounded-lg" /> */}
              <span className="text-sm">Your visual/photo goes here</span>
            </div>
          </div>
        </div>{" "}
        {/* End of 2-column grid */}
        {/* --- MOVED: Footer section is now OUTSIDE the main content div --- */}
        {/* This lets it be full-width while the content above is in columns */}
        {/* NEW: Added max-w-5xl mx-auto here to constrain the footer */}
        <div className="w-full max-w-5xl mx-auto border-t border-gray-200 pt-8 mt-16 md:mt-24">
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
                  href={link.url}
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-muted-foreground hover:text-foreground hover:bg-gray-200 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
