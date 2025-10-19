import React from 'react';

export function ArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <img 
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop" 
        alt="System Architecture Diagram showing UXProbe's component interactions" 
        className="w-full rounded-lg border border-border/20"
      />
      <div className="mt-4 text-sm text-muted-foreground space-y-2">
        <p><strong>Frontend:</strong> React with TypeScript handles the user interface and state management</p>
        <p><strong>Backend:</strong> Edge Functions process AI requests and manage data operations</p>
        <p><strong>Database:</strong> PostgreSQL with Row Level Security stores user data securely</p>
        <p><strong>AI Layer:</strong> Lovable AI Gateway routes requests to appropriate Gemini models based on task complexity</p>
      </div>
    </div>
  );
}
