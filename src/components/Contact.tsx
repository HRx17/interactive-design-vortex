import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';

export function Contact() {
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const parallaxOffset = useParallax(0.4);

  const socialLinks = [
    { 
      name: "Email", 
      url: "mailto:haetranpariya1789@gmail.com", 
      icon: <Mail className="h-5 w-5" />
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/haet-ranpariya-382324188/", 
      icon: <Linkedin className="h-5 w-5" /> 
    },
    { 
      name: "GitHub", 
      url: "https://github.com/HRx17", 
      icon: <Github className="h-5 w-5" /> 
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className={cn(
            "text-sm font-medium px-3 py-1 rounded-full bg-secondary text-primary inline-block mb-4",
            "opacity-0 transform transition-all duration-700",
            isInView && "opacity-100 bounce-in"
          )}>
            Get in Touch
          </span>
          
          <h2 className={cn(
            "heading",
            "opacity-0 transform transition-all duration-700 delay-100",
            isInView && "opacity-100 slide-in-right"
          )}>
            Let's collaborate
          </h2>
          
          <p className={cn(
            "text-muted-foreground mt-6 max-w-2xl mx-auto",
            "opacity-0 transform transition-all duration-700 delay-200",
            isInView && "opacity-100 blur-in"
          )}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the platforms below.
          </p>
          
          <div className={cn(
            "mt-12 flex flex-wrap justify-center gap-4 relative z-50",
            "opacity-0 transform transition-all duration-700 delay-300",
            isInView && "opacity-100 scale-up"
          )}>
            <a 
              href="mailto:haetranpariya1789@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-primary transition-all duration-300 hover:scale-110 cursor-pointer hover:shadow-lg hover:shadow-accent/20"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">Email</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/haet-ranpariya-382324188/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-primary transition-all duration-300 hover:scale-110 cursor-pointer hover:shadow-lg hover:shadow-accent/20"
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/HRx17"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-primary transition-all duration-300 hover:scale-110 cursor-pointer hover:shadow-lg hover:shadow-accent/20"
            >
              <Github className="h-5 w-5" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
          
          <div className={cn(
            "mt-16 p-6 md:p-10 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border/40",
            "opacity-0 transform transition-all duration-700 delay-500",
            isInView && "opacity-100 slide-up-fade"
          )}>
            <h3 className="text-xl font-bold">Looking for a designer?</h3>
            <p className="text-muted-foreground mt-3 mb-6">
              If you're looking for a designer who combines creativity with strategy to create impactful digital experiences, let's connect.
            </p>
            <a 
              href="mailto:haetranpariya1789@gmail.com"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:scale-110 cursor-pointer hover:shadow-lg hover:shadow-accent/30"
            >
              <span className="relative z-10">Send me an email</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements with parallax and black colors */}
      <div 
        className="absolute top-1/4 left-0 w-full h-1/3 bg-foreground/3 rounded-full filter blur-3xl opacity-20 float-animation"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>
      
      {/* Floating decorative shapes */}
      <div className="absolute top-1/3 right-1/3 w-5 h-5 border border-foreground/20 rotate-45 float-animation" style={{animationDelay: '0.8s'}}></div>
      <div className="absolute bottom-1/4 left-1/6 w-3 h-3 bg-foreground/10 rounded-full float-animation" style={{animationDelay: '2.5s'}}></div>
      <div className="absolute top-2/3 right-1/5 w-6 h-6 border-2 border-foreground/15 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
    </section>
  );
}
