import React from 'react';

// Import tool logos from public folder
const allTools = [
    { name: 'Figma', logo: '/logos/figma-logo.svg' },
    { name: 'React', logo: '/logos/logo-react.svg' },
    { name: 'GitHub', logo: '/logos/github.png' },
    { name: 'Notion', logo: '/logos/notion.png' },
    { name: 'Antigravity', logo: '/logos/antigravity.png' },
    { name: 'Bolt', logo: '/logos/bolt.png' },
    { name: 'Framer', logo: '/logos/framer.png' },
    { name: 'Node.js', logo: '/logos/nodejs.png' },
    { name: 'GitHub Copilot', logo: '/logos/copilot.png' },
    { name: 'MongoDB', logo: '/logos/mongodb.png' },
    { name: 'Firebase', logo: '/logos/firebase.svg' },
    { name: 'Replit', logo: '/logos/replit.png' },
    { name: 'V0', logo: '/logos/v0.png' },
];

// Split into two distinct groups - no overlap
const row1Tools = allTools.filter((_, index) => index % 2 === 0); // Even indices
const row2Tools = allTools.filter((_, index) => index % 2 !== 0); // Odd indices

// AI-Native Stack data
const aiNativeStack = [
    {
        category: 'Vibe Coding',
        tools: ['Cursor', 'Replit', 'Lovable'],
        icon: '🚀'
    },
    {
        category: 'GenUI',
        tools: ['v0', 'Galileo AI'],
        icon: '✨'
    },
    {
        category: 'Architecture',
        tools: ['System Design', 'API Integration', 'Prompt Engineering'],
        icon: '🏗️'
    }
];

export function Toolbox() {
    return (
        <section className="py-16 bg-secondary border-t border-border/40 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="heading mb-6 text-foreground">
                        Toolbox
                    </h2>
                    <p className="subheading max-w-2xl mx-auto text-muted-foreground">
                        These are the preferred tools that I've been working on to streamline my creative process.
                        I'm always open to learning new methodologies, approaches and strategies to hone my craft.
                    </p>
                </div>

                {/* AI-Native Stack Section */}
                <div className="mb-16">
                    <div className="flex items-center justify-center mb-8">
                        <hr className="w-24 border-t border-border/50 mr-4" />
                        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            AI-Native Stack
                        </span>
                        <hr className="w-24 border-t border-border/50 ml-4" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {aiNativeStack.map((item, index) => (
                            <div
                                key={index}
                                className="group p-6 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">{item.icon}</span>
                                    <h3 className="font-semibold text-foreground">{item.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {item.tools.map((tool, toolIndex) => (
                                        <span
                                            key={toolIndex}
                                            className="px-3 py-1 text-sm rounded-full bg-secondary border border-border/50 text-muted-foreground"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center mb-8">
                    <hr className="w-24 border-t border-border/50 mr-4" />
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Design & Development Tools
                    </span>
                    <hr className="w-24 border-t border-border/50 ml-4" />
                </div>

                {/* Container with fixed width and fade edges */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Fade overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

                    {/* First row - scrolling left to right */}
                    <div className="relative mb-8 overflow-hidden">
                        <div className="flex animate-scroll-left">
                            {/* Duplicate the array 3 times for seamless infinite scroll */}
                            {[...row1Tools, ...row1Tools, ...row1Tools].map((tool, index) => (
                                <div
                                    key={`row1-${index}`}
                                    className="flex-shrink-0 mx-8"
                                    title={tool.name}
                                >
                                    <img
                                        src={tool.logo}
                                        alt={tool.name}
                                        className="w-12 h-12 object-contain grayscale brightness-0 dark:brightness-200 transition-all duration-300 hover:grayscale-0 hover:brightness-100"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second row - scrolling right to left */}
                    <div className="relative overflow-hidden">
                        <div className="flex animate-scroll-right">
                            {/* Duplicate the array 3 times for seamless infinite scroll */}
                            {[...row2Tools, ...row2Tools, ...row2Tools].map((tool, index) => (
                                <div
                                    key={`row2-${index}`}
                                    className="flex-shrink-0 mx-8"
                                    title={tool.name}
                                >
                                    <img
                                        src={tool.logo}
                                        alt={tool.name}
                                        className="w-12 h-12 object-contain grayscale brightness-0 dark:brightness-200 transition-all duration-300 hover:grayscale-0 hover:brightness-100"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}
