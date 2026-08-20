import { useState } from "react";
import { Calendar, MapPin, Sparkles, Bot, Layers, MessageSquare, LineChart, ShieldCheck, CheckCircle2, Zap } from "lucide-react";

export function Experience() {
  const [activeDaveTab, setActiveDaveTab] = useState(0);

  const daveSystems = [
    {
      id: "campaign-wizard",
      title: "Generative Campaign Configuration Engine & Seed Baseline",
      tabLabel: "Campaign Engine",
      icon: Sparkles,
      metricBadge: "11-Step Wizard // 180ms Latency // 3 Campaign Families",
      problem: "Manual campaign drafting across 3 core automotive campaign families (Pre-Sales, Post-Sales, Dealership Events) was prone to prompt errors, broken variable mappings, and inconsistent conversational parameters.",
      architecture: [
        "11-step generative configuration wizard with grounded seed objective baseline injection (seedBaseline).",
        "Dynamic vehicle model spec resolution with real-time live preview rendering and English spec overrides.",
        "Deterministic JSON schema output validation enforcing strict type safety and eliminating LLM hallucinations.",
      ],
      built: "Architected an end-to-end 11-step configuration wizard with grounded seed prompt injection, dynamic model spec resolution, and real-time live preview rendering.",
      impact: "Accelerated campaign configuration from hours to under 2 minutes with 100% deterministic parameter enforcement across voice AI outbound agents and WhatsApp flows.",
      tech: ["Next.js App Router", "TypeScript", "React 19", "Gemini 3.5 Flash", "PostgreSQL", "Tailwind CSS"],
    },
    {
      id: "multilingual-ai",
      title: "Multilingual Spec-Lock Translation & Localization Engine",
      tabLabel: "Multilingual AI",
      icon: Bot,
      metricBadge: "11 Regional Indian Languages // 100% Spec Retention",
      problem: "Standard generative translation into Indian regional languages corrupted critical English technical vehicle specifications (e.g. AllGrip, ABS, K15C DualJet Engine, i-VTEC, Airbags), rendering dealer promotions inaccurate.",
      architecture: [
        "Formulated a localized Python translation pipeline using Gemini 3.1 Flash Lite with async worker registries.",
        "Engineered strict field-level override rules (spec-lock) that retain technical automotive specs, model trims, and pricing strictly in English while translating conversational copy into 11 regional Indian languages.",
        "Integrated deterministic error fallbacks and validation gates for dialect edge cases and regional phrasing variations.",
      ],
      built: "Formulated a localized translation pipeline in Python using Gemini 3.1 Flash Lite with strict field override rules that retain technical specs in English while translating conversational copy into 11 regional Indian languages.",
      impact: "Delivered 100% technical spec retention across 11 languages with zero translation hallucinations, enabling rapid multi-state regional dealership rollouts.",
      tech: ["Python 3.10", "Gemini 3.1 Flash Lite", "Async Task Registries", "FastAPI", "PostgreSQL"],
    },
    {
      id: "waba-automation",
      title: "Meta WhatsApp Business API (WABA) Template Automation Suite",
      tabLabel: "WhatsApp Suite",
      icon: MessageSquare,
      metricBadge: "Meta WABA APIs // Multi-Provider (Airtel & RML)",
      problem: "Manual WABA template creation suffered from high rejection rates due to formatting mistakes, invalid variable placeholder tokens ({{1}}, {{2}}), category mismatches, and disparate provider credential flows.",
      architecture: [
        "Built interactive template creation and auto-generation modals with live variable token insertion and CTA button builders.",
        "Implemented category mapping (MARKETING for pre-sales vs UTILITY for post-sales) and real-time boundary validation against Meta compliance rules.",
        "Unified multi-provider auto-submission across Airtel (API Token / WABA ID) and RML (Session Auth) into a single credential workflow.",
      ],
      built: "Built comprehensive template creation and auto-generation modals with live variable token insertion, boundary validators, CTA builders, and automated remote provider submission.",
      impact: "Reduced Meta template rejection rates by over 90% and automated multi-channel batch dispatch for active campaigns.",
      tech: ["React 19", "TypeScript", "Meta WABA APIs", "Python Flask", "RESTful Proxies"],
    },
    {
      id: "syncer-suite",
      title: "AutoEngage Syncer Operations & Telemetry Suite (Built from Scratch)",
      tabLabel: "Syncer Suite",
      icon: Layers,
      metricBadge: "10x Speedup (45-50m ➔ 4-5m) // 15+ Dealerships // Live in Prod",
      problem: "AutoEngage AI calls produced 2 separate exports (Audience/Leads + Sessions transcripts). Business Analysts had to manually listen to every audio recording, edit dispositions by hand, merge columns across spreadsheets, and build Zoho Master Sheets row-by-row — taking 45–50 minutes per 100 leads.",
      architecture: [
        "Pre & Post-Sales Sync: Ingests dual exports, runs batch LLM transcript validation across 25+ disposition taxonomy categories, and auto-generates completed Zoho Master Sheets with zero manual audio listening.",
        "Data Formatter: Normalizes messy client lead files with arbitrary column names into AutoEngage standard upload schemas with custom batch sizing in 4–5 minutes (down from 15–20 minutes).",
        "Re-Attempt Dialer Optimizer: Multi-day phone deduplication engine ranking latest call outcomes, filtering terminal states (DND, converted, wrong number), and exporting 100-batch callback queues (AE_LEADS_PER_BATCH = 100).",
        "Recording Renamer & JSZip: Parallel audio downloader resolving remote links, auto-formatting filenames with customer phone + call date, and bundling downloadable .zip archives via JSZip.",
        "Call Analysis & Executive BI: 1-click formatted WhatsApp & email report generator for Dealership GMs, plus qualitative BI with competitor 'How We Win' playbooks and 3rd-party garage leakage detection.",
      ],
      built: "Architected and built a 7-tool operational data suite from scratch (Syncer Suite / Mastersheetupdater) that automates dual-export merging, LLM transcript validation, DMS ETL formatting, dialer deduplication, and audio packaging.",
      impact: "Reduced lead processing time from 45–50 minutes down to 4–5 minutes per 100 leads (10x speedup); deployed live in production and used daily by all DaveAI Business Analysts across 15+ automotive dealer networks.",
      tech: ["Next.js App Router", "TypeScript", "JSZip", "XLSX ArrayBuffers", "Zoho CRM APIs", "FastAPI"],
    },
    {
      id: "call-analytics",
      title: "Speech Transcript Classification & Garage Churn Intelligence",
      tabLabel: "Call Analytics",
      icon: LineChart,
      metricBadge: "25+ Taxonomy Intents // Competitor Counter-Pitching",
      problem: "Dealerships processed thousands of unstructured phone audio logs without automated intent classification, lost-deal competitor analysis, or after-sales service churn visibility.",
      architecture: [
        "Built an executive qualitative BI engine and batch LLM processor classifying transcripts across 25+ disposition taxonomy categories.",
        "Built service churn detectors identifying lost-to-third-party garage defections and insurance renewal drop-offs.",
        "Synthesized competitor intelligence with mandatory 'How We Win' counter-pitch logic (rival offer -> counter-pitch -> win-back strategy).",
      ],
      built: "Developed batch transcript processing pipelines classifying call recordings across 25+ disposition categories, detecting service leakage, and synthesizing competitor intelligence without synthetic data.",
      impact: "Transformed raw phone audio logs into structured revenue recovery data, uncovering high-value service leakage and giving dealership managers actionable retention insights.",
      tech: ["Next.js", "TypeScript", "LLM Batch Engine", "Regex Taxonomy", "Chart.js", "BI Analytics"],
    },
    {
      id: "rbac-context",
      title: "Dual-Context Multi-Tenant RBAC & Session Isolation",
      tabLabel: "RBAC & Tooling",
      icon: ShieldCheck,
      metricBadge: "Cookie-Isolated RBAC // 1-Click Multi-Account Switch",
      problem: "Multi-brand dealership operators and internal DaveAI business analysts suffered frequent session collisions and high re-login overhead when switching between different dealership accounts and showroom regions.",
      architecture: [
        "Engineered dual-context RBAC in React context with cookie-isolated session tokens and automated auth header injection (authenticatedFetch).",
        "Implemented passwordless 1-click account switching across dozens of dealership profiles with zero token bleed.",
        "Built resilient API route proxies isolating multi-tenant requests and preventing cross-account data leaks.",
      ],
      built: "Engineered dual-context RBAC in React context with cookie isolation and password-less 1-click dealership switching.",
      impact: "Allowed enterprise operators to manage dozens of dealer accounts seamlessly with zero session collisions.",
      tech: ["React Context", "Cookie Isolation", "RBAC", "Next.js API Proxies", "Session Security"],
    },
  ];

  const currentSystem = daveSystems[activeDaveTab];
  const IconComponent = currentSystem.icon;

  return (
    <section id="experience" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Clean Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-3">
              Professional Experience
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Real engineering contributions, systems built, and operational impact in production environments.
            </p>
          </div>

          {/* Primary Experience: DaveAI */}
          <div className="bg-white dark:bg-[#0D111A] rounded-2xl border border-zinc-200 dark:border-white/[0.08] p-6 sm:p-8 mb-8 shadow-sm">
            {/* DaveAI Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-white/[0.06]">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center font-mono font-bold text-zinc-900 dark:text-white text-base shrink-0">
                  D
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                      DaveAI
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Active Role
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-300">
                    AI/ML Engineer & Full Stack Developer
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-500 dark:text-zinc-400 gap-1 self-start sm:self-auto">
                <span className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
                  <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                  Feb 2026 – Present
                </span>
                <span className="flex items-center gap-1.5 text-zinc-500">
                  <MapPin className="h-3.5 w-3.5" />
                  Bengaluru, Karnataka, India
                </span>
              </div>
            </div>

            {/* Sub-System Tabs */}
            <div className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
                  Core Engineering Modules Built
                </span>
                <span className="text-[11px] font-mono text-zinc-400">
                  {activeDaveTab + 1} of {daveSystems.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {daveSystems.map((sys, idx) => (
                  <button
                    key={sys.id}
                    onClick={() => setActiveDaveTab(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-2 ${
                      activeDaveTab === idx
                        ? "bg-zinc-900 text-white dark:bg-white/10 dark:text-white border border-zinc-900 dark:border-white/20 shadow-xs"
                        : "bg-zinc-100 dark:bg-[#070A10] border border-zinc-200 dark:border-white/[0.06] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-white/15"
                    }`}
                  >
                    <span className="text-zinc-400 dark:text-zinc-500">0{idx + 1}.</span>
                    <span>{sys.tabLabel}</span>
                  </button>
                ))}
              </div>

              {/* Active System Breakdown Card */}
              <div className="bg-zinc-50 dark:bg-[#070A10] rounded-xl border border-zinc-200 dark:border-white/[0.06] p-6 space-y-5">
                {/* Header with Title & Metric Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-200 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-zinc-200 dark:bg-white/[0.05] border border-zinc-300 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-zinc-300 shrink-0">
                      <IconComponent className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                      {currentSystem.title}
                    </h4>
                  </div>
                  <span className="self-start sm:self-auto text-[10px] font-mono font-medium px-2.5 py-1 rounded-md bg-zinc-200/70 dark:bg-white/[0.06] text-zinc-700 dark:text-zinc-300 border border-zinc-300/70 dark:border-white/10">
                    {currentSystem.metricBadge}
                  </span>
                </div>

                <div className="space-y-4 font-sans text-xs sm:text-sm">
                  {/* Problem */}
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 shrink-0 mt-0.5">
                      PROBLEM
                    </span>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {currentSystem.problem}
                    </p>
                  </div>

                  {/* Architecture & Implementation Highlights */}
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0 mt-0.5">
                      ARCHITECTURE
                    </span>
                    <div className="space-y-1.5 flex-1">
                      {currentSystem.architecture.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-zinc-800 dark:text-zinc-200">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                      IMPACT
                    </span>
                    <p className="text-emerald-700 dark:text-zinc-300 leading-relaxed font-medium">
                      {currentSystem.impact}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-zinc-200 dark:border-white/[0.06] flex flex-wrap items-center gap-1.5">
                  {currentSystem.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-chip text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Experience: MSsquare Technologies */}
          <div className="bg-white dark:bg-[#0D111A] rounded-2xl border border-zinc-200 dark:border-white/[0.08] p-6 sm:p-8 hover:border-zinc-300 dark:hover:border-white/20 transition-colors shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-white/[0.06]">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center font-mono font-bold text-zinc-900 dark:text-white text-base shrink-0">
                  M
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
                      MSsquare Technologies
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/[0.06] text-[10px] font-mono">
                      Completed
                    </span>
                  </div>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    Business Growth Analyst
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-500 dark:text-zinc-400 gap-1 self-start sm:self-auto">
                <span className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
                  <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                  Nov 2024 – Jan 2025
                </span>
                <span className="flex items-center gap-1.5 text-zinc-500">
                  <MapPin className="h-3.5 w-3.5" />
                  Bengaluru, India
                </span>
              </div>
            </div>

            <div className="pt-4 space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 shrink-0 mt-0.5">
                  PROBLEM
                </span>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Disjointed tracking of lead conversion progression and sales funnel operational visibility.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0 mt-0.5">
                  BUILT
                </span>
                <p className="text-zinc-800 dark:text-zinc-200 font-medium">
                  Structured data reporting workflows and operational dashboards to track conversion stages and eliminate process bottlenecks.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                  IMPACT
                </span>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Delivered actionable funnel visibility for business growth and operational decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
