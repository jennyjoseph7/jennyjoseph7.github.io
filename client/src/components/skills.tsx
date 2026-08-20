import { useState } from "react";
import { Cpu } from "lucide-react";

export function Skills() {
  const [activeDomain, setActiveDomain] = useState<string>("all");

  const domains = [
    { id: "all", label: "ALL TECH" },
    { id: "ai", label: "AI & AGENTS" },
    { id: "fullstack", label: "FULL STACK" },
    { id: "backend", label: "DATA & BACKEND" },
    { id: "devops", label: "DEVOPS & TOOLS" },
    { id: "integrations", label: "INTEGRATIONS" },
  ];

  const skillMatrix = [
    // AI & Agents
    { name: "Gemini 3.5 Flash", category: "ai", role: "LLM Reasoning & Extraction" },
    { name: "Azure GPT-4o", category: "ai", role: "Multi-modal Evaluation" },
    { name: "Structured JSON Schemas", category: "ai", role: "Deterministic Output Locking" },
    { name: "Prompt Hardening", category: "ai", role: "Zero-Hallucination Guardrails" },
    { name: "AI Agents", category: "ai", role: "Multi-Step Workflow Orchestration" },
    { name: "Intent Classification", category: "ai", role: "25+ Disposition Taxonomy" },
    { name: "Emotion Intelligence & NLP", category: "ai", role: "Dense Linguistic Processing" },
    
    // Full Stack
    { name: "Python", category: "fullstack", role: "Core Systems & AI Pipelines" },
    { name: "TypeScript", category: "fullstack", role: "Type-Safe Full Stack Applications" },
    { name: "Next.js (App Router)", category: "fullstack", role: "Production Web Applications" },
    { name: "React 18", category: "fullstack", role: "Reactive UI Systems & Custom Hooks" },
    { name: "Tailwind CSS", category: "fullstack", role: "Precision Design Systems" },
    { name: "Node.js & Express", category: "fullstack", role: "RESTful Backend Web Services" },
    { name: "Flask", category: "fullstack", role: "Python Microservices & APIs" },

    // Data & Backend
    { name: "PostgreSQL", category: "backend", role: "Relational Data Modeling" },
    { name: "Dealership DMS ETL", category: "backend", role: "Custom Schema Normalization" },
    { name: "JSZip & ArrayBuffers", category: "backend", role: "Client-Side Binary & Audio Packaging" },
    { name: "MySQL", category: "backend", role: "E-Commerce & Auth Persistence" },
    { name: "Drizzle ORM", category: "backend", role: "Type-Safe Schema Migrations" },
    { name: "Async Task Queues", category: "backend", role: "Background Transcript Ingestion" },
    { name: "SQLite", category: "backend", role: "Embedded Local Databases" },

    // DevOps & Tools
    { name: "Git & GitHub", category: "devops", role: "Version Control & Collaboration" },
    { name: "Linux (Ubuntu/Debian)", category: "devops", role: "Production Server Environments" },
    { name: "GitHub Actions (CI/CD)", category: "devops", role: "Automated Build & Deployment" },
    { name: "Vite", category: "devops", role: "Fast Module Bundling" },

    // Integrations
    { name: "Meta WhatsApp WABA API", category: "integrations", role: "Multi-Channel Communication" },
    { name: "LeadSquared CRM API", category: "integrations", role: "Lead Progression Webhooks" },
    { name: "REST API Route Proxies", category: "integrations", role: "Multi-Tenant Request Isolation" },
    { name: "Cookie-Based RBAC", category: "integrations", role: "Multi-Account Session Switching" },
  ];

  const filteredSkills = activeDomain === "all"
    ? skillMatrix
    : skillMatrix.filter((s) => s.category === activeDomain);

  return (
    <section id="skills" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Clean Section Header without extra eyebrow badge */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-3">
              Skills & Technical Matrix
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Technologies actively used in production systems, prompt pipelines, and full-stack software.
            </p>

            {/* Domain Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {domains.map((dom) => (
                <button
                  key={dom.id}
                  onClick={() => setActiveDomain(dom.id)}
                  className={`rounded-full px-4 py-1.5 text-xs font-mono font-medium transition-all cursor-pointer ${
                    activeDomain === dom.id
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 border border-zinc-900 dark:border-white font-semibold shadow-xs"
                      : "border border-zinc-300 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  {dom.label}
                </button>
              ))}
            </div>
          </div>

          {/* Clean High-End Matrix Box */}
          <div className="bg-white dark:bg-[#0D111A] rounded-2xl border border-zinc-200 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-5 border-b border-zinc-100 dark:border-white/[0.06] mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="font-mono text-xs text-zinc-800 dark:text-zinc-300 uppercase font-semibold">
                  DOMAIN: {activeDomain.toUpperCase()}
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-500">
                {filteredSkills.length} Technologies Indexed
              </span>
            </div>

            {/* High-Density Tech Chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {filteredSkills.map((skill, index) => (
                <div
                  key={index}
                  className="tech-chip text-xs sm:text-sm py-2 px-3.5 font-medium cursor-default"
                >
                  {skill.name}
                </div>
              ))}
            </div>

            {/* Architectural Role Breakdown */}
            <div className="pt-6 border-t border-zinc-100 dark:border-white/[0.06]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3.5 font-semibold">
                Production System Usage
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {filteredSkills.slice(0, 6).map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-zinc-50 dark:bg-[#070A10] border border-zinc-200 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono"
                  >
                    <span className="text-zinc-900 dark:text-white font-medium">{skill.name}</span>
                    <span className="text-zinc-500 dark:text-zinc-400 text-[11px] truncate ml-2">
                      {skill.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
