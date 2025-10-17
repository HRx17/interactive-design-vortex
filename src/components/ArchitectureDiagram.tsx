import React from 'react';

export function ArchitectureDiagram() {
  const mermaidCode = `graph TD
    A[User Interface] -->|User Input| B[React Frontend]
    B -->|API Request| C[Edge Functions]
    C -->|Authenticate| D[Supabase Auth]
    C -->|AI Request| E[Lovable AI Gateway]
    E -->|Route| F{Model Selection}
    F -->|Complex Analysis| G[Gemini 2.5 Pro]
    F -->|Balanced Tasks| H[Gemini 2.5 Flash]
    F -->|Simple Tasks| I[Gemini 2.5 Flash-Lite]
    G -->|Response| C
    H -->|Response| C
    I -->|Response| C
    C -->|Store Data| J[PostgreSQL]
    J -->|RLS Protection| K[(User Data)]
    C -->|Response| B
    B -->|Update UI| A
    
    style A fill:#10b981,stroke:#059669,color:#fff
    style B fill:#3b82f6,stroke:#2563eb,color:#fff
    style C fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style E fill:#f59e0b,stroke:#d97706,color:#fff
    style J fill:#ef4444,stroke:#dc2626,color:#fff`;

  return (
    <div className="w-full overflow-x-auto bg-muted/30 rounded-lg p-6">
      <div dangerouslySetInnerHTML={{ __html: `<lov-mermaid>${mermaidCode}</lov-mermaid>` }} />
    </div>
  );
}
