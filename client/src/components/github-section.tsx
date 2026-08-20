import { Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GitHubSection() {
  const repositories = [
    {
      name: "Mastersheetupdater",
      description:
        "Production data sync, DMS schema normalizer, dialer deduplication, and audio pipeline suite actively used by DaveAI BA and operations teams across 15+ automotive dealerships.",
      language: "Next.js / TypeScript",
      langColor: "bg-purple-500",
      url: "https://github.com/jennyjoseph7/Mastersheetupdater",
      topics: ["Next.js", "TypeScript", "JSZip", "XLSX", "Lead Ops", "Dealership ETL"],
      tag: "v1.0 // LIVE IN PROD",
    },
    {
      name: "MindWell",
      description:
        "AI-first mental health platform with 11-category emotion intelligence, crisis detection, and India-specific helpline triage.",
      language: "Python / React",
      langColor: "bg-purple-500",
      url: "https://github.com/jennyjoseph7/MindWell",
      topics: ["AI", "NLP", "Emotion Detection", "Flask", "React"],
      tag: "v1.2 // PUBLIC",
    },
    {
      name: "Friends Cafe",
      description:
        "Complete online ordering platform with Next.js, TypeScript, MySQL persistence, real-time inventory tracking, and OTP authentication.",
      language: "TypeScript",
      langColor: "bg-blue-500",
      url: "https://github.com/jennyjoseph7/friends_cafe",
      topics: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
      tag: "MAIN // STABLE",
    },
    {
      name: "Portfolio",
      description:
        "Modern AI engineer & full-stack portfolio showcasing interactive production architectures, the AutoEngage Syncer suite, and live CI/CD pipeline.",
      language: "TypeScript",
      langColor: "bg-cyan-500",
      url: "https://github.com/jennyjoseph7/jennyjoseph7.github.io",
      topics: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "CI/CD"],
      tag: "v2.0 // LATEST PROD",
    },
  ];

  return (
    <section className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Clean Section Header without extra eyebrow badge */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-2">
                GitHub & Engineering Activity
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
                Explore open source repositories, application architectures, and code samples on GitHub.
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="self-start md:self-auto border-zinc-300 dark:border-white/10 bg-white dark:bg-white/[0.04] hover:bg-zinc-100 dark:hover:bg-white/[0.08] gap-2 text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200 shadow-sm"
            >
              <a
                href="https://github.com/jennyjoseph7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                @jennyjoseph7 on GitHub
                <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
              </a>
            </Button>
          </div>

          {/* Repo Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {repositories.map((repo, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0D111A] border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/20 p-6 rounded-2xl flex flex-col justify-between transition-all duration-200 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-zinc-100 dark:border-white/[0.06]">
                    <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-semibold text-sm font-mono">
                      <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span className="truncate">{repo.name}</span>
                    </div>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                      aria-label={`View ${repo.name} on GitHub`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <span className="text-[10px] font-mono text-zinc-500 block mb-3">
                    {repo.tag}
                  </span>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {repo.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 font-mono border border-zinc-200 dark:border-white/[0.06]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 pt-3 border-t border-zinc-100 dark:border-white/[0.06]">
                    <span className={`w-2 h-2 rounded-full ${repo.langColor}`}></span>
                    <span className="font-mono text-xs text-zinc-800 dark:text-zinc-300">{repo.language}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
