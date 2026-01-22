import React, { useEffect, useRef, useState } from "react";
import { Download, Mail, Linkedin, Users, TrendingUp, Target, Globe, GraduationCap } from "lucide-react";

// --- Data (Finalized and Aligned) ---
const previousWork = [
  { name: "Rochester Institute of Technology", logo: "/logos/rit-logo.png", url: "https://www.rit.edu/" },
  { name: "Tech9", logo: "/logos/tech9-logo.svg?v=2", url: "https://www.tech9.com/" },
  { name: "Excellus BCBS", logo: "/logos/excellus-logo.png", url: "https://www.excellusbcbs.com/" },
  { name: "Zlato Technolabs", logo: "/logos/zlato-logo.png", url: "https://www.zlatoinfotech.com/" },
  { name: "WaahTV", logo: "/logos/waahtv-logo.png", url: "https://www.waahtv.com/" },
  { name: "Upwork", logo: "/logos/upwork-logo.png", url: "https://www.upwork.com/" },
  { name: "Laurentian University", logo: "/logos/Laurentian_University.png", url: "https://laurentian.ca/" },
];
const certifications = [
  { name: "Google UX Design", logo: "/logos/google-cert.png", title: "Google UX Design Professional Certification" },
  { name: "University of Michigan", logo: "/logos/umich-cert.png", title: "University of Michigan Certified" },
  { name: "Coursera", logo: "/logos/coursera-cert.png", title: "Coursera Certified" },
];
const socialLinks = [
  { name: "Email", url: "mailto:haetranpariya17@gmail.com", icon: <Mail className="h-5 w-5" /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/haet-ranpariya-382324188", icon: <Linkedin className="h-5 w-5" /> },
];
const metrics = [
  { icon: Users, value: "50K+", label: "Users Reached" },
  { icon: TrendingUp, value: "40%", label: "Engage Increase" },
  { icon: Target, value: "35%", label: "Conversion Rate" },
  { icon: Globe, value: "10+", label: "Countries" }
];
// --- End of Data ---


export function Hero() {
  const sentenceRef = useRef<HTMLDivElement>(null);

  // Cleanup/Placeholders for other logic
  useEffect(() => { /* ... */ }, []);
  useEffect(() => { /* ... */ }, []);

  return (
    // 1. FULL-WIDTH WRAPPER (GRADIENT)
    <section
      id="home"
      className="flex flex-col justify-start relative overflow-hidden pt-44 text-white"
      style={{
        background: 'linear-gradient(225deg, #434343 17%, #050505 100%)',
      }}
    >
      {/* --- Background Elements --- */}
      <div aria-hidden="true" className="absolute inset-0 w-full h-full -z-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 2. HERO CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center pt-8 pb-32">

          {/* --- LEFT COLUMN (Text Content) --- */}
          <div className="md:col-span-3 flex flex-col items-center text-center md:items-start md:text-left">
            <p className="text-xl text-gray-400 mb-2">Hi there! I'm</p>

            <h1 ref={sentenceRef} className="heading mb-4 text-white overflow-visible font-bold leading-tight">
              <div className="reveal-text overflow-visible text-5xl md:text-6xl">
                <span className="inline-block font-ballmain">Haet Ranpariya,</span>
              </div>
              <div className="reveal-text mt-2 overflow-visible text-4xl md:text-5xl">
                <span className="inline-block"></span>
              </div>
              <div className="reveal-text mt-2 overflow-visible text-4xl md:text-5xl">
                <span className="inline-block"></span>
              </div>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
              <span className="text-2xl md:text-2xl font-bold text-white">Product Designer, Vibe Coder & Frontend Dev.</span> <span className="text-gray-400">I orchestrate AI to turn design intent into production-ready code. Specializing in GenUI and Vibe Coding—bridging the gap between Figma and Full-Stack at record speed.</span>
            </p>
          </div>

          {/* --- 🚨 RESTRUCTURED RIGHT COLUMN (Fixed Order) --- */}
          <div className="md:col-span-2 flex flex-col items-center justify-center md:items-start md:justify-start md:pt-4">

            {/* 🟢 Tier 1: Action Buttons & Social Links (Moved to Top) */}
            <div className="flex gap-3 mb-10 w-full justify-center md:justify-start order-1">
              {/* Button 1: Resume */}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center px-4 py-3 bg-white text-black font-semibold rounded-lg transition-all duration-300 hover:bg-gray-200 shadow-sm gap-2"
              >
                Resume
                <Download className="h-4 w-4" />
              </a>

              {/* Button 2: LinkedIn */}
              <a
                href="https://www.linkedin.com/in/haet-ranpariya-382324188"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-black gap-2"
              >
                LinkedIn
                <Linkedin className="h-4 w-4" />
              </a>

              {/* Button 3: View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-4 py-3 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
              >
                View Projects
              </a>

              {/* Button 4: Google Scholar */}
              <a
                href="https://scholar.google.com/citations?hl=en&user=tcxJYE4AAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-black gap-2"
                title="Google Scholar"
              >
                <GraduationCap className="h-4 w-4" />
              </a>

            </div>

            {/* 🟢 Tier 2: Metrics Static Grid (Moved to Second) */}
            <div className="w-full max-w-md order-2 mb-10">
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 justify-center md:justify-start">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-2 flex-col flex-shrink-0"
                    >
                      <div className="flex items-center text-gray-400">
                        <Icon className="h-4 w-4 mr-1" />
                        <span className="text-sm uppercase tracking-wider">{metric.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-white mt-1">{metric.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 🟢 Tier 3: CERTIFIED BY (Aligned and Divided) */}
            <div className="w-96 max-w-md order-3 mt-4">
              {/* 🚨 CERTIFIED BY FIX: Centered text with horizontal lines */}
              <div className="flex items-center justify-center mb-6">
                <hr className="w-full border-t border-gray-600/50 mr-4" />
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex-shrink-0">
                  Certified by
                </span>
                <hr className="w-full border-t border-gray-600/50 ml-4" />
              </div>

              <div className="flex flex-wrap gap-x-6 justify-center md:justify-center">
                {certifications.map((logoItem, index) => (
                  <div
                    key={`cert-hero-${index}`}
                    className="flex justify-center items-center py-2 px-2"
                  >
                    <img
                      src={logoItem.logo}
                      alt={logoItem.name}
                      title={logoItem.title || logoItem.name}
                      className="h-12 w-auto object-contain max-h-12 opacity-80 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        {/* End of Content Grid */}
      </div>

      {/* 3. CONSOLIDATED LOGO BAR (LIGHT GRAY SECTION) - ONLY PREVIOUS WORK */}
      <div
        style={{ backgroundColor: '#F2F2F2' }}
        className="w-full mx-auto py-10 border-t border-gray-700"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* LINE 1: CATEGORY TITLE (ONLY PREVIOUSLY AT) - Left Aligned */}
          <div className="flex flex-col sm:flex-row justify-center items-center mb-6 px-0">
            <hr className="w-96 border-t border-gray-600/50 mr-4" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider text-center sm:text-left mb-2 sm:mb-0">
              Previously at
            </span>
            <hr className="w-96 border-t border-gray-600/50 mr-4" />
          </div>
        </div>

        {/* 🚨 LINE 2: ALL LOGOS (ONLY PREVIOUS WORK) - Centered and Spaced */}
        <div className="w-full max-w-7xl mx-auto">
          {/* 🚨 SPACING FIX: Using flex-wrap and justify-center with larger gap */}
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-4 px-4 sm:px-6 lg:px-8">

            {previousWork.map((logoItem, index) => (
              <a
                key={`work-${index}`}
                href={logoItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center flex-shrink-0 py-2 cursor-pointer transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={logoItem.logo}
                  alt={logoItem.name}
                  title={logoItem.name}
                  className="h-16 w-auto object-contain max-h-16 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </a>
            ))}

          </div>
        </div>
      </div>
      {/* End of Logo Bar */}
    </section>
  );
}