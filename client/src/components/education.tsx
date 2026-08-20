import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      shortDegree: "MCA (AI & Machine Learning)",
      specialization: "Artificial Intelligence & Machine Learning",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      period: "August 2023 – December 2025",
      code: "DEGREE-MCA",
      status: "Postgraduate",
      level: "Master's Degree",
      coursework: [
        "Neural Networks & Deep Learning",
        "Applied Machine Learning",
        "Distributed Cloud Architecture",
        "Big Data Systems",
        "NLP & Computer Vision",
      ],
      accent: {
        bg: "bg-violet-500/10 dark:bg-violet-500/[0.08]",
        text: "text-violet-600 dark:text-violet-400",
        border: "border-violet-500/20",
        hoverBorder: "hover:border-violet-500/40",
      },
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      shortDegree: "BCA (Computer Science)",
      specialization: "Computer Science & Software Development",
      institution: "Acharya Institute of Graduate Studies",
      location: "Bengaluru, Karnataka, India",
      period: "November 2020 – August 2023",
      code: "DEGREE-BCA",
      status: "Undergraduate",
      level: "Bachelor's Degree",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (Java/C++)",
        "Database Management Systems (RDBMS)",
        "Operating Systems",
        "Web Engineering",
      ],
      accent: {
        bg: "bg-blue-500/10 dark:bg-blue-500/[0.08]",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-500/20",
        hoverBorder: "hover:border-blue-500/40",
      },
    },
  ];

  return (
    <section id="education" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-3">
              Education & Degrees
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Formal computer science foundations, applied artificial intelligence research, and systems engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-[#0D111A] p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-white/[0.08] ${edu.accent.hoverBorder} hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Subtle Ambient Corner Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${edu.accent.bg} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity`} />

                <div>
                  {/* Top Bar: Code Pill, Level Badge & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${edu.accent.bg} ${edu.accent.text} border ${edu.accent.border}`}>
                        {edu.level}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 border border-zinc-200/80 dark:border-white/[0.06] bg-zinc-50 dark:bg-white/[0.02] px-2 py-0.5 rounded-full">
                        {edu.code}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/[0.08] px-2 py-0.5 rounded-full border border-emerald-500/20 font-medium">
                      <CheckCircle2 className="h-2.5 w-2.5" />
                      <span>{edu.status}</span>
                    </span>
                  </div>

                  {/* Degree Title & Specialization */}
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className={`p-2.5 rounded-xl ${edu.accent.bg} ${edu.accent.text} shrink-0 mt-0.5 border ${edu.accent.border}`}>
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                        {edu.degree}
                      </h3>
                      <p className={`text-xs font-semibold ${edu.accent.text} mt-0.5`}>
                        {edu.specialization}
                      </p>
                    </div>
                  </div>

                  {/* Institution & Location */}
                  <div className="space-y-1.5 mb-5 pl-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                      <BookOpen className="h-3.5 w-3.5 text-zinc-400" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                      <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Coursework & Timeline */}
                <div>
                  {/* Foundational Coursework Chips */}
                  <div className="pt-4 border-t border-zinc-100 dark:border-white/[0.06] mb-3">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 mb-2 font-semibold">
                      Key Core Modules
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/[0.04]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Badge */}
                  <div className="pt-3 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                      {edu.period}
                    </span>
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
