import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DiagonalLayout } from '@/components/DiagonalLayout';
import { Endorsements } from '@/components/Endorsements';
import { ScrollProgress } from '@/components/ScrollProgress';

const WorkExperiencePage = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main className="pt-20">
        <DiagonalLayout />
        <Endorsements />
      </main>
      <Footer />
    </div>
  );
};

export default WorkExperiencePage;
