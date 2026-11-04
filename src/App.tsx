import { Hero, StackTicker, TopBar } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { cvMeta } from "@/data/cv";

function Footer() {
  return (
    <footer className="bg-lunar text-cream">
      <div className="stripes" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold uppercase tracking-[0.08em] sm:text-3xl">Get in touch</p>
          <a href={`mailto:${cvMeta.email}`} className="mt-2 inline-block font-pixel text-lg text-mustard hover:underline">
            {cvMeta.email}
          </a>
        </div>
        <p className="font-pixel text-sm text-cream/60 md:text-right">
          © {new Date().getFullYear()} {cvMeta.name} · Milano
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <StackTicker />
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
