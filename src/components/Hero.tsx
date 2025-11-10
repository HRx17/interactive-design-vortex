import React, { useEffect, useRef, useState } from "react";
import { Mouse, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface Company {
  name: string;
  logo?: string;
  url: string;
}

const companies: Company[] = [
  {
    name: "Tech9",
    url: "https://www.tech9.com/",
    logo: "/logos/tech9-logo.svg?v=2",
  },
  {
    name: "Excellus BCBS",
    url: "https://www.excellusbcbs.com/",
    logo: "/logos/excellus-logo.png",
  },
  {
    name: "Zlato Technolabs",
    url: "https://zlatotech.com/",
    logo: "/logos/zlato-logo.png",
  },
  {
    name: "WaahTV",
    url: "https://waahtv.com",
    logo: "/logos/waahtv-logo.png",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/",
    logo: "/logos/upwork-logo.png",
  },
  {
    name: "RIT",
    url: "https://www.rit.edu/",
    logo: "/logos/rit-logo.png",
  },
  {
    name: "Laurentian University",
    url: "https://laurentian.ca/",
    logo: "/logos/Laurentian_University.png",
  },
];

export function Hero() {
  const sentenceRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const sentence = sentenceRef.current;
    if (!sentence) return;

    // Get all spans
    const spans = sentence.querySelectorAll("span");

    // Set the --index custom property for each span
    spans.forEach((span, index) => {
      span.style.setProperty("--index", index.toString());
    });
  }, []);

  // Mouse parallax effect for the decorative elements
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
          <h1 className="heading mb-4 text-foreground text-5xl md:text-7xl overflow-visible">
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

          {/* Certifications */}
          <div className="text-center mb-2">
            <p className="text-muted-foreground text-sm mb-4 uppercase tracking-wider">Certified by</p>
            <div className="flex flex-wrap items-center justify-center gap-8 mb-4">
              <img
                src="/logos/google-cert.png"
                alt="Google Certified"
                className="h-8 w-auto opacity-90 hover:opacity-100 transition-all duration-300"
                title="Google UX Design Professional Certification"
              />
              <img
                src="/logos/umich-cert.png"
                alt="University of Michigan"
                className="h-8 w-auto opacity-90 hover:opacity-100 transition-all duration-300"
                title="University of Michigan Certified"
              />
              <img
                src="/logos/coursera-cert.png"
                alt="Coursera"
                className="h-8 w-auto opacity-90 hover:opacity-100 transition-all duration-300"
                title="Coursera Certifications"
              />
            </div>
          </div>
        </div>

        {/* Company logos */}
        <div className="text-center mb-4">
          <p className="text-muted-foreground text-sm mb-8 uppercase tracking-wider">Trusted by</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-8">
            {companies.map((company) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                {company.logo ? (
                  <img src={company.logo} alt={company.name} className="h-8 md:h-10 object-contain" />
                ) : (
                  <span className="text-muted-foreground font-semibold text-lg">{company.name}</span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 items-center transform -translate-x-10/10 animate-">
          <div className="flex flex-col items-center gap-2">
            <span className="text-muted-foreground text-xs uppercase tracking-wider font-medium">Scroll</span>
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-muted-foreground rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
