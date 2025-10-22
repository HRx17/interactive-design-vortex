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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-primary transition-all duration-300 hover:scale-110 cursor-pointer hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">Email</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/haet-ranpariya-382324188/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-primary transition-all duration-300 hover:scale-110 cursor-pointer hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/HRx17"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-primary transition-all duration-300 hover:scale-110 cursor-pointer hover:shadow-lg hover:shadow-emerald-500/20"
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
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:scale-110 cursor-pointer hover:shadow-lg hover:shadow-emerald-500/30"
            >
              <span className="relative z-10">Send me an email</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements with parallax */}
      <div 
        className="absolute top-1/4 left-0 w-full h-1/3 bg-gradient-to-r from-secondary/20 via-transparent to-secondary/20 rounded-full filter blur-3xl opacity-20 morph-blob"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>
      <div 
        className="absolute bottom-1/3 right-1/5 w-28 h-28 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 filter blur-2xl opacity-40 float-animation morph-blob" 
        style={{
          animationDelay: '1.5s',
          transform: `translateY(${-parallaxOffset * 0.5}px)`
        }}
      ></div>
      <div 
        className="absolute top-1/5 left-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-teal-400/8 to-emerald-400/8 filter blur-xl opacity-30 float-animation morph-blob" 
        style={{
          animationDelay: '3s',
          transform: `translateY(${parallaxOffset * 0.7}px)`
        }}
      ></div>
      
      {/* Floating decorative shapes */}
      <div className="absolute top-1/3 right-1/3 w-5 h-5 border border-emerald-400/30 rotate-45 float-animation" style={{animationDelay: '0.8s'}}></div>
      <div className="absolute bottom-1/4 left-1/6 w-3 h-3 bg-teal-400/20 rounded-full float-animation" style={{animationDelay: '2.5s'}}></div>
      <div className="absolute top-2/3 right-1/5 w-6 h-6 border-2 border-teal-300/30 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
    </section>
  );
}
