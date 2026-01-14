import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Eye, Users, Lightbulb, Target, Hand, Sparkles, CheckCircle2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function ARCaseStudy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="section-container py-4">
          <Button variant="ghost" className="gap-2" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-73px)]">
        <div className="case-study-container">
          {/* Hero Section */}
          <div className="relative">
            <img 
              src="/lovable-uploads/h1.png" 
              alt="Spectra HoloVisio Hero" 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end p-6 md:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-purple-500/80 text-white">Academic Project</span>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-cyan-500/80 text-white">Mixed Reality Design</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white">Spectra HoloVisio</h1>
              <p className="text-white/80 mt-2 max-w-2xl">An MR tool for real-time space design using holographic projections and motion sensors</p>
              <div className="flex flex-wrap gap-6 mt-4 text-sm text-white/70">
                <div>
                  <span className="font-semibold">Role:</span> UX Designer & Prototyper
                </div>
                <div>
                  <span className="font-semibold">Timeline:</span> 12 weeks
                </div>
                <div>
                  <span className="font-semibold">Platform:</span> Mixed Reality Headset
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Banner */}
          <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 py-8">
            <div className="max-w-5xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">89</div>
                  <div className="text-sm text-muted-foreground mt-1">Research Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">86%</div>
                  <div className="text-sm text-muted-foreground mt-1">Natural Gesture Feel</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">74%</div>
                  <div className="text-sm text-muted-foreground mt-1">AI Auto-Design Approval</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">360°</div>
                  <div className="text-sm text-muted-foreground mt-1">Immersive Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="case-study-section">
            <h2 className="text-2xl font-bold mb-6">Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-500" />
                    The Problem
                  </h3>
                  <p className="text-muted-foreground">
                    How might we help people visualize living spaces so designs match reality? Current interior design tools rely on 2D representations or basic 3D models that fail to convey true spatial relationships. Users struggle to imagine how furniture and décor will actually look and feel in their physical space, leading to costly mistakes and buyer's remorse.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-purple-500" />
                    The Solution
                  </h3>
                  <p className="text-muted-foreground">
                    Spectra HoloVisio is a mixed reality tool that projects holographic furniture and décor into your actual living space in real-time. Using advanced motion sensors and hand gesture controls, users can move, rotate, resize, and lock virtual objects as if they were physically present—bridging the gap between imagination and reality.
                  </p>
                </div>
              </div>
              <div className="bg-card/50 rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-500" />
                  My Role
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    Conducted user research with 89 participants across diverse demographics
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    Led storyboarding and experience mapping for MR interactions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    Designed gesture-based interaction patterns and menu systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    Created 360° VR sketch sheets and hardware concept designs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    Facilitated usability testing and iterated based on feedback
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hero Image 2 */}
          <div className="w-full">
            <img 
              src="/lovable-uploads/h2.png" 
              alt="Spectra HoloVisio Concept" 
              className="w-full"
              loading="lazy"
            />
          </div>

          {/* Video Demo */}
          <div className="case-study-section">
            <h2 className="text-2xl font-bold mb-6">Concept Video</h2>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/77vlfTa8X10?si=G5aZDIPwJUqbL05z"
                className="w-full h-full"
                title="Spectra HoloVisio Concept Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Research & Discovery */}
          <div className="case-study-section bg-gradient-to-r from-purple-900/10 to-transparent">
            <h2 className="text-2xl font-bold mb-6">Research & Discovery</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">User Research Insights</h3>
                <p className="text-muted-foreground mb-6">
                  We conducted extensive research with 89 participants to understand their interior design behaviors, pain points, and desires for spatial visualization tools.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-purple-500 mb-2">52%</div>
                    <p className="text-sm text-muted-foreground">Spend little time on interior design due to complexity</p>
                  </div>
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-purple-500 mb-2">61%</div>
                    <p className="text-sm text-muted-foreground">Prefer DIY approach over hiring professionals</p>
                  </div>
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-purple-500 mb-2">64%</div>
                    <p className="text-sm text-muted-foreground">Cite cost as a major factor in design decisions</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Key Pain Points Identified</h3>
                <div className="space-y-3">
                  <div className="bg-card/30 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Visualization Gap</h4>
                    <p className="text-sm text-muted-foreground">Users cannot accurately imagine how furniture will look in their space until it's physically there, leading to returns and dissatisfaction</p>
                  </div>
                  <div className="bg-card/30 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Scale Perception Issues</h4>
                    <p className="text-sm text-muted-foreground">2D catalogs and even 3D models fail to convey true size relationships within actual room dimensions</p>
                  </div>
                  <div className="bg-card/30 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Professional Barrier</h4>
                    <p className="text-sm text-muted-foreground">Hiring interior designers is expensive and intimidating for everyday consumers who want control over their space</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Images */}
          <div className="w-full">
            <img 
              src="/lovable-uploads/hh.png" 
              alt="Design Process Overview" 
              className="w-full"
              loading="lazy"
            />
          </div>

          <div className="w-full">
            <img 
              src="/lovable-uploads/h3.png" 
              alt="Storyboarding and User Journey" 
              className="w-full"
              loading="lazy"
            />
          </div>

          {/* Hardware Design Section */}
          <div className="case-study-section">
            <h2 className="text-2xl font-bold mb-6">Hardware Concept: The Eyeband</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Early in the design process, we explored hardware form factors that would enable seamless MR experiences. The "Eyeband" concept emerged as a lightweight, ergonomic headset designed for extended home use—prioritizing comfort and natural field of view over industrial aesthetics.
            </p>
            <div className="w-full">
              <img 
                src="/lovable-uploads/h4.png" 
                alt="Eyeband Hardware Sketches" 
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-full">
            <img 
              src="/lovable-uploads/h5.png" 
              alt="360° VR Sketch Sheets" 
              className="w-full"
              loading="lazy"
            />
          </div>

          {/* Gesture Interactions */}
          <div className="case-study-section bg-gradient-to-r from-cyan-900/10 to-transparent">
            <h2 className="text-2xl font-bold mb-6">Gesture-Based Interactions</h2>
            
            <div className="space-y-8">
              <p className="text-muted-foreground max-w-3xl">
                A core challenge was designing intuitive hand gestures that feel natural while providing precise control over virtual objects. Through iterative testing, we developed a gesture vocabulary that users could learn within minutes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/30 p-6 rounded-xl">
                  <Hand className="h-8 w-8 text-cyan-500 mb-3" />
                  <h4 className="font-semibold mb-2">Move & Position</h4>
                  <p className="text-sm text-muted-foreground">Pinch to grab virtual furniture and move it freely within the space. Release to drop in place.</p>
                </div>
                <div className="bg-card/30 p-6 rounded-xl">
                  <CheckCircle2 className="h-8 w-8 text-cyan-500 mb-3" />
                  <h4 className="font-semibold mb-2">Crossed-Finger Lock</h4>
                  <p className="text-sm text-muted-foreground">Cross fingers to lock an object in place, preventing accidental movement during room exploration.</p>
                </div>
                <div className="bg-card/30 p-6 rounded-xl">
                  <Eye className="h-8 w-8 text-cyan-500 mb-3" />
                  <h4 className="font-semibold mb-2">Snap to Clear</h4>
                  <p className="text-sm text-muted-foreground">Quick snap gesture dismisses floating menus, keeping the view clean and immersive.</p>
                </div>
                <div className="bg-card/30 p-6 rounded-xl">
                  <Sparkles className="h-8 w-8 text-cyan-500 mb-3" />
                  <h4 className="font-semibold mb-2">AI Auto-Design</h4>
                  <p className="text-sm text-muted-foreground">Voice command or gesture triggers AI-powered room arrangement suggestions based on user preferences.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interaction Demo Video */}
          <div className="case-study-section">
            <h2 className="text-2xl font-bold mb-6">Interaction Demonstration</h2>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/NAD_Kot-t84?si=pCx8-3kDUoySOwaG"
                className="w-full h-full"
                title="Gesture Interaction Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Menu Placement */}
          <div className="w-full">
            <img 
              src="/lovable-uploads/h6.png" 
              alt="Menu Placement Explorations" 
              className="w-full"
              loading="lazy"
            />
          </div>

          {/* Menu Demo Video */}
          <div className="case-study-section">
            <h2 className="text-2xl font-bold mb-6">Menu System & Navigation</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              We explored various menu placement strategies to minimize obstruction while maintaining accessibility. The final design uses spatial anchoring—menus appear relative to the user's dominant hand position and can be dismissed with a simple snap gesture.
            </p>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/BL654YYW5m0?si=asOgNqLg205b_kjg"
                className="w-full h-full"
                title="Menu System Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Object Manipulation */}
          <div className="w-full">
            <img 
              src="/lovable-uploads/h7.png" 
              alt="Object Manipulation Interface" 
              className="w-full"
              loading="lazy"
            />
          </div>

          <div className="case-study-section">
            <h2 className="text-2xl font-bold mb-6">Object Manipulation</h2>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/MniPfpXs74w?si=H99swviNUKRwZuzl"
                className="w-full h-full"
                title="Object Manipulation Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Locking Mechanism */}
          <div className="w-full">
            <img 
              src="/lovable-uploads/h8.png" 
              alt="Object Locking Mechanism" 
              className="w-full"
              loading="lazy"
            />
          </div>

          <div className="case-study-section">
            <h2 className="text-2xl font-bold mb-6">Locking & Persistence</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              The crossed-finger locking gesture emerged from user testing as the most intuitive way to "set" furniture in place. This prevents accidental displacement during room exploration and allows users to build up complex arrangements incrementally.
            </p>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/xPe2nukLMaE?si=zaBGCzwieXt_KpDn"
                className="w-full h-full"
                title="Locking Mechanism Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* AI Auto-Design */}
          <div className="w-full">
            <img 
              src="/lovable-uploads/h9.png" 
              alt="AI Auto-Design Feature" 
              className="w-full"
              loading="lazy"
            />
          </div>

          <div className="case-study-section bg-gradient-to-r from-purple-900/10 to-transparent">
            <h2 className="text-2xl font-bold mb-6">AI-Powered Auto-Design</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              For users who want inspiration or a starting point, Spectra HoloVisio includes an AI-powered auto-design feature. Users describe their preferences through natural language or select style presets, and the system generates a complete room arrangement that can be further customized.
            </p>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/0PoPD6UaLx8?si=6IjHag0h2zggX1-O"
                className="w-full h-full"
                title="AI Auto-Design Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Testing Results */}
          <div className="case-study-section">
            <h2 className="text-2xl font-bold mb-6">Testing & Validation</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-4">Usability Testing Results</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-purple-500 mb-2">86%</div>
                    <p className="text-sm text-muted-foreground">Found gesture controls felt natural and intuitive after brief onboarding</p>
                  </div>
                  <div className="bg-card/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-purple-500 mb-2">74%</div>
                    <p className="text-sm text-muted-foreground">Responded positively to AI auto-design feature and would use it regularly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Showcase */}
          <div className="w-full">
            <img 
              src="/lovable-uploads/h10.png" 
              alt="Final Design Showcase" 
              className="w-full"
              loading="lazy"
            />
          </div>

          <div className="case-study-section">
            <h2 className="text-2xl font-bold mb-6">Final Prototype Walkthrough</h2>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/p5qNTiH_8JI?si=ZKkHsHmjuCyCRIaP"
                className="w-full h-full"
                title="Final Prototype Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="case-study-section bg-gradient-to-r from-purple-900/10 to-transparent">
            <h2 className="text-2xl font-bold mb-6">Lessons Learned</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold">1.</span>
                <p className="text-muted-foreground"><span className="font-semibold">Gesture design requires iteration:</span> What feels intuitive on paper often fails in practice. We refined our gesture vocabulary through dozens of iterations based on real user struggles.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold">2.</span>
                <p className="text-muted-foreground"><span className="font-semibold">Physical comfort is paramount:</span> Extended MR sessions demand hardware that disappears—weight distribution and field of view were as critical as feature design.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold">3.</span>
                <p className="text-muted-foreground"><span className="font-semibold">AI as assistant, not replacement:</span> Users wanted AI suggestions but insisted on final control. The most successful approach positioned AI as a helpful starting point, not an authority.</p>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <img 
              src="/lovable-uploads/h11.png" 
              alt="Project Conclusion" 
              className="w-full"
              loading="lazy"
            />
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-purple-900 to-cyan-900 text-white py-10 px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Project by: HAET RANPARIYA</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-6">A mixed reality exploration bridging imagination and reality for interior design visualization.</p>
            <a
              href="https://www.behance.net/haetranpariya17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-lg backdrop-blur-sm"
            >
              <span>View More Projects on Behance</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
