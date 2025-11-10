import React from 'react';
import { Award, ExternalLink, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  logo: string;
  featured?: boolean;
  credentialUrl?: string;
}

export const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Google's UX Design Professional Certification",
      issuer: "Google",
      date: "Oct 2023",
      logo: "/logos/google-cert.png",
      skills: [
        "User Experience Design",
        "User Interface Design",
        "Interaction Design",
        "Prototyping",
        "Wireframing",
        "User Research",
        "Usability Testing",
        "Information Architecture",
        "WCAG Accessibility",
        "Design Thinking",
        "User Personas",
        "User Journey Mapping",
        "Figma",
        "Adobe XD"
      ],
      featured: true
    },
    {
      title: "Core Java",
      issuer: "SunBeam Institute of Information Technology",
      date: "May 2021",
      logo: "/logos/sunbeam-cert.png",
      skills: [
        "Java Programming",
        "Object-Oriented Programming",
        "Data Structures",
        "Algorithms",
        "Exception Handling",
        "Multithreading",
        "Collections Framework",
        "JDBC",
        "Design Patterns"
      ]
    },
    {
      title: "Programming for Everybody: Getting Started with Python",
      issuer: "University of Michigan",
      date: "Aug 2020",
      logo: "/logos/umich-cert.png",
      skills: [
        "Python Programming",
        "Programming Fundamentals",
        "Variables & Data Types",
        "Control Flow",
        "Functions",
        "Debugging",
        "Problem Solving",
        "Code Logic"
      ]
    },
    {
      title: "Python Data Structures",
      issuer: "University of Michigan",
      date: "Aug 2020",
      logo: "/logos/umich-cert.png",
      skills: [
        "Python",
        "Lists & Tuples",
        "Dictionaries",
        "Data Structures",
        "Algorithms",
        "String Manipulation",
        "File Handling",
        "Data Processing"
      ]
    },
    {
      title: "Using Python to Access Web Data",
      issuer: "University of Michigan",
      date: "Aug 2020",
      logo: "/logos/umich-cert.png",
      skills: [
        "Python",
        "Web Scraping",
        "REST APIs",
        "JSON & XML Parsing",
        "HTTP Requests",
        "Regular Expressions",
        "BeautifulSoup",
        "Data Extraction"
      ]
    },
    {
      title: "Object Oriented Programming Using C++98 and C++03",
      issuer: "Sunbeam Institute of Information Technology",
      date: "Jul 2020",
      logo: "/logos/sunbeam-cert.png",
      skills: [
        "C++ Programming",
        "Object-Oriented Programming",
        "Classes & Objects",
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Templates",
        "STL (Standard Template Library)"
      ]
    },
    {
      title: "C for Everyone: Programming Fundamentals",
      issuer: "Coursera",
      date: "May 2020",
      logo: "/logos/coursera-cert.png",
      skills: [
        "C Programming",
        "Memory Management",
        "Pointers",
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "Low-Level Programming",
        "Code Optimization"
      ]
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Professional Development</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & Training
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and skill development across UX design and software engineering
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className={`${
                cert.featured 
                  ? 'border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-purple-500/5' 
                  : 'border-border/50'
              }`}
            >
              {/* Featured Badge - Absolute Positioned */}
              {cert.featured && (
                <div className="absolute -top-2 -right-2 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-md opacity-75 animate-pulse"></div>
                    <div className="relative px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center gap-1.5 shadow-lg">
                      <Star className="w-3.5 h-3.5 text-white fill-white" />
                      <span className="text-xs font-bold text-white uppercase tracking-wide">Featured</span>
                    </div>
                  </div>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-start gap-4">
                  {/* Logo */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-background border border-border/50 p-2 flex items-center justify-center">
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="flex flex-col gap-1">
                      <span className="font-medium text-foreground/70">{cert.issuer}</span>
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground/80">Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="text-xs bg-muted hover:bg-muted/80 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">7</div>
            <div className="text-sm text-muted-foreground">Total Certifications</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-sm text-muted-foreground">Universities & Institutions</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Skills Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};