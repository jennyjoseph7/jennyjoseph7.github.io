import { useState, useMemo } from "react";
import { 
  Building2, 
  Briefcase, 
  Database, 
  Brain, 
  BarChart3, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2,
  Search,
  Award
} from "lucide-react";

export function Certifications() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const certifications = [
    {
      title: "AWS Solutions Architecture Job Simulation",
      provider: "Forage",
      date: "Nov 2025",
      category: "Job Simulations",
      skills: ["System Architecture", "Elastic Beanstalk", "EC2", "RDS", "S3"],
      icon: Building2,
      code: "AWS-ARCH",
      accent: {
        bg: "bg-amber-500/10 dark:bg-amber-500/[0.08]",
        text: "text-amber-600 dark:text-amber-400",
        border: "border-amber-500/20",
        hoverBorder: "hover:border-amber-500/40",
      },
    },
    {
      title: "Accenture UK Developer and Technology Job Simulation",
      provider: "Forage",
      date: "Nov 2025",
      category: "Job Simulations",
      skills: ["SDLC", "System Architecture", "Agile Testing", "Code Quality"],
      icon: Briefcase,
      code: "ACCN-DEV",
      accent: {
        bg: "bg-purple-500/10 dark:bg-purple-500/[0.08]",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-500/20",
        hoverBorder: "hover:border-purple-500/40",
      },
    },
    {
      title: "Citi Technology Software Development Job Simulation",
      provider: "Forage",
      date: "Nov 2025",
      category: "Job Simulations",
      skills: ["Software Systems", "Backend Services", "Data Flow", "REST"],
      icon: Briefcase,
      code: "CITI-DEV",
      accent: {
        bg: "bg-cyan-500/10 dark:bg-cyan-500/[0.08]",
        text: "text-cyan-600 dark:text-cyan-400",
        border: "border-cyan-500/20",
        hoverBorder: "hover:border-cyan-500/40",
      },
    },
    {
      title: "Hewlett Packard Enterprise Software Engineering Job Simulation",
      provider: "Forage",
      date: "Nov 2025",
      category: "Job Simulations",
      skills: ["Systems Engineering", "REST APIs", "Unit Testing", "Microservices"],
      icon: Building2,
      code: "HPE-SWE",
      accent: {
        bg: "bg-emerald-500/10 dark:bg-emerald-500/[0.08]",
        text: "text-emerald-600 dark:text-emerald-400",
        border: "border-emerald-500/20",
        hoverBorder: "hover:border-emerald-500/40",
      },
    },
    {
      title: "J.P. Morgan Software Engineering Job Simulation",
      provider: "Forage",
      date: "Oct 2025",
      category: "Job Simulations",
      skills: ["Kafka Streaming", "Spring Boot", "Financial Systems", "Data Feeds"],
      icon: Briefcase,
      code: "JPMC-FINTECH",
      accent: {
        bg: "bg-blue-500/10 dark:bg-blue-500/[0.08]",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-500/20",
        hoverBorder: "hover:border-blue-500/40",
      },
    },
    {
      title: "Deloitte Australia Data Analytics Job Simulation",
      provider: "Forage",
      date: "Nov 2025",
      category: "Job Simulations",
      skills: ["Data Analytics", "Telemetry", "Business Insights", "Tableau"],
      icon: BarChart3,
      code: "DELOITTE-DATA",
      accent: {
        bg: "bg-teal-500/10 dark:bg-teal-500/[0.08]",
        text: "text-teal-600 dark:text-teal-400",
        border: "border-teal-500/20",
        hoverBorder: "hover:border-teal-500/40",
      },
    },
    {
      title: "Artificial Intelligence Analyst",
      provider: "Lovely Professional University",
      date: "May 2025",
      category: "AI & ML",
      skills: ["AI Pipelines", "Model Evaluation", "Applied ML", "Validation"],
      icon: Brain,
      code: "LPU-AI-ANALYST",
      accent: {
        bg: "bg-violet-500/10 dark:bg-violet-500/[0.08]",
        text: "text-violet-600 dark:text-violet-400",
        border: "border-violet-500/20",
        hoverBorder: "hover:border-violet-500/40",
      },
    },
    {
      title: "Accelerating Deep Learning with GPU",
      provider: "Lovely Professional University",
      date: "Apr 2025",
      category: "AI & ML",
      skills: ["GPU Acceleration", "CUDA", "Neural Network Training", "PyTorch"],
      icon: Cpu,
      code: "LPU-GPU-DL",
      accent: {
        bg: "bg-indigo-500/10 dark:bg-indigo-500/[0.08]",
        text: "text-indigo-600 dark:text-indigo-400",
        border: "border-indigo-500/20",
        hoverBorder: "hover:border-indigo-500/40",
      },
    },
    {
      title: "Big Data Architecture",
      provider: "Lovely Professional University",
      date: "Apr 2025",
      category: "Data & Systems",
      skills: ["Data Architecture", "Distributed Systems", "ETL", "Hadoop"],
      icon: Database,
      code: "LPU-BIGDATA",
      accent: {
        bg: "bg-sky-500/10 dark:bg-sky-500/[0.08]",
        text: "text-sky-600 dark:text-sky-400",
        border: "border-sky-500/20",
        hoverBorder: "hover:border-sky-500/40",
      },
    },
    {
      title: "Business Intelligence",
      provider: "Lovely Professional University",
      date: "Jan 2025",
      category: "Data & Systems",
      skills: ["BI Dashboards", "Reporting", "Data Modeling", "SQL"],
      icon: BarChart3,
      code: "LPU-BI",
      accent: {
        bg: "bg-emerald-500/10 dark:bg-emerald-500/[0.08]",
        text: "text-emerald-600 dark:text-emerald-400",
        border: "border-emerald-500/20",
        hoverBorder: "hover:border-emerald-500/40",
      },
    },
    {
      title: "Data Science 101",
      provider: "Lovely Professional University",
      date: "Jan 2025",
      category: "Data & Systems",
      skills: ["Statistical Modeling", "Data Wrangling", "Analytics", "EDA"],
      icon: Database,
      code: "LPU-DS101",
      accent: {
        bg: "bg-cyan-500/10 dark:bg-cyan-500/[0.08]",
        text: "text-cyan-600 dark:text-cyan-400",
        border: "border-cyan-500/20",
        hoverBorder: "hover:border-cyan-500/40",
      },
    },
    {
      title: "Data Visualization with Python",
      provider: "Lovely Professional University",
      date: "Jan 2025",
      category: "Data & Systems",
      skills: ["Matplotlib", "Seaborn", "Interactive Dashboards", "Charts"],
      icon: BarChart3,
      code: "LPU-DATAVIZ",
      accent: {
        bg: "bg-amber-500/10 dark:bg-amber-500/[0.08]",
        text: "text-amber-600 dark:text-amber-400",
        border: "border-amber-500/20",
        hoverBorder: "hover:border-amber-500/40",
      },
    },
    {
      title: "Machine Learning with Python",
      provider: "Lovely Professional University",
      date: "Jan 2025",
      category: "AI & ML",
      skills: ["Scikit-Learn", "Supervised Learning", "Classification", "Regression"],
      icon: Brain,
      code: "LPU-ML-PY",
      accent: {
        bg: "bg-violet-500/10 dark:bg-violet-500/[0.08]",
        text: "text-violet-600 dark:text-violet-400",
        border: "border-violet-500/20",
        hoverBorder: "hover:border-violet-500/40",
      },
    },
    {
      title: "Complete Ethical Hacking Bootcamp 2022: Zero to Mastery",
      provider: "Udemy",
      date: "Mar 2021",
      category: "Security",
      skills: ["Network Security", "Penetration Testing", "Vulnerability Assessment", "Linux"],
      icon: ShieldCheck,
      code: "UDEMY-SEC",
      accent: {
        bg: "bg-rose-500/10 dark:bg-rose-500/[0.08]",
        text: "text-rose-600 dark:text-rose-400",
        border: "border-rose-500/20",
        hoverBorder: "hover:border-rose-500/40",
      },
    },
  ];

  const categories = [
    { id: "All", label: "All", count: certifications.length },
    { id: "Job Simulations", label: "Job Simulations", count: certifications.filter(c => c.category === "Job Simulations").length },
    { id: "AI & ML", label: "AI & Machine Learning", count: certifications.filter(c => c.category === "AI & ML").length },
    { id: "Data & Systems", label: "Data & Systems", count: certifications.filter(c => c.category === "Data & Systems").length },
    { id: "Security", label: "Security", count: certifications.filter(c => c.category === "Security").length },
  ];

  const filteredCerts = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesCategory = activeCategory === "All" || cert.category === activeCategory;
      const matchesSearch = searchQuery.trim() === "" || 
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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
              Industry software simulations, solutions architecture credentials, and applied AI specializations.
            </p>
          </div>

          {/* Controls: Search & Category Filter Pills */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-1.5 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
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

            {/* Live Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills, providers..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-full bg-white dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 dark:focus:border-white/30 transition-colors shadow-2xs"
              />
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredCerts.map((cert, index) => {
              const IconComponent = cert.icon;

              return (
                <div
                  key={index}
                  className={`group bg-white dark:bg-[#0D111A] p-5 rounded-2xl border border-zinc-200 dark:border-white/[0.08] ${cert.accent.hoverBorder} hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between relative overflow-hidden`}
                >
                  {/* Subtle Accent Glow Corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 ${cert.accent.bg} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity`} />

                  <div>
                    {/* Top Row: Code Pill & Verified Status */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded ${cert.accent.bg} ${cert.accent.text} border ${cert.accent.border}`}>
                        {cert.code}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/[0.08] px-2 py-0.5 rounded-full border border-emerald-500/20 font-medium">
                          <CheckCircle2 className="h-2.5 w-2.5" />
                          <span>Verified</span>
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400">
                          {cert.date}
                        </span>
                      </div>
                    </div>

                    {/* Middle: Icon + Title + Provider */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 rounded-xl ${cert.accent.bg} ${cert.accent.text} shrink-0 mt-0.5 border ${cert.accent.border}`}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
                          {cert.provider}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Skill Chips */}
                  <div className="pt-3 border-t border-zinc-100 dark:border-white/[0.06] mt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-white/[0.04]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCerts.length === 0 && (
            <div className="text-center py-12 text-zinc-500 text-sm font-mono">
              No certifications found matching "{searchQuery}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
