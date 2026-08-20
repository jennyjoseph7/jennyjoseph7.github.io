import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      specialization: "Artificial Intelligence & Machine Learning",
      institution: "Lovely Professional University, Punjab",
      period: "January 2023 – December 2025",
      code: "DEGREE-MCA",
      status: "Graduated",
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      specialization: "Computer Science & Software Development",
      institution: "Acharya Institute, Bangalore",
      period: "January 2020 – December 2023",
      code: "DEGREE-BCA",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Clean Section Header without extra eyebrow badge */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-2">
              Education & Degrees
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Formal computer science education focusing on AI systems, algorithms, and system design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#0D111A] p-6 rounded-2xl border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-200 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/[0.06] font-medium">
                      {edu.code}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium mb-2">
                    {edu.specialization}
                  </p>
                  <p className="text-xs text-zinc-800 dark:text-zinc-300 font-medium mb-4">
                    {edu.institution}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
