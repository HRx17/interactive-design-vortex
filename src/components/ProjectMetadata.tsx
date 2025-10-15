import React from 'react';
import { cn } from '@/lib/utils';
import { Calendar, Users, Wrench } from 'lucide-react';

interface ProjectMetadataProps {
  role: string;
  duration: string;
  team?: string;
  tools: string[];
  tags: string[];
}

export function ProjectMetadata({ role, duration, team, tools, tags }: ProjectMetadataProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 py-8 border-y border-border/20">
      {/* Left: Metadata */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <Calendar className="w-4 h-4 text-emerald-500" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Duration</div>
            <div className="font-medium">{duration}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <Users className="w-4 h-4 text-emerald-500" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Role</div>
            <div className="font-medium">{role}</div>
          </div>
        </div>
        
        {team && (
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <Users className="w-4 h-4 text-emerald-500" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Team</div>
              <div className="font-medium">{team}</div>
            </div>
          </div>
        )}
      </div>
      
      {/* Right: Tools & Tags */}
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Wrench className="w-4 h-4 text-emerald-500" />
            <div className="text-sm text-muted-foreground">Tools Used</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-card/80 text-foreground text-xs rounded-full border border-border/40"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <div className="text-sm text-muted-foreground mb-3">Skills</div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full border border-emerald-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
