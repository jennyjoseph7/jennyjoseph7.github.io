import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { WhatIBuild } from "@/components/what-i-build";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { GitHubSection } from "@/components/github-section";
import { Education } from "@/components/education";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080B10] text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      <Header />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <Projects />
        <Experience />
        <Skills />
        <GitHubSection />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
