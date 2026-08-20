import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-white/[0.08] bg-transparent py-8 transition-colors">
      <div className="w-full px-6 sm:px-10 lg:px-14 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center font-bold text-[10px]">
            &gt;_
          </div>
          <span className="font-semibold text-zinc-900 dark:text-white">
            Jenny Joseph K
          </span>
          <span className="hidden md:inline text-zinc-400 dark:text-zinc-600">·</span>
          <span className="hidden md:inline text-zinc-500">
            AI Automation Engineer & Full Stack Developer
          </span>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <p className="text-zinc-500 dark:text-zinc-400 text-center sm:text-right">
            © {new Date().getFullYear()} · Bengaluru, India
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/[0.05] hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-800 dark:text-zinc-300 transition-colors border border-zinc-200 dark:border-white/10 cursor-pointer text-xs"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
