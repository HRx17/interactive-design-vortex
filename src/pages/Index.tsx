
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
        transition: width 0.3s, height 0.3s, border-color 0.3s;
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
    `;
    document.head.appendChild(style);
    
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
