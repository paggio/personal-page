import { Hero, TopBar } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { cvMeta, skills } from "@/data/cv";

function Footer() {
  const items = skills.flatMap((g) => g.items);
  const ticker = (
    <span className="flex shrink-0 items-center gap-6 pr-6">
      <span className="text-orange">Now serving</span>
      {items.map((s) => (
        <span key={s} className="flex items-center gap-6">
          {s} <span className="text-mustard" aria-hidden>✦</span>
        </span>
      ))}
    </span>
  );

  return (
    <footer className="bg-lunar text-cream">
      <div className="stripes" aria-hidden />
      <div className="overflow-hidden border-b border-cream/15 py-3 font-pixel text-base" aria-hidden>
        <div className="marquee-track flex w-max">
          {ticker}
          {ticker}
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold uppercase tracking-[0.08em] sm:text-3xl">Thank you for staying.</p>
          <p className="mt-2 font-pixel text-cream/60">Please return your key at reception.</p>
        </div>
        <div className="font-pixel text-sm text-cream/70 md:text-right">
          <a href={`mailto:${cvMeta.email}`} className="text-base text-mustard hover:underline">
            {cvMeta.email}
          </a>
          <p className="mt-1">© {new Date().getFullYear()} {cvMeta.name} · Milano</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <main>
        <Hero />
        <ExperienceSection />
        <SkillsSection />
        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-10">
            <EducationSection />
            <PublicationsSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
