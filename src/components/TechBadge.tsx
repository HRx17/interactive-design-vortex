import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  icon?: LucideIcon;
  label: string;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
}

export function TechBadge({ icon: Icon, label, variant = 'secondary', className }: TechBadgeProps) {
  return (
    <Badge 
      variant={variant}
      className={cn(
        "px-3 py-1.5 text-sm font-medium gap-1.5 hover:bg-primary/20 transition-colors",
        className
      )}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {label}
    </Badge>
  );
}
