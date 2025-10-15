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
    logo: "/logos/tech9-logo.svg?v=2"
  },
  {
    name: "Excellus BCBS",
    url: "https://www.excellusbcbs.com/",
    logo: "/logos/excellus-logo.png"
  },
  {
    name: "Zlato Technolabs",
    url: "https://zlatotech.com/",
    logo: "/logos/zlato-logo.png"
  },
  {
    name: "WaahTV",
    url: "https://waahtv.com",
    logo: "/logos/waahtv-logo.png"
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/",
    logo: "/logos/upwork-logo.png"
  },
  {
    name: "RIT",
    url: "https://www.rit.edu/",
    logo: "/logos/rit-logo.png"
  }
];

export function CompanyLogos() {
  return (
    <div className="pb-6 border-y border-gray-500/20 bg-white/10 backdrop-blur-xl shadow-lg">
      <div className="section-container">
        <div className="text-center mb-4">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider pt-4 pb-2">
            Trusted by companies worldwide
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className={cn(
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
                  className={cn(
                    "w-auto",
                    (company.name === "Zlato Technolabs" || company.name === "Upwork") ? "h-16" : "h-12"
                  )}
                />
              ) : (
                <span className="text-lg font-semibold text-muted-foreground">
                  {company.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
