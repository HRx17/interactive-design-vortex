import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'Work Experience', href: '/work-experience', isRoute: true },
  { label: 'Projects', href: '/projects', isRoute: true },
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Contact', href: '#contact', isRoute: false }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  const isAtTop = !isScrolled && activeSection === 'home' && isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 50) {
        setActiveSection('home');
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Define color classes based on scroll state
  const textColorClass = isAtTop ? 'text-white' : 'text-foreground';
  const mutedTextColorClass = isAtTop ? 'text-gray-400' : 'text-muted-foreground';
  const underlineColorClass = isAtTop ? 'bg-white' : 'bg-foreground';
  const hoverBgClass = isAtTop ? 'bg-white/20' : 'bg-muted';

  return (
    <header 
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6",
        isScrolled ? "h-16 glass backdrop-blur-xl bg-background/80" : "h-20 bg-transparent"
      )}
    >
      <div className="max-w-7xl h-full mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className={cn(
            "font-display text-base md:text-lg font-bold relative group cursor-magnetic flex items-center gap-2", 
            textColorClass
          )}
        >
          <img 
            src="/lovable-uploads/031164e9-f067-46d6-9ed3-ea3a83cd4a7d.png" 
            alt="SD" 
            className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" 
          />
          <span className="font-bold text-base whitespace-nowrap">Haet Ranpariya</span>
          <span className={cn(
            "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
            underlineColorClass
          )}></span>
        </Link>
  
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => {
            const isActive = item.isRoute 
              ? location.pathname === item.href 
              : false;
            
            const NavElement = item.isRoute ? Link : 'a';
            const navProps = item.isRoute 
              ? { to: item.href } 
              : { href: item.href };
            
            return (
              <NavElement 
                key={item.href}
                {...navProps as any}
                className={cn(
                  "relative py-2 px-3 font-medium text-sm transition-all duration-300 cursor-magnetic rounded-lg group",
                  isActive
                    ? textColorClass
                    : cn(mutedTextColorClass, isAtTop ? "hover:text-white" : "hover:text-foreground")
                )}
              >
                <span className="relative z-10 whitespace-nowrap">{item.label}</span>
                <span 
                  className={cn(
                    "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300",
                    underlineColorClass,
                    isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                  )}
                ></span>
                <div className={cn(
                  "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300",
                  hoverBgClass
                )}></div>
              </NavElement>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden p-2 rounded-lg focus:outline-none transition-all duration-300 cursor-magnetic relative group",
            isAtTop ? "text-white hover:bg-white/20" : "text-foreground hover:bg-muted"
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
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-x-0 z-50 backdrop-blur-xl bg-background/95 md:hidden transform transition-all duration-500 ease-out",
          isScrolled ? "top-16" : "top-20",
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <div className="px-4 py-6 border-t border-border">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = item.isRoute 
                ? location.pathname === item.href 
                : false;
              
              const NavElement = item.isRoute ? Link : 'a';
              const navProps = item.isRoute 
                ? { to: item.href } 
                : { href: item.href };
              
              return (
                <NavElement 
                  key={item.href}
                  {...navProps as any}
                  className={cn(
                    "py-3 px-4 font-medium text-base rounded-xl transition-all duration-300 border border-transparent",
                    "hover:border-border hover:bg-muted",
                    isActive
                      ? "text-foreground bg-muted border-border" 
                      : "text-muted-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                  </span>
                </NavElement>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
