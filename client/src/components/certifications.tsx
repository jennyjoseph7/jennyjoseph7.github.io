import { Award, Building2, Briefcase, Database, Brain, BarChart3 } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "AWS Solutions Architecture Job Simulation",
      provider: "Forage",
      date: "NOV 2025",
      topics: "System Architecture • Elastic Beanstalk • EC2 • RDS • S3",
      icon: Building2,
      code: "AWS-ARCH",
    },
    {
      title: "J.P. Morgan Software Engineering Simulation",
      provider: "Forage",
      date: "OCT 2025",
      topics: "Kafka Streaming • Spring Boot • Real-time Transactions",
      icon: Briefcase,
      code: "JPMC-FINTECH",
    },
    {
      title: "Accenture UK Developer Simulation",
      provider: "Forage",
      date: "NOV 2025",
      topics: "SDLC • Software QA • Code Debugging • Agile Testing",
      icon: Briefcase,
      code: "ACCN-DEV",
    },
    {
      title: "Artificial Intelligence Analyst",
      provider: "Lovely Professional University",
      date: "MAY 2025",
      topics: "Machine Learning • Model Evaluation • Data Pipelines",
      icon: Brain,
      code: "LPU-AI-ANALYST",
    },
    {
      title: "Big Data Architecture",
      provider: "Lovely Professional University",
      date: "APR 2025",
      topics: "Data Architecture • Distributed Systems • Processing",
      icon: Database,
      code: "LPU-BIGDATA",
    },
    {
      title: "Business Intelligence & Data Analysis",
      provider: "Lovely Professional University",
      date: "JAN 2025",
      topics: "Business Intelligence • Telemetry • Analytics",
      icon: BarChart3,
      code: "LPU-BI-ANALYTICS",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Clean Section Header without extra eyebrow badge */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-2">
              Certifications & Technical Training
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Engineering simulations, solutions architecture programs, and specialized academic certifications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;

              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#0D111A] p-5 rounded-2xl border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-200 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-100 dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/[0.06]">
                        {cert.code}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium mb-3">
                      {cert.provider}
                    </p>
                  </div>

                  <p className="text-[11px] font-mono text-zinc-500 pt-3 border-t border-zinc-100 dark:border-white/[0.06]">
                    {cert.topics}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
