
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
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
        });
      });
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
