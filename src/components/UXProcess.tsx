import { useEffect, useRef, useState } from 'react';

const processSteps = [
  {
    title: "Discover & Research",
    subtitle: "Problem Finding",
    description: "Understanding user needs through research and gathering insights",
  },
  {
    title: "Define & Ideate",
    subtitle: "Problem Framing",
    description: "Synthesizing findings and defining the core problem",
  },
  {
    title: "Design & Prototype",
    subtitle: "Solution Shaping",
    description: "Creating and iterating on design solutions",
  },
  {
    title: "Test & Validate",
    subtitle: "Solution Validation",
    description: "Testing with users and refining based on feedback",
  },
  {
    title: "Implement & Launch",
    subtitle: "Solution Delivery",
    description: "Collaborating with developers to bring designs to life",
  },
  {
    title: "Monitor & Iterate",
    subtitle: "Continuous Improvement",
    description: "Measuring success and iterating for better outcomes",
  }
];

// SVG Graphics for each step
const StepGraphics = ({ index }: { index: number }) => {
  const graphics = [
    // Scribbled circles - Discovery/Chaos
    <svg viewBox="0 0 120 100" className="w-full h-full">
      <path d="M60,50 m-25,0 a25,25 0 1,0 50,0 a25,25 0 1,0 -50,0" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <path d="M60,50 m-18,0 a18,18 0 1,1 36,0 a18,18 0 1,1 -36,0" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <path d="M60,50 m-30,5 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <circle cx="60" cy="50" r="3" fill="currentColor" />
    </svg>,
    
    // Diamond/Converging - Framing/Focus
    <svg viewBox="0 0 120 100" className="w-full h-full">
      <path d="M20,50 L60,20 L100,50 L60,80 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <path d="M30,50 L60,30 L90,50 L60,70 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <path d="M40,50 L60,40 L80,50 L60,60 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      <circle cx="60" cy="50" r="4" fill="currentColor" />
    </svg>,
    
    // Wave - Iteration/Shaping
    <svg viewBox="0 0 120 100" className="w-full h-full">
      <path d="M10,50 Q30,20 50,50 T90,50 T110,50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <path d="M10,45 Q30,25 50,45 T90,45 T110,45" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <path d="M10,55 Q30,35 50,55 T90,55 T110,55" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <circle cx="60" cy="50" r="3" fill="currentColor" />
    </svg>,
    
    // Test tubes/Beakers - Validation
    <svg viewBox="0 0 120 100" className="w-full h-full">
      <rect x="35" y="30" width="15" height="40" rx="2" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <rect x="55" y="25" width="15" height="45" rx="2" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <rect x="75" y="30" width="15" height="40" rx="2" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <line x1="35" y1="55" x2="50" y2="55" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <line x1="55" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <line x1="75" y1="55" x2="90" y2="55" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    </svg>,
    
    // Rocket - Launch/Delivery
    <svg viewBox="0 0 120 100" className="w-full h-full">
      <path d="M60,20 L70,45 L80,70 L60,65 L40,70 L50,45 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <path d="M50,60 Q45,75 40,85" stroke="currentColor" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
      <path d="M70,60 Q75,75 80,85" stroke="currentColor" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
      <circle cx="60" cy="35" r="4" fill="currentColor" opacity="0.6" />
    </svg>,
    
    // Circular arrows - Iteration
    <svg viewBox="0 0 120 100" className="w-full h-full">
      <path d="M60,30 A20,20 0 1,1 59.9,30" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <path d="M60,35 A15,15 0 1,0 59.9,35" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <polygon points="75,30 80,28 78,33" fill="currentColor" opacity="0.5" />
      <polygon points="45,50 40,52 42,47" fill="currentColor" opacity="0.5" />
      <circle cx="60" cy="50" r="3" fill="currentColor" />
    </svg>
  ];
  
  return graphics[index] || graphics[0];
};

export function UXProcess() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} className="section-container relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="heading mb-4">
            My UX <span className="text-gradient">Process</span>
          </h2>
          <p className="subheading max-w-3xl mx-auto mb-8">
            Focusing on figuring out the right problem to solve is the core of my UX process. I lead with a user-centric mindset, 
            using iterative sprints to design and deliver systems that meet both user needs and business goals.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative py-16">
            {/* Main horizontal line */}
            <div className="absolute left-0 right-0 top-32 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-purple-500" />
            
            {/* Process Steps */}
            <div className="grid grid-cols-6 gap-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  {/* Vertical connector to timeline */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-24 w-0.5 h-8 bg-border" />
                  
                  {/* Dot on timeline */}
                  <div 
                    className={`absolute left-1/2 -translate-x-1/2 top-[124px] w-4 h-4 rounded-full bg-emerald-500 border-4 border-background transition-all duration-700 ${
                      isInView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  />
                  
                  {/* Graphic */}
                  <div 
                    className={`relative mb-4 transition-all duration-700 ${
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="w-full h-24 flex items-center justify-center text-emerald-500">
                      <StepGraphics index={index} />
                    </div>
                  </div>
                  
                  {/* Content below timeline */}
                  <div 
                    className={`mt-12 text-center transition-all duration-700 ${
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 200}ms` }}
                  >
                    <h3 className="font-bold text-foreground mb-1 text-sm">
                      {step.subtitle}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-purple-500" />
          
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className={`relative pl-20 pb-12 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Dot on timeline */}
              <div className="absolute left-6 top-12 w-4 h-4 rounded-full bg-emerald-500 border-4 border-background z-10" />
              
              {/* Graphic */}
              <div className="w-16 h-16 mb-3 text-emerald-500">
                <StepGraphics index={index} />
              </div>
              
              {/* Content */}
              <h3 className="font-bold text-foreground mb-1">
                {step.subtitle}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
