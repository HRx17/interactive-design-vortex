import React, { useState } from 'react';
import { Cpu, Mic, Eye, Gamepad2, Home, Zap, Sparkles, ArrowRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import cloudyFinal from '@/assets/cloudy/cloudy-final.jpg';
import cloudyWiring from '@/assets/cloudy/cloudy-wiring.jpg';
import cloudy3DPrint from '@/assets/cloudy/cloudy-3d-print.jpg';
import cloudyScreen from '@/assets/cloudy/cloudy-screen.jpg';

const features = [
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Emotional State Engine",
    description: "Dynamic mood system reacting to physical interactions (pats vs. pushes) or neglect."
  },
  {
    icon: <Gamepad2 className="h-5 w-5" />,
    title: "Autonomous Roaming",
    description: "Independent exploration using sensor fusion to avoid obstacles and edges."
  },
  {
    icon: <Mic className="h-5 w-5" />,
    title: "IoT Voice Hub",
    description: "Natural language interface to control smart home devices via voice commands."
  }
];

const hardwareSpecs = [
  "Raspberry Pi 4 Model B (Brain)",
  "L298N Driver + TT Motors (Movement)",
  "Gyro & IR Sensors (Navigation)",
  "3.5\" Touch LCD (Expression)",
  "Custom 3D Printed Chassis"
];

const softwareSpecs = [
  "Python Core Logic (Antigravity IDE)",
  "OpenAI API (Natural Language Processing)",
  "Google Cloud API (Smart Home Integration)"
];

const techIcons = ["Raspberry Pi", "Python", "OpenAI", "Google Cloud"];

const processImages = [
  { src: cloudyWiring, label: "Hardware Wiring" },
  { src: cloudy3DPrint, label: "3D Printed Body" },
  { src: cloudyScreen, label: "Expression Display" }
];

export function EngineeringSpotlight() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Compact Banner */}
      <section className="py-8 bg-gradient-to-r from-secondary via-background to-secondary border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            
            {/* Left - Image */}
            <div className="w-full md:w-48 lg:w-56 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl border border-border/50 group">
                <img 
                  src={cloudyFinal} 
                  alt="Cloudy - AI Robot"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>

            {/* Center - Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
                <Sparkles className="h-3 w-3 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Latest Innovation</span>
              </div>
              
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Cloudy <span className="text-muted-foreground font-normal text-base md:text-lg">(v1.0.0 Beta)</span>
              </h3>
              <p className="text-sm text-muted-foreground font-medium mb-2">AI-Native Autonomous Robot</p>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xl">
                A physical manifestation of Vibe Coding—bridging Python logic with custom hardware and generative AI instrumentation.
              </p>

              {/* Tech Icons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {techIcons.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - CTA */}
            <div className="flex-shrink-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
              >
                View Engineering Case Study
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Full Case Study Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0 bg-background border-border">
          <DialogTitle className="sr-only">Cloudy Engineering Case Study</DialogTitle>
          
          {/* Modal Header with Hero Image */}
          <div className="relative h-64 md:h-80">
            <img 
              src={cloudyFinal} 
              alt="Cloudy Robot"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold mb-3">
                <Sparkles className="h-3 w-3" />
                Engineering Case Study
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Cloudy <span className="text-muted-foreground font-normal text-xl">(v1.0.0 Beta)</span>
              </h2>
              <p className="text-muted-foreground mt-1">AI-Native Autonomous Companion Robot</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-secondary transition-colors"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            
            {/* The Vibe Coding Story */}
            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                The "Vibe Coding" Story (Hardware Edition)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The challenge was bridging high-level Python logic with low-level Linux hardware controls. I utilized <strong className="text-foreground">Agentic Gemini AI</strong> to rapidly decode driver documentation and sensor integration, allowing me to act as the Architect focused on the robot's 'personality' rather than getting stuck in driver boilerplate.
              </p>
            </div>

            {/* Technical Specifications - Two Columns */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Hardware */}
                <div className="p-5 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Cpu className="h-4 w-4" />
                    The Body (Hardware)
                  </h4>
                  <ul className="space-y-2">
                    {hardwareSpecs.map((spec, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Software */}
                <div className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/20">
                  <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    The Soul (Software)
                  </h4>
                  <ul className="space-y-2">
                    {softwareSpecs.map((spec, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="p-5 rounded-xl bg-secondary/50 border border-border/50">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-primary">{feature.icon}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Gallery */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Build Process Gallery</h3>
              <div className="grid grid-cols-3 gap-4">
                {processImages.map((image, index) => (
                  <div key={index} className="relative rounded-xl overflow-hidden aspect-square group">
                    <img 
                      src={image.src} 
                      alt={image.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-medium text-white">
                      {image.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Role Badge */}
            <div className="pt-4 border-t border-border/50 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Role</span>
                <p className="text-sm font-semibold text-foreground">Full-Stack Robotics Engineer (Hardware, Software, 3D Design)</p>
              </div>
              <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-xs font-semibold text-primary">Solo Project</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
