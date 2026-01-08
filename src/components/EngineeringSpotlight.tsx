import React, { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Cpu, Mic, Eye, Gamepad2, Zap, Sparkles, ArrowRight, X, Wrench, Layers, Code, Settings, ChevronLeft, ChevronRight, Smartphone, Globe, Bot, Shield, Mail } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

// Cloudy imports
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

// Judgement imports
import judgementHome from '@/assets/judgement/judgement-home.png';
import judgementLocalSetup from '@/assets/judgement/judgement-local-setup.png';
import judgementRoomSetup from '@/assets/judgement/judgement-room-setup.png';
import judgementBid from '@/assets/judgement/judgement-bid.png';
import judgementGameStart from '@/assets/judgement/judgement-game-start.png';
import judgementGameplay from '@/assets/judgement/judgement-gameplay.png';
import judgementGameOver from '@/assets/judgement/judgement-game-over.png';
import judgementProfile from '@/assets/judgement/judgement-profile.png';
import judgementPlaystore from '@/assets/judgement/judgement-playstore.png';

// ========== CLOUDY DATA ==========
const cloudyFeatures = [
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

const cloudyHardwareSpecs = [
  "Raspberry Pi 4 Model B (Brain)",
  "L298N Motor Driver + TT Geared Motors (Movement)",
  "MPU6050 Gyroscope/Accelerometer (Orientation)",
  "IR Sensors Array (Edge Detection)",
  "3.5\" IPS Touch LCD (Expression Display)",
  "Custom 3D Printed PLA Chassis",
  "10000mAh USB-C Power Bank",
  "Touch Sensors (Capacitive Interaction)"
];

const cloudySoftwareSpecs = [
  "Python 3.11 Core Logic",
  "Antigravity IDE (Development Environment)",
  "OpenAI GPT API (Conversational AI)",
  "Google Cloud Speech-to-Text API",
  "Google Home API (IoT Control)",
  "PWM Motor Control via GPIO",
  "Threading for Real-time Sensor Fusion",
  "Custom Animation Engine for LCD Expressions"
];

const cloudyBuildPhases = [
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

const cloudyGalleryImages = [
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

// ========== JUDGEMENT DATA ==========
const judgementFeatures = [
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Real-Time Multiplayer",
    description: "Global matchmaking allowing users to play with friends anywhere in the world. Sub-second state synchronization ensures smooth gameplay across different network conditions."
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: "Intelligent Bots",
    description: "Offline opponents programmed with probability-based decision engines—not random moves. Custom game theory algorithms predict optimal plays based on card distribution and bid history."
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Production Secure",
    description: "Fully encrypted Google/Email authentication with zero-trust data architecture. All game state and user data protected with Firebase security rules and server-side validation."
  }
];

const judgementFrontendSpecs = [
  "React Native (Cross-platform)",
  "TypeScript for Type Safety",
  "Custom Animation System",
  "Responsive Mobile UI",
  "Offline-First Architecture",
  "Push Notifications"
];

const judgementBackendSpecs = [
  "Firebase Realtime Database",
  "Firebase Authentication",
  "Cloud Functions for Game Logic",
  "Server-Side State Validation",
  "Real-time Event Listeners",
  "Secure Data Architecture"
];

const judgementGalleryImages = [
  { src: judgementHome, label: "Home Screen" },
  { src: judgementRoomSetup, label: "Room Setup (Online)" },
  { src: judgementLocalSetup, label: "Local Setup (Offline)" },
  { src: judgementBid, label: "Bidding Phase" },
  { src: judgementGameStart, label: "Round Start" },
  { src: judgementGameplay, label: "Gameplay" },
  { src: judgementGameOver, label: "Game Results" },
  { src: judgementProfile, label: "Profile Screen" },
  { src: judgementPlaystore, label: "Play Store Listing" }
];

// ========== BUILD GALLERY CAROUSEL COMPONENT ==========
function BuildGalleryCarousel({ images }: { images: { src: string; label: string }[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps'
  });
  const [expandedImage, setExpandedImage] = useState<{ src: string; label: string } | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden">
      <h3 className="text-xl font-bold text-foreground mb-6">Build Gallery</h3>
      <div className="relative">
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg hover:bg-secondary transition-colors"
          aria-label="Previous images"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>

        <div className="overflow-hidden mx-10" ref={emblaRef}>
          <div className="flex gap-4">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="relative rounded-xl overflow-hidden min-w-[12rem] w-48 h-48 group border border-border/50 flex-shrink-0 cursor-pointer"
                onClick={() => setExpandedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.label}
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 rounded-full bg-background/80 backdrop-blur-sm">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg hover:bg-secondary transition-colors"
          aria-label="Next images"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      </div>

      {expandedImage && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] m-4" onClick={(e) => e.stopPropagation()}>
            <img 
              src={expandedImage.src} 
              alt={expandedImage.label}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm text-sm font-medium text-foreground">
                {expandedImage.label}
              </span>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setExpandedImage(null);
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-secondary transition-colors z-10"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

// ========== CLOUDY MODAL CONTENT ==========
function CloudyModalContent() {
  return (
    <>
      {/* Modal Header with Photo Collage Banner */}
      <div className="relative h-48 md:h-64">
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-1">
          <div className="col-span-2 row-span-2 overflow-hidden">
            <img src={cloudyComplete} alt="Cloudy Complete" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden">
            <img src={cloudyFinal} alt="Cloudy Front" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden">
            <img src={cloudySide1} alt="Cloudy Side" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden">
            <img src={cloudy3DPrint} alt="3D Printing" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden">
            <img src={cloudyWiring} alt="Wiring" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
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
      </div>

      <div className="p-6 md:p-8 space-y-10 overflow-hidden">
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
            I designed the entire robot from the ground up—the 3D-printed chassis, the circuit layouts, the emotional expression system, and the user interaction flows. Every component, from mechanical design to software architecture, was conceptualized and built by me.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The most challenging aspect was bridging high-level Python logic with low-level Linux hardware controls. Raspberry Pi GPIO programming, PWM motor control, I2C sensor communication, and real-time interrupt handling all required deep understanding of Linux kernel interfaces.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            AI served as a <strong className="text-foreground">research accelerator</strong>—helping me decode dense documentation on L298N driver timing diagrams and MPU6050 register configurations faster. But the architecture decisions, the personality engine design, the sensor fusion algorithms, and the creative vision were entirely mine. AI helped with the heavy lifting of boilerplate code; I handled the engineering and design.
          </p>
        </div>

        {/* Build Process Timeline */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">Build Process Timeline</h3>
          <div className="space-y-8">
            {cloudyBuildPhases.map((phase, index) => (
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

        {/* Technical Specifications */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
              <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                The Body (Hardware)
              </h4>
              <ul className="space-y-3">
                {cloudyHardwareSpecs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/20">
              <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Code className="h-4 w-4" />
                The Soul (Software)
              </h4>
              <ul className="space-y-3">
                {cloudySoftwareSpecs.map((spec, index) => (
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
        <div className="overflow-hidden">
          <h3 className="text-xl font-bold text-foreground mb-6">Key Features</h3>
          <div className="grid grid-cols-1 gap-6">
            {cloudyFeatures.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Build Gallery */}
        <BuildGalleryCarousel images={cloudyGalleryImages} />

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
                <li>• Iterative prototyping with 3D printing enables rapid design validation</li>
                <li>• Modular software architecture is essential for complex robotics</li>
                <li>• User experience design applies to physical products too</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Role</p>
              <p className="font-semibold text-foreground">Full-Stack Robotics Engineer (Hardware, Software, 3D Design)</p>
            </div>
            <div className="px-4 py-2 rounded-full bg-secondary border border-border">
              <span className="text-xs font-semibold text-muted-foreground">6 Weeks Build Time</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ========== JUDGEMENT MODAL CONTENT ==========
function JudgementModalContent() {
  return (
    <>
      {/* Modal Header with Photo Collage Banner */}
      <div className="relative h-48 md:h-64">
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-1">
          <div className="col-span-2 row-span-2 overflow-hidden">
            <img src={judgementHome} alt="Judgement Home" className="w-full h-full object-cover object-top" />
          </div>
          <div className="overflow-hidden">
            <img src={judgementGameplay} alt="Gameplay" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden">
            <img src={judgementBid} alt="Bidding" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden">
            <img src={judgementRoomSetup} alt="Room Setup" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden">
            <img src={judgementGameOver} alt="Game Over" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/90 text-white text-xs font-semibold mb-2">
            <Smartphone className="h-3 w-3" />
            Live Beta
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Judgement <span className="text-muted-foreground font-normal text-lg">Multiplayer Strategy Game</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1">A cross-platform mobile game with real-time multiplayer</p>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-10 overflow-hidden">
        {/* Project Overview */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">Project Overview</h3>
          <p className="text-muted-foreground leading-relaxed">
            Judgement is a cross-platform mobile card game that brings the classic trick-taking game to digital platforms. Built with React Native and Firebase, it features real-time global multiplayer, intelligent AI opponents, and a polished mobile-first user experience. Currently in live beta on the Google Play Store.
          </p>
        </div>

        {/* The Vibe Coding Story */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/5 to-secondary/50 border border-green-500/20">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
              <Zap className="h-5 w-5 text-green-500" />
            </div>
            The "Vibe Coding" Story (Software Edition)
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I designed and built this entire application—the UI/UX, the game logic, the multiplayer architecture, and the intelligent bot system. Every screen, animation, and interaction was crafted by me to deliver a polished mobile gaming experience.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The core challenge was creating intelligent bot opponents that feel competitive, not random. I developed custom <strong className="text-foreground">game theory algorithms</strong> that analyze card distribution, bid history, and optimal play strategies. The bots use probability-based prediction engines that I designed from scratch.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            AI assisted with the <strong className="text-foreground">repetitive coding tasks</strong>—scaffolding React Native components and Firebase boilerplate. But the game mathematics, the real-time state synchronization logic, and the entire creative direction came from me. AI helped speed up the mundane; I engineered the complex.
          </p>
        </div>

        {/* Technical Specifications */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/20">
              <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                Frontend (Mobile)
              </h4>
              <ul className="space-y-3">
                {judgementFrontendSpecs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
              <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Code className="h-4 w-4" />
                Backend (Firebase)
              </h4>
              <ul className="space-y-3">
                {judgementBackendSpecs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="overflow-hidden">
          <h3 className="text-xl font-bold text-foreground mb-6">Key Features</h3>
          <div className="grid grid-cols-1 gap-6">
            {judgementFeatures.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-secondary/50 border border-border/50 hover:border-green-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-500">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App Gallery */}
        <BuildGalleryCarousel images={judgementGalleryImages} />

        {/* Early Access Email Signup */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Get Early Access</h4>
                <p className="text-sm text-muted-foreground">Submit your email to get instant early access on Play Store</p>
              </div>
            </div>
            <form 
              className="flex w-full md:w-auto gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
                if (emailInput?.value) {
                  window.open(`mailto:haetdesigns@gmail.com?subject=Judgement Early Access&body=Please add me to the early access list for Judgement. My email: ${encodeURIComponent(emailInput.value)}`);
                  emailInput.value = '';
                }
              }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
                maxLength={255}
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-500/50 text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold text-sm hover:bg-green-600 transition-colors flex-shrink-0"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Role</p>
              <p className="font-semibold text-foreground">Full-Stack Mobile Developer (Game Logic, UI, Backend)</p>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
                <span className="text-xs font-semibold text-green-500">Public Release in 13 Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ========== MAIN COMPONENT ==========
export function EngineeringSpotlight() {
  const [activeModal, setActiveModal] = useState<'cloudy' | 'judgement' | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const projects = [
    {
      id: 'cloudy',
      badge: 'Latest Innovation',
      badgeIcon: <Sparkles className="h-3 w-3" />,
      badgeColor: 'bg-primary/10 border-primary/20 text-primary',
      title: 'Cloudy',
      version: '(v1.0.0 Beta)',
      subtitle: 'AI-Native Autonomous Robot',
      description: 'A physical manifestation of Vibe Coding—bridging Python logic with custom hardware and generative AI instrumentation.',
      techIcons: ['Raspberry Pi', 'Python', 'OpenAI', 'Google Cloud'],
      image: cloudyFinal
    },
    {
      id: 'judgement',
      badge: 'Public Release in 13 Days',
      badgeIcon: <Smartphone className="h-3 w-3" />,
      badgeColor: 'bg-green-500/10 border-green-500/20 text-green-500',
      title: 'Judgement',
      version: 'Multiplayer Strategy Game',
      subtitle: 'Cross-Platform Mobile Game',
      description: 'A cross-platform mobile game powered by custom Game Theory algorithms and real-time state synchronization.',
      techIcons: ['React Native', 'Firebase', 'TypeScript', 'Android'],
      image: judgementHome
    }
  ];

  return (
    <>
      {/* Carousel Banner */}
      <section className="py-8 bg-gradient-to-r from-secondary via-background to-secondary border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg hover:bg-secondary transition-colors hidden md:flex"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>

            {/* Carousel */}
            <div className="overflow-hidden md:mx-12" ref={emblaRef}>
              <div className="flex">
                {projects.map((project) => (
                  <div key={project.id} className="flex-[0_0_100%] min-w-0">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-2">
                      {/* Left - Image */}
                      <div className="w-full md:w-48 lg:w-56 flex-shrink-0">
                        <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl border border-border/50 group">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                      </div>

                      {/* Center - Content */}
                      <div className="flex-1 text-center md:text-left">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-3 ${project.badgeColor}`}>
                          {project.badgeIcon}
                          <span className="text-xs font-semibold uppercase tracking-wider">{project.badge}</span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                          {project.title} <span className="text-muted-foreground font-normal text-base md:text-lg">{project.version}</span>
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium mb-2">{project.subtitle}</p>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xl">
                          {project.description}
                        </p>

                        {/* Tech Icons */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                          {project.techIcons.map((tech, index) => (
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
                          onClick={() => setActiveModal(project.id as 'cloudy' | 'judgement')}
                          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
                        >
                          View Engineering Case Study
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg hover:bg-secondary transition-colors hidden md:flex"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedIndex === index 
                    ? 'bg-primary w-6' 
                    : 'bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cloudy Modal */}
      <Dialog open={activeModal === 'cloudy'} onOpenChange={(open) => !open && setActiveModal(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto overflow-x-hidden p-0 bg-background border-border">
          <DialogTitle className="sr-only">Cloudy Engineering Case Study</DialogTitle>
          <button 
            onClick={() => setActiveModal(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-secondary transition-colors"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
          <CloudyModalContent />
        </DialogContent>
      </Dialog>

      {/* Judgement Modal */}
      <Dialog open={activeModal === 'judgement'} onOpenChange={(open) => !open && setActiveModal(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto overflow-x-hidden p-0 bg-background border-border">
          <DialogTitle className="sr-only">Judgement Engineering Case Study</DialogTitle>
          <button 
            onClick={() => setActiveModal(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-secondary transition-colors"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
          <JudgementModalContent />
        </DialogContent>
      </Dialog>
    </>
  );
}
