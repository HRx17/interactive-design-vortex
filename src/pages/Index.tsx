
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BentoGrid } from '@/components/BentoGrid';
import { DiagonalLayout } from '@/components/DiagonalLayout';
import { ProjectCard } from '@/components/ProjectCard';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  // Featured projects data for horizontal scroll
  const featuredProjects = [
    {
      id: 'parking-app',
      title: 'Smart Parking System',
      description: 'A comprehensive mobile app design for smart parking solutions with real-time availability tracking and seamless payment integration.',
      image: '/lovable-uploads/Group89.png',
      link: 'https://www.behance.net/gallery/212271631/Product-Designer-Portfolio-Overcoming-Remote-UX-Challeng',
      category: 'UI/UX Design',
      year: '2024'
    },
    {
      id: 'ar-project',
      title: 'AR Shopping Experience',
      description: 'Revolutionary augmented reality interface for retail, allowing customers to visualize products in their space before purchase.',
      image: '/lovable-uploads/Group90.png',
      link: 'https://www.behance.net/gallery/212271631/Product-Designer-Portfolio-Overcoming-Remote-UX-Challeng',
      category: 'AR/VR Design',
      year: '2024'
    },
    {
      id: 'shift-mate',
      title: 'RIT ShiftMate',
      description: 'Comprehensive case study of designing a shift management system for RIT campus, focusing on student worker scheduling and management.',
      image: '/lovable-uploads/RIT1.png',
      link: '#',
      category: 'Product Design',
      year: '2024'
    },
    {
      id: 'healthy-r',
      title: 'HealthyR Wellness App',
      description: 'Health and wellness application design focusing on mental health tracking, meditation, and personalized wellness journeys.',
      image: '/lovable-uploads/Health1.png',
      link: '#',
      category: 'Health Tech',
      year: '2024'
    },
    {
      id: 'weather-app',
      title: 'Weather Forecast App',
      description: 'Modern weather application with beautiful visualizations, location-based forecasts, and intuitive user experience.',
      image: '/lovable-uploads/hero1.png',
      link: '#',
      category: 'Mobile App',
      year: '2024'
    }
  ];

  const codingProjects = [
    {
      id: 'post-scheduler',
      title: 'Social Media Scheduler',
      description: 'Full-stack application for scheduling and managing social media posts across multiple platforms with analytics dashboard.',
      image: '/lovable-uploads/62d45b31-511d-490d-b9d9-4ac880ab5c6b.png',
      link: 'https://github.com/haetranpariya',
      category: 'Full Stack',
      year: '2024'
    },
    {
      id: 'attendance-system',
      title: 'Smart Attendance System',
      description: 'Automated attendance tracking system using facial recognition and real-time reporting for educational institutions.',
      image: '/lovable-uploads/663d3492-8371-4628-b10d-568b858e5004.png',
      link: 'https://github.com/haetranpariya',
      category: 'AI/ML',
      year: '2024'
    },
    {
      id: 'waah-tv',
      title: 'WaahTV Streaming Platform',
      description: 'Modern streaming platform with personalized recommendations, live streaming capabilities, and social features.',
      image: '/lovable-uploads/88af03d0-7217-433e-9838-870ddbec6d92.png',
      link: 'https://github.com/haetranpariya',
      category: 'Web App',
      year: '2024'
    }
  ];

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
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.image}
                  category={project.category}
                  link={project.link}
                  index={index}
                />
              ))}
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
              {codingProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.image}
                  category={project.category}
                  link={project.link}
                  index={index}
                />
              ))}
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
