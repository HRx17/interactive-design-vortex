
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BentoGrid } from '@/components/BentoGrid';
import { DiagonalLayout } from '@/components/DiagonalLayout';
import { RITShiftMateProject } from '@/components/RITShiftMateProject';
import { HealthyRProject } from '@/components/HealthyRProject';
import { WeatherAppProject } from '@/components/WeatherAppProject';
import { FoodZapProject } from '@/components/FoodZapProject';
import { ARProject } from '@/components/ARProject';
import { UpcomingProject } from '@/components/UpcomingProject';
import { PostSchedulerProject } from '@/components/PostSchedulerProject';
import { AttendanceProject } from '@/components/AttendanceProject';
import { WaahTvProject } from '@/components/WaahTvProject';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Work Experience - Diagonal Layout */}
        <DiagonalLayout />
        
        {/* Featured Design Projects */}
        <section id="projects" className="py-16 relative overflow-hidden">
          <div className="section-container">
            <div className="max-w-2xl mx-auto mb-12 text-center">
              <h2 className="heading bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Featured Design Projects
              </h2>
              <p className="text-muted-foreground mt-4">
                Explore my latest UI/UX design work focusing on user-centered solutions and innovative digital experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <UpcomingProject index={0} />
              <RITShiftMateProject index={1} />
              <HealthyRProject index={2} />
              <WeatherAppProject index={3} />
              <FoodZapProject index={4} />
              <ARProject index={5} />
            </div>
          </div>
        </section>
        
        {/* Development Projects */}
        <section className="py-16 bg-gradient-to-b from-background to-emerald-950/5 relative overflow-hidden">
          <div className="section-container">
            <div className="max-w-2xl mx-auto mb-12 text-center">
              <h2 className="heading bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Development Projects
              </h2>
              <p className="text-muted-foreground mt-4">
                Full-stack applications and coding projects showcasing technical implementation and problem-solving skills.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PostSchedulerProject index={0} />
              <AttendanceProject index={1} />
              <WaahTvProject index={2} />
            </div>
          </div>
        </section>
        
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
