import { useState, useEffect } from "react";
import { ArrowRight, Download, Github, Linkedin, Play, Pause, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const terminalLogs = [
    { type: "cmd", text: "ai-agent --run pipeline --env production" },
    { type: "info", text: "[08:20:14] Initializing Campaign Objective Engine..." },
    { type: "success", text: "✓ Grounded seed baseline injected (is_master: true)" },
    { type: "info", text: "[08:20:15] Running 11-language automotive spec-lock translation..." },
    { type: "success", text: "✓ Specs locked in EN (ABS, AllGrip, K-Series) • Vernacular localized" },
    { type: "info", text: "[08:20:16] Validating WhatsApp WABA variables {{1}}, {{2}} & CTA buttons..." },
    { type: "success", text: "✓ WABA template validated • 0 formatting errors" },
    { type: "info", text: "[08:20:17] Syncing call transcript disposition classifier (25+ tags)..." },
    { type: "success", text: "✓ Status: 200 OK • Batch latency: 142ms • System Operational" },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < terminalLogs.length - 1 ? prev + 1 : prev));
    }, 850);

    return () => clearInterval(interval);
  }, [isPaused, terminalLogs.length]);

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResetTerminal = () => {
    setActiveStep(0);
  };

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-20 pb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Top Kicker / Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/70 dark:bg-white/[0.06] border border-zinc-300 dark:border-white/10 text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-3.5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Jenny Joseph K · Software & AI Automation Engineer</span>
          </div>

          {/* Display Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-3.5 leading-tight">
            AI Automation & Full-Stack Systems
          </h1>

          {/* Single Concise Supporting Text */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-6">
            Engineering practical LLM agent pipelines, automated enterprise workflows, and reliable web applications.
          </p>

          {/* Terminal Console */}
          <div className="max-w-2xl mx-auto rounded-xl overflow-hidden border border-zinc-300 dark:border-white/10 bg-[#0B0F17] text-left transition-all duration-200 mb-8 shadow-2xl">
            {/* Terminal Header */}
            <div className="px-4 py-2.5 bg-[#0F1420] border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block"></span>
                <span className="text-xs font-mono text-zinc-400 ml-2 font-medium">
                  agent-orchestrator.ts — production
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="text-zinc-400 hover:text-white text-xs p-1 transition-colors cursor-pointer"
                  title={isPaused ? "Resume" : "Pause"}
                >
                  {isPaused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
                </button>
                <button
                  onClick={handleResetTerminal}
                  className="text-zinc-400 hover:text-white text-xs p-1 transition-colors cursor-pointer"
                  title="Re-run"
                >
                  <RefreshCw className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-3.5 sm:p-4 font-mono text-xs sm:text-[13px] leading-relaxed space-y-1.5 min-h-[190px] max-h-[220px] overflow-y-auto bg-[#070A10] text-zinc-300">
              {terminalLogs.slice(0, activeStep + 1).map((log, idx) => {
                if (log.type === "cmd") {
                  return (
                    <div key={idx} className="text-blue-400 flex items-center gap-1.5 font-semibold pb-1">
                      <span>$</span>
                      <span>{log.text}</span>
                    </div>
                  );
                }
                if (log.type === "success") {
                  return (
                    <div key={idx} className="text-emerald-400 flex items-center gap-1.5 pl-2">
                      <span>{log.text}</span>
                    </div>
                  );
                }
                return (
                  <div key={idx} className="text-zinc-400 pl-2">
                    {log.text}
                  </div>
                );
              })}

              {activeStep < terminalLogs.length - 1 && (
                <div className="inline-block terminal-cursor"></div>
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              onClick={() => scrollToSection("#work")}
              className="w-full sm:w-auto bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 px-6 h-11 rounded-xl font-semibold transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer text-sm shadow-md"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="w-full sm:w-auto px-5 h-11 rounded-xl font-medium transition-all duration-150 border-zinc-300 dark:border-white/10 bg-white dark:bg-white/[0.04] hover:bg-zinc-100 dark:hover:bg-white/[0.08] text-sm text-zinc-800 dark:text-zinc-200 shadow-sm"
              asChild
            >
              <a
                href="/resume.pdf"
                download="Jenny_Joseph_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4 text-zinc-500" />
                Resume (PDF)
              </a>
            </Button>

            <div className="flex gap-2">
              <Button
                variant="outline"
                asChild
                className="px-3.5 h-11 rounded-xl border-zinc-300 dark:border-white/10 bg-white dark:bg-white/[0.04] hover:bg-zinc-100 dark:hover:bg-white/[0.08] text-zinc-700 dark:text-zinc-300 shadow-sm"
              >
                <a
                  href="https://github.com/jennyjoseph7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>

              <Button
                variant="outline"
                asChild
                className="px-3.5 h-11 rounded-xl border-zinc-300 dark:border-white/10 bg-white dark:bg-white/[0.04] hover:bg-zinc-100 dark:hover:bg-white/[0.08] text-zinc-700 dark:text-zinc-300 shadow-sm"
              >
                <a
                  href="https://www.linkedin.com/in/jenny-joseph-k-b6a50a230"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
