import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function InteractiveCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnterInteractive = () => {
      setIsHovering(true);
      setCursorVariant('interactive');
    };

    const handleMouseLeaveInteractive = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .cursor-magnetic, .interactive-card');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnterInteractive);
      element.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnterInteractive);
        element.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    interactive: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
    },
  };

  return (
    <>
      {/* Main cursor */}
      <div
        className={cn(
          "fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-200 ease-out",
          "bg-gradient-to-r from-emerald-400 to-teal-400",
          isHovering && "scale-150 bg-gradient-to-r from-emerald-300 to-teal-300"
        )}
        style={{
          transform: `translate(${variants[cursorVariant].x}px, ${variants[cursorVariant].y}px) scale(${variants[cursorVariant].scale})`,
          transition: 'transform 0.1s ease-out, scale 0.2s ease-out',
        }}
      />
      
      {/* Cursor trail */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998] bg-emerald-400/50"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />
    </>
  );
}