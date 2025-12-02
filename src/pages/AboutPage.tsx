import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Expertise } from '@/components/Expertise';
import { Toolbox } from '@/components/Toolbox';
import { Contact } from '@/components/Contact';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main className="pt-20">
        <Expertise />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
