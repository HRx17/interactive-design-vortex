
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CompanyLogos } from '@/components/CompanyLogos';
import { MetricsShowcase } from '@/components/MetricsShowcase';
import { BentoGrid } from '@/components/BentoGrid';
import { DiagonalLayout } from '@/components/DiagonalLayout';
import { ProjectToggle } from '@/components/ProjectToggle';
import { UXProcess } from '@/components/UXProcess';
import { Endorsements } from '@/components/Endorsements';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        
        {/* Key Metrics Showcase */}
        <MetricsShowcase />
        
        {/* Work Experience - Diagonal Layout */}
        <DiagonalLayout />
        
        {/* Projects Toggle Section */}
        <ProjectToggle isInView={true} />
        
        {/* UX Process Section */}
        <UXProcess />
        
        {/* Skills & Expertise Bento Grid */}
        <BentoGrid />
        
        {/* Endorsements Section */}
        <Endorsements />
        
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
