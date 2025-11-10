import React, { useEffect, useRef, useState } from "react";
import { Mouse, Download, Mail, Linkedin } from "lucide-react"; // Import Mail and Linkedin
import { cn } from "@/lib/utils";

// --- New Data Structure for the Footer Section ---
// We replace the old 'companies' array with this more descriptive data.
// Make sure to update your logo paths in `logo:`
const currentFocus = {
  name: "RIT",
  description: "M.S. in HCI (Grad. Dec 2025)",
  logo: "/logos/rit-logo.png", // <-- Your RIT logo path
};

// --- THIS ARRAY IS NOW COMPLETE ---
const previousWork = [
  { name: "Tech9", logo: "/logos/tech9-logo.svg?v=2" },
  { name: "Excellus BCBS", logo: "/logos/excellus-logo.png" },
  { name: "Zlato Technolabs", logo: "/logos/zlato-logo.png" },
  { name: "WaahTV", logo: "/logos/waahtv-logo.png" },
  { name: "Upwork", logo: "/logos/upwork-logo.png" },
  { name: "Laurentian University", logo: "/logos/Laurentian_University.png" },
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

// --- Main Hero Component ---

export function Hero() {
  const sentenceRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const sentence = sentenceRef.current;
    if (!sentence) return;
    const spans = sentence.querySelectorAll("span");
    spans.forEach((span, index) => {
      span.style.setProperty("--index", index.toString());
    });
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth - 0.5;
      const y = clientY / window.innerHeight - 0.5;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pb-20 bg-background"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative z-10 mt-16 md:mt-24">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 ref={sentenceRef} className="heading mb-4 text-foreground text-5xl md:text-7xl overflow-visible">
            {/* The <h1> content remains the same... */}
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

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm Haet Ranpariya, a UI/UX Designer and Product Designer passionate about creating human-centered digital
            experiences. I also specialize in GenUI, leveraging generative AI to enhance and accelerate the design
            process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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

          {/* --- NEW STRUCTURED FOOTER SECTION --- */}
          {/* This replaces the "Certified by" and "Trusted by" divs */}
          <div className="w-full max-w-5xl mx-auto border-t border-gray-200 pt-8 mt-16">
            {/* Main flex container for the new footer UI */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
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
                {/* This row will now show all 6 logos and wrap on mobile */}
                <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-4 grayscale opacity-80">
                  {previousWork.map((company) => (
                    <img
                      key={company.name}
                      src={company.logo} // Make sure this path is correct
                      alt={company.name}
                      title={company.name}
                      className="h-6 object-contain" // Adjusted height to h-6 to fit better
                    />
                  ))}
                </div>
              </div>

              {/* Block 3: Social Links */}
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
          {/* --- END OF NEW SECTION --- */}
        </div>

        {/* Scroll indicator (still commented out as in your original file) */}
        {/* <div className="absolute bottom-8 ..."> ... </div> */}
      </div>
    </section>
  );
}
