import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#what-i-build", label: "What I Build" },
    { href: "#work", label: "Systems" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-white/[0.08] bg-transparent pt-12 pb-10 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Top Row: Brand & Quick Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-200/60 dark:border-white/[0.06]">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center font-bold text-xs font-mono shadow-xs">
              &gt;_
            </div>
            <div>
              <span className="font-bold text-zinc-900 dark:text-white text-sm">
                Jenny Joseph K
              </span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                AI Automation Engineer & Full Stack Developer
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/jennyjoseph7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 dark:bg-white/[0.04] hover:bg-zinc-200 dark:hover:bg-white/[0.08] transition-all border border-zinc-200 dark:border-white/[0.06]"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/jenny-joseph-k-b6a50a230"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 dark:bg-white/[0.04] hover:bg-zinc-200 dark:hover:bg-white/[0.08] transition-all border border-zinc-200 dark:border-white/[0.06]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href="mailto:jennyjosephksj7@gmail.com"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 dark:bg-white/[0.04] hover:bg-zinc-200 dark:hover:bg-white/[0.08] transition-all border border-zinc-200 dark:border-white/[0.06]"
              aria-label="Send Email"
            >
              <Mail className="h-4 w-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all font-mono text-xs font-semibold cursor-pointer shadow-xs ml-1"
              title="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp className="h-3 w-3 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Row: Metadata & Location */}
        <div className="pt-6 text-center text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Jenny Joseph K · Bengaluru, Karnataka, India</p>
        </div>
      </div>
    </footer>
  );
}
