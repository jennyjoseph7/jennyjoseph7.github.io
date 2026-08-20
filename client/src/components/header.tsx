import { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#what-i-build", label: "What I Build" },
    { href: "#work", label: "Systems" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills Matrix" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    setActiveSection(href.substring(1));
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 dark:bg-[#080B10]/95 backdrop-blur-md border-b border-zinc-200 dark:border-white/[0.08] shadow-md py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      {/* Full-width container spanning the whole screen */}
      <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div
          className="flex items-center gap-3 cursor-pointer group shrink-0"
          onClick={() => scrollToSection("#home")}
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center font-mono font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
            &gt;_
          </div>
          <span className="text-base font-bold text-zinc-950 dark:text-white tracking-tight">
            Jenny Joseph K
          </span>
        </div>

        {/* Center: Full Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.05]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions & Theme Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-3 h-9 rounded-xl bg-zinc-100 dark:bg-white/[0.06] border border-zinc-300 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/25 text-zinc-800 dark:text-zinc-200 transition-all cursor-pointer shadow-sm"
            aria-label="Toggle Light and Dark mode"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? (
              <>
                <Moon className="h-4 w-4 text-zinc-800 shrink-0" />
                <span className="text-xs font-mono font-medium hidden sm:inline text-zinc-800">Dark</span>
              </>
            ) : (
              <>
                <Sun className="h-4 w-4 text-amber-400 shrink-0" />
                <span className="text-xs font-mono font-medium hidden sm:inline text-zinc-200">Light</span>
              </>
            )}
          </button>

          {/* Resume Button */}
          <div className="hidden sm:block">
            <Button
              asChild
              size="sm"
              className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-mono text-xs rounded-xl px-4 h-9 gap-1.5 font-semibold shadow-sm cursor-pointer"
            >
              <a
                href="/resume.pdf"
                download="Jenny_Joseph_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-3.5 w-3.5" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg bg-zinc-100 dark:bg-white/[0.04] border border-zinc-300 dark:border-white/10 flex items-center justify-center text-zinc-800 dark:text-zinc-300 cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 p-4 rounded-2xl bg-white dark:bg-[#0D111A] border border-zinc-200 dark:border-white/[0.08] space-y-2 shadow-2xl">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold"
                    : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/[0.04]"
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* Mobile Theme Switcher Row */}
          <div className="pt-2 border-t border-zinc-200 dark:border-white/[0.06] flex items-center justify-between px-2">
            <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">Theme</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-100 dark:bg-white/[0.08] border border-zinc-300 dark:border-white/10 text-xs font-mono text-zinc-800 dark:text-zinc-200 cursor-pointer"
            >
              {theme === "light" ? (
                <>
                  <Moon className="h-3.5 w-3.5 text-zinc-800" />
                  <span>Switch to Dark</span>
                </>
              ) : (
                <>
                  <Sun className="h-3.5 w-3.5 text-amber-400" />
                  <span>Switch to Light</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-2">
            <Button
              asChild
              className="w-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-mono text-xs py-2 rounded-lg gap-2 font-semibold cursor-pointer"
            >
              <a
                href="/resume.pdf"
                download="Jenny_Joseph_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-3.5 w-3.5" />
                Download Resume (PDF)
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
