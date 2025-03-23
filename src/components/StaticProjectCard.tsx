
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types/project';

interface StaticProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

export function StaticProjectCard({ 
  project,
  index,
  onClick
}: StaticProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "group relative rounded-2xl overflow-hidden transform transition-all duration-700 cursor-pointer",
        "opacity-0 translate-y-20",
        isInView && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(project)}
    >
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered && "scale-105"
          )}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
              {project.category}
            </span>
            <ArrowUpRight className={cn(
              "w-5 h-5 transform transition-transform duration-500",
              isHovered ? "translate-x-0 translate-y-0" : "translate-x-4 -translate-y-4 opacity-0"
            )} />
          </div>
          <h3 className="text-xl font-bold mt-3">{project.title}</h3>
          <p className="text-sm text-white/80 mt-2 line-clamp-2">{project.description}</p>
        </div>
      </div>
      
      <div className="p-6">
        <span className="text-sm font-medium text-muted-foreground">{project.category}</span>
        <h3 className="text-xl font-bold mt-1">{project.title}</h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
}
