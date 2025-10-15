
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CompanyLogos } from '@/components/CompanyLogos';
import { MetricsShowcase } from '@/components/MetricsShowcase';
import { BentoGrid } from '@/components/BentoGrid';
import { DiagonalLayout } from '@/components/DiagonalLayout';
import { ProjectToggle } from '@/components/ProjectToggle';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Key Metrics Showcase */}
        <MetricsShowcase />
        
        {/* Work Experience - Diagonal Layout */}
        <DiagonalLayout />
        
        {/* Projects Toggle Section */}
        <ProjectToggle isInView={true} />
        
        {/* Skills & Expertise Bento Grid */}
        <BentoGrid />
        
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
