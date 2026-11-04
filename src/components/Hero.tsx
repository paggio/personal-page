import { Download, Mail, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { cvMeta, skills } from "@/data/cv";
import { renderBold } from "@/components/Window";

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

const link = "underline decoration-cream/30 underline-offset-4 hover:text-mustard hover:decoration-mustard";

function Contact({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <span className="text-mustard">{icon}</span>
      {children}
    </li>
  );
}

/** Scrolling pixel ticker of the stack, pinned under the top bar. */
export function StackTicker() {
  const items = skills.flatMap((g) => g.items);
  const run = (
    <span className="flex shrink-0 items-center gap-6 pr-6">
      {items.map((s) => (
        <span key={s} className="flex items-center gap-6">
          {s} <span className="text-mustard" aria-hidden>✦</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className="overflow-hidden border-b border-cream/15 bg-lunar py-2.5 font-pixel text-[15px] text-cream" aria-hidden>
      <div className="marquee-track flex w-max">
        {run}
        {run}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-lunar text-cream">
      <div className="starfield pointer-events-none absolute inset-0" aria-hidden />
      {/* slow orbits framing the centred block */}
      <div
        className="animate-drift pointer-events-none absolute -right-48 -top-56 h-[36rem] w-[36rem] rounded-full border border-cream/10"
        aria-hidden
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mustard" />
      </div>
      <div
        className="animate-drift pointer-events-none absolute -bottom-72 -left-56 h-[40rem] w-[40rem] rounded-full border border-cream/10 [animation-direction:reverse]"
        aria-hidden
      >
        <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-orange" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6 md:py-24">
        <h1 className="font-display text-[2.9rem] font-bold uppercase leading-[0.95] tracking-[0.04em] sm:text-7xl lg:text-8xl">
          Mattia <br className="sm:hidden" />
          Pagetti
        </h1>
        <p className="mt-5 font-display text-lg uppercase tracking-[0.3em] text-mustard sm:text-2xl sm:tracking-[0.4em]">
          {cvMeta.tagline}
        </p>

        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-cream/80 sm:text-lg">
          {renderBold(cvMeta.profile, "font-semibold text-cream")}
        </p>

        <p className="mt-7 inline-flex items-center gap-2 border border-cream/25 px-3 py-1 font-pixel text-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-orange" aria-hidden />
          <span className="cursor">{cvMeta.now}</span>
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm sm:text-[15px]">
          <Contact icon={<Mail size={16} />}>
            <a className={link} href={`mailto:${cvMeta.email}`}>{cvMeta.email}</a>
          </Contact>
          <Contact icon={<Linkedin size={16} />}>
            <a className={link} href={`https://linkedin.com/in/${cvMeta.linkedin}`} target="_blank" rel="noopener noreferrer">
              {cvMeta.linkedin}
            </a>
          </Contact>
          <Contact icon={<Github size={16} />}>
            <a className={link} href={`https://github.com/${cvMeta.github}`} target="_blank" rel="noopener noreferrer">
              github.com/{cvMeta.github}
            </a>
          </Contact>
          <Contact icon={<MapPin size={16} />}>{cvMeta.location}</Contact>
        </ul>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={CV_URL}
            download
            className="flex items-center gap-2 border-2 border-ink bg-orange px-6 py-3 font-pixel text-base text-ink shadow-[4px_4px_0_0_hsl(var(--mustard))] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_hsl(var(--mustard))]"
          >
            <Download size={18} /> Download CV
          </a>
          <a
            href={`https://github.com/${cvMeta.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-cream px-6 py-3 font-pixel text-base transition-colors hover:bg-cream hover:text-ink"
          >
            GitHub <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
      <div className="stripes relative" aria-hidden />
    </section>
  );
}
