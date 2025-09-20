import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Code, Palette, ArrowRight } from 'lucide-react';
import { RITShiftMateProject } from '@/components/RITShiftMateProject';
import { HealthyRProject } from '@/components/HealthyRProject';
import { WeatherAppProject } from '@/components/WeatherAppProject';
import { FoodZapProject } from '@/components/FoodZapProject';
import { ARProject } from '@/components/ARProject';
import { UpcomingProject } from '@/components/UpcomingProject';
import { PostSchedulerProject } from '@/components/PostSchedulerProject';
import { AttendanceProject } from '@/components/AttendanceProject';
import { WaahTvProject } from '@/components/WaahTvProject';
import { ParkingAppProject } from '@/components/ParkingAppProject';

interface ProjectToggleProps {
  isInView: boolean;
}

export function ProjectToggle({ isInView }: ProjectToggleProps) {
  const [activeTab, setActiveTab] = useState<'design' | 'development'>('design');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (tab: 'design' | 'development') => {
    if (tab === activeTab) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsAnimating(false);
    }, 150);
  };

  const designProjects = [
    <UpcomingProject key="upcoming" index={0} />,
    <RITShiftMateProject key="ritshiftmate" index={1} />,
    <HealthyRProject key="healthyR" index={2} />,
    <WeatherAppProject key="weatherApp" index={3} />,
    <FoodZapProject key="foodzap" index={4} />,
    <ARProject key="AR" index={5} />
  ];

  const developmentProjects = [
    <ParkingAppProject key="parkingApp" index={0} />,
    <PostSchedulerProject key="postScheduler" index={1} />,
    <AttendanceProject key="attendance" index={2} />,
    <WaahTvProject key="waahTv" index={3} />
  ];

  return (
    <section id="projects" className="py-12 relative overflow-hidden">
      <div className="section-container">
        {/* Header with Toggle */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className={cn(
            "heading bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-8",
            "opacity-0 transform translate-y-6 transition-all duration-700",
            isInView && "opacity-100 translate-y-0"
          )}>
            Featured Projects
          </h2>
          
          {/* Creative Toggle Switch */}
          <div className={cn(
            "relative inline-flex items-center p-2 bg-card/40 backdrop-blur-sm rounded-full border border-border/40 shadow-lg",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-200",
            isInView && "opacity-100 translate-y-0"
          )}>
            {/* Background slider */}
            <div 
              className={cn(
                "absolute top-2 bottom-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full transition-all duration-500 ease-out border border-emerald-500/30",
                activeTab === 'design' ? 'left-2 w-48' : 'left-52 w-56'
              )}
            />
            
            {/* Design Tab */}
            <button
              onClick={() => handleTabChange('design')}
              className={cn(
                "relative z-10 flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 w-48",
                activeTab === 'design' 
                  ? 'text-emerald-300 shadow-lg' 
                  : 'text-muted-foreground hover:text-emerald-400'
              )}
            >
              <Palette className="w-5 h-5" />
              <span>Design Projects</span>
              {activeTab === 'development' && (
                <ArrowRight className="w-4 h-4 opacity-60 rotate-180" />
              )}
            </button>
            
            {/* Development Tab */}
            <button
              onClick={() => handleTabChange('development')}
              className={cn(
                "relative z-10 flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 w-56",
                activeTab === 'development' 
                  ? 'text-emerald-300 shadow-lg' 
                  : 'text-muted-foreground hover:text-emerald-400'
              )}
            >
              <Code className="w-5 h-5" />
              <span>Development Projects</span>
              {activeTab === 'design' && (
                <ArrowRight className="w-4 h-4 opacity-60" />
              )}
            </button>
          </div>
          
          {/* Description */}
          <p className={cn(
            "text-muted-foreground mt-6 max-w-2xl mx-auto",
            "opacity-0 transform translate-y-6 transition-all duration-700 delay-300",
            isInView && "opacity-100 translate-y-0"
          )}>
            {activeTab === 'design' 
              ? "Explore my latest UI/UX design work focusing on user-centered solutions and innovative digital experiences."
              : "Full-stack applications and coding projects showcasing technical implementation and problem-solving skills."
            }
          </p>
        </div>

        {/* Projects Grid */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300",
          isAnimating && "opacity-50 scale-95"
        )}>
          {activeTab === 'design' ? designProjects : developmentProjects}
        </div>

        {/* Stats or Additional Info */}
        <div className={cn(
          "mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto",
          "opacity-0 transform translate-y-6 transition-all duration-700 delay-500",
          isInView && "opacity-100 translate-y-0"
        )}>
          <div className="text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/40">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {activeTab === 'design' ? '6+' : '3+'}
            </div>
            <div className="text-muted-foreground text-sm mt-1">
              {activeTab === 'design' ? 'Design Projects' : 'Full-Stack Apps'}
            </div>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/40">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {activeTab === 'design' ? '4+' : '1+'}
            </div>
            <div className="text-muted-foreground text-sm mt-1">
              {activeTab === 'design' ? 'Years Experience' : 'Years Coding'}
            </div>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/40">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {activeTab === 'design' ? '100%' : '95%'}
            </div>
            <div className="text-muted-foreground text-sm mt-1">
              {activeTab === 'design' ? 'User Focused' : 'Code Coverage'}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background floating elements */}
      <div className="absolute top-1/4 right-1/5 w-32 h-32 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 filter blur-2xl opacity-40 float-animation" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-teal-400/10 to-emerald-400/10 filter blur-xl opacity-30 float-animation" style={{animationDelay: '3s'}}></div>
      
      {/* Floating decorative shapes */}
      <div className="absolute top-1/3 left-1/6 w-6 h-6 border-2 border-emerald-400/30 rotate-45 float-animation" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-teal-400/20 rounded-full float-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/5 w-5 h-5 border border-emerald-300/40 rounded-full float-animation" style={{animationDelay: '4s'}}></div>
    </section>
  );
}