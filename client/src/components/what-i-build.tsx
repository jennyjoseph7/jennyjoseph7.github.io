import { Bot, Workflow, Layers, LineChart, CheckCircle2 } from "lucide-react";

export function WhatIBuild() {
  const pillars = [
    {
      icon: Bot,
      title: "AI Automation",
      badge: "LLM Pipelines",
      description:
        "Automating complex business workflows with hardened LLM prompts, structured outputs, and zero-spec-loss translation.",
      highlights: [
        "JSON schema prompt enforcement",
        "11-language automotive localization",
        "Deterministic error fallbacks",
      ],
    },
    {
      icon: Workflow,
      title: "Agentic Workflows",
      badge: "Decision Logic",
      description:
        "Building multi-step agents that interpret user intent, validate parameters, and orchestrate actions across APIs.",
      highlights: [
        "11-step generative campaign wizard",
        "Seed baseline prompt injection",
        "25+ call disposition classification",
      ],
    },
    {
      icon: Layers,
      title: "Full Stack Systems",
      badge: "Web Applications",
      description:
        "Designing responsive Next.js/React applications, high-throughput APIs, task registries, and database schemas.",
      highlights: [
        "Next.js App Router & TypeScript",
        "Dealership DMS ETL & schema normalizer",
        "Dual-context multi-tenant RBAC",
      ],
    },
    {
      icon: LineChart,
      title: "Data & Operations",
      badge: "BI & Telemetry",
      description:
        "Transforming unstructured audio transcripts and event streams into structured business intelligence dashboards.",
      highlights: [
        "10x faster lead sync (45-50m ➔ 4-5m)",
        "Multi-day lead deduplication (100/batch)",
        "3rd-party garage leakage recovery",
      ],
    },
  ];

  return (
    <section id="what-i-build" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-3">
              What I Build
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Connecting modern AI capabilities with full stack engineering to build reliable, high-throughput systems.
            </p>
          </div>

          {/* 4 Professional Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;

              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#0D111A] p-6 rounded-2xl border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-200 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    {/* Top Icon & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-zinc-200">
                        <IconComponent className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/[0.06]">
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2 tracking-tight">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-4 border-t border-zinc-100 dark:border-white/[0.06]">
                    {pillar.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
