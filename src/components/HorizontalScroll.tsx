import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

interface ScrollItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  category: string;
  year: string;
}

interface HorizontalScrollProps {
  items: ScrollItem[];
  title: string;
  subtitle?: string;
}

export function HorizontalScroll({ items, title, subtitle }: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
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

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons(); // Initial check
      
      return () => {
        scrollElement.removeEventListener('scroll', updateScrollButtons);
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent",
              "opacity-0 transform translate-y-6 transition-all duration-700",
              isInView && "opacity-100 translate-y-0"
            )}>
              {title}
            </h2>
            {subtitle && (
              <p className={cn(
                "text-muted-foreground mt-2 max-w-2xl",
                "opacity-0 transform translate-y-6 transition-all duration-700 delay-100",
                isInView && "opacity-100 translate-y-0"
              )}>
                {subtitle}
              </p>
            )}
          </div>
          
          {/* Scroll Controls */}
          <div className={cn(
            "hidden md:flex gap-2",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-200",
            isInView && "opacity-100 translate-y-0"
          )}>
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={cn(
                "p-3 rounded-full border transition-all duration-300",
                canScrollLeft 
                  ? "border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400" 
                  : "border-border/30 bg-muted/50 text-muted-foreground cursor-not-allowed"
              )}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                "p-3 rounded-full border transition-all duration-300",
                canScrollRight 
                  ? "border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400" 
                  : "border-border/30 bg-muted/50 text-muted-foreground cursor-not-allowed"
              )}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div 
          ref={scrollRef}
          className={cn(
            "flex gap-6 overflow-x-auto pb-6 scroll-smooth scrollbar-hide",
            "opacity-0 transform translate-x-6 transition-all duration-700 delay-300",
            isInView && "opacity-100 translate-x-0"
          )}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex-none w-80 md:w-96 group cursor-pointer"
              onClick={() => item.link && window.open(item.link, '_blank')}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/30">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full border border-emerald-500/30 backdrop-blur-sm">
                        {item.category}
                      </span>
                      <span className="text-white/60 text-xs">{item.year}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2 mb-3">
                      {item.description}
                    </p>
                    {item.link && (
                      <div className="flex items-center gap-1 text-emerald-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>View Project</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="md:hidden mt-4 text-center">
          <p className="text-xs text-muted-foreground">← Swipe to explore more →</p>
        </div>
      </div>
    </section>
  );
}