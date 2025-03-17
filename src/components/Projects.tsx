
import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';

// Sample project data
const projects = [
  {
    id: 1,
    title: "Healthverse UX Case Study",
    description: "Designing a seamless telehealth experience focused on patient needs and accessibility",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/808/7dff87184018925.Y3JvcCwxOTIwLDE1MDEsMCwyMDk.png",
    category: "UX Design",
    link: "https://www.behance.net/gallery/184018925/Healthverse-UX-Case-Study"
  },
  {
    id: 2,
    title: "Travelio UX Case Study",
    description: "Creating an intuitive travel planning app that simplifies trip organization",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/808/e57d12171416235.Y3JvcCwxOTIwLDE1MDEsMCwyMDk.png",
    category: "UX Design",
    link: "https://www.behance.net/gallery/171416235/Travelio-UX-Case-Study"
  },
  {
    id: 3,
    title: "Insurance UX Case Study",
    description: "Redesigning the insurance experience to be more understandable and user-friendly",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/808/e2c5cb171417361.Y3JvcCwxOTIwLDE1MDEsMCwyMDk.png",
    category: "UX Design",
    link: "https://www.behance.net/gallery/171417361/Insurance-UX-Case-Study"
  },
  {
    id: 4,
    title: "Foodify UX Case Study",
    description: "Connecting users with local food options through an engaging and intuitive interface",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/808/a01a50180733265.Y3JvcCwxOTIwLDE1MDEsMCwyMDk.png",
    category: "UX Design",
    link: "https://www.behance.net/gallery/180733265/Foodify-UX-Case-Study"
  },
  {
    id: 5,
    title: "Vibe Drink UX Case Study",
    description: "Creating a vibrant beverage brand experience through thoughtful design",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/808/38ca1f182057401.Y3JvcCwxOTIwLDE1MDEsMCwyMDk.png",
    category: "UX Design",
    link: "https://www.behance.net/gallery/182057401/Vibe-Drink-UX-Case-Study"
  },
  {
    id: 6,
    title: "IntelliTime UX Case Study",
    description: "Time management reimagined for professionals and students",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/808/22b3e0183980743.Y3JvcCwxOTIwLDE1MDEsMCwyMDk.png",
    category: "UX Design",
    link: "https://www.behance.net/gallery/183980743/IntelliTime-UX-Case-Study"
  }
];

// Filter categories
const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary text-primary inline-block mb-4 animate-fade-in opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
              Featured Work
            </span>
            <h2 className="heading animate-slide-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              Recent Projects
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl animate-slide-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              Explore my portfolio of UX design work focused on creating human-centered digital experiences.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 animate-fade-in opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-primary hover:bg-secondary/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              category={project.category}
              link={project.link}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
          <a 
            href="https://www.behance.net/haetranpariya17"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover inline-flex items-center px-6 py-3 rounded-full border border-input bg-background hover:bg-accent text-foreground font-medium text-sm"
          >
            <span className="relative z-10">View more on Behance</span>
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-gradient-to-r from-secondary/50 to-transparent rounded-full filter blur-3xl opacity-30"></div>
    </section>
  );
}
