
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Work Experience', href: '#work-experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Mouse position tracking for magnetic effects
    const handleMouseMove = (e: MouseEvent) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <header 
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6",
        isScrolled ? "py-2 glass backdrop-blur-xl" : "py-4 md:py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="font-display text-base md:text-lg font-bold relative group cursor-magnetic flex items-end gap-2"
        >
          <img 
            src="/lovable-uploads/7e4d4ff8-93ad-488b-b074-ca4fe23f33da.png" 
            alt="HR" 
            className="w-12 h-12 md:w-14 md:h-14"
          />
          <span className="relative z-10">
            Haet Ranpariya
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <a 
              key={item.href}
              href={item.href}
              className={cn(
                "relative py-2 px-3 font-medium text-sm transition-all duration-300 cursor-magnetic rounded-lg group",
                activeSection === item.href.substring(1) 
                  ? "text-emerald-300" 
                  : "text-muted-foreground hover:text-emerald-200"
              )}
            >
              <span className="relative z-10">{item.label}</span>
              <span 
                className={cn(
                  "absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300",
                  activeSection === item.href.substring(1) ? "w-4/5" : "w-0 group-hover:w-4/5"
                )}
              ></span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden p-2 rounded-lg focus:outline-none transition-all duration-300 cursor-magnetic relative group",
            "hover:bg-emerald-500/10"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative z-10">
            {mobileMenuOpen ? (
              <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="h-5 w-5 transition-transform duration-300 hover:scale-110" />
            )}
          </div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-x-0 top-[73px] z-50 backdrop-blur-xl bg-background/95 md:hidden transform transition-all duration-500 ease-out",
          isScrolled ? "top-[61px]" : "top-[77px]",
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <div className="px-4 py-6 border-t border-emerald-500/20">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a 
                key={item.href}
                href={item.href}
                className={cn(
                  "py-3 px-4 font-medium text-base rounded-xl transition-all duration-300 border border-transparent",
                  "hover:border-emerald-500/30 hover:bg-emerald-500/10",
                  activeSection === item.href.substring(1) 
                    ? "text-emerald-300 bg-emerald-500/10 border-emerald-500/30" 
                    : "text-muted-foreground"
                )}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  {item.label}
                  <div className="w-1 h-1 rounded-full bg-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
