import { MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Clean Section Header without extra eyebrow badge */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-3">
              About Me
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Building practical AI systems, automation workflows, and full-stack software for real business operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Professional Portrait Image */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative group w-full max-w-sm">
                <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#0D111A] p-2 shadow-xl border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/20 transition-colors duration-200">
                  <div className="aspect-[3/4] w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-[#070A10] relative">
                    <img
                      src="/profile.png"
                      alt="Jenny Joseph K - AI Automation Engineer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/profile.png?v=" + Date.now();
                      }}
                    />
                    {/* Clean Location Tag */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span className="text-xs font-medium text-zinc-100">Bengaluru, India</span>
                      </div>
                      <span className="text-xs text-zinc-300 font-mono">DaveAI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Refined Professional Engineering Narrative */}
            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
              <div className="space-y-4 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <p>
                  I work as an <strong className="text-zinc-950 dark:text-white font-semibold">AI/ML Engineer & Full Stack Developer</strong> at <strong className="text-zinc-950 dark:text-white font-semibold">DaveAI</strong>, where I build AI-driven features and automation systems for real business workflows.
                </p>

                <p>
                  My work sits at the intersection of AI and software engineering. I specialize in taking core AI capabilities and architecting the complete system around them from context formulation and prompt logic to structured JSON schemas, validation gates, backend APIs, and intuitive user experiences.
                </p>

                <p>
                  At DaveAI, my engineering contributions include building generative campaign strategy wizards, multilingual content localization pipelines, WhatsApp Business API template automation, and the <strong className="text-zinc-950 dark:text-white font-semibold">AutoEngage Syncer Suite</strong> - an operations platform built from scratch that automated dual-export merging and transcript validation, cutting lead processing time from 50 minutes to under 5 minutes per 100 leads across 15+ automotive dealer networks.
                </p>

                <p>
                  I work primarily with <strong className="text-zinc-950 dark:text-white font-semibold">Python, TypeScript, Next.js, React, and REST APIs</strong>, focusing on Applied AI and building reliable full-stack software that delivers genuine operational value.
                </p>

                <div className="pt-3 border-t border-zinc-200 dark:border-white/[0.06] text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-white/[0.04] text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-white/[0.08] font-semibold">
                    MCA (AI/ML)
                  </span>
                  <span>Lovely Professional University • Artificial Intelligence & Machine Learning</span>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 pt-1">
                <MapPin className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
