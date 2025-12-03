import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSignatureProps {
    className?: string;
    isScrolled?: boolean;
}

export function AnimatedSignature({ className, isScrolled }: AnimatedSignatureProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <img
                src="/logos/H-animation.gif"
                alt="H Logo Animation"
                key="h-animation-once"
                className={cn(
                    "w-full h-full object-contain transition-opacity duration-1000",
                    isVisible ? "opacity-100" : "opacity-0"
                )}
                style={{
                    mixBlendMode: 'screen',
                    filter: 'contrast(1.2) brightness(1.1)',
                    backgroundColor: 'transparent',
                    imageRendering: 'crisp-edges'
                }}
            />
        </div>
    );
}
