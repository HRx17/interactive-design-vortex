
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MetricsShowcase } from '@/components/MetricsShowcase';
import { DiagonalLayout } from '@/components/DiagonalLayout';
import { Projects } from '@/components/Projects';

import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Expertise } from '@/components/Expertise';
import { Endorsements } from '@/components/Endorsements';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        
        {/* Key Metrics Showcase */}

        
        {/* Work Experience - Diagonal Layout */}
        <DiagonalLayout />
        
        {/* Projects Section with Research/Design/Coding Tabs */}
        <Projects />


       

        {/* Expertise Section */}
        <Expertise/>
        
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
