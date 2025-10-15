import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Search, Pencil, TestTube, Rocket, Users } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: "Discover & Research",
    description: "Understanding user needs, conducting research, and gathering insights through interviews and data analysis.",
    color: "from-emerald-400 to-teal-400"
  },
  {
    icon: Lightbulb,
    title: "Define & Ideate",
    description: "Synthesizing research findings, defining problems, and brainstorming creative solutions.",
    color: "from-teal-400 to-cyan-400"
  },
  {
    icon: Pencil,
    title: "Design & Prototype",
    description: "Creating wireframes, high-fidelity designs, and interactive prototypes to visualize solutions.",
    color: "from-cyan-400 to-blue-400"
  },
  {
    icon: TestTube,
    title: "Test & Validate",
    description: "Conducting usability testing, gathering feedback, and iterating based on user insights.",
    color: "from-blue-400 to-indigo-400"
  },
  {
    icon: Rocket,
    title: "Implement & Launch",
    description: "Collaborating with developers, ensuring design quality, and launching the product.",
    color: "from-indigo-400 to-purple-400"
  },
  {
    icon: Users,
    title: "Monitor & Iterate",
    description: "Analyzing user behavior, measuring success metrics, and continuously improving the experience.",
    color: "from-purple-400 to-pink-400"
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
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="heading mb-4">
            My UX <span className="text-gradient">Process</span>
          </h2>
          <p className="subheading max-w-3xl mx-auto">
            A user-centric approach focused on solving the right problems through iterative design and continuous validation.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className={`group relative transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10">
                {/* Number indicator */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-background font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon with gradient background */}
                <div className={`mb-6 relative`}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>

              {/* Connecting line for larger screens */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-center justify-between flex-wrap gap-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${step.color} animate-pulse`} style={{ animationDelay: `${index * 200}ms` }} />
                  {index < processSteps.length - 1 && (
                    <div className={`hidden sm:block w-12 md:w-16 h-0.5 bg-gradient-to-r ${step.color} mx-1`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom description */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This iterative process ensures that every design decision is backed by user research and validated through testing, 
            creating products that truly solve user problems while meeting business goals.
          </p>
        </div>
      </div>
    </section>
  );
}
