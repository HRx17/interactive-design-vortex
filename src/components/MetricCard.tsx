import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color?: string;
  delay?: number;
}

export function MetricCard({ icon: Icon, value, label, color = "text-emerald-500", delay = 0 }: MetricCardProps) {
  return (
    <div 
      className="bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          "p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20",
        )}>
          <Icon className={cn("w-6 h-6", color)} />
        </div>
        
        <div>
          <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-1">
            {value}
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}
