import React from 'react';

// Import tool logos from public folder
const tools = [
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

export function Toolbox() {
    return (
        <section className="py-24 bg-background border-t border-border/40">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="heading mb-6 text-foreground">
                        Toolbox
                    </h2>
                    <p className="subheading max-w-2xl mx-auto text-muted-foreground">
                        These are the preferred tools that I've been working on to streamline my creative process.
                        I'm always open to learning new methodologies, approaches and strategies to hone my craft.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto place-items-center">
                    {tools.map((tool) => (
                        <div
                            key={tool.name}
                            className="flex items-center justify-center w-16 h-16"
                            title={tool.name}
                        >
                            <img
                                src={tool.logo}
                                alt={tool.name}
                                className="w-10 h-10 object-contain grayscale brightness-0 dark:brightness-200 transition-all duration-300 hover:grayscale-0 hover:brightness-100"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
