import { useState } from "react";
import { Award, Building2, Briefcase, Database, Brain, BarChart3, ShieldCheck, Cpu } from "lucide-react";

export function Certifications() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const certifications = [
    {
      title: "AWS Solutions Architecture Job Simulation",
      provider: "Forage",
      date: "Nov 2025",
      category: "Job Simulations",
      topics: "System Architecture • Elastic Beanstalk • EC2 • RDS • S3",
      icon: Building2,
      code: "AWS-ARCH",
    },
    {
      title: "Accenture UK Developer and Technology Job Simulation",
      provider: "Forage",
      date: "Nov 2025",
      category: "Job Simulations",
      topics: "SDLC • Architecture • Agile Testing • Code Quality",
      icon: Briefcase,
      code: "ACCN-DEV",
    },
    {
      title: "Citi Technology Software Development Job Simulation",
      provider: "Forage",
      date: "Nov 2025",
      category: "Job Simulations",
      topics: "Software Systems • Backend Services • Data Flow",
      icon: Briefcase,
      code: "CITI-DEV",
    },
    {
      title: "Hewlett Packard Enterprise Software Engineering Job Simulation",
      provider: "Forage",
      date: "Nov 2025",
      category: "Job Simulations",
      topics: "Systems Engineering • REST APIs • Unit Testing",
      icon: Building2,
      code: "HPE-SWE",
    },
    {
      title: "J.P. Morgan Software Engineering Job Simulation",
      provider: "Forage",
      date: "Oct 2025",
      category: "Job Simulations",
      topics: "Kafka Streaming • Spring Boot • Financial Systems",
      icon: Briefcase,
      code: "JPMC-FINTECH",
    },
    {
      title: "Deloitte Australia Data Analytics Job Simulation",
      provider: "Forage",
      date: "Nov 2025",
      category: "Job Simulations",
      topics: "Data Analytics • Telemetry • Business Insights",
      icon: BarChart3,
      code: "DELOITTE-DATA",
    },
    {
      title: "Artificial Intelligence Analyst",
      provider: "Lovely Professional University",
      date: "May 2025",
      category: "AI & ML",
      topics: "AI Pipelines • Model Evaluation • Applied ML",
      icon: Brain,
      code: "LPU-AI-ANALYST",
    },
    {
      title: "Accelerating Deep Learning with GPU",
      provider: "Lovely Professional University",
      date: "Apr 2025",
      category: "AI & ML",
      topics: "GPU Acceleration • CUDA • Neural Network Training",
      icon: Cpu,
      code: "LPU-GPU-DL",
    },
    {
      title: "Big Data Architecture",
      provider: "Lovely Professional University",
      date: "Apr 2025",
      category: "Data & Systems",
      topics: "Data Architecture • Distributed Systems • Processing",
      icon: Database,
      code: "LPU-BIGDATA",
    },
    {
      title: "Business Intelligence",
      provider: "Lovely Professional University",
      date: "Jan 2025",
      category: "Data & Systems",
      topics: "BI Dashboards • Reporting • Data Modeling",
      icon: BarChart3,
      code: "LPU-BI",
    },
    {
      title: "Data Science 101",
      provider: "Lovely Professional University",
      date: "Jan 2025",
      category: "Data & Systems",
      topics: "Statistical Modeling • Data Wrangling • Analytics",
      icon: Database,
      code: "LPU-DS101",
    },
    {
      title: "Data Visualization with Python",
      provider: "Lovely Professional University",
      date: "Jan 2025",
      category: "Data & Systems",
      topics: "Matplotlib • Seaborn • Interactive Dashboards",
      icon: BarChart3,
      code: "LPU-DATAVIZ",
    },
    {
      title: "Machine Learning with Python",
      provider: "Lovely Professional University",
      date: "Jan 2025",
      category: "AI & ML",
      topics: "Scikit-Learn • Supervised & Unsupervised Learning",
      icon: Brain,
      code: "LPU-ML-PY",
    },
    {
      title: "Complete Ethical Hacking Bootcamp 2022: Zero to Mastery",
      provider: "Udemy",
      date: "Mar 2021",
      category: "Security",
      topics: "Network Security • Penetration Testing • Vulnerability Assessment",
      icon: ShieldCheck,
      code: "UDEMY-SEC",
    },
  ];

  const categories = [
    { id: "All", label: "All", count: certifications.length },
    { id: "Job Simulations", label: "Job Simulations", count: certifications.filter(c => c.category === "Job Simulations").length },
    { id: "AI & ML", label: "AI & Machine Learning", count: certifications.filter(c => c.category === "AI & ML").length },
    { id: "Data & Systems", label: "Data & Systems", count: certifications.filter(c => c.category === "Data & Systems").length },
    { id: "Security", label: "Security", count: certifications.filter(c => c.category === "Security").length },
  ];

  const filteredCerts = activeCategory === "All" 
    ? certifications 
    : certifications.filter(c => c.category === activeCategory);

  return (
    <section id="certifications" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-3">
              Certifications & Technical Training
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Industry software engineering simulations, solutions architecture programs, and applied AI specializations.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-xs"
                    : "bg-white dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/20"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeCategory === cat.id
                    ? "bg-zinc-700 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-800"
                    : "bg-zinc-100 dark:bg-white/[0.06] text-zinc-500"
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredCerts.map((cert, index) => {
              const IconComponent = cert.icon;

              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#0D111A] p-5 rounded-2xl border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-100 dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/[0.06]">
                        {cert.code}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500 font-medium">
                        {cert.date}
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 mb-2">
                      <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 shrink-0 mt-0.5">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-zinc-900 dark:text-white leading-snug">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium mt-0.5">
                          {cert.provider}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] font-mono text-zinc-500 pt-3 border-t border-zinc-100 dark:border-white/[0.06] mt-3">
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
