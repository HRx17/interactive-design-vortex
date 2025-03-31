
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Initialize animation on page load
    const animateOnLoad = () => {
      const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-down, .animate-slide-left, .animate-slide-right');
      animatedElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.opacity = '0';
          element.style.animationFillMode = 'forwards';
        }
      });
      
      setTimeout(() => {
        animatedElements.forEach((element, index) => {
          if (element instanceof HTMLElement) {
            element.style.animationDelay = `${index * 0.1}s`;
            element.style.opacity = '';
          }
        });
      }, 100);
    };
    
    animateOnLoad();
    
    // Add cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorSmall = document.createElement('div');
    cursorSmall.className = 'custom-cursor-small';
    document.body.appendChild(cursorSmall);
    
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      cursorSmall.style.left = e.clientX + 'px';
      cursorSmall.style.top = e.clientY + 'px';
      
      // Add magnetic effect for links and buttons
      const interactiveElements = document.querySelectorAll('a, button');
      interactiveElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + 
          Math.pow(e.clientY - centerY, 2)
        );
        
        if (distance < 100) { // Magnetic radius
          const strength = 0.3; // Magnetic strength
          const pullX = (centerX - e.clientX) * strength;
          const pullY = (centerY - e.clientY) * strength;
          
          cursor.style.transform = `translate(calc(-50% + ${-pullX}px), calc(-50% + ${-pullY}px))`;
          cursorSmall.style.transform = `translate(calc(-50% + ${-pullX}px), calc(-50% + ${-pullY}px))`;
        }
      });
    });
    
    // Add custom cursor style
    const style = document.createElement('style');
    style.innerHTML = `
      .custom-cursor {
        position: fixed;
        width: 40px;
        height: 40px;
        border: 2px solid rgba(var(--primary), 0.5);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        transition: width 0.3s, height 0.3s, border-color 0.3s, transform 0.1s;
        backdrop-filter: invert(0.2);
      }
      
      .custom-cursor-small {
        position: fixed;
        width: 5px;
        height: 5px;
        background-color: rgb(var(--primary));
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.1s;
      }
      
      a:hover ~ .custom-cursor,
      button:hover ~ .custom-cursor {
        width: 60px;
        height: 60px;
        border-color: rgba(var(--primary), 0.9);
      }
      
      .section-container {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }
      
      .heading {
        font-size: 2.25rem;
        line-height: 1.2;
        font-weight: 700;
        letter-spacing: -0.025em;
      }
      
      @media (min-width: 768px) {
        .heading {
          font-size: 3rem;
        }
      }
      
      @media (min-width: 1024px) {
        .heading {
          font-size: 3.75rem;
        }
      }
      
      .btn-hover {
        position: relative;
        overflow: hidden;
        transition: all 0.3s;
      }
      
      .btn-hover:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.5s;
        z-index: 0;
      }
      
      .btn-hover:hover:before {
        width: 300px;
        height: 300px;
      }
      
      /* Floating animation */
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      /* Particle animation */
      .particles {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
        pointer-events: none;
      }
      
      .particle {
        position: absolute;
        display: block;
        background-color: rgba(16, 185, 129, 0.1);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        animation: particle-animation 15s infinite linear;
      }
      
      @keyframes particle-animation {
        0% {
          transform: translateY(0) translateX(0);
          opacity: 1;
        }
        100% {
          transform: translateY(-800px) translateX(var(--translate-x, 0));
          opacity: 0;
        }
      }
      
      /* Made with Lovable AI badge */
      .lovable-badge {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 8px 12px;
        background: rgba(16, 185, 129, 0.1);
        border: 1px solid rgba(16, 185, 129, 0.3);
        border-radius: 8px;
        font-size: 12px;
        color: rgba(16, 185, 129, 0.8);
        backdrop-filter: blur(5px);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.3s ease;
      }
      
      .lovable-badge:hover {
        background: rgba(16, 185, 129, 0.2);
        transform: translateY(-3px);
      }
      
      .lovable-badge svg {
        width: 14px;
        height: 14px;
      }
    `;
    document.head.appendChild(style);
    
    // Add particle animation
    const createParticles = () => {
      const particles = document.createElement('div');
      particles.className = 'particles';
      document.body.appendChild(particles);
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('span');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.setProperty('--translate-x', (Math.random() * 400 - 200) + 'px');
        particle.style.animationDelay = Math.random() * 10 + 's';
        particles.appendChild(particle);
      }
    };
    
    createParticles();
    
    // Add "Made with Lovable AI" badge
    const lovableBadge = document.createElement('a');
    lovableBadge.className = 'lovable-badge';
    lovableBadge.href = "https://lovable.ai";
    lovableBadge.target = "_blank";
    lovableBadge.rel = "noopener noreferrer";
    lovableBadge.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
        <path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c2.757 0 5-2.243 5-5h-2c0 1.654-1.346 3-3 3s-3-1.346-3-3H7c0 2.757 2.243 5 5 5z"/>
      </svg>
      Made with Lovable
    `;
    //document.body.appendChild(lovableBadge);
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
        });
      });
      
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
      
      if (cursorSmall && cursorSmall.parentNode) {
        cursorSmall.parentNode.removeChild(cursorSmall);
      }
      
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
      
      const particles = document.querySelector('.particles');
      if (particles && particles.parentNode) {
        particles.parentNode.removeChild(particles);
      }
      
      if (lovableBadge && lovableBadge.parentNode) {
        lovableBadge.parentNode.removeChild(lovableBadge);
      }
    };
  }, []);

  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
