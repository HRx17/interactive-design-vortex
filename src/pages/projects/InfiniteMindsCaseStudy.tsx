import React from "react";

import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

// Import images
import heroBanner from "@/assets/infinite-minds/hero-banner.png";
import mobileMockup1 from "@/assets/infinite-minds/mobile-mockup-1.jpg";
import mobileMockup2 from "@/assets/infinite-minds/mobile-mockup-2.jpg";
import mobileMockup3 from "@/assets/infinite-minds/mobile-mockup-3.jpg";

export default function InfiniteMindsCaseStudy() {
    const navigate = useNavigate();

    const caseStudyContent = [
        { type: "image", src: mobileMockup1, alt: "Mobile App Interface - Home" },
        { type: "image", src: mobileMockup2, alt: "Mobile App Interface - Challenges" },
        { type: "image", src: mobileMockup3, alt: "Mobile App Interface - Profile" },
    ];

    return (
        <div className="min-h-screen w-full bg-background">
            {/* Back Button */}
            <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
                <div className="section-container py-4">
                    <Button variant="ghost" className="gap-2" onClick={() => navigate(-1)}>
                        <ArrowLeft className="h-4 w-4" />
                        Back to Projects
                    </Button>
                </div>
            </div>

            <ScrollArea className="h-[calc(100vh-73px)]">
                <div className="case-study-container">
                    {/* Hero Section */}
                    <div className="max-w-4xl mx-auto mb-12 text-center">
                        <h1 className="heading mb-4">Infinite Minds: Gamified Learning</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                            Redesigning engagement systems and expanding cross-platform reach for a brain-training application.
                        </p>

                        <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-border/20 mb-12">
                            <img
                                src={heroBanner}
                                alt="Infinite Minds Hero Banner"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 mb-12">
                            {["Product Design", "Gamification", "Cross-Platform", "UX Strategy", "Retention"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="max-w-3xl mx-auto space-y-16 mb-16 text-left">

                        {/* 1. The Challenge */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-primary">1. The Challenge (The "Why")</h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                The existing Infinite Minds application, a brain-training tool, faced two core challenges:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    <strong className="text-foreground">Retention/Motivation:</strong> The current user experience lacked sufficient gamification to drive daily engagement and long-term retention.
                                </li>
                                <li>
                                    <strong className="text-foreground">Limited Reach:</strong> The app was strictly mobile-only, missing the opportunity to capture users on wider screens (tablets and web browsers) that are preferred for focused, long-session tasks.
                                </li>
                            </ul>
                        </section>

                        {/* 2. Role & Focus */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-primary">2. My Role & Focus</h2>
                            <div className="bg-secondary/20 p-6 rounded-xl border border-border/40">
                                <p className="mb-2"><strong className="text-foreground">Role:</strong> Product Designer & UX Lead (Worked directly with Lead Product Designer Phil Larsen)</p>
                                <p className="mb-2"><strong className="text-foreground">Duration:</strong> May 2025 – August 2025</p>
                                <p><strong className="text-foreground">Goal:</strong> Redesign key motivational flows, introduce new features to enhance revenue, and create a scalable, from-scratch design system for web/tablet devices.</p>
                            </div>
                        </section>

                        {/* 3. Solution & Impact */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-primary">3. Solution & Impact (The "How I Won")</h2>
                            <p className="text-lg text-muted-foreground mb-6">I drove two major initiatives to solve these challenges:</p>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-3 text-foreground">A. Gamification & Retention Redesign (Mobile App Updates)</h3>
                                <p className="text-muted-foreground mb-3">I redesigned the system to integrate motivational components based on user psychology:</p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li><strong className="text-foreground">Subscription Page:</strong> Redesigned the subscription flow to clearly communicate value and features, driving a 25% improvement in conversion rates across the company.</li>
                                    <li><strong className="text-foreground">Badges & Rewards System:</strong> Introduced skill-based badges, weekly leaderboards, and daily challenge streaks to provide immediate and long-term psychological rewards for engagement.</li>
                                    <li><strong className="text-foreground">Progress Tracking:</strong> Redesigned the user dashboard to give a clear, satisfying visual representation of skill progression and mastery.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-foreground">B. Cross-Platform Interface Design (Web/Tablet)</h3>
                                <p className="text-muted-foreground mb-3">I led the conversion of the existing mobile app into a functional, intuitive interface optimized for larger screens.</p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li><strong className="text-foreground">Information Architecture:</strong> Explored and designed new content organizations to leverage increased screen real estate, moving beyond the simple vertical stacking of mobile.</li>
                                    <li><strong className="text-foreground">Design Mockups (From Scratch):</strong> Created high-fidelity mockups for all new web/tablet interfaces, ensuring a consistent brand experience while adhering to responsive design principles.</li>
                                    <li><strong className="text-foreground">Key Deliverables:</strong> A complete UI/UX kit for the wider screen version, enabling the development team to launch the web/tablet interface.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 4. Key Achievements */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-primary">4. Key Achievements & Skills</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: "Apply Gamification Theory", desc: "Directly designed systems that solve organizational and user motivation problems." },
                                    { title: "Drive Revenue & Engagement", desc: "Designed a mobile app experience that increased user engagement (DAU) by 35% and improved conversion rates by 25%." },
                                    { title: "Cross-Platform Design", desc: "Successfully translated complex mobile interfaces into cohesive, functional web/tablet experiences." },
                                    { title: "Professional Collaboration", desc: "Partnered with a Lead Product Designer to execute a project from concept through mockups." }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-4 bg-card border border-border/40 rounded-lg shadow-sm">
                                        <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Mockups Grid */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-center">Design Mockup Samples: Sharable Work</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {caseStudyContent.map((item, idx) => (
                                <div key={idx} className="w-full rounded-xl overflow-hidden shadow-lg border border-border/20 hover:scale-[1.02] transition-transform duration-300">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-auto object-cover aspect-[9/16]"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </ScrollArea>
        </div>
    );
}
