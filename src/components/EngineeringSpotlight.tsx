import React, { useState } from 'react';
import { Cpu, Mic, Eye, Gamepad2, Zap, Sparkles, ArrowRight, X, Wrench, Layers, Code, Settings } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import cloudyFinal from '@/assets/cloudy/cloudy-final.jpg';
import cloudyWiring from '@/assets/cloudy/cloudy-wiring.jpg';
import cloudy3DPrint from '@/assets/cloudy/cloudy-3d-print.jpg';
import cloudyScreen from '@/assets/cloudy/cloudy-screen.jpg';
import cloudyAssembly1 from '@/assets/cloudy/cloudy-assembly-1.jpg';
import cloudyAssembly2 from '@/assets/cloudy/cloudy-assembly-2.jpg';
import cloudyElectronics1 from '@/assets/cloudy/cloudy-electronics-1.jpg';
import cloudyComplete from '@/assets/cloudy/cloudy-complete.webp';
import cloudySide1 from '@/assets/cloudy/cloudy-side-1.jpg';
import cloudySide2 from '@/assets/cloudy/cloudy-side-2.jpg';
import cloudyMotors from '@/assets/cloudy/cloudy-motors.jpg';
import cloudyParts from '@/assets/cloudy/cloudy-parts.jpg';
import cloudyDevSetup from '@/assets/cloudy/cloudy-dev-setup.jpg';
import cloudyTesting from '@/assets/cloudy/cloudy-testing.jpg';

const features = [
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Emotional State Engine",
    description: "Dynamic mood system reacting to physical interactions (pats vs. pushes) or neglect. The robot expresses happiness, curiosity, sadness, and boredom through animated face expressions on the LCD."
  },
  {
    icon: <Gamepad2 className="h-5 w-5" />,
    title: "Autonomous Roaming",
    description: "Independent exploration using sensor fusion combining IR edge detection and gyroscope data to navigate safely, avoid obstacles, and prevent falls from elevated surfaces."
  },
  {
    icon: <Mic className="h-5 w-5" />,
    title: "IoT Voice Hub",
    description: "Natural language interface powered by OpenAI for conversational interactions and Google Cloud integration to control smart home devices like lights, TV, and other IoT appliances via voice commands."
  }
];

const hardwareSpecs = [
  "Raspberry Pi 4 Model B (Brain)",
  "L298N Motor Driver + TT Geared Motors (Movement)",
  "MPU6050 Gyroscope/Accelerometer (Orientation)",
  "IR Sensors Array (Edge Detection)",
  "3.5\" IPS Touch LCD (Expression Display)",
  "Custom 3D Printed PLA Chassis",
  "10000mAh USB-C Power Bank",
  "Touch Sensors (Capacitive Interaction)"
];

const softwareSpecs = [
  "Python 3.11 Core Logic",
  "Antigravity IDE (Development Environment)",
  "OpenAI GPT API (Conversational AI)",
  "Google Cloud Speech-to-Text API",
  "Google Home API (IoT Control)",
  "PWM Motor Control via GPIO",
  "Threading for Real-time Sensor Fusion",
  "Custom Animation Engine for LCD Expressions"
];

const techIcons = ["Raspberry Pi", "Python", "OpenAI", "Google Cloud"];

const buildPhases = [
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Phase 1: Design & 3D Printing",
    duration: "Week 1-2",
    description: "Designed the robot chassis in Fusion 360, optimizing for print-in-place joints and cable management. Printed over 40 hours of PLA parts including the body shell, motor mounts, and sensor brackets.",
    image: cloudy3DPrint
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Phase 2: Electronics Assembly",
    duration: "Week 2-3",
    description: "Wired the L298N motor driver to the Raspberry Pi GPIO, integrated IR sensors for edge detection, and mounted the MPU6050 gyroscope. Soldered custom cables for clean wire management and added the touch LCD display.",
    image: cloudyWiring
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: "Phase 3: Hardware Integration",
    duration: "Week 3-4",
    description: "Assembled all components into the 3D printed chassis. Calibrated motor speeds for balanced movement, fine-tuned sensor positions for optimal detection, and ensured proper heat dissipation for the Raspberry Pi.",
    image: cloudyAssembly1
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "Phase 4: Software Development",
    duration: "Week 4-6",
    description: "Built the Python control system using Agentic Gemini AI to decode complex Linux GPIO documentation. Developed the emotional state machine, integrated OpenAI for natural conversation, and connected Google Cloud APIs for smart home control.",
    image: cloudyDevSetup
  }
];

const buildGalleryImages = [
  { src: cloudyComplete, label: "Completed Build" },
  { src: cloudyFinal, label: "Front View with Face" },
  { src: cloudySide1, label: "Side Profile Left" },
  { src: cloudySide2, label: "Side Profile Right" },
  { src: cloudy3DPrint, label: "3D Printing Process" },
  { src: cloudyParts, label: "Printed Components" },
  { src: cloudyWiring, label: "Wiring & Soldering" },
  { src: cloudyElectronics1, label: "Electronics Setup" },
  { src: cloudyMotors, label: "Motor Assembly" },
  { src: cloudyAssembly2, label: "Chassis Assembly" },
  { src: cloudyTesting, label: "Testing Phase" },
  { src: cloudyScreen, label: "LCD Integration" }
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
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0 bg-background border-border">
          <DialogTitle className="sr-only">Cloudy Engineering Case Study</DialogTitle>
          
          {/* Modal Header with Hero Image - Compact */}
          <div className="relative h-48 md:h-56">
            <img 
              src={cloudyComplete} 
              alt="Cloudy Robot"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold mb-2">
                <Sparkles className="h-3 w-3" />
                Engineering Case Study
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Cloudy <span className="text-muted-foreground font-normal text-lg">(v1.0.0 Beta)</span>
              </h2>
              <p className="text-sm text-muted-foreground mt-1">An Autonomous, Emotionally Intelligent AI Companion Robot</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-secondary transition-colors"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-10">
            
            {/* Project Overview */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Project Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cloudy is a fully autonomous companion robot designed and built entirely from scratch. The project combines custom 3D-printed hardware, low-level electronics integration, and high-level AI systems to create a robot with genuine personality. From soldering motor drivers to training emotional responses, every aspect was engineered with the goal of creating a companion that feels alive—responding to touch, engaging in natural conversation, and even controlling smart home devices.
              </p>
            </div>

            {/* The Vibe Coding Story */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/50 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                The "Vibe Coding" Story (Hardware Edition)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The most challenging aspect of this build wasn't the mechanical assembly—it was bridging high-level Python logic with low-level Linux hardware controls. Raspberry Pi GPIO programming, PWM motor control, I2C sensor communication, and real-time interrupt handling all required deep understanding of Linux kernel interfaces.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This is where <strong className="text-foreground">Agentic Gemini AI</strong> became my co-pilot. Instead of spending days reading through dense documentation on L298N driver timing diagrams or MPU6050 register configurations, I used AI to rapidly decode these technical specifications. Gemini helped translate complex datasheets into actionable Python code, debug I2C communication issues, and optimize PWM frequencies for smooth motor control.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This allowed me to act as the <strong className="text-foreground">Architect</strong>—focusing on the robot's personality engine, emotional state machine, and user experience—while AI handled the low-level driver boilerplate. The result: a 6-week solo build that would have traditionally required months of embedded systems experience.
              </p>
            </div>

            {/* Build Process Timeline */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Build Process Timeline</h3>
              <div className="space-y-8">
                {buildPhases.map((phase, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-border/50 pb-8 last:pb-0">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <span className="text-primary">{phase.icon}</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold text-foreground">{phase.title}</h4>
                          <span className="px-2 py-0.5 text-xs rounded-full bg-secondary text-muted-foreground">{phase.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                      </div>
                      <div className="w-28 h-28 rounded-lg overflow-hidden border border-border/50 flex-shrink-0">
                        <img 
                          src={phase.image} 
                          alt={phase.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications - Two Columns */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Hardware */}
                <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Cpu className="h-4 w-4" />
                    The Body (Hardware)
                  </h4>
                  <ul className="space-y-3">
                    {hardwareSpecs.map((spec, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Software */}
                <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/20">
                  <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    The Soul (Software)
                  </h4>
                  <ul className="space-y-3">
                    {softwareSpecs.map((spec, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
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
              <h3 className="text-xl font-bold text-foreground mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="p-6 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary">{feature.icon}</span>
                    </div>
                    <h4 className="font-bold text-foreground mb-3">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Build Gallery - Horizontal Scroll */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Build Gallery</h3>
              <div className="overflow-x-auto pb-4 -mx-6 md:-mx-8 px-6 md:px-8">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {buildGalleryImages.map((image, index) => (
                    <div key={index} className="relative rounded-xl overflow-hidden w-48 h-48 group border border-border/50 flex-shrink-0">
                      <img 
                        src={image.src} 
                        alt={image.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute bottom-3 left-3 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        {image.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Challenges & Learnings */}
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Challenges & Learnings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technical Challenges</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Achieving consistent PWM timing for smooth motor control</li>
                    <li>• Sensor fusion between IR edge detection and gyroscope data</li>
                    <li>• Managing real-time audio processing alongside motor control</li>
                    <li>• Heat management for the Raspberry Pi in an enclosed chassis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Learnings</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• AI-assisted development dramatically accelerates hardware projects</li>
                    <li>• Iterative 3D printing is essential—expect 3-4 chassis revisions</li>
                    <li>• Python threading requires careful management for robotics</li>
                    <li>• Personality design matters as much as technical functionality</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Role Badge */}
            <div className="pt-6 border-t border-border/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Role</span>
                <p className="text-sm font-semibold text-foreground">Full-Stack Robotics Engineer (Hardware, Software, 3D Design)</p>
              </div>
              <div className="flex gap-3">
                <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-xs font-semibold text-primary">Solo Project</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-secondary border border-border">
                  <span className="text-xs font-semibold text-muted-foreground">6 Weeks Build Time</span>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
