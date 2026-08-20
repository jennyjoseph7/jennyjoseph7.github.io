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
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                      Campaign Intelligence Platform
                    </span>
                  </div>

                  <div className="inline-flex p-0.5 rounded-lg bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.06]">
                    <button
                      onClick={() => setActiveTabWizard("stages")}
                      className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                        activeTabWizard === "stages"
                          ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs font-semibold"
                          : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
                      }`}
                    >
                      5-Step Workflow
                    </button>
                    <button
                      onClick={() => setActiveTabWizard("metrics")}
                      className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                        activeTabWizard === "metrics"
                          ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs font-semibold"
                          : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
                      }`}
                    >
                      Impact & Metrics
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  AI Campaign Objective Platform
                </h3>

                {/* Highlight Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 text-xs font-medium">
                    95% Time Reduction (3-5d ➔ 3-5m)
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 text-xs font-medium">
                    10+ Indian Languages
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 text-xs font-medium">
                    0 PII Violations
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                  End-to-end AI platform taking dealership campaign briefs to auto-generate, translate into 10+ regional languages, enforce compliance, and deploy WhatsApp templates to Airtel & RML in under 3–5 minutes.
                </p>

                {/* Interactive Display Area */}
                {activeTabWizard === "stages" ? (
                  <div className="bg-zinc-100 dark:bg-[#070A10] p-4 rounded-xl border border-zinc-200 dark:border-white/[0.06] mb-5 space-y-2">
                    <div className="text-zinc-500 text-[11px] uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span className="font-semibold">Live Demo: 5 Pipeline Stages</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono font-semibold">3-5 MIN END-TO-END</span>
                    </div>

                    <div className="space-y-2">
                      {[
                        {
                          num: "01",
                          title: "Select Campaign Type",
                          desc: "Pre-Sales ➔ Test Drive Booking. System pre-configures CTAs, lead attributes, and conversation structures.",
                          tag: "Automated Setup",
                        },
                        {
                          num: "02",
                          title: "AI Brief Generation",
                          desc: "Natural language prompt triggers Gemini 3.5 Flash to populate 15 campaign parameters in seconds.",
                          tag: "Gemini 3.5 Flash",
                        },
                        {
                          num: "03",
                          title: "Micro-AI Refinement",
                          desc: "In-place single field regeneration preserving full context with zero form reset.",
                          tag: "Context Guard",
                        },
                        {
                          num: "04",
                          title: "10+ Language Translation",
                          desc: "Real-time native script rendering across Hindi, Tamil, Telugu, Kannada, etc. (no transliteration).",
                          tag: "Native Script",
                        },
                        {
                          num: "05",
                          title: "One-Click Submission",
                          desc: "Direct dispatch to Airtel & RML with background self-healing poller that auto-recovers rejections.",
                          tag: "Airtel / RML APIs",
                        },
                      ].map((stage, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-lg bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06] flex items-start gap-2.5 shadow-2xs"
                        >
                          <span className="w-5 h-5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {stage.num}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
                                {stage.title}
                              </h4>
                              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium shrink-0">
                                {stage.tag}
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed mt-0.5">
                              {stage.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-zinc-100 dark:bg-[#070A10] p-4 rounded-xl border border-zinc-200 dark:border-white/[0.06] mb-5">
                    <div className="text-zinc-500 text-[11px] uppercase tracking-wider mb-3 font-semibold">
                      Production Impact Benchmarks
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06]">
                        <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-mono mb-0.5">
                          95%
                        </div>
                        <div className="text-xs font-bold text-zinc-900 dark:text-white mb-1">Time Reduction</div>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-tight">
                          Campaign onboarding cut from 3–5 days to under 3–5 minutes.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06]">
                        <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono mb-0.5">
                          10+
                        </div>
                        <div className="text-xs font-bold text-zinc-900 dark:text-white mb-1">Languages</div>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-tight">
                          Native script AI translation across Indian regional languages.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06]">
                        <div className="text-2xl font-extrabold text-purple-600 dark:text-purple-400 font-mono mb-0.5">
                          0
                        </div>
                        <div className="text-xs font-bold text-zinc-900 dark:text-white mb-1">PII Violations</div>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-tight">
                          Built-in compliance engine enforces zero PII at generation time.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06]">
                        <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 font-mono mb-0.5">
                          3–5 min
                        </div>
                        <div className="text-xs font-bold text-zinc-900 dark:text-white mb-1">End-to-End</div>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-tight">
                          From natural language prompt to approved, deployed template.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Problem -> Built -> Impact */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex gap-2 items-start">
                    <span className="px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-[10px] font-semibold uppercase tracking-wider shrink-0 mt-0.5">Problem</span>
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Manual template writing took 3–5 days per campaign, required separate translation for 10+ languages, and suffered high rejection rates from formatting and PII violations.
                    </p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-[10px] font-semibold uppercase tracking-wider shrink-0 mt-0.5">Solution</span>
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      End-to-end AI platform taking dealership campaign briefs to auto-generate all 15 parameters via Gemini 3.5 Flash, translate into 10+ regional scripts, and deploy to Airtel & RML in 3–5 minutes.
                    </p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-semibold uppercase tracking-wider shrink-0 mt-0.5">Impact</span>
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      95% time reduction (from 3–5 days to 3–5 mins), zero PII violations, 10+ regional languages supported, and automated rejection self-healing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-5 border-t border-zinc-100 dark:border-white/[0.06] mt-5">
                {["Next.js", "TypeScript", "Gemini 3.5 Flash", "Airtel & RML APIs", "Tailwind CSS", "Python"].map((t, idx) => (
                  <span key={idx} className="tech-chip text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Showcase: AutoEngage Syncer Data & Intelligence Suite */}
            <div className="lg:col-span-5 bg-white dark:bg-[#0D111A] rounded-2xl border border-zinc-200 dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-200 shadow-sm">
              <div>
                {/* Clean Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-white/[0.06] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                      Operations Platform
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                    Live in Production
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  AutoEngage Syncer Suite
                </h3>

                {/* Highlight Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 text-xs font-medium">
                    Built from Scratch
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 text-xs font-medium">
                    10x Speedup (45m ➔ 4m)
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                  Built-from-scratch operations suite automating dual-export Master Sheet generation, LLM transcript validation, client DMS column remapping, dialer lead pacing, and audio archiving across 15+ dealer networks.
                </p>

                {/* Segmented Tab Bar - Full Width, No Scrollbar */}
                <div className="grid grid-cols-4 p-1 rounded-lg bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.06] mb-4">
                  {[
                    { id: "sync", label: "AI Sync" },
                    { id: "formatter", label: "DMS ETL" },
                    { id: "reattempt", label: "Re-Attempt" },
                    { id: "audio", label: "Audio Zip" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveSyncerTab(tab.id as any)}
                      className={`py-1.5 text-xs font-medium rounded-md transition-all text-center cursor-pointer ${
                        activeSyncerTab === tab.id
                          ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs font-semibold"
                          : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab 1: AI Disposition & Churn Sync */}
                {activeSyncerTab === "sync" && (
                  <div className="bg-zinc-100 dark:bg-[#070A10] p-4 rounded-xl border border-zinc-200 dark:border-white/[0.06] mb-5 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                      <span className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 font-semibold">
                        <Volume2 className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                        Call Audio & AI Disposition
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">10x FASTER</span>
                    </div>

                    {/* Clean Audio Waveform Visualizer */}
                    <div className="flex items-center gap-1 h-6 py-1 px-1">
                      {[8, 16, 12, 22, 10, 18, 24, 14, 20, 10, 16, 22, 8, 14, 20, 12, 18, 8].map((h, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-purple-500/40 dark:bg-purple-400/40 hover:bg-purple-500 rounded-full transition-all"
                          style={{ height: `${h}px` }}
                        ></div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {dispositionTags.slice(0, 5).map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/[0.08]">
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
                        <span className="text-emerald-500 font-semibold">Auto-Mapped</span>
                      </div>
                      <div className="text-[10px] text-zinc-600 dark:text-zinc-400 font-mono">
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
                      <span className="text-rose-500 font-mono font-bold">100 / BATCH</span>
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
                      <span className="text-amber-500 font-mono font-bold">AUTO-ARCHIVE</span>
                    </div>
                    <div className="p-2.5 rounded bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06] text-[11px] text-zinc-700 dark:text-zinc-300">
                      <p className="text-[10px] text-zinc-600 dark:text-zinc-400">
                        Filters Master Sheet ➔ resolves remote links ➔ auto-renames <code>phone_date</code> ➔ packages client-side JSZip archive.
                      </p>
                    </div>
                  </div>
                )}

                {/* Problem -> Built -> Impact */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex gap-2 items-start">
                    <span className="px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-[10px] font-semibold uppercase tracking-wider shrink-0 mt-0.5">Problem</span>
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      AutoEngage exported separate files. BAs had to manually listen to every call audio, edit dispositions, and merge columns by hand taking 45–50 mins per 100 leads.
                    </p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-[10px] font-semibold uppercase tracking-wider shrink-0 mt-0.5">Solution</span>
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      7-tool operations hub automating dual-file merging, batch LLM transcript validation, client DMS column mapping, and JSZip audio archiving.
                    </p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-semibold uppercase tracking-wider shrink-0 mt-0.5">Impact</span>
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Cut lead processing time from 45–50 mins to 4–5 mins per 100 leads (10x speedup); used daily in production across 15+ dealership networks.
                    </p>
                  </div>
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
