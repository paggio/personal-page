import { Download, Mail, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { cvMeta } from "@/data/cv";
import { Window, renderBold } from "@/components/Window";
import { LunarScene } from "@/components/LunarScene";

export const CV_URL = `${import.meta.env.BASE_URL}CV_2026.pdf`;

const NAV = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#publications", label: "Papers" },
];

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b-2 border-ink bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-pixel text-lg">
          <span className="relative inline-block h-4 w-4 rounded-full bg-mustard" aria-hidden>
            <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full bg-paper" />
          </span>
          M.PAGETTI
        </a>
        <nav className="hidden items-center gap-6 font-pixel text-[15px] md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="underline-offset-4 hover:text-orange hover:underline">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={CV_URL}
          download
          className="flex items-center gap-2 border-2 border-ink bg-ink px-3 py-1 font-pixel text-[15px] text-cream transition-colors hover:bg-orange hover:text-ink"
        >
          <Download size={15} /> CV.pdf
        </a>
      </div>
    </header>
  );
}

function ContactRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 border-b border-cream/15 py-2">
      <span className="text-mustard">{icon}</span>
      <span className="w-9 shrink-0 font-pixel text-xs text-cream/50">{label}</span>
      <span className="min-w-0 truncate">{children}</span>
    </li>
  );
}

const link = "underline decoration-cream/30 underline-offset-4 hover:text-mustard hover:decoration-mustard";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-lunar text-cream">
      <div className="starfield pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="animate-drift pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border border-cream/10"
        aria-hidden
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mustard" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:py-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <p className="font-pixel text-sm text-orange sm:text-base">// Reception · now checking in</p>
          <h1 className="mt-3 font-display text-[2.9rem] font-bold uppercase leading-[0.95] tracking-[0.04em] sm:text-7xl">
            Mattia
            <br />
            Pagetti
          </h1>
          <p className="mt-4 font-display text-lg uppercase tracking-[0.3em] text-mustard sm:text-xl">
            {cvMeta.tagline}
          </p>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-cream/80 sm:text-base">
            {renderBold(cvMeta.profile, "font-semibold text-cream")}
          </p>

          <p className="mt-5 inline-flex items-center gap-2 border border-cream/25 px-3 py-1 font-pixel text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange" aria-hidden />
            <span className="cursor">{cvMeta.now}</span>
          </p>

          <ul className="mt-6 grid max-w-xl text-sm sm:grid-cols-2 sm:gap-x-8">
            <ContactRow icon={<Mail size={15} />} label="MAIL">
              <a className={link} href={`mailto:${cvMeta.email}`}>{cvMeta.email}</a>
            </ContactRow>
            <ContactRow icon={<Linkedin size={15} />} label="IN">
              <a className={link} href={`https://linkedin.com/in/${cvMeta.linkedin}`} target="_blank" rel="noopener noreferrer">
                {cvMeta.linkedin}
              </a>
            </ContactRow>
            <ContactRow icon={<Github size={15} />} label="GH">
              <a className={link} href={`https://github.com/${cvMeta.github}`} target="_blank" rel="noopener noreferrer">
                github.com/{cvMeta.github}
              </a>
            </ContactRow>
            <ContactRow icon={<MapPin size={15} />} label="BASE">
              {cvMeta.location}
            </ContactRow>
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={CV_URL}
              download
              className="group flex items-center gap-2 border-2 border-ink bg-orange px-5 py-3 font-pixel text-base text-ink shadow-[4px_4px_0_0_hsl(var(--mustard))] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_hsl(var(--mustard))]"
            >
              <Download size={18} /> Download CV
            </a>
            <a
              href={`https://github.com/${cvMeta.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-cream px-5 py-3 font-pixel text-base transition-colors hover:bg-cream hover:text-ink"
            >
              GitHub <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <Window title="lunar_lounge.svg" lit={1} dark bodyClassName="p-0 sm:p-0" className="shadow-[8px_8px_0_0_hsl(var(--orange))]">
          <LunarScene />
          <div className="flex items-center justify-between border-t-2 border-ink bg-cream px-3 py-1.5 font-pixel text-xs text-ink sm:text-sm">
            <span>Base: Milano, IT</span>
            <span>Est. 2020 · open 24/7</span>
          </div>
        </Window>
      </div>
      <div className="stripes relative" aria-hidden />
    </section>
  );
}
