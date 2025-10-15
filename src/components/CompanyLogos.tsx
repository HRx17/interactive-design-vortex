import React from 'react';
import { cn } from '@/lib/utils';

interface Company {
  name: string;
  logo?: string;
  url: string;
}

const companies: Company[] = [
  {
    name: "Tech9",
    url: "https://www.tech9.com/",
    logo: undefined // Will use text fallback
  },
  {
    name: "Zlato Technolabs",
    url: "https://zlatotech.com/",
    logo: undefined
  },
  {
    name: "WaahTV",
    url: "https://waahtv.com",
    logo: undefined
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/",
    logo: undefined
  }
];

export function CompanyLogos() {
  return (
    <div className="py-12 border-y border-border/20">
      <div className="section-container">
        <div className="text-center mb-8">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by companies worldwide
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative px-6 py-4 rounded-xl border border-border/30 bg-card/40 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10",
                "opacity-0 transform translate-y-4 animate-fade-in"
              )}
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {company.logo ? (
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="h-8 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              ) : (
                <span className="text-lg font-semibold text-muted-foreground group-hover:text-emerald-400 transition-colors duration-300">
                  {company.name}
                </span>
              )}
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
