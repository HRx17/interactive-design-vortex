import { useScrollProgress } from '@/hooks/useScrollAnimation';

export function ScrollProgress() {
  const scrollProgress = useScrollProgress();

  return (
    <div 
      className="scroll-progress"
      style={{ 
        transform: `scaleX(${scrollProgress / 100})`,
        opacity: scrollProgress > 5 ? 1 : 0
      }}
    />
  );
}