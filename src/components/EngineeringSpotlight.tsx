import React from 'react';
import { Cpu, Mic, Eye, Gamepad2, Home, Zap, Sparkles } from 'lucide-react';
import cloudyFinal from '@/assets/cloudy/cloudy-final.jpg';
import cloudyWiring from '@/assets/cloudy/cloudy-wiring.jpg';
import cloudy3DPrint from '@/assets/cloudy/cloudy-3d-print.jpg';
import cloudyScreen from '@/assets/cloudy/cloudy-screen.jpg';

const features = [
  {
    icon: <Eye className="h-4 w-4" />,
    title: "Emotional Engine",
    description: "Reacts to physical touch (pats vs. pushes) and neglect (boredom)"
  },
  {
    icon: <Gamepad2 className="h-4 w-4" />,
    title: "Autonomous Roaming",
    description: "Detects edges and obstacles using IR/Gyro sensors"
  },
  {
    icon: <Mic className="h-4 w-4" />,
    title: "Voice Interface",
    description: "Integrated with OpenAI for natural conversation"
  },
  {
    icon: <Home className="h-4 w-4" />,
    title: "Smart Home Control",
    description: "Controls lights and IoT devices via voice"
  }
];

const hardwareTech = ["Raspberry Pi 4", "L298N Drivers", "Custom 3D Printed Chassis", "3.5\" Touch LCD"];
const softwareTech = ["Python", "OpenAI API", "Google Cloud API", "GPIO/PWM"];

export function EngineeringSpotlight() {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Engineering Spotlight</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Innovation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A physical manifestation of Vibe Coding — where AI-assisted development meets hardware engineering.
          </p>
        </div>

        {/* Main Spotlight Card */}
        <div className="relative rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden shadow-2xl">
          
          {/* Gradient Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Left Side - Images Grid */}
            <div className="p-6 lg:p-8 bg-gradient-to-br from-background/50 to-transparent">
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* Main Hero Image */}
                <div className="col-span-2 rounded-2xl overflow-hidden aspect-video relative group">
                  <img 
                    src={cloudyFinal} 
                    alt="Cloudy - AI Robot Final Build"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                      Final Build
                    </span>
                  </div>
                </div>
                
                {/* Build Process Images */}
                <div className="rounded-xl overflow-hidden aspect-square relative group">
                  <img 
                    src={cloudy3DPrint} 
                    alt="3D Printed Chassis"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-2 left-2 text-xs text-white/80 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    3D Printing
                  </span>
                </div>
                
                <div className="rounded-xl overflow-hidden aspect-square relative group">
                  <img 
                    src={cloudyWiring} 
                    alt="Internal Wiring"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-2 left-2 text-xs text-white/80 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Hardware Integration
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                    v1.0.0 Beta
                  </span>
                  <span className="px-3 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-full">
                    Full-Stack Robotics
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Cloudy
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  An autonomous, emotionally intelligent AI companion robot built from scratch using Raspberry Pi and Generative AI.
                </p>
              </div>

              {/* The Story */}
              <div className="mb-6 p-4 rounded-xl bg-secondary/50 border border-border/50">
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  The Vibe Coding Story
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I used <strong>Agentic Gemini AI</strong> to decode complex Linux driver documentation and sensor integration, allowing me to focus on the robot's "personality" architecture.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="p-3 rounded-lg bg-secondary/30 border border-border/30 group hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-primary">{feature.icon}</span>
                      <span className="text-xs font-semibold text-foreground">{feature.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-snug">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <div>
                  <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Cpu className="h-3 w-3" /> Hardware
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {hardwareTech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Zap className="h-3 w-3" /> Software
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {softwareTech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
