import { useState } from "react";
import { 
  Sparkles, 
  MessageSquare, 
  LineChart, 
  ExternalLink, 
  Github, 
  Volume2
} from "lucide-react";

export function Projects() {
  const [activeTabWizard, setActiveTabWizard] = useState<"pipeline" | "schema">("pipeline");

  const [activeSyncerTab, setActiveSyncerTab] = useState<"sync" | "formatter" | "reattempt" | "audio">("sync");

  const dispositionTags = [
    "Wrong Person", "Not Interested", "Interested",
    "Call Back Later", "Warm Lead", "Hot Lead",
    "Service Booked", "Insurance Renewal", "Lost to Third-Party Garage",
    "Spec Query", "Price Objection", "Test Drive Scheduled"
  ];

  return (
    <section id="work" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Clean Section Header without extra eyebrow badge */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-3">
              Featured Systems & Projects
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Production AI pipelines, automation wizards, and full-stack software systems.
            </p>
          </div>

          {/* Primary Top Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
            {/* Left Large Showcase: AI Campaign Objective Wizard */}
            <div className="lg:col-span-7 bg-white dark:bg-[#0D111A] rounded-2xl border border-zinc-200 dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-200 shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-white/[0.06] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="font-mono text-xs text-zinc-800 dark:text-zinc-300 font-semibold">
                      CAMPAIGN-GEN-01 // PRODUCTION
                    </span>
                  </div>

                  <div className="flex gap-1">
                    <button
                      onClick={() => setActiveTabWizard("pipeline")}
                      className={`px-2.5 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                        activeTabWizard === "pipeline"
                          ? "bg-zinc-900 text-white dark:bg-white/10 dark:text-white border border-zinc-900 dark:border-white/15"
                          : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                      }`}
                    >
                      Pipeline Flow
                    </button>
                    <button
                      onClick={() => setActiveTabWizard("schema")}
                      className={`px-2.5 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                        activeTabWizard === "schema"
                          ? "bg-zinc-900 text-white dark:bg-white/10 dark:text-white border border-zinc-900 dark:border-white/15"
                          : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                      }`}
                    >
                      JSON Schema
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  AI Campaign Objective Wizard
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
                  11-step generative campaign wizard with seed baseline prompt injection and 11-language automotive technical spec-locking.
                </p>

                {/* Interactive Display Area */}
                {activeTabWizard === "pipeline" ? (
                  <div className="bg-zinc-100 dark:bg-[#070A10] p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-white/[0.06] font-mono text-xs mb-5 space-y-3">
                    <div className="text-zinc-500 text-[11px] uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span>11-Stage Pipeline Workflow</span>
                      <span className="text-zinc-600 dark:text-zinc-400 font-mono">LATENCY: 180ms</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        "01. Grounded Seed", "02. Spec Injection", "03. Channel Map",
                        "04. Voice Logic", "05. WABA Template", "06. Spec-Lock (11 Lang)",
                        "07. Validation Gate", "08. CTA Resolver", "09. Live Preview",
                      ].map((step, idx) => (
                        <div
                          key={idx}
                          className="p-2 rounded bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06] text-zinc-800 dark:text-zinc-300 text-[11px] truncate flex items-center gap-1.5 shadow-xs"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-zinc-100 dark:bg-[#070A10] p-4 rounded-xl border border-zinc-200 dark:border-white/[0.06] font-mono text-[11px] text-blue-700 dark:text-blue-300 leading-relaxed mb-5 overflow-x-auto max-h-[160px]">
                    <pre>{`{
  "campaign": "AutoNgage_Service_Recall",
  "seedBaseline": { "is_master": true, "engine": "K15C", "features": ["AllGrip", "ABS"] },
  "localization": { "en_lock": true, "languages": 11, "fallback": "deterministic" }
}`}</pre>
                  </div>
                )}

                {/* Problem -> Built -> Impact */}
                <div className="space-y-2 text-xs">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <strong className="text-rose-600 dark:text-rose-400 font-mono text-[11px] uppercase mr-1">Problem:</strong>
                    Manual campaign drafting caused variable errors and corrupted vehicle specs during vernacular translation.
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <strong className="text-blue-600 dark:text-blue-400 font-mono text-[11px] uppercase mr-1">Built:</strong>
                    End-to-end configuration wizard with Gemini 3.1 translation engine and strict English spec overrides.
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <strong className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px] uppercase mr-1">Impact:</strong>
                    100% technical spec retention with automated multi-channel campaign dispatch.
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-5 border-t border-zinc-100 dark:border-white/[0.06] mt-5">
                {["Next.js", "TypeScript", "Gemini 3.5 Flash", "PostgreSQL", "Tailwind CSS"].map((t, idx) => (
                  <span key={idx} className="tech-chip text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Showcase: AutoEngage Syncer Data & Intelligence Suite */}
            <div className="lg:col-span-5 bg-white dark:bg-[#0D111A] rounded-2xl border border-zinc-200 dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-200 shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-white/[0.06] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="font-mono text-xs text-zinc-800 dark:text-zinc-300 font-semibold">
                      SYNCER-SUITE-02 // PRODUCTION
                    </span>
                  </div>
                  <div className="flex gap-1 overflow-x-auto">
                    {[
                      { id: "sync", label: "AI Sync" },
                      { id: "formatter", label: "DMS ETL" },
                      { id: "reattempt", label: "Re-Attempt" },
                      { id: "audio", label: "Audio Zip" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveSyncerTab(tab.id as any)}
                        className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors cursor-pointer whitespace-nowrap ${
                          activeSyncerTab === tab.id
                            ? "bg-zinc-900 text-white dark:bg-white/10 dark:text-white border border-zinc-900 dark:border-white/15"
                            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                  AutoEngage Syncer Suite
                </h3>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 text-[10px] font-mono font-medium mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                  Built from Scratch // 10x Speedup (45-50m ➔ 4-5m) // Live in Production
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
                  Built-from-scratch operations suite automating dual-export Master Sheet generation, LLM transcript validation, client DMS column remapping, dialer lead pacing, and audio archiving across 15+ dealer networks.
                </p>

                {/* Tab 1: AI Disposition & Churn Sync */}
                {activeSyncerTab === "sync" && (
                  <div className="bg-zinc-100 dark:bg-[#070A10] p-4 rounded-xl border border-zinc-200 dark:border-white/[0.06] mb-5 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                      <span className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
                        <Volume2 className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                        Pre & Post-Sales AI Sync
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">10x FASTER</span>
                    </div>

                    <div className="flex items-center gap-1 h-4 py-1">
                      {[10, 18, 14, 26, 12, 22, 32, 16, 28, 12, 20, 30, 10, 18, 26, 14, 22, 10].map((h, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-zinc-400 dark:bg-zinc-600 rounded-full"
                          style={{ height: `${h}px` }}
                        ></div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {dispositionTags.slice(0, 6).map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-white/[0.03] text-zinc-700 dark:text-zinc-400 border border-zinc-200 dark:border-white/[0.06]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 2: DMS Schema Formatter */}
                {activeSyncerTab === "formatter" && (
                  <div className="bg-zinc-100 dark:bg-[#070A10] p-4 rounded-xl border border-zinc-200 dark:border-white/[0.06] font-mono text-xs mb-5 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] text-zinc-500">
                      <span className="text-zinc-700 dark:text-zinc-300 font-semibold">Dealership DMS Formatter</span>
                      <span className="text-blue-600 dark:text-blue-400 font-mono">15-20m ➔ 4-5m</span>
                    </div>
                    <div className="p-2.5 rounded bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06] text-[11px] text-zinc-700 dark:text-zinc-300 space-y-1">
                      <div className="flex justify-between text-zinc-500">
                        <span>Dealer DMS: Bullmenn / Ambal / Mahindra</span>
                        <span className="text-emerald-500">Auto-Mapped</span>
                      </div>
                      <div className="text-[10px] text-zinc-600 dark:text-zinc-400">
                        <code>{'Chassis No -> vin_number | Service Due -> next_service_due'}</code>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Re-Attempt Filter */}
                {activeSyncerTab === "reattempt" && (
                  <div className="bg-zinc-100 dark:bg-[#070A10] p-4 rounded-xl border border-zinc-200 dark:border-white/[0.06] font-mono text-xs mb-5 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] text-zinc-500">
                      <span className="text-zinc-700 dark:text-zinc-300 font-semibold">Dialer Re-Attempt Optimizer</span>
                      <span className="text-rose-500 font-mono">100 / BATCH</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-300">
                        <span className="font-bold">Excluded:</span> DND, Converted, Wrong No.
                      </div>
                      <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                        <span className="font-bold">Queued Calls:</span> Callback, Voicemail
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 4: Audio Recording Pipeline */}
                {activeSyncerTab === "audio" && (
                  <div className="bg-zinc-100 dark:bg-[#070A10] p-4 rounded-xl border border-zinc-200 dark:border-white/[0.06] font-mono text-xs mb-5 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] text-zinc-500">
                      <span className="text-zinc-700 dark:text-zinc-300 font-semibold">Recording Renamer & JSZip</span>
                      <span className="text-amber-500 font-mono">AUTO-ARCHIVE</span>
                    </div>
                    <div className="p-2.5 rounded bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06] text-[11px] text-zinc-700 dark:text-zinc-300">
                      <p className="text-[10px] text-zinc-600 dark:text-zinc-400">
                        Filters Master Sheet $\rightarrow$ resolves remote links $\rightarrow$ auto-renames <code>phone_date</code> $\rightarrow$ packages client-side JSZip archive.
                      </p>
                    </div>
                  </div>
                )}

                {/* Problem -> Built -> Impact */}
                <div className="space-y-2 text-xs">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <strong className="text-rose-600 dark:text-rose-400 font-mono text-[11px] uppercase mr-1">Problem:</strong>
                    AutoEngage exported separate files. BAs had to manually listen to every call audio, edit dispositions, and merge columns by hand — taking 45–50 minutes per 100 leads.
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <strong className="text-blue-600 dark:text-blue-400 font-mono text-[11px] uppercase mr-1">Built:</strong>
                    7-tool operations hub automating dual-file merging, batch LLM transcript validation, client DMS column mapping, 100-batch dialer deduplication, and JSZip audio archiving.
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <strong className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px] uppercase mr-1">Impact:</strong>
                    Cut lead processing time from 45–50 mins to 4–5 mins per 100 leads (10x speedup); used daily in production across 15+ dealership networks.
                  </p>
                </div>
              </div>

              {/* Tech Stack & Live Repo Link */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-5 border-t border-zinc-100 dark:border-white/[0.06] mt-5">
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js", "TypeScript", "JSZip", "XLSX", "LLM Batch Engine", "Regex Taxonomy"].map((t, idx) => (
                    <span key={idx} className="tech-chip text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/jennyjoseph7/Mastersheetupdater"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors shrink-0"
                  aria-label="View Mastersheetupdater on GitHub"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub Repo</span>
                  <ExternalLink className="h-3 w-3 text-zinc-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Secondary Systems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "WhatsApp WABA Suite",
                badge: "Meta APIs",
                systemTag: "WABA-03",
                desc: "Interactive template creation with live variable token replacement and remote provider auto-submission.",
                tech: ["React", "Meta APIs", "Flask"],
              },
              {
                title: "Qualitative BI Dashboard",
                badge: "AI Insights",
                systemTag: "BI-04",
                desc: "Executive intelligence aggregating customer sentiment, lost deals, and competitor counter-strategies.",
                tech: ["React", "Gemini", "Proxies"],
              },
              {
                title: "MindWell",
                badge: "AI Healthcare",
                systemTag: "HEALTH-05",
                desc: "AI mental health companion with 11-category emotion intelligence and emergency triage intervention.",
                tech: ["Python", "Flask", "React", "NLP"],
                github: "https://github.com/jennyjoseph7/MindWell",
              },
              {
                title: "Friends Cafe Website",
                badge: "Full Stack",
                systemTag: "ECOMM-06",
                desc: "Online food ordering platform with real-time menu inventory tracking, MySQL, and OTP authentication.",
                tech: ["Next.js", "TypeScript", "MySQL"],
                github: "https://github.com/jennyjoseph7/friends_cafe",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0D111A] p-5 rounded-2xl border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/20 flex flex-col justify-between transition-all duration-200 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] text-zinc-500">{item.systemTag}</span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/[0.06]">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-1.5">{item.title}</h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                      aria-label={`View ${item.title} on GitHub`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
