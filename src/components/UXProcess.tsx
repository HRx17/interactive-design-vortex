import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Search, Pencil, TestTube, Rocket, Users, ArrowRight, ArrowDown } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: "Discover & Research",
    description: "Understanding user needs, conducting research, and gathering insights through interviews and data analysis.",
    color: "from-emerald-400 to-teal-400",
    gradient: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: Lightbulb,
    title: "Define & Ideate",
    description: "Synthesizing research findings, defining problems, and brainstorming creative solutions.",
    color: "from-teal-400 to-cyan-400",
    gradient: "bg-gradient-to-br from-teal-500/20 to-cyan-500/20"
  },
  {
    icon: Pencil,
    title: "Design & Prototype",
    description: "Creating wireframes, high-fidelity designs, and interactive prototypes to visualize solutions.",
    color: "from-cyan-400 to-blue-400",
    gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: TestTube,
    title: "Test & Validate",
    description: "Conducting usability testing, gathering feedback, and iterating based on user insights.",
    color: "from-blue-400 to-indigo-400",
    gradient: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: Rocket,
    title: "Implement & Launch",
    description: "Collaborating with developers, ensuring design quality, and launching the product.",
    color: "from-indigo-400 to-purple-400",
    gradient: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20"
  },
  {
    icon: Users,
    title: "Monitor & Iterate",
    description: "Analyzing user behavior, measuring success metrics, and continuously improving the experience.",
    color: "from-purple-400 to-pink-400",
    gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
  }
];

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
        <div className={`text-center mb-20 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="heading mb-4">
            My UX <span className="text-gradient">Process</span>
          </h2>
          <p className="subheading max-w-3xl mx-auto">
            A user-centric approach focused on solving the right problems through iterative design and continuous validation.
          </p>
        </div>

        {/* Desktop Flow - Zigzag Pattern */}
        <div className="hidden lg:block relative">
          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === processSteps.length - 1;
            
            return (
              <div key={step.title} className="relative mb-32">
                <div className={`flex items-center ${isEven ? 'justify-start' : 'justify-end'} gap-8`}>
                  {/* Step Card */}
                  <div
                    className={`group relative w-full max-w-lg transition-all duration-700 ${
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className={`relative p-8 rounded-2xl ${step.gradient} backdrop-blur-sm border border-border/40 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20`}>
                      {/* Step Number */}
                      <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-background font-bold text-xl shadow-2xl`}>
                        {index + 1}
                      </div>

                      <div className="flex items-start gap-6">
                        {/* Icon */}
                        <div className={`shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                            <step.icon className="w-10 h-10 text-foreground" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3 text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Arrow */}
                {!isLast && (
                  <div className={`absolute ${isEven ? 'right-0' : 'left-0'} top-full mt-8 transition-all duration-700 ${
                    isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`} style={{ transitionDelay: `${(index * 150) + 300}ms` }}>
                    <div className={`flex flex-col items-center gap-2 ${isEven ? 'mr-20' : 'ml-20'}`}>
                      <ArrowDown className={`w-8 h-8 text-emerald-500 animate-bounce`} style={{ animationDelay: `${index * 200}ms` }} />
                      <div className={`w-1 h-12 bg-gradient-to-b ${step.color}`} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet Flow - Vertical */}
        <div className="lg:hidden relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-purple-500" />
          
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className={`relative pl-20 pb-16 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Step Number on the line */}
              <div className={`absolute left-2 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-background font-bold text-lg shadow-xl z-10`}>
                {index + 1}
              </div>

              {/* Card */}
              <div className={`relative p-6 rounded-2xl ${step.gradient} backdrop-blur-sm border border-border/40`}>
                {/* Icon */}
                <div className={`mb-4 w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} p-0.5`}>
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className={`mt-8 lg:mt-0 text-center transition-all duration-1000 delay-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-sm text-muted-foreground">
              This iterative process ensures every design decision is backed by research and validated through testing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
