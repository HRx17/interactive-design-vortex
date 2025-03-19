
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ProjectEmbedProps {
  embedSrc: string;
  index: number;
}

export function ProjectEmbed({ embedSrc, index }: ProjectEmbedProps) {
  const projectRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }
    
    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={projectRef}
      className={cn(
        "bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300",
        "opacity-0 transform translate-y-12",
        isVisible && "opacity-100 translate-y-0"
      )}
      style={{ 
        transitionDelay: `${index * 100}ms`, 
        transitionDuration: '600ms'
      }}
    >
      <div className="w-full aspect-video p-2">
        <div className="w-full h-full rounded-lg overflow-hidden">
          <iframe 
            src={embedSrc}
            height="100%" 
            width="100%" 
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            frameBorder="0" 
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
